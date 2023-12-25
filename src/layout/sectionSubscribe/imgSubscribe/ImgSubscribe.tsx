import styled from 'styled-components'
import img from '../../../assets/images/ImgSubscribe1.png'

export const ImgSubscribe = () => {
	return <StylesImg src={img} alt='Img' />
}

const StylesImg = styled.img`
	width: 410px;
	height: 376px;
	transform: rotate(-11.188deg);
	flex-shrink: 0;
	position: relative;
	top: 23px;
	left: 40px;
`
