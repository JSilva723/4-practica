import {createGlobalStyle} from 'styled-components'
import colors from './components/colors'
import Main from './components/Main'
import Header from './components/Header'
import Rateds from './components/Rateds'
import Coments from './components/Coments'
const GlobalStyle = createGlobalStyle`
	body{
		margin: -20px 0px 10px;
		font-family: 'Spartan', sans-serif;
		font-size: 15px;
		text-align: center;
		height: 100%;
		position: relative;
		&::before{
			content: '';
			display: block;
			width: 100%;
			height: 300px;
			background-image: url('./assets/top-mobile.svg');
			background-repeat: no-repeat;
			position: absolute;
			z-index: -1;
			@media screen and (min-width: 375px){
				background-image: url('./assets/top-desktop.svg');
				height: 500px;
			} 
		}
		&::after{
			content: '';
			display: block;
			width: 100%;
			height: 300px;
			background-image: url('./assets/bottom-mobile.svg');
			background-repeat: no-repeat;
			background-position-x: 130px;
			position: absolute;
			bottom: 0;
			right: 0;
			z-index: -1;
			@media screen and (min-width: 375px){
				height: 80%;
				background-image: url('./assets/bottom-desktop.svg');
				background-position-x: -150px;
				background-position-y: 50px;
			}
		}
	}
`
const App = ()  => {
	return(
		<>
			<GlobalStyle />
			<Main>
				<Header />
				<Rateds />
				<Coments />
			</Main>
		</>
	)
}
export default App;