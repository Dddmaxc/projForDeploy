import styled from 'styled-components'
import { ImgSubscribe } from '../imgSubscribe/ImgSubscribe'
import { ImgSubscribeOne } from '../imgSubscribeOne/ImgSubscribeOne'

export const SectionSubscribeTwo = () => {
	return (
		<StylesSectionSubscribeTwo>
			<ImgSubscribe />
			<ImgSubscribeOne />
		</StylesSectionSubscribeTwo>
	)
}

const StylesSectionSubscribeTwo = styled.section`
	width: 500px;
	height: 460px;
`
