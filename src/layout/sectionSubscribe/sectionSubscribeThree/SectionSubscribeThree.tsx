import styled from 'styled-components'
import { myTheme } from '../../../styles/ThemeStyled'

export const SectionSubscribeThree = () => {
	return (
		<StylesSectionSubscribeThree>
			<StylesH4>
				Subscribe And <span>get our Updates</span> Every Week
			</StylesH4>
			<StylesP>
				We have a blog related to NFT so we can share thoughts and routines on
				our blog which is updated weekly
			</StylesP>
			<StylesForm>
				<StylesInput type='text' placeholder='Enter your e-mail' />
				<StylesFormButton>Subscribe</StylesFormButton>
			</StylesForm>
		</StylesSectionSubscribeThree>
	)
}

const StylesSectionSubscribeThree = styled.section`
	height: 460px;
	width: 520px;
`
const StylesH4 = styled.h4`
	color: ${myTheme.colors.white};
	font-family: Canela;
	font-size: 48px;
	font-style: normal;
	font-weight: 500;
	line-height: 120%;

	span {
		color: ${myTheme.colors.primary};
	}
`
const StylesP = styled.p`
	color: ${myTheme.colors.white};
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 160%;
`
const StylesInput = styled.input`
	display: flex;
	width: 307px;
	height: 25px;
	padding: 16px 24px;
	align-items: center;
	flex-shrink: 0;
	border-bottom-left-radius: 8px;
	border-top-left-radius: 8px;
	background-color: ${myTheme.colors.cardFone};
	border: none;
	input::placeholder {
		color: rgba(255, 255, 253, 0.72);
		font-family: Inter;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 160%;
	}
`
const StylesForm = styled.div`
	margin-top: 20px;
	display: flex;
	align-items: center;
	background-color: ${myTheme.colors.cardFone};
	border-radius: 8px;
	height: 58px;
	width: 516px;
`
const StylesFormButton = styled.button`
	width: 160px;
	height: 58px;
	border-radius: 8px;
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 120%;
	background-color: ${myTheme.colors.primary};
	border: none;
	&:hover {
		background-color: #e32847;
		color: ${myTheme.colors.white};
	}
`
