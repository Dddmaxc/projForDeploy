import styled from 'styled-components'
import { myTheme } from '../../../styles/ThemeStyled'

export const TechnologyOne = () => {
	return (
		<StylesTechnologyOne>
			<div>
				<StyledH2>
					Create And Sell Your <span>Best NFTs</span>
				</StyledH2>
			</div>
			<StyledP>
				Start exploring the world of digital art and NFTs today and take control
				of your digital assets with confidence!
			</StyledP>
			<div>
				<StyledBtn>
					<a href='/#'>Create now</a>
				</StyledBtn>
				<StyledSpan>
					<a href='/#'>Learn More</a>
				</StyledSpan>
			</div>
		</StylesTechnologyOne>
	)
}

const StylesTechnologyOne = styled.div`
	display: flex;
	width: 426px;
	flex-direction: column;
	align-items: flex-start;
`

const StyledH2 = styled.h2`
	color: ${myTheme.colors.white};
	font-family: Canela;
	font-size: 48px;
	font-style: normal;
	font-weight: 500;
	line-height: 120%;

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
	width: 100%;
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
	a {
		color: #000;
		&:hover {
			color: #000;
		}
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
