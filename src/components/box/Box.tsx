import styled from 'styled-components'
import { myTheme } from '../../styles/ThemeStyled'

export const Box = () => {
	return (
		<BoxContainer>
			<StylesH2>
				<StyledSpan>Amazing</StyledSpan> and Super Unique Art of This
				<StyledSpan>Week</StyledSpan>
			</StylesH2>
			<StylesButton>
				<a href='#'>See All</a>
			</StylesButton>
		</BoxContainer>
	)
}

const BoxContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	align-items: center;
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
	margin-top: 65px;
	a {
		color: black;
		&:hover {
			cursor: pointer;
			color: black;
		}
	}
	&:hover {
		background-color: ${myTheme.colors.white};
		transition: all 0.2s ease;
	}
`
const StylesH2 = styled.h2`
	color: ${myTheme.colors.white};
	font-family: Canela;
	font-size: 48px;
	font-style: normal;
	font-weight: 500;
	line-height: 120%;
	width: 506px;
`
