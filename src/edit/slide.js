import {
  IconButton,
  PanelBody,
  Panel,
  SelectControl,
} from '@wordpress/components';

import {
  MediaPlaceholder,
  RichText,
} from '@wordpress/block-editor';


import { Editor } from '@tinymce/tinymce-react';

export default ({slide, index, slides, setAttributes}) => {
    const removeSlide = index => {
        slides.splice(index, 1);
        setAttributes({slides: [...slides]});
    }

    const onTextChange = (new_value, index) => {
        slides[index].text = new_value;
        setAttributes({slides: [...slides]});
    }

    const onImageChange = (new_image, index) => {
        slides[index].image = new_image;
        setAttributes({slides: [...slides]});
    }

    const onVerticalChange = (new_value, index, responsiveness) => {
        const active_value = slides[index].vertical;

        if (active_value) {
          active_value[responsiveness] = new_value;
          slides[index].vertical = active_value;
        } else {
          const new_vertical = new Object();
          new_vertical[responsiveness] = new_value;
          slides[index].vertical = new_vertical;
        }

        setAttributes({slides: [...slides]});
    }

    const onHorizontalChange = (new_value, index) => {
        slides[index].horizontal = new_value;
        setAttributes({slides: [...slides]});
    }

    return <Panel class="slide">
                <PanelBody>
                    <Editor
        tinymceScriptSrc={'/var/www/html/WordPress-Slider-Plugin/wp-content/plugins/WordPress-Slider-Plugin/public/tinymce/tinymce.min.js'}
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue='<p>This is the initial content of the editor.</p>'
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button>Log editor content</button>


                  <MediaPlaceholder
                    onSelect={(imageObject) => onImageChange(imageObject, index)}
                    allowedTypes={['image']}
                    multiple={false}
                    labels={{ title: null }}
                    value={slide.image?.url}
                    mediaPreview={slide.image ? <img src={slide.image.url} /> : ''}
                  />

                  <RichText
                    class="rich-text"
                    tagName="div"
                    placeholder="Insert slider text here"
                    value={slide.text}
                    onChange={(newText) => onTextChange(newText, index)}
                    allowedFormats={[
                        'core/bold', 'core/italic', 'core/link', 
                        'core/text-color', 'core/strikethrough'
                    ]}
                  />

                  <div class="position-wrappers">
                    <SelectControl
                      label="Vertical Position (Desktop)"
                      onChange={(value) => onVerticalChange(value, index, 'desktop')}
                      value={slide.vertical?.desktop}
                      options={[
                        { label: 'Top', value: 'top' },
                        { label: 'Center', value: 'center' },
                        { label: 'Bottom', value: 'bottom' },
                      ]}
                    />

                    <SelectControl
                      label="Vertical Position (Mobile)"
                      onChange={(value) => onVerticalChange(value, index, 'mobile')}
                      value={slide.vertical?.mobile}
                      options={[
                        { label: 'Top', value: 'top' },
                        { label: 'Center', value: 'center' },
                        { label: 'Bottom', value: 'bottom' },
                      ]}
                    />

                    <SelectControl
                      label="Horizontal Position (Full width on mobile)"
                      onChange={(value) => onHorizontalChange(value, index)}
                      value={slide.horizontal}
                      options={[
                        { label: 'Left', value: 'left' },
   
                        { label: 'Right', value: 'right' },
                      ]}
                    />
                  </div>

                  <div class="remove-slide-wrapper">
                    <IconButton
                      icon="no-alt"
                      label={`Delete slide number ${index}`}
                      onClick={() => removeSlide(index)}
                    />
                  </div>
                </PanelBody>
            </Panel>
}
