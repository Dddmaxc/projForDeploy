import styled from 'styled-components'
import { ArtistCard } from '../artistCard/ArtistCard'
import { ArtistCardTwo } from '../artistCardTwo/ArtistCardTwo'
import { ArtistCardThree } from '../artistCardThree/ArtistCardThree'
import { ArtistCardFour } from '../artistCardFour/ArtistCardFour'
import { ArtistCardFive } from '../artistCardFive/ArtistCardFive'

export const ArtistPopularGallery = () => {
	return (
		<StylesArtistPopularGallery>
			<StyledArtistContainerCardsMain>
				<StyledArtistContainerCards>
					<ArtistCard />
					<ArtistCardTwo />
				</StyledArtistContainerCards>
				<StyledArtistContainerCardsTwo>
					<ArtistCardFour />
					<ArtistCardFive />
				</StyledArtistContainerCardsTwo>
			</StyledArtistContainerCardsMain>
			<ArtistCardThree />
		</StylesArtistPopularGallery>
	)
}

const StylesArtistPopularGallery = styled.div`
	display: flex;
	gap: 30px;
	max-width: 1290px;
	max-height: 652px;
	&:hover {
		cursor: pointer;
	}
`

const StyledArtistContainerCardsMain = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
`
const StyledArtistContainerCards = styled.div`
	display: flex;
	gap: 30px;
`
const StyledArtistContainerCardsTwo = styled.div`
	display: flex;
	gap: 30px;
`
