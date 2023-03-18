import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck
} from '@wordpress/block-editor';

import {
	Button,
	IconButton,
	PanelBody,
	ImageControl,
	TextControl,
	BaseControl,
	Spinner
} from '@wordpress/components';


const { useSelect, useDispatch } = window.wp.data;

import { Fragment } from '@wordpress/element';

import { __ } from "@wordpress/i18n"

export default function Edit({ attributes, setAttributes }) {
	const props = useBlockProps();

	const { imageId, image } = useSelect( select => {

		const id = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ props.metaKey ];

		return {
			imageId: id,
			image: select( 'core' ).getMedia( id ),
		};
	});

	const { editPost } = useDispatch( 'core/editor', [ imageId ] );
	
	console.log(props);

	const handleAddSlide = () => {
		const slides = [...attributes.slides];
		slides.push({
			image: '',
		});
		setAttributes({ slides });
	};

	const handleRemoveSlide = (index) => {
		const slides = [...attributes.slides];
		slides.splice(index, 1);
		setAttributes({ slides });
	};

	const handleSlideChange = (image, index) => {
		const slides = [...attributes.slides];
		slides[index].image = image;
		setAttributes({ slides });
	}

	return (
		<div>
			<BaseControl label={ props.label }>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) => editPost( { meta: { [props.metaKey]: media.id } } ) }
							allowedTypes={ [ 'image' ] }
							value={ imageId }
							render={ ( { open } ) => (
								<div>
									{ ! imageId && <Button variant="secondary" onClick={ open }>Upload image</Button> }
									{ !! imageId && ! image && <Spinner /> }
									{ !! image && image &&
										<Button variant="link" onClick={ open }>
											<img src={ image.source_url } />
										</Button>
									}
								</div>
							) }
						/>
					</MediaUploadCheck>
					{ !! imageId &&
						<Button onClick={ () => editPost( { meta: { [props.metaKey]: 0 } } ) } isLink isDestructive>
							Remove image
						</Button>
					}
			</BaseControl>
		</div>
	);
}