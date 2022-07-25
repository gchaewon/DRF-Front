import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../static/logoIcon.svg';
import { ReactComponent as UploadBtnIcon } from '../static/uploadBtn.svg';
import TextEditor from '../components/write/TextEditor';

const Write = () => {
	return (
		<Wrapper>
			<WriteHeader>
				<LogoIcon className='logoIcon' />
				<UploadBtnIcon className='uploadBtn' />
			</WriteHeader>
			<TextEditor />
		</Wrapper>
	);
};
const Wrapper = styled.div`
	text-align: center;
`;
const WriteHeader = styled.div`
	display: flex;
	justify-content: space-between;
	height: 120px;
	background-color: #f5f5f5;
	.logoIcon {
		width: 200px;
		margin-left: 50px;
	}
	.uploadBtn {
		width: 180px;
		height: 80px;
		margin: 10px 30px 10px 10px;
	}
`;
export default Write;
