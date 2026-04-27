import { InnerBlocks } from '@wordpress/block-editor';

export default function BlockAppender({ label }) {
	return (
		<>
            { label && (
				<p 
					style={{ 
						textAlign: 'center', 
						fontSize: '12px', 
						color: '#666', 
						marginBottom: '10px', 
						borderTop: '1px solid #e0e0e0', 
						paddingTop: '10px',
						fontWeight: 'bold'
					}}
				>
					{ label }
				</p>
			) }
			<InnerBlocks.ButtonBlockAppender />
		</>
	);
}