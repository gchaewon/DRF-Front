import styled from 'styled-components';
import Header from '../components/Header';
import MainTop from '../components/main/MainTop';
import PostsContainer from '../components/PostsContainer';
import Footer from '../components/Footer';

const Main = () => {
	return (
		<Wrapper>
			<Header />
			<MainTop />
			<PostsContainer />
			<Footer />
		</Wrapper>
	);
};
const Wrapper = styled.div``;
export default Main;
