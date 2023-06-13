import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, MediaUpload, RichText } from '@wordpress/block-editor';

import metadata from './../block.json';

//I think I can use the ItemGroup element to get the parent slider in the edit
//And for each slide I can have an Item
//I should be then able to create a button that would add another object
//to an array and the html would just be looping over that array and displaying
//the images and texts

registerBlockType( 
	metadata,
	{
		edit: ( { attributes, setAttributes } ) => {
      const blockProps = useBlockProps();
      const { slides } = attributes;

      console.log(slides);

      const addSlide = () => {
        const new_slide = {image: null, text: null};
        setAttributes( { slides: [ ...slides, new_slide ] } );
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
        { slides ? 
        <section>
          { slides.map((slide, index) => 
            <div>
              <MediaUpload
                onSelect={(imageObject) => onImageChange(imageObject, index)}
                type="image"
                value={slide.image?.sizes.full.url}
                render={({ open }) => (
                  <button onClick={open}>
                    Upload Image!
                  </button>
                )}
              />

              <RichText
                tagName="h2"
                className="content"
                value={slide.text}
                onChange={new_value => onTextChange(new_value, index)}
                placeholder="Enter your text here!"
                />
            </div>
          )}
        </section> : <p>No Slides</p>}

        <button onClick={ addSlide }>Add Slide</button>
      </div>
    },
		save: ( { attributes } ) => {
      const blockProps = useBlockProps.save();
      const { slides } = attributes;

      if ( slides ) {
        return <section {...blockProps}>
          { slides.map(slide => 
            <div>
              { slide.text }
              <img src={slide.image?.sizes.full.url}/>
            </div>
          ) }
        </section>
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
