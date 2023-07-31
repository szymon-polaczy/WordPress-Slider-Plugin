import {
  IconButton,
} from '@wordpress/components';

import {
  useBlockProps,
} from '@wordpress/block-editor';

import Settings from './edit/settings.js';
import Slide from './edit/slide.js';

export default ( {attributes, setAttributes }) => {
      const blockProps = useBlockProps();
      const { slides, settings } = attributes;

      const addSlide = () => {
        const new_slide = { image: null, text: null, horizontal: null, vertical: null };
        setAttributes({ slides: [...slides, new_slide] });
      }

      return <div {...blockProps}>
        {slides ?
          <section>
            <Settings settings={settings} setAttributes={setAttributes}/>

            {slides.map((slide, index) =>
                <Slide slide={slide} index={index}
                    slides={slides} setAttributes={setAttributes}
                />
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
}
