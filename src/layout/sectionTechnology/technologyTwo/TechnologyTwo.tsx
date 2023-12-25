import styled from 'styled-components'
import { ImgTechnology } from '../imgTechnology/ImgTechnology'
import { ImgTechnologyTwo } from '../imgTechnologyTwo/ImgTechnologyTwo'

export const TechnologyTwo = () => {
	return (
		<StylesTechnologyTwo>
			<ImgTechnology />
			<ImgTechnologyTwo />
		</StylesTechnologyTwo>
	)
}

const StylesTechnologyTwo = styled.div`
	height: 559px;
	display: flex;
`
