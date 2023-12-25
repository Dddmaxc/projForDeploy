import styled from 'styled-components'
import { SectionSubscribeTwo } from './sectionSubscribeTwo/SectionSubscribeTwo'
import { SectionSubscribeThree } from './sectionSubscribeThree/SectionSubscribeThree'

export const SectionSubscribe = () => {
	return (
		<StylesSectionSubscribe>
			<SectionSubscribeTwo />
			<SectionSubscribeThree />
		</StylesSectionSubscribe>
	)
}

const StylesSectionSubscribe = styled.section`
	display: flex;
	padding: 92px 111px;
	gap: 17%;
	align-items: center;
`
