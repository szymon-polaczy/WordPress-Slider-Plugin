import { registerBlockType } from '@wordpress/blocks';

import {
  IconButton,
  PanelBody,
  Panel,
  SelectControl,
  CheckboxControl,
  RadioControl,
  TextControl,
  ToggleControl,
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
      const { slides, settings } = attributes;

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

        const updateSetting = (new_value, setting) => {
            settings[setting] = new_value;
            setAttributes({settings: {...settings}});
        }



      return <div {...blockProps}>
        {slides ?
          <section>
            <InspectorControls key="setting">
              <TextControl
                label="Slides per page"
                value={ settings.perPage }
                onChange={ (new_value) => updateSetting(new_value, 'perPage') }
              />

              <TextControl
                label="Slides per move"
                value={ settings.perMove }
                onChange={ (new_value) => updateSetting(new_value, 'perMove') }
              />

              <ToggleControl
                label="Enable arrows"
                checked={ settings.arrows }
                onChange={ (new_value) => updateSetting(new_value, 'arrows') }
              />

              <ToggleControl
                label="Enable pagination (indicator dots)"
              />

              <ToggleControl
                label="Enable pause on hover"
              />

              <ToggleControl
                label="Enable pause on focus"
              />

              <ToggleControl
                label="Enable dragging"
              />

              <ToggleControl
                label="Enable autoplay"
              />

              <TextControl
                label="Autoplay interval - Number of miliseconds between autoplay intervals"
              />

              <TextControl
                label="Gap between slides (The CSS format is acceptable)"
              />

              <TextControl
                label="Easing function"
                help="The CSS format is acceptable (linear, ease or cubic-bezier())"
              />

              <TextControl
                label="Transition speed"
                help="The transition speed in miliseconds (0 to insantly jump to the next)"
              />

              <ToggleControl
                label="Enable rewind to first slide (doesn't work in loop mode)"
              />

              <ToggleControl
                label="Enable rewind by drag to first slide (rewind option has to be enabled)"
              />

              <TextControl
                label="Rewind speed"
                help="The rewind speed in miliseconds (Transition speed is used as default)"
              />

              <TextControl
                label="Start slide"
                help="Define start index"
              />

              <SelectControl
                label="Slider direction"
                options={[
                  { value: 'ltr', label: 'Left to right' },
                  { value: 'rtl', label: 'Right to left' },
                  { value: 'ttb', label: 'Top to bottom' },
                ]}
              />

              <SelectControl
                label="Pagination direction"
                options={[
                  { value: 'ltr', label: 'Left to right' },
                  { value: 'rtl', label: 'Right to left' },
                  { value: 'ttb', label: 'Top to bottom' },
                ]}
              />

              <SelectControl
                label="Slider type"
                options={[
                  { value: 'slide', label: 'Slide' },
                  { value: 'loop', label: 'Loop' },
                ]}
              />
            </InspectorControls>

            {slides.map((slide, index) =>
              <Panel class="slide">
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
                    class="rich-text"
                    tagName="div"
                    placeholder="Insert slider text here"
                    value={slide.text}
                    onChange={(newText) => onTextChange(newText, index)}
                    allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color', 'core/strikethrough']}
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
                        { label: 'Center', value: 'center' },
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
      const { slides, settings } = attributes;

        const json = JSON.stringify(settings);
      if (slides) {
        return <>
          <section {...blockProps}>
            <div class="splide" role="group" 
                data-splide={json}
              >
              <div class="splide__track">
                <div class="splide__list">
                  {slides.map(slide =>
                    <div class="splide__slide">
                      <article class="slide-text-overlay"
                        data-vertical-desktop={slide.vertical?.desktop}
                        data-vertical-mobile={slide.vertical?.mobile}
                        data-horizontal={slide.horizontal}
                      >
                        <div>
                          <RichText.Content value={slide.text} />
                        </div>
                      </article>
                      <img src={slide.image?.url}
                        style="max-width: 100%; height: 100%; object-fit: cover;"
                      />
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
            text: null,
            horizontal: null,
            vertical: null,
          }
        ],
      },
        settings: {
            type: 'object',
            default: {
                perPage: {
                    type: 'number',
                    default: 1
                },
                perMove: {
                    type: 'number',
                    default: 1
                },
                arrows: {
                    type: 'boolean',
                    default: true
                }
            }
        }
    }
  }
)
