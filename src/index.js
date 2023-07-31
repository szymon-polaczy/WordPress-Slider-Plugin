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
                checked={ settings.pagination }
                onChange={ (new_value) => updateSetting(new_value, 'pagination') }
              />

              <ToggleControl
                label="Enable pause on hover"
                checked={ settings.pauseOnHover }
                onChange={ (new_value) => updateSetting(new_value, 'pauseOnHover') }
              />

              <ToggleControl
                label="Enable pause on focus"
                checked={ settings.pauseOnFocus }
                onChange={ (new_value) => updateSetting(new_value, 'pauseOnFocus') }
              />

              <ToggleControl
                label="Enable dragging"
                checked={ settings.drag }
                onChange={ (new_value) => updateSetting(new_value, 'drag') }
              />

              <ToggleControl
                label="Enable autoplay"
                checked={ settings.autoplay }
                onChange={ (new_value) => updateSetting(new_value, 'autoplay') }
              />

              <TextControl
                label="Autoplay interval - Number of miliseconds between autoplay intervals"
                checked={ settings.interval }
                onChange={ (new_value) => updateSetting(new_value, 'interval') }
              />

              <TextControl
                label="Gap between slides (The CSS format is acceptable)"
                checked={ settings.gap }
                onChange={ (new_value) => updateSetting(new_value, 'gap') }
              />

              <TextControl
                label="Easing function"
                help="The CSS format is acceptable (linear, ease or cubic-bezier())"
                checked={ settings.easing }
                onChange={ (new_value) => updateSetting(new_value, 'easing') }
              />

              <TextControl
                label="Transition speed"
                help="The transition speed in miliseconds (0 to insantly jump to the next)"
                checked={ settings.speed }
                onChange={ (new_value) => updateSetting(new_value, 'speed') }
              />

              <ToggleControl
                label="Enable rewind to first slide (doesn't work in loop mode)"
                checked={ settings.rewind }
                onChange={ (new_value) => updateSetting(new_value, 'rewind') }
              />

              <ToggleControl
                label="Enable rewind by drag to first slide (rewind option has to be enabled)"
                checked={ settings.rewindByDrag }
                onChange={ (new_value) => updateSetting(new_value, 'rewindByDrag') }
              />

              <TextControl
                label="Rewind speed"
                help="The rewind speed in miliseconds (Transition speed is used as default)"
                checked={ settings.rewindSpeed }
                onChange={ (new_value) => updateSetting(new_value, 'rewindSpeed') }
              />

              <TextControl
                label="Start slide"
                help="Define start index"
                checked={ settings.start }
                onChange={ (new_value) => updateSetting(new_value, 'start') }
              />

              <SelectControl
                label="Slider direction"
                options={[
                  { value: 'ltr', label: 'Left to right' },
                  { value: 'rtl', label: 'Right to left' },
                  { value: 'ttb', label: 'Top to bottom' },
                ]}
                value={ settings.direction }
                onChange={ (new_value) => updateSetting(new_value, 'direction') }
              />

              <SelectControl
                label="Pagination direction"
                options={[
                  { value: 'ltr', label: 'Left to right' },
                  { value: 'rtl', label: 'Right to left' },
                  { value: 'ttb', label: 'Top to bottom' },
                ]}
                value={ settings.paginationDirection }
                onChange={ (new_value) => updateSetting(new_value, 'paginationDirection') }
              />

              <SelectControl
                label="Slider type"
                options={[
                  { value: 'slide', label: 'Slide' },
                  { value: 'loop', label: 'Loop' },
                ]}
                value={ settings.type }
                onChange={ (new_value) => updateSetting(new_value, 'type') }
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
                },
                pagination: {
                    type: 'boolean',
                    default: true
                },
                pauseOnHover: {
                    type: 'boolean',
                    default: true
                },
                pauseOnFocus: {
                    type: 'boolean',
                    default: true
                },
                drag: {
                    type: 'boolean',
                    default: true
                },
                autoplay: {
                    type: 'boolean',
                    default: true
                },
                interval: {
                    type: 'interval',
                    default: 5000
                },
                gap: {
                    type: 'string',
                    default: '0px'
                },
                easing: {
                    type: 'string',
                    default: 'ease'
                },
                speed: {
                    type: 'number',
                    default: 1000,
                },
                rewind: {
                    type: 'boolean',
                    default: true
                },
                rewindByDrag: {
                    type: 'boolean',
                    default: true
                },
                rewindSpeed: {
                    type: 'number',
                    default: 5000
                },
                start: {
                    type: 'string',
                    default: 'ltr'
                },
                pagination: {
                    type: 'string',
                    default: 'ltr'
                },
                type: {
                    type: 'string',
                    default: 'loop'
                }
            }
        }
    }
  }
)
