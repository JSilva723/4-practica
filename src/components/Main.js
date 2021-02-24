import styled from 'styled-components'
const Main = styled.main`
	padding-top: 50px;
	margin-top: 20px;
	display: grid;
	grid-template-columns: repeat(1,1fr);
	@media screen and (min-width: 375px){
		grid-template-columns: repeat(2,1fr);
		grid-template-rows: repeat(2,1fr);
	}
`
export default Main