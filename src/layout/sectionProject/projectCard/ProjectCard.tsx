import styled from 'styled-components'
import { myTheme } from '../../../styles/ThemeStyled'
import { Clock } from '../../../components/clock/Clock'
import { AssetsSvg } from '../../../components/assetsSvg/AssetsSvg'
import { FC } from 'react'

type PropsType = {
	title: string
	image: string
	price: number
	time: string
}

export const ProjectCard: FC<PropsType> = ({ image, title, price, time }) => {
	return (
		<StylesCard>
			<img src={image} alt='SOneCard' />
			<StyledBoxForText>
				<StylesH5>{title}</StylesH5>
				<StyledBoxForSvg>
					<StylesSvg>
						<AssetsSvg iconId='assets' />
					</StylesSvg>
					<span>{price}ETH</span>
				</StyledBoxForSvg>
			</StyledBoxForText>
			<StyledBoxBit>
				<StyledBoxBitTextSvg>
					<StylesEnd>Ending In</StylesEnd>
					<StylesSvgTime>
						<Clock iconId='clock' />
						<div>{time}</div>
					</StylesSvgTime>
				</StyledBoxBitTextSvg>
				<StylesButton>
					<a href='/#'>Place A Bid</a>
				</StylesButton>
			</StyledBoxBit>
		</StylesCard>
	)
}

const StylesCard = styled.div`
	display: flex;
	width: 370px;
	padding: 20px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 24px;
	background-color: ${myTheme.colors.cardFone};
	border-radius: 28px;
	border-top: 2px solid ${myTheme.colors.primary};
	&:hover {
		box-shadow: 0px 0px 10px 0px ${myTheme.colors.primary};
		img:hover {
			border-radius: 16px;
			box-shadow: 0px 0px 10px 0px ${myTheme.colors.white};
			transition: all 0.3s ease-in-out;
		}
	}
`
const StylesSvg = styled.div`
	padding: 0px;
`
const StyledBoxForSvg = styled.div`
	display: flex;
	align-items: center;
	span {
		color: ${myTheme.colors.white};
		font-family: Inter;
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: 120%;
	}
`
const StylesEnd = styled.div`
	color: #838382;
	font-family: Inter;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 160%;
`

const StylesH5 = styled.p`
	color: ${myTheme.colors.white};
	font-family: Inter;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 120%;
	padding-bottom: 5px;
`
const StyledBoxForText = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 29px;
`
const StyledBoxBit = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const StyledBoxBitTextSvg = styled.div`
	display: flex;
	flex-direction: column;
`
const StylesSvgTime = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	div {
		color: ${myTheme.colors.white};
		font-family: Inter;
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: 120%;
	}
`
const StylesButton = styled.div`
	padding: 12px 40px 12px 40px;
	border: 1px solid ${myTheme.colors.primary};
	background-color: transparent;
	text-align: center;
	border-radius: 8px;
	&:hover {
		background-color: ${myTheme.colors.primary};
		transition: all 0.2s ease;
		a {
			color: #000;
		}
	}
	a {
		color: ${myTheme.colors.primary};
		font-family: Inter;
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: 120%;
	}
`
