import styled from 'styled-components'
import { myTheme } from '../../../styles/ThemeStyled'

export const PopularBox = () => {
	return (
		<BoxContainer>
			<StylesH2>
				Popular <StyledSpan>Artists</StyledSpan> On This Week
			</StylesH2>
			<StylesButton>
				<a href='/#'>See All</a>
			</StylesButton>
		</BoxContainer>
	)
}

const BoxContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`
const StyledSpan = styled.span`
	color: ${myTheme.colors.primary};
`
const StylesButton = styled.div`
	background-color: ${myTheme.colors.primary};
	display: flex;
	height: 52px;
	padding: 12px 40px;
	justify-content: center;
	align-items: center;
	gap: 12px;
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 120%;
	width: 54px;
	height: 28px;
	border-radius: 8px;
	a {
		color: black;
		&:hover {
			color: #000;
		}
	}
	&:hover {
		background-color: ${myTheme.colors.white};
		transition: all 0.2s ease;
		cursor: pointer;
	}
`
const StylesH2 = styled.h2`
	color: ${myTheme.colors.white};
	font-family: Canela;
	font-size: 48px;
	font-style: normal;
	font-weight: 500;
	line-height: 120%;
	width: 307px;
`
