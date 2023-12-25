import styled from 'styled-components'
import img from '../../../assets/images/mainImg.png'
import { SectionThree } from '../sectionThree/SectionThree'

export const SectionTwo = () => {
	return (
		<StyledSectionTwo>
			<StyledImg src={img} alt='mainImg' />
			<SectionThree />
		</StyledSectionTwo>
	)
}

const StyledSectionTwo = styled.section`
	right: 44px;
	width: 544px;
	height: 100%;
	position: relative;
	padding: 92px 111px 92px 111px;
`
const StyledImg = styled.img`
	flex-shrink: 0;
`
