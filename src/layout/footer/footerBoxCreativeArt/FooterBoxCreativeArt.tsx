import styled from 'styled-components'
import iconSprite from '../../../assets/images/icon-sprite.svg'
import { myTheme } from '../../../styles/ThemeStyled'

export const FooterBoxCreativeArt = () => {
	return (
		<StylesBoxCreativeArt>
			<Icon iconId='code' />
			<StylesP>
				Discover NFTs by category, track the latest drop, and and follow the
				collections you love. Enjoy it!
			</StylesP>
			<FooterBoxIcon>
				<FooterIcon iconId={'facebook'} />
				<FooterIconTelegram iconId={'telegram'} />
				<FooterIconTwitter iconId={'twitter'} />
				<FooterIconLinkedin iconId={'linkedin'} />
			</FooterBoxIcon>
		</StylesBoxCreativeArt>
	)
}
const StylesBoxCreativeArt = styled.div`
	display: flex;
	width: 272px;
	flex-direction: column;
	align-items: flex-start;
`
const FooterBoxIcon = styled.div`
	display: flex;
	gap: 12px;
	padding-top: 20px;
`

type IconPropsType = {
	iconId?: string
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
	&:hover {
		cursor: pointer;
	}
`
const StylesP = styled.p`
	color: ${myTheme.colors.white};
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 160%;
	padding: 0px;
`
const FooterIcon = (props: IconPropsType) => {
	return (
		<StylesFooterIcon>
			<a href='/#'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={props.width || '25'}
					height={props.height || '24'}
					viewBox={props.viewBox || '0 0 25 24'}
					fill='none'
				>
					<use xlinkHref={`${iconSprite}#${props.iconId}`} />
				</svg>
			</a>
		</StylesFooterIcon>
	)
}
const StylesFooterIcon = styled.div`
	svg {
		color: ${myTheme.colors.white};
	}
	svg:hover {
		color: ${myTheme.colors.primary};
	}
`
const FooterIconTelegram = (props: IconPropsType) => {
	return (
		<StylesFooterIconTelegram>
			<a href='/#'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={props.width || '25'}
					height={props.height || '24'}
					viewBox={props.viewBox || '0 0 25 24'}
					fill='none'
				>
					<use xlinkHref={`${iconSprite}#${props.iconId}`} />
				</svg>
			</a>
		</StylesFooterIconTelegram>
	)
}
const StylesFooterIconTelegram = styled.div`
	svg {
		color: ${myTheme.colors.white};
	}
	svg:hover {
		color: ${myTheme.colors.primary};
	}
`
const FooterIconTwitter = (props: IconPropsType) => {
	return (
		<StylesFooterIconTwitter>
			<a href='/#'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={props.width || '25'}
					height={props.height || '24'}
					viewBox={props.viewBox || '0 0 25 24'}
					fill='none'
				>
					<use xlinkHref={`${iconSprite}#${props.iconId}`} />
				</svg>
			</a>
		</StylesFooterIconTwitter>
	)
}
const StylesFooterIconTwitter = styled.div`
	svg {
		color: ${myTheme.colors.white};
	}
	svg:hover {
		color: ${myTheme.colors.primary};
	}
`
const FooterIconLinkedin = (props: IconPropsType) => {
	return (
		<StylesFooterIconLinkedin>
			<a href='/#'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={props.width || '25'}
					height={props.height || '24'}
					viewBox={props.viewBox || '0 0 25 24'}
					fill='none'
				>
					<use xlinkHref={`${iconSprite}#${props.iconId}`} />
				</svg>
			</a>
		</StylesFooterIconLinkedin>
	)
}

const StylesFooterIconLinkedin = styled.div`
	svg {
		color: ${myTheme.colors.white};
	}
	svg:hover {
		color: ${myTheme.colors.primary};
	}
`
