import styled from 'styled-components';
import Container1 from '../components/intro/Container1';
import Container2 from '../components/intro/Container2';
import Container3 from '../components/intro/Container3';
import PostsContainer from '../components/PostsContainer';
import Footer from '../components/Footer';
const Intro = () => {
	return (
		<Wrapper>
			<Container1 />
			<Container2 />
			<Container3 />
			<PostsContainer />
			<Footer />
		</Wrapper>
	);
};
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
export default Intro;
