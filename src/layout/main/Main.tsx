import styled from 'styled-components'
import { Section } from './section/Section'
import { SectionTwo } from './sectionTwo.tsx/SectionTwo'
import { myTheme } from '../../styles/ThemeStyled'

export const Main = () => {
	return (
		<StyledMain>
			<Section />
			<SectionTwo />
		</StyledMain>
	)
}

const StyledMain = styled.main`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
export const StyledBTtn = styled.button`
	background-color: ${myTheme.colors.primary};
	border-radius: 8px;
	width: 178px;
	height: 52px;
	font-family: 'Inter', sans-serif;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 120%;
	box-sizing: border-box;
	margin-top: 40px;
`
