import styled from 'styled-components'
import img from '../../../assets/images/imgPopular3.png'
import img3 from '../../../assets/images/Artist3.png'
import { ArtistInfo } from '../artistInfo/ArtistInfo'
import { myTheme } from '../../../styles/ThemeStyled'

export const ArtistCardThree = () => {
	const data = [{ owner: 'owner', firstName: 'Sebastian waltan', image: img3 }]
	return (
		<StylesArtistCardThree style={{ backgroundImage: `url(${img})` }}>
			{data.map(project => (
				<ArtistInfo {...project} />
			))}
		</StylesArtistCardThree>
	)
}

const StylesArtistCardThree = styled.div`
	width: 410px;
	height: 652px;
	flex-shrink: 0;
	border-radius: 16px;
	display: flex;
	align-items: end;
	object-fit: cover;
	&:hover {
		box-shadow: 0px 0px 5px 10px ${myTheme.colors.fone};
	}
`
