import styled from 'styled-components'

export const Menu = () => {
	return (
		<div>
			<StyledMenu>
				<ul>
					<li>
						<a href='/#' className='LineMenu'>
							Marketplace
						</a>
					</li>
					<li>
						<a href='/#' className='LineMenu'>
							Artists
						</a>
					</li>
					<li>
						<a href='/#' className='LineMenu'>
							Community
						</a>
					</li>
					<li>
						<a href='/#' className='LineMenu'>
							Collections
						</a>
					</li>
					<li>
						<a href='/#' className='LineMenu'>
							Contact
						</a>
					</li>
				</ul>
			</StyledMenu>
		</div>
	)
}

const StyledMenu = styled.nav`
	ul {
		color: rgba(255, 255, 253, 0.72);
		font-family: Inter;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 160%;
		justify-content: center;
		list-style: none;
		display: flex;
		gap: 40px;
	}
`
