import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/logo/logo'
import { Btn } from '../../components/button/Btn'
import { Menu } from './menu/Menu'

export const Header = () => {
	return (
		<StyledHeader>
			<Logo />
			<Menu />
			<Btn primary />
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	background-color: rgba(9, 15, 29, 1);
	display: flex;
	justify-content: space-between;
	padding: 28px 111px 28px 111px;
	position: sticky;
	top: 0;
	z-index: 2;
	align-items: center;
	opacity: 1;
`
