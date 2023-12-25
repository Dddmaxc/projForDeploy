import styled from 'styled-components'
import { FooterBoxCreativeArt } from './footerBoxCreativeArt/FooterBoxCreativeArt'
import { FooterLinks } from './footerLinks/FooterLinks'

export const Footer = () => {
	return (
		<StyledFooter>
			<SectionFooterContainer>
				<FooterBoxCreativeArt />
				<FooterLinks />
			</SectionFooterContainer>
			<StylesDiv>
				<span>© Copyright 2023 - Creativeart</span>
				<div>
					<span>Privacy Policy</span>
					<span>Terms & Conditions</span>
				</div>
			</StylesDiv>
		</StyledFooter>
	)
}

const StyledFooter = styled.footer`
	display: inline-flex;
	padding: 92px 111px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 48px;
`
const SectionFooterContainer = styled.section`
	display: flex;
	padding-bottom: 48px;
	align-items: baseline;
	gap: 293px;
	width: 100%;
	border-bottom: 1px solid #838382;
`
const StylesDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: white;
	width: 100%;
	color: #fffffd;
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 160%;
	&:hover {
		cursor: pointer;
	}
`
