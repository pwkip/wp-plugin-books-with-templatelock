const { registerBlockType } = wp.blocks;
import { TextControl } from '@wordpress/components';

import './editor.scss';

registerBlockType( 'myplugin/book-settings', {
	title: 'Book Settings',
	category: 'common',
	supports: {
		anchor: false,
		html: false,
		reusable: false,
		inserter: false,
		multiple: false,
		className: false,
		customClassName: false,
	},
	attributes: {
		bookTitle: {
			type: 'string',
			source: 'meta',
			meta: '_myplugin_book_title',
		},
		author: {
			type: 'string',
			source: 'meta',
			meta: '_myplugin_author',
		},
	},
	edit( props ) {
		const { className, attributes, setAttributes } = props;
		const { bookTitle, author } = attributes;

		return (
			<div className={ className }>
				<TextControl label="Book Title" value={ bookTitle || '' } onChange={ ( value ) => {
					setAttributes( { bookTitle: value } );
				} } />
				<TextControl label="Author" value={ author || '' } onChange={ ( value ) => {
					setAttributes( { author: value } );
				} } />
			</div>
		);
	},
	save: () => null,
} );

const { registerPlugin } = wp.plugins;
const { PluginDocumentSettingPanel } = wp.editPost;
const { useCallback } = wp.element;
const { useSelect, useDispatch } = wp.data;

registerPlugin( 'additional-settings', {
	icon: 'book',
	render: () => {
		const postType = useSelect( select => select( 'core/editor' ).getCurrentPostType() );
		if ( 'book' !== postType ) {
			return null;
		}

		const isbn = useSelect(	select => {
			return select( 'core/editor' ).getEditedPostAttribute( 'meta' )._myplugin_book_isbn;
		}, [] );

		const { editPost } = useDispatch( 'core/editor' );

		const onChangeIsbn = useCallback( ( value ) => {
			editPost( { meta: { _myplugin_book_isbn: value } } );
		}, [ ] );

		return (
			<PluginDocumentSettingPanel
				name="additional-settings"
				title="Additional settings"
			>
				<TextControl
					label="ISBN"
					value={ isbn }
					onChange={ onChangeIsbn }
				/>
			</PluginDocumentSettingPanel>
		);
	},
} );
