import { registerBlockType } from '@wordpress/blocks';

import metadata from './../block.json';

import edit from './edit.js';
import save from './save.js';

registerBlockType(
  metadata,
  {
    edit,
    save,
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
                perPage: '1',
                perMove: '1', 
                arrows: true, 
                pagination: true,
                pauseOnHover: false,
                pauseOnFocus: false, 
                drag: true,
                autoplay: true, 
                interval: '5000',
                gap: '0px', 
                easing: 'ease',
                speed: '1000',
                rewind: false,
                rewindByDrag: false,
                rewindSpeed: '5000',
                start: '1',
                direction: 'ltr',
                pagination: 'ltr',
                type: 'loop'
            }
        }
    }
  }
)
