import styled from 'styled-components'
import colors from './colors'
const H1 = styled.h1`
	color: ${colors.VeryDarkMagenta}
`
const Header = () => (
	<header>
		<h1>10,000+ of our users love our products.</h1>
		<h2>We only provide great products combined with excellent customer service.See what our satisfied customers are saying about our services.</h2>
	</header>
)
export default Header