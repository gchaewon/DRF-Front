// import styled from 'styled-components';
// import React, { Component } from 'react';
// import { Editor } from 'react-draft-wysiwyg';
// import { EditorState, convertToRaw } from 'draft-js';

// import './react-draft-wysiwyg.css';
// import draftToHtml from 'draftjs-to-html';

// const EditorWrapper = styled.div`
// 	width: 1263px;
// 	height: 1764px;
// 	margin-left: auto;
// 	margin-right: auto;
// 	margin-top: 50px;
// 	margin-bottom: 150px;
// 	background-color: #eeeeee;
// 	.rdw-editor-main {
// 		padding-left: 20px;
// 	}
// `;

// const InputTitle = styled.input`
// 	all: unset;
// 	width: 50%;
// 	outline: none;
// 	height: 36px;
// 	border-bottom: 1px solid #111111;
// 	margin-bottom: 50px;
// `;

// const InputCon = styled.input`
// 	border: solid;
// 	all: unset;
// 	width: 80%;
// 	outline: none;
// 	height: 36px;
// 	margin-bottom: 20px;
// 	border-bottom: 1px solid #111111;
// `;

// export default class TextEditor extends Component {
// 	state = {
// 		editorState: EditorState.createEmpty(),
// 	};

// 	onEditorStateChange = editorState => {
// 		this.setState({
// 			editorState,
// 		});
// 	};

// 	render() {
// 		const { editorState } = this.state;
// 		console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));

// 		return (
// 			<EditorWrapper>
// 				<Editor
// 					editorState={editorState}
// 					toolbarClassName='toolbarClassName'
// 					wrapperClassName='wrapperClassName'
// 					editorClassName='editorClassName'
// 					onEditorStateChange={this.onEditorStateChange}
// 				/>
// 				<InputTitle placeholder='제목을 입력하세요' />
// 				<InputCon placeholder='글 내용을 입력하세요' />
// 			</EditorWrapper>
// 		);
// 	}
// }
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TextEditor = () => {
	const [newTitle, setNewTitle] = useState('');
	const [newDescription, setNewDescription] = useState('');
	const PostSubmit = e => {
		e.preventDefault();
		axios.post('https://dy6578.pythonanywhere.com/api/posts/', {
			title: newTitle,
			author: 1,
			content: newDescription,
		});
		setNewTitle('');
		setNewDescription('');
	};

	return (
		<form onSubmit={PostSubmit}>
			<TitleInput
				placeholder='제목을 입력하세요.'
				type='text'
				value={newTitle}
				onChange={e => setNewTitle(e.target.value)}
			/>

			<EditorWrapper>
				<PostInput
					placeholder='내용을 입력하세요.'
					type='text'
					value={newDescription}
					onChange={e => setNewDescription(e.target.value)}
				/>
				<button className='uploadBtn'>발행하기</button>
			</EditorWrapper>
		</form>
	);
};
const EditorWrapper = styled.div`
	position: absolute;
	width: 1263px;
	height: 1500px;
	left: 124px;
	top: 200px;
	background: #eeeeee;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
	.uploadBtn {
		width: 100px;
		height: 100px;
		/* position: absolute;
		top: 0px;
		right: 10px; */
	}
`;
const TitleInput = styled.input`
	width: 1240px;
	height: 40px;
	margin-top: 20px;
	border-width: 0.5px;
	border: solid;
	border-color: #eeeeee;
	border-radius: 7px;
	outline: none;
	padding-left: 20px;
	font-size: 20px;
	text-align: center;
`;
const PostInput = styled.input`
	width: 1240px;
	height: 200px;
	margin-top: 10px;
	border: none;
	background: transparent;
	outline: none;
	padding-left: 20px;
	font-size: 17px;
`;

export default TextEditor;
