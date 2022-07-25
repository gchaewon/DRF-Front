import styled from 'styled-components';
import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';

const EditorWrapper = styled.div`
	width: 1263px;
	height: 1764px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 50px;
	margin-bottom: 150px;
	background-color: #eeeeee;
	.rdw-editor-main {
		padding-left: 20px;
	}
`;
export default class TextEditor extends Component {
	state = {
		editorState: EditorState.createEmpty(),
	};

	onEditorStateChange = editorState => {
		this.setState({
			editorState,
		});
	};

	render() {
		const { editorState } = this.state;
		console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
		return (
			<EditorWrapper>
				<Editor
					editorState={editorState}
					toolbarClassName='toolbarClassName'
					wrapperClassName='wrapperClassName'
					editorClassName='editorClassName'
					onEditorStateChange={this.onEditorStateChange}
				/>
			</EditorWrapper>
		);
	}
}
