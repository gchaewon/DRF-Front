import Register from '../components/signup/Register';
import styled from 'styled-components';

const Signup = () => {
	return (
		<Wrapper>
			<Register />
		</Wrapper>
	);
};
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	padding: 1rem 0.5rem;
`;
export default Signup;
