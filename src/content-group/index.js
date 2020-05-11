
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { InnerBlocks } = wp.editor;

import './editor.scss';

registerBlockType( 'myplugin/content-group', {
	title: 'Content Group',
	category: 'layout',
	supports: {
		anchor: false,
		html: false,
		reusable: true,
		inserter: true,
		multiple: false,
		className: false,
		customClassName: false,
	},
	edit: ( { className } ) => {
		return (
			<div className={ className }>
				<InnerBlocks templateLock={ false } />
			</div>
		);
	},
	save() {
		return (
			<div>
				<InnerBlocks.Content />
			</div>
		);
	},
} );

//const { withDispatch } = wp.data;
// edit: withDispatch( dispatch => {
// 	dispatch( 'core/block-editor' ).setTemplateValidity( true );
// } )( ( { className } ) => {

