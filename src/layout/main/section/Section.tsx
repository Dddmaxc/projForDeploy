import styled from 'styled-components'
import { myTheme } from '../../../styles/ThemeStyled'

export const Section = () => {
	return (
		<StyledSection>
			<StyledH1>
				Discover and <br />
				Collect The Best <br />
				NFTs<span>Digital Art.</span>
			</StyledH1>
			<StyledP>
				Get started with the easiest and most secure platform to buy and trade
				digital ART and NFT’s. Start exploring the world of digital art and NFTs
				today and take control of your digital assets with confidence!
			</StyledP>
			<StyledBtn>Explore Now</StyledBtn>
			<StyledSpan>
				<a href='/#'>Learn More</a>
			</StyledSpan>
			<StyledMainDiv>
				<StyledDiv>
					8.9<span>K</span>
					<StyledP>Art work</StyledP>
				</StyledDiv>
				<StyledDiv>
					8.9<span>K</span>
					<StyledP>Artist</StyledP>
				</StyledDiv>
				<StyledDiv>
					8.9<span>K</span>
					<StyledP>Collection</StyledP>
				</StyledDiv>
			</StyledMainDiv>
		</StyledSection>
	)
}

const StyledSection = styled.section`
	width: 544px;
	height: 100%;
	padding: 92px 111px 92px 111px;
`

const StyledH1 = styled.h1`
	color: ${myTheme.colors.white};
	font-family: 'Canela' sans-serif;
	font-size: 64px;
	font-style: normal;
	font-weight: 500;
	line-height: 120%;
	width: 544px;
	height: 231px;

	span {
		color: ${myTheme.colors.primary};
	}
`
const StyledP = styled.p`
	color: ${myTheme.colors.white};
	font-family: Inter;
	font-size: 16px;
	font-style: normal sans-serif;
	font-weight: 400;
	line-height: 160%;
	width: 544px;
	height: 78px;
`
const StyledBtn = styled.button`
	background-color: ${myTheme.colors.primary};
	border-radius: 8px;
	width: 178px;
	height: 52px;
	font-family: 'Inter', sans-serif;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 120%;
	box-sizing: border-box;
	margin-top: 40px;
	&:hover {
		background-color: ${myTheme.colors.white};
		transition: all 0.2s ease;
	}
	&:hover {
		cursor: pointer;
	}
`
const StyledSpan = styled.span`
	color: ${myTheme.colors.white};
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 120%;
	margin-left: 35px;
	a {
		color: ${myTheme.colors.white};
		&:hover {
			color: ${myTheme.colors.primary};
			transition: all 0.2s ease;
		}
	}
`
const StyledMainDiv = styled.div`
	width: 509;
	height: 92px;
	display: flex;
	display: flex;
	align-items: center;
	gap: 94px;
	padding: 0px;
	margin-top: 40px;
	&:hover {
		cursor: pointer;
	}
`
const StyledDiv = styled.div`
	width: 128px;
	height: 80px;
	color: ${myTheme.colors.primary};
	font-family: Canela;
	font-size: 48px;
	font-style: normal;
	font-weight: 500;
	line-height: 120%;
	border-right: 1px solid ${myTheme.colors.primary};
	span {
		color: ${myTheme.colors.white};
	}
	&:last-child {
		border-right: none;
	}
`
