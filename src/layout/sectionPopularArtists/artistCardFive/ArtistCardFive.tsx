import styled from 'styled-components'
import img from '../../../assets/images/imgPopular5.png'
import img5 from '../../../assets/images/Artist5.png'
import { ArtistInfo } from '../artistInfo/ArtistInfo'
import { myTheme } from '../../../styles/ThemeStyled'

export const ArtistCardFive = () => {
	const data = [{ owner: 'owner', firstName: 'Sebastian waltan', image: img5 }]
	return (
		<StylesArtistCardFive style={{ backgroundImage: `url(${img})` }}>
			{data.map(project => (
				<ArtistInfo {...project} />
			))}
		</StylesArtistCardFive>
	)
}

const StylesArtistCardFive = styled.div`
	width: 410px;
	height: 311px;
	flex-shrink: 0;
	border-radius: 16px;
	display: flex;
	align-items: end;
	object-fit: cover;
	&:hover {
		box-shadow: 0px 0px 5px 10px ${myTheme.colors.fone};
	}
`
