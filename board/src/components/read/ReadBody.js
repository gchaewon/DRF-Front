import React, { useState } from 'react';
import styled from 'styled-components';
import G5 from '../../static/Group5.png';
import G7 from '../../static/Group7.png';
import data from '../../data.json';
//import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";

const ReadBody = props => {
	const [input, setInput] = useState();
	const [comments, setComments] = useState([]);

	const onChange = e => {
		setInput(e.target.value);
	};

	const addComment = data => {
		// 코멘트 추가
		setComments(
			comments.concat({
				id: comments.length + 1,
				content: input,
				userName: data[3].name,
			})
		);
	};
	return (
		<BodyDiv>
			<ReadDiv>
				<ReadPic>
					<img
						src={data[0].picture}
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							borderRadius: '14px',
						}}
					/>
				</ReadPic>
				<ReadTitle>{data[0].title}</ReadTitle>
				<ReadContent>{data[0].description}</ReadContent>
			</ReadDiv>
			<AddNum>댓글({comments.length + 2})</AddNum>
			<Div>
				<ReplDiv>
					<ReplOne>
						<ReplPhoto>
							<img src={G5} />
						</ReplPhoto>
						<ReplNameDiv />
						<ReplName>{data[0].name}</ReplName>
						<ReplDate>{data[0].created}</ReplDate>
						<ReplInput>저도 한번 가봐야겠어요~ 좋은 글 감사합니다!</ReplInput>
					</ReplOne>
					<ReplTwo>
						<ReplPhoto>
							<img src={G5} />
						</ReplPhoto>
						<ReplNameDiv />
						<ReplName>{data[1].name}</ReplName>
						<ReplDate>{data[1].created}</ReplDate>
						<ReplInput>좋은 정보 감사합니다^^</ReplInput>
					</ReplTwo>

					{comments.map((comment, index) => (
						<Repl key={`${comment.userName}_${index}`}>
							<ReplPhoto>
								<img src={G5} />
							</ReplPhoto>
							<ReplNameDiv />
							<ReplName>{data[2].name}</ReplName>
							<ReplDate>{todayTime()}</ReplDate>
							<ReplInput>{comment.content}</ReplInput>
						</Repl>
					))}
				</ReplDiv>
				<WriteReplDiv>
					<Pic>
						<img src={G7} />
					</Pic>
					<ReplMyInfo>
						<ReplMyInfo1>{data[2].name}</ReplMyInfo1>
						<ReplMyInfo2>(나)</ReplMyInfo2>
					</ReplMyInfo>
					<WriteRepl>
						<input
							value={input}
							onChange={onChange}
							placeholder='댓글을 입력해주세요.'
						></input>
						<ReplButton
							onClick={() => {
								addComment(input);
								setInput('');
							}}
						>
							등록
						</ReplButton>
					</WriteRepl>
				</WriteReplDiv>
			</Div>
		</BodyDiv>
	);
};
export default ReadBody;

const BodyDiv = styled.div`
	position: absolute;
	width: 100%;
	height: 1604px;
	left: 0px;
	background: #eaf2ce;
`;

const ReadDiv = styled.div`
	position: absolute;
	width: 1365px;
	height: 705px;
	left: 73px;
	right: 73px;
	top: 73px;
	bottom: 860px;
	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 68px;
`;

const ReadTitle = styled.div`
	position: absolute;
	width: 394px;
	height: 51px;
	left: 661.5px;
	right: 309.5px;
	bottom: 603px;
	top: 51px;
	background: #ffffff;
	border-radius: 2px;
	font-style: normal;
	font-weight: 800;
	font-size: 32px;
	line-height: 36px;
	display: flex;
	align-items: center;
	color: #000000;
`;

const ReadPic = styled.div`
	position: absolute;
	width: 554px;
	height: 625px;
	left: 39.5px;
	right: 771.5;
	top: 40px;
	bottom: 40px;
	border-radius: 14px;
`;

const ReadContent = styled.div`
	position: absolute;
	width: 578px;
	height: 376px;
	left: 661px;
	right: 126px;
	top: 166px;
	background: #ffffff;
	border-radius: 10px;
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	line-height: 40px;
	display: flex;
	align-items: center;
	color: #000000;
`;

const Div = styled.div`
	width: 1416px;
	height: 640px;
	left: 54px;
	right: 54px;
	bottom: 80px;
	top: 891px;
`;

const AddNum = styled.div`
	position: absolute;
	width: 163.92px;
	height: 56.69px;
	left: 126px;
	right: 1247px;
	top: 811px;
	bottom: 738px;
	background: #c5da95;
	border-radius: 23px;
	font-style: normal;
	font-weight: 800;
	font-size: 24px;
	line-height: 27px;
	display: flex;
	align-items: center;
	text-align: center;
	justify-content: center;
	color: #383932;
`;

