import styled from 'styled-components'
import img from '../../../assets/images/imgPopular4.png'
import img4 from '../../../assets/images/Artist4.png'
import { ArtistInfo } from '../artistInfo/ArtistInfo'
import { myTheme } from '../../../styles/ThemeStyled'

export const ArtistCardFour = () => {
	const data = [{ owner: 'owner', firstName: 'Sebastian waltan', image: img4 }]
	return (
		<StylesArtistCardFour style={{ backgroundImage: `url(${img})` }}>
			{data.map(project => (
				<ArtistInfo {...project} />
			))}
		</StylesArtistCardFour>
	)
}

const StylesArtistCardFour = styled.div`
	background-repeat: no-repeat;
	background-position: center center;
	object-fit: cover;
	width: 410px;
	height: 311px;
	flex-shrink: 0;
	border-radius: 16px;
	display: flex;
	align-items: end;
	&:hover {
		box-shadow: 0px 0px 5px 10px ${myTheme.colors.fone};
	}
`
