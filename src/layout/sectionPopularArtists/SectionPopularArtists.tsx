import styled from 'styled-components'
import { PopularBox } from './popularBox/PopularBox'
import { PopularBoxPadding } from './popularBoxPadding/PopularBoxPadding'
import { ArtistPopularGallery } from './artistPopularGallery/ArtistPopularGallery'

export const SectionPopularArtists = () => {
	return (
		<StylesSectionPopularArtists>
			<PopularBox />
			<PopularBoxPadding />
			<ArtistPopularGallery />
		</StylesSectionPopularArtists>
	)
}

const StylesSectionPopularArtists = styled.div`
	padding: 92px 111px 92px 111px;
`
