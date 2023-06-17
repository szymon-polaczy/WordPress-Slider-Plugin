import { registerBlockType } from '@wordpress/blocks';

import {
  IconButton,
  PanelBody,
  Panel, 
  SelectControl
} from '@wordpress/components';

import { 
  useBlockProps, 
  MediaPlaceholder, 
  RichText, 
  MediaUploadCheck 
} from '@wordpress/block-editor';

import metadata from './../block.json';

registerBlockType(
  metadata,
  {
    edit: ({ attributes, setAttributes }) => {
      const blockProps = useBlockProps();
      const { slides } = attributes;

      console.log(slides);

      const addSlide = () => {
        const new_slide = { image: null, text: null };
        setAttributes({ slides: [...slides, new_slide] });
      }

      const onTextChange = (new_value, index) => {
        slides[index].text = new_value;
        setAttributes(slides);
        console.log(slides);
      }

      const onImageChange = (new_image, index) => {
        slides[index].image = new_image;
        setAttributes(slides);
        console.log(slides);
      }

      return <div {...blockProps}>
        {slides ?
          <section>
            {slides.map((slide, index) =>
              <Panel>
                <PanelBody>
                  <MediaPlaceholder
                    onSelect={(imageObject) => onImageChange(imageObject, index)}
                    allowedTypes={['image']}
                    multiple={false}
                    labels={{ title: null }}
                    value={slide.image?.url}
                    mediaPreview={slide.image ? <img src={slide.image.url} /> : ''}
                  />

                  <RichText
                    tagName="div"
                    placeholder="Insert slider text here"
                    value={slide.text}
                    onChange={(newText) => onTextChange(newText, index)}
                    allowedFormats={['core/bold', 'core/italic', 'core/link']}
                  />

                  <SelectControl
                    label="Vertical Position"
                    options={[
                      { label: 'Top', value: 'top' },
                      { label: 'Center', value: 'center' },
                      { label: 'Bottom', value: 'bottom' },
                    ]}
                  />

                  <SelectControl
                    label="Horizontal Position"
                    options={[
                      { label: 'Left', value: 'top' },
                      { label: 'Center', value: 'center' },
                      { label: 'Right', value: 'bottom' },
                    ]}
                  />

                  <IconButton
                    icon="no-alt"
                    label={`Delete slide number ${index}`}
                    onClick={() => { console.log('add deleting slides') }}
                  />
                </PanelBody>
              </Panel>
            )}
          </section> : <p>No Slides</p>}

        <IconButton
          icon="plus"
          label="Add another slide"
          onClick={addSlide}
        >
          Add Slide
        </IconButton>
      </div>
    },
    save: ({ attributes }) => {
      const blockProps = useBlockProps.save();
      const { slides } = attributes;

      if (slides) {
        return <>
          <section {...blockProps}>
            <div class="splide" role="group" aria-label="Splide Basic HTML Example">
              <div class="splide__track">
                <div class="splide__list">
                  {slides.map(slide =>
                    <div class="splide__slide">
                      <RichText.Content value={slide.text} />
                      <img src={slide.image?.url} style="max-width: 100%; height: 100%; object-fit: contain;2"/>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </>
      } else {
        return <p>No Slides</p>
      }
    },
    attributes: {
      slides: {
        type: 'array',
        default: [
          {
            image: null,
            text: null
          }
        ],
      },
    }
  }
)
