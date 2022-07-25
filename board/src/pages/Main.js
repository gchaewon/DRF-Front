import styled from 'styled-components';
import Header from '../components/Header';
import MainTop from '../components/main/MainTop';
import PostsContainer from '../components/PostsContainer';
import Footer from '../components/Footer';

const Main = () => {
	return (
		<>
			<Header />
			<MainTop />
			<PostsWrapper>
				<PostsContainer />
			</PostsWrapper>
			<Footer />
		</>
	);
};

const PostsWrapper = styled.div`
	background-color: #eaf2ce;
`;
export default Main;
