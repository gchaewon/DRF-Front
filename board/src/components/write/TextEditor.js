import styled from 'styled-components';
import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';

import './react-draft-wysiwyg.css';
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

const InputTitle = styled.input`
	all: unset;
	width: 50%;
	outline: none;
	height: 36px;
	border-bottom: 1px solid #111111;
	margin-bottom: 50px;
`;

const InputCon = styled.input`
	all: unset;
	width: 80%;
	outline: none;
	height: 36px;
	border-bottom: 1px solid #000000;
	margin-bottom: 20px;
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
				<InputTitle placeholder='제목을 입력하세요' />
				<InputCon placeholder='글 내용을 입력하세요' />
				<InputCon />
				<InputCon />
				<InputCon />
				<InputCon />
				<InputCon />
				<InputCon />
				<InputCon />
				<InputCon />
				<InputCon />
				<InputCon />
				<InputCon />
				<InputCon />
				<InputCon />
				<InputCon />
				<InputCon />
				<InputCon />
				<InputCon />
				<InputCon />
				<InputCon />
				<InputCon />
				<InputCon />
				<InputCon />
				<InputCon />
			</EditorWrapper>
		);
	}
}