const ReplOne = styled.div`
	display: flex;
	position: absolute;
	width: 1365px;
	height: 135px;
	left: 31px;
	right: 20px;
	top: 14px;
	bottom: 194px;
	background: #eeeeee;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 68px;
`;

const ReplTwo = styled.div`
	position: absolute;
	width: 1365px;
	height: 135px;
	left: 31px;
	right: 20px;
	top: 183px;
	bottom: 25px;
	background: #eeeeee;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 68px;
	display: flex;
`;

const WriteReplDiv = styled.div`
	position: absolute;
	width: 1365px;
	height: 258px;
	left: 73px;
	right: 74px;
	top: 1245px;
	bottom: 108px;
	background: #eeeeee;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 21px;
`;

const WriteRepl = styled.div`
	position: absolute;
	width: 1271px;
	height: 140px;
	left: 47px;
	right: 47px;
	bottom: 27px;
	top: 91px;
	background: #ffffff;
	input {
		background-color: transparent;
		border-style: none;
		outline: none;
		padding: 10px;
		font-size: 18px;
	}
`;

const ReplButton = styled.div`
	position: absolute;
	width: 101px;
	height: 32px;
	left: 1155px;
	right: 15px;
	top: 92px;
	bottom: 16px;
	background: #c5da95;
	border-radius: 11px;
	font-style: normal;
	font-weight: 700;
	font-size: 15px;
	line-height: 17px;
	display: flex;
	align-items: center;
	text-align: center;
	justify-content: center;
	color: #000000;
	cursor: pointer;
`;

const ReplDiv = styled.div`
	position: absolute;
	width: 1470px;
	height: 330px;
	top: 887px;
	left: 42px;
	right: 54px;
	overflow-y: scroll;
	::-webkit-scrollbar {
		display: none;
	}
`;

const ReplInput = styled.div`
	position: absolute;
	width: 356px;
	height: 37px;
	left: 158px;
	right: 851px;
	bottom: 26px;
	top: 72px;
`;

const ReplPhoto = styled.div`
	position: absolute;
	width: 82px;
	height: 82px;
	left: 54px;
	right: 1229px;
	top: 30px;
	bottom: 23px;
`;

const ReplNameDiv = styled.div`
	position: absolute;
	width: 190.69px;
	height: 31.78px;
	left: 153px;
	top: 19.85px;
	background: #dfdfdf;
	border-radius: 11px;
`;

const ReplName = styled.div`
	position: absolute;
	width: 72px;
	height: 37px;
	left: 158.35px;
	top: 17px;
	color: #53a62d;
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 18px;
	display: flex;
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 18px;
	display: flex;
	align-items: center;
	text-align: center;
	padding-left: 10px;
	color: #53a62d;
`;

const ReplDate = styled.div`
	position: absolute;
	width: 72px;
	height: 37px;
	left: 268.35px;
	top: 17px;
	font-style: normal;
	font-weight: 400;
	font-size: 10px;
	line-height: 12px;
	display: flex;
	align-items: center;
	text-align: center;
	color: #000000;
`;

const Pic = styled.div`
	position: absolute;
	width: 60px;
	height: 60px;
	left: 54px;
	top: 17px;
	bottom: 181px;
	right: 1251px;
`;

const ReplMyInfo = styled.div`
	position: absolute;
	width: 116px;
	height: 37px;
	left: 136px;
	right: 1113px;
	top: 29px;
	bottom: 192px;
`;

const ReplMyInfo1 = styled.div`
	position: absolute;
	width: 61px;
	height: 18px;
	left: 12px;
	right: 43px;
	top: 9px;
	bottom: 10px;
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 18px;
	display: flex;
	align-items: center;
	text-align: center;
	color: #53a62d;
`;

const ReplMyInfo2 = styled.div`
	position: absolute;
	width: 28px;
	height: 18px;
	left: 73px;
	right: 15px;
	top: 9px;
	bottom: 10px;
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 18px;
	display: flex;
	align-items: center;
	text-align: center;
	color: #111111;
`;

const CommentWrapper = styled.div`
	display: flex;
	width: 1365px;
	height: 135px;
	background: #111111;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 68px;
	p {
		margin: 34;
	}
`;

const UserInfoWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #eeeeee;
`;

const Repl = styled.div`
	position: relative;
	width: 1365px;
	height: 135px;
	right: 20px;
	left: 31px;
	top: 310px;
	background: #eeeeee;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 68px;
	margin-top: 34px;
`;

const todayTime = () => {
	const now = new Date();
	const year = now.getFullYear();
	const month =
		now.getMonth() + 1 > 9 ? now.getMonth() + 1 : '0' + (now.getMonth() + 1);
	const date = now.getDate() + 1 > 9 ? now.getDate() : '0' + now.getDate();

	return year + '.' + month + '.' + date;
};
