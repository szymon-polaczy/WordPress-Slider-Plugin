import {
  useBlockProps,
  RichText,
} from '@wordpress/block-editor';

export default ({ attributes }) => {
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
    }
