import styled from 'styled-components'
import { myTheme } from '../../../styles/ThemeStyled'

export const SectionThree = () => {
	return (
		<div>
			<StyledSection>
				<StyledDivTime>
					<div>
						<div>Ends in</div>
						<div>
							<time>05:45:47</time>
						</div>
					</div>
					<div>
						<div>Current bid</div>
						<div>
							<div>0.24ETH</div>
						</div>
					</div>
				</StyledDivTime>
				<StyledBid>
					<a href='/#'>Place A Bid</a>
				</StyledBid>
			</StyledSection>
		</div>
	)
}

const StyledSection = styled.section`
	border-radius: 16px;
	display: flex;
	width: 264px;
	height: 129px;
	padding: 20px;
	flex-direction: column;
	position: absolute;
	top: 568px;
	left: 380px;
	gap: 24px;
	border-top: 2px solid ${myTheme.colors.primary};
	background-color: ${myTheme.colors.cardFone};
	&:hover {
		cursor: pointer;
	}
`
const StyledDivTime = styled.div`
	justify-content: space-between;
	display: flex;
	div {
		color: ${myTheme.colors.primary};
		font-family: Inter;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 160%;

		div:last-child {
			color: ${myTheme.colors.white};
			font-family: Inter;
			font-size: 16px;
			font-style: normal;
			font-weight: 700;
			line-height: 120%;
		}
	}
`
const StyledBid = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	display: flex;
	width: 182px;
	height: 27px;
	padding: 12px 40px;
	align-self: stretch;
	border-radius: 8px;
	border: 1px solid ${myTheme.colors.primary};
	&:hover {
		background-color: ${myTheme.colors.primary};
		transition: all 0.2s ease;
		a {
			color: #000;
		}
	}
	a {
		color: ${myTheme.colors.primary};
		font-family: Inter;
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: 120%;
	}
`
