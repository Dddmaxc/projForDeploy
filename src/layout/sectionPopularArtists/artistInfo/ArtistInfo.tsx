import { FC } from 'react'
import styled from 'styled-components'
import { myTheme } from '../../../styles/ThemeStyled'

type PropsType = {
	owner: string
	firstName: string
	image: string
}

export const ArtistInfo: FC<PropsType> = ({ owner, firstName, image }) => {
	return (
		<Loe>
			<img src={image} alt='img' />
			<div>
				<StylesOwner>{owner}</StylesOwner>
				<div>{firstName}</div>
			</div>
		</Loe>
	)
}

const Loe = styled.div`
	background-color: transparent;
	display: inline-flex;
	align-items: center;
	gap: 12px;
	width: 195px;
	height: 48px;
	flex-shrink: 0;
	object-fit: cover;
	margin: 0 0 24px 26px;
	color: #fff;
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 120%;
`
const StylesOwner = styled.div`
	color: ${myTheme.colors.white};
	font-family: Inter;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 160%;
`
