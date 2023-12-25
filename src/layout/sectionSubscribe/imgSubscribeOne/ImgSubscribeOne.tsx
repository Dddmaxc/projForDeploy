import styled from 'styled-components'
import img from '../../../assets/images/ImgSubscribe2.png'

export const ImgSubscribeOne = () => {
	return <StylesImg src={img} alt='Img' />
}

const StylesImg = styled.img`
	width: 282px;
	height: 348px;
	position: relative;
	left: 320px;
	top: -269px;
	z-index: 0;
`
