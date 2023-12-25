import styled from 'styled-components'
import img from '../../../assets/images/imgPopular2.png'
import img2 from '../../../assets/images/Artist2.png'
import { ArtistInfo } from '../artistInfo/ArtistInfo'
import { myTheme } from '../../../styles/ThemeStyled'

export const ArtistCardTwo = () => {
	const data = [{ owner: 'owner', firstName: 'Sebastian waltan', image: img2 }]
	return (
		<StylesArtistCardTwo style={{ backgroundImage: `url(${img})` }}>
			{data.map(project => (
				<ArtistInfo {...project} />
			))}
		</StylesArtistCardTwo>
	)
}

const StylesArtistCardTwo = styled.div`
	width: 520px;
	height: 311px;
	flex-shrink: 0;
	border-radius: 16px;
	object-fit: cover;
	display: flex;
	align-items: end;
	&:hover {
		box-shadow: 0px 0px 5px 10px ${myTheme.colors.fone};
	}
`
