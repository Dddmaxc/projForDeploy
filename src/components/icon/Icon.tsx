import styled from 'styled-components'
import iconSprite from '../../assets/images/icon-sprite.svg'
import { myTheme } from '../../styles/ThemeStyled'

type IconPropsType = {
	iconId: string
	width?: string
	height?: string
	viewBox?: string
}

export const Icon = (props: IconPropsType) => {
	return (
		<StyledIcon>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={props.width || '28'}
				height={props.height || '28'}
				viewBox={props.viewBox || '0 0 28 28'}
				fill='none'
			>
				<use xlinkHref={`${iconSprite}#${props.iconId}`} />
			</svg>
			<StyledSpan>
				Creative<span id='primary'>art</span>
			</StyledSpan>
		</StyledIcon>
	)
}

const StyledIcon = styled.span`
	display: flex;
	gap: 10px;
`
const StyledSpan = styled.span`
	color: ${myTheme.colors.white};
	font-family: Canela;
	font-size: 32px;
	font-style: normal;
	font-weight: 500;
	line-height: 120%;
	span {
		color: ${myTheme.colors.primary};
	}
`
