import styled from 'styled-components'
import img from '../../../assets/images/imgTechnologyOne.png'
import { myTheme } from '../../../styles/ThemeStyled'

export const ImgTechnologyTwo = () => {
	return <StylesImg src={img} alt='ImgTechnologyTwo' />
}

const StylesImg = styled.img`
	width: 410px;
	height: 400px;
	flex-shrink: 0;
	border-radius: 24px;
	position: relative;
	right: -326px;
	box-shadow: 0 0 100px 2px ${myTheme.colors.primary};
`
