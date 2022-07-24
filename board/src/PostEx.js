// 포스트 불러올 때 필요한 연습 코드
// import styled from 'styled-components';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const PostEx = () => {
// 	const [posts, setPosts] = useState([]);

// 	useEffect(() => {
// 		getPosts();
// 	}, []);

// 	const getPosts = async () => {
// 		const response = await axios
// 			.get('https://jsonplaceholder.typicode.com/posts')
// 			.then(response => {
// 				setPosts(response.data);
// 			})
// 			.catch(error => {
// 				console.log('전체 글 불러오기 실패', error.message);
// 			});
// 	};

// 	return (
// 		<Wrapper>
// 			<PostWrapper>
// 				<WrapperTop>
// 					{posts.map(post => (
// 						<PostBox>
// 							<PostTitle>{post.title}</PostTitle>
// 							<PostBody>{post.body}</PostBody>
// 						</PostBox>
// 					))}
// 				</WrapperTop>
// 				<WrapperBottom>
// 					{posts.map(post => (
// 						<PostBox>
// 							<PostTitle>{post.title}</PostTitle>
// 							<PostBody>{post.body}</PostBody>
// 						</PostBox>
// 					))}
// 				</WrapperBottom>
// 			</PostWrapper>
// 		</Wrapper>
// 	);
// };

// const Wrapper = styled.div`
// 	height: 1020px;
// 	background-color: #eaf2ce;
// `;
// const PostWrapper = styled.div`
// 	display: grid;
// 	grid-template-columns: 1fr;
// 	height: 1020px;
// 	overflow: scroll;
// `;
// const WrapperTop = styled.div`
// 	display: flex;
// 	margin-top: 50px;
// `;
// const WrapperBottom = styled.div`
// 	display: flex;
// 	margin-bottom: 50px;
// `;
// const PostBox = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: space-evenly;
// 	width: 396px;
// 	height: 423px;
// 	background-color: white;
// 	box-shadow: 0px 4px 4px 0px #00000040;
// 	border-radius: 30px;
// `;
// const PostTitle = styled.div`
// 	width: 300px;
// `;
// const PostBody = styled.div`
// 	width: 300px;
// `;
// export default PostEx;

// import styled from 'styled-components';
// import React, { useState, useEffect } from 'react';
// import data from '../data';

// const PostsContainer = () => {
// 	const [posts, setPosts] = useState([]);

// 	useEffect(() => {
// 		getPosts();
// 	}, []);

// 	const getPosts = data => {
// 		setPosts(data.posts);
// 	};
// 	return (
// 		<Wrapper>
// 			<PostWrapper>
// 				<WrapperTop>
// 					{data.map(post => (
// 						<PostBox key={post.id}>
// 							<PostPicture>
// 								<img src={post.picture} />
// 							</PostPicture>
// 							<PostTitle>{post.title}</PostTitle>
// 							<PostBody>{post.day}</PostBody>
// 						</PostBox>
// 					))}
// 				</WrapperTop>
// 				<WrapperBottom>
// 					{posts.map(post => (
// 						<PostBox>
// 							<PostPicture>
// 								<img src={post.data} />
// 							</PostPicture>
// 							<PostTitle>{post.title}</PostTitle>
// 							<PostBody>{post.contents}</PostBody>
// 						</PostBox>
// 					))}
// 				</WrapperBottom>
// 			</PostWrapper>
// 		</Wrapper>
// 	);
// };

// const Wrapper = styled.div`
// 	height: 1020px;
// 	background-color: #eaf2ce;
// `;
// const PostWrapper = styled.div`
// 	display: grid;
// 	grid-template-columns: 1fr;
// 	height: 1020px;
// 	overflow: scroll;
// `;
// const WrapperTop = styled.div`
// 	display: flex;
// 	margin-top: 50px;
// `;
// const WrapperBottom = styled.div`
// 	display: flex;
// 	margin-bottom: 50px;
// `;
// const PostBox = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: space-evenly;
// 	width: 396px;
// 	height: 423px;
// 	background-color: white;
// 	box-shadow: 0px 4px 4px 0px #00000040;
// 	border-radius: 30px;
// `;
// const PostPicture = styled.div`
// 	width: 343.33px;
// 	height: 247.4px;
// 	border-radius: 14px;
// `;
// const PostTitle = styled.div`
// 	width: 300px;
// `;
// const PostBody = styled.div`
// 	width: 300px;
// `;
// export default PostsContainer;
