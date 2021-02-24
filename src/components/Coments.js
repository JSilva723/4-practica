import styled from 'styled-components'
import colors from './colors'
const ComentsContainer = styled.div`
	@media screen and (min-width: 375px){
		display: flex;
		grid-row: 2;
		grid-column: 1/3;
	}
`
const Section = styled.section`
	background-color: ${colors.VeryDarkMagenta};
	color: ${colors.White};
	font-size: .8rem;
	border-radius: 10px;
	width: 80%;
	min-width: 290px;
	height: 215px;
	margin: 10px auto;
	position:relative;
	@media screen and (min-width: 375px){
		margin-top: ${({mt}) => mt};
	}
`
const Img = styled.img`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	position: absolute;
	top: 30px;
	left: 40px;
`
const H2 = styled.h2`
	position: absolute;
	top: 20px;
	left: 120px;
`
const H3 = styled.h3`
	color: ${colors.SoftPink};
	font-weight: 400;
	position: absolute;
	top: 50px;
	left: 120px;
`
const P = styled.p`
	margin: 40px 20px 10px;
	position: absolute;
	top: 70px;
	left: 5px;
`
const Coments = () => (
	<ComentsContainer>
		<Section>
			<Img src='./assets/colton.jpg'/>
		    <H2>Colton Smith</H2>
		    <H3>Verified Buyer </H3>
			<P>
				"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"
			</P>
		</Section>
		<Section mt={'40px'}>
			<Img src='./assets/irene.jpg'/>
			<H2>Irene Roberts</H2> 
			<H3>Verified Buyer</H3>
			<P>"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."</P>
		</Section>
		<Section mt={'70px'}>
			<Img src='./assets/anne.jpg'/>
			<H2>Anne Wallace</H2> 
			<H3>Verified Buyer</H3>
			<P>"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"</P>
		</Section>
	</ComentsContainer>
)
export default Coments