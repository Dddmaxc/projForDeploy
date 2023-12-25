import styled from 'styled-components'
import img from '../../../assets/images/imgTechnology.png'
import { myTheme } from '../../../styles/ThemeStyled'

export const ImgTechnology = () => {
	return (
		<StylesImgTechnology>
			<StylesImg src={img} alt='ImgTechnology' />
		</StylesImgTechnology>
	)
}

const StylesImgTechnology = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: end;
`
const StylesImg = styled.img`
	width: 410px;
	height: 400px;
	flex-shrink: 0;
	border-radius: 24px;
	position: absolute;
	z-index: 1;
	box-shadow: 0 0 100px 2px ${myTheme.colors.primary};
`
