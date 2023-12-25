import React from 'react'
import { Main } from './layout/main/Main'
import { SectionProject } from './layout/sectionProject/SectionProject'
import { SectionTechnology } from './layout/sectionTechnology/SectionTechnology'
import { SectionPopularArtists } from './layout/sectionPopularArtists/SectionPopularArtists'
import { SectionSubscribe } from './layout/sectionSubscribe/SectionSubscribe'
import { Footer } from './layout/footer/Footer'
import { Header } from './layout/header/Header'

function App() {
	return (
		<div className='App'>
			<Header />
			<Main />
			<SectionProject />
			<SectionTechnology />
			<SectionPopularArtists />
			<SectionSubscribe />
			<Footer />
		</div>
	)
}

export default App
