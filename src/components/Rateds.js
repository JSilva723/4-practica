import styled from 'styled-components'
import colors from './colors'
const RatedsContainer = styled.div`
	margin-bottom: 50px;
	@media screen and (min-width: 375px){
		
	}
`
const Aside = styled.aside`
	background-color: ${colors.LightGrayishMagenta};
	width: 85%;
	min-width: 290px;
	height: 80px;
	margin: 10px auto;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	
	@media screen and (min-width: 375px){
		flex-direction: row;
		align-items: center;
		margin-left: ${({ml}) => ml};
	}
`
const P = styled.p`
	margin-top: 0;
	margin-bottom: 0;
`
const Rateds = () => (
	<RatedsContainer>
		<Aside ml={'15px'}>
			<span>
				<img src='./assets/star.svg'/>
				<img src='./assets/star.svg'/>
				<img src='./assets/star.svg'/>
				<img src='./assets/star.svg'/>
				<img src='./assets/star.svg'/>
			</span>
			<P>Rated 5 Stars in Reviews</P>
		</Aside>
		<Aside ml={'45px'}>
			<span>
				<img src='./assets/star.svg'/>
				<img src='./assets/star.svg'/>
				<img src='./assets/star.svg'/>
				<img src='./assets/star.svg'/>
				<img src='./assets/star.svg'/>
			</span>
			<P>Rated 5 Stars in Report Guru</P>
		</Aside>
		<Aside ml={'75px'}>
			<span>
				<img src='./assets/star.svg'/>
				<img src='./assets/star.svg'/>
				<img src='./assets/star.svg'/>
				<img src='./assets/star.svg'/>
				<img src='./assets/star.svg'/>
			</span>
			<P>Rated 5 Stars in BestTech</P>
		</Aside>
	</RatedsContainer>
)
export default Rateds