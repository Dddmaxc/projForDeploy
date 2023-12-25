import styled from 'styled-components'
import img from '../../../assets/images/ImgPopular1.png'
import img1 from '../../../assets/images/Artist1.png'
import { ArtistInfo } from '../artistInfo/ArtistInfo'
import { myTheme } from '../../../styles/ThemeStyled'

export const ArtistCard = () => {
	const data = [{ owner: 'owner', firstName: 'Sebastian waltan', image: img1 }]
	return (
		<StylesArtistCard style={{ backgroundImage: `url(${img})` }}>
			{data.map(project => (
				<ArtistInfo {...project} />
			))}
		</StylesArtistCard>
	)
}

const StylesArtistCard = styled.div`
	width: 300px;
	height: 311px;
	flex-shrink: 0;
	width: 300px;
	border-radius: 16px;
	display: flex;
	align-items: end;
	object-fit: cover;
	&:hover {
		box-shadow: 0px 0px 5px 10px ${myTheme.colors.fone};
	}
`
