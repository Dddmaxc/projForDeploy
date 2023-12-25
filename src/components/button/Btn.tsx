import styled, { css } from 'styled-components'
import { myTheme } from '../../styles/ThemeStyled'

type StyledBtnPropsType = {
	color?: string
	primary?: boolean
	text?: string
}

export const Btn: React.FC<StyledBtnPropsType> = ({
	primary,
	color,
	text = 'Contact',
}) => {
	return (
		<div>
			<StyledBtn primary={primary} color={color}>
				{text}
			</StyledBtn>
		</div>
	)
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
	border-radius: 8px;
	border: none;
	width: 143px;
	height: 48px;
	font-family: 'Inter', sans-serif;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 120%;
	top: 18px;
	box-sizing: border-box;

	${props =>
		props.primary &&
		css<StyledBtnPropsType>`
			background-color: ${props => props.color || '#d3f85a'};
			color: ${props => props.color || '#090f1d'};

			&:hover {
				cursor: pointer;
				background-color: ${myTheme.colors.white};
				transition: all 0.2s ease;
			}
		`}
`
