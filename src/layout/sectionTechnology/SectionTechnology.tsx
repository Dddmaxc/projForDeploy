import styled from 'styled-components'
import { TechnologyTwo } from './technologyTwo/TechnologyTwo'
import { TechnologyOne } from './technologyOne/TechnologyOne'

export const SectionTechnology = () => {
	return (
		<StylesSectionTechnology>
			<TechnologyOne />
			<TechnologyTwo />
		</StylesSectionTechnology>
	)
}

const StylesSectionTechnology = styled.section`
	display: inline-flex;
	padding: 92px 111px;
	justify-content: center;
	align-items: center;
	gap: 124px;
`
