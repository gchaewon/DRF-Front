import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';
import Write from './pages/Write';
import Read from './pages/Read';

function App() {
	return (
		<>
			<GlobalStyle />
			<Router />
		</>
	);
}
const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Intro />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/main' element={<Main />} />
				<Route path='/write' element={<Write />} />
				<Route path='/read' element={<Read />} />
			</Routes>
		</BrowserRouter>
	);
};

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    width: 100%;
    font-family: 'NanumSquare';
} `;
export default App;
