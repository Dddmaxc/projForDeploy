import styled from 'styled-components'
import { myTheme } from '../../../styles/ThemeStyled'
import { LINKS, LINKSONE, LINKSTWO, LINKTHREE } from './links'

export const FooterLinks = () => {
	return (
		<DivFlex>
			<StyledFooterLinks>
				{LINKS.map(link => (
					<a key={link.id} href={link.url}>
						<li>{link.title}</li>
					</a>
				))}
			</StyledFooterLinks>
			<StyledFooterLinks>
				{LINKSONE.map(link => (
					<a key={link.id} href={link.url}>
						<li>{link.title}</li>
					</a>
				))}
			</StyledFooterLinks>
			<StyledFooterLinks>
				{LINKSTWO.map(link => (
					<a key={link.id} href={link.url}>
						<li>{link.title}</li>
					</a>
				))}
			</StyledFooterLinks>
			<StyledFooterLinks>
				{LINKTHREE.map(link => (
					<a key={link.id} href={link.url}>
						<li>{link.title}</li>
					</a>
				))}
			</StyledFooterLinks>
		</DivFlex>
	)
}

const DivFlex = styled.div`
	display: flex;
	gap: 94px;
`

const StyledFooterLinks = styled.ul`
	padding: 0;
	margin: 0;
	a:first-child li {
		padding-bottom: 24px;
		color: ${myTheme.colors.white};
		font-family: Inter;
		font-size: 20px;
		font-style: normal;
		font-weight: 700;
		line-height: 120%;
	}
	a:first-child li:hover {
		color: ${myTheme.colors.white};
	}

	a > li {
		color: rgba(255, 255, 253, 1);
		font-family: Inter;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 160%;
		padding-bottom: 8px;
		list-style: none;
		margin: 0;
	}
	a > li:hover {
		color: ${myTheme.colors.primary};
		cursor: pointer;
	}
`
