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
  ColorPalette,
  InspectorControls,
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
        const new_slide = { image: null, text: null, horizontal: null, vertical: null };
        setAttributes({ slides: [...slides, new_slide] });
      }

      const removeSlide = index => {
        slides.splice(index, 1);
        setAttributes(slides);
      }

      const onTextChange = (new_value, index) => {
        slides[index].text = new_value;
        setAttributes(slides);
      }

      const onImageChange = (new_image, index) => {
        slides[index].image = new_image;
        setAttributes(slides);
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

        setAttributes(slides);
      }

      const onHorizontalChange = (new_value, index) => {
        slides[index].horizontal = new_value;
        setAttributes(slides);
      }

      return <div {...blockProps}>
        {slides ?
          <section>
                <InspectorControls key="setting">
                    <div id="gutenpride-controls">
                        <fieldset>
                            <legend className="blocks-base-control__label">
                                { 'Background color' }
                            </legend>
                            <ColorPalette // Element Tag for Gutenberg standard colour selector
                                onChange={{}} // onChange event callback
                            />
                        </fieldset>
                    </div>
                </InspectorControls>

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

                  <div>
                    <SelectControl
                      label="Vertical Position (Desktop)"
                      onChange={ (value) => onVerticalChange(value, index, 'desktop') }
                      value={slide.vertical?.desktop}
                      options={[
                        { label: 'Top', value: 'top' },
                        { label: 'Center', value: 'center' },
                        { label: 'Bottom', value: 'bottom' },
                      ]}
                    />

                    <SelectControl
                      label="Vertical Position (Mobile)"
                      onChange={ (value) => onVerticalChange(value, index, 'mobile') }
                      value={slide.vertical?.mobile}
                      options={[
                        { label: 'Top', value: 'top' },
                        { label: 'Center', value: 'center' },
                        { label: 'Bottom', value: 'bottom' },
                      ]}
                    />

                    <SelectControl
                      label="Horizontal Position (On tablet and mobile it's centered)"
                      onChange={ (value) => onHorizontalChange(value, index) }
                      value={slide.horizontal}
                      options={[
                        { label: 'Left', value: 'left' },
                        { label: 'Center', value: 'center' },
                        { label: 'Right', value: 'right' },
                      ]}
                    />
                  </div>

                  <IconButton
                    icon="no-alt"
                    label={`Delete slide number ${index}`}
                    onClick={() => removeSlide(index)}
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
