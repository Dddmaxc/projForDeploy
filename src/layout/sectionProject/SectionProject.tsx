import styled from 'styled-components'
import { Box } from '../../components/box/Box'
import { BoxPadding } from '../../components/boxPadding/BoxPadding'
import { ProjectContainer } from './projectContainer/ProjectContainer'

export const SectionProject = () => (
	<StylesSection>
		<Box />
		<BoxPadding />
		<ProjectContainer />
	</StylesSection>
)

const StylesSection = styled.section`
	padding: 92px 111px 92px 111px;
`
