import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import data from '../data.json';

const PostsContainer = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		getPosts();
	}, []);

	//var postsLength = Math.round(posts.length / 2);

	const getPosts = () => {
		setPosts(data);
	};
	return (
		<Wrapper>
			<PostWrapper>
				{posts.map(post => (
					<PostBox key={post.id}>
						<PostPicture>
							<img src={post.picture} />
						</PostPicture>
						<PostTitle>{post.title}</PostTitle>
						<PostDate>{post.created}</PostDate>
					</PostBox>
				))}
			</PostWrapper>
		</Wrapper>
	);
};

// {posts
// 	.filter(post => post.id < postsLength)
// 	.map(post => (
// 		<PostBox key={post.id}>
// 			<PostPicture>
// 				<img src={post.picture} width='343.33px' height='247.4px' />
// 			</PostPicture>
// 			<PostTitle>{post.title}</PostTitle>
// 			<PostBody>{post.day}</PostBody>
// 		</PostBox>
// 	))}
const Wrapper = styled.div`
	height: 600px;
	background-color: transparent;
	padding-top: 10px;
	overflow: scroll;
	overflow-y: hidden;
	display: flex;
	align-items: center;
	::-webkit-scrollbar {
		display: none;
	}
`;
const PostWrapper = styled.div`
	height: 480px;
	display: flex;
	background-color: transparent;
	align-items: center;
`;

const PostBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	width: 396px;
	height: 480px;
	background-color: white;
	box-shadow: 0px 4px 4px 0px #00000040;
	border-radius: 30px;
	margin-left: 70px;
	padding: 0 30px 0px 30px;
`;
const PostPicture = styled.div`
	img {
		width: 343.33px;
		height: 247.4px;
		border-radius: 14px;
	}
`;
const PostTitle = styled.div`
	width: 343.33px;
	font-weight: 700;
`;
const PostDate = styled.div`
	width: 343.33px;
	margin-bottom: 20px;
`;
export default PostsContainer;
