import styled from 'styled-components'
import { ProjectCard } from '../projectCard/ProjectCard'
import img1 from '../../../assets/images/SOneCard.png'
import img2 from '../../../assets/images/STwoCard.png'
import img3 from '../../../assets/images/SThreeCard.png'

export const ProjectContainer = () => {
	const data = [
		{ image: img1, title: 'Cyberpunk Cocomo', price: 490, time: '03:24:56' },
		{ image: img2, title: 'Charge, Qi tiao yu', price: 490, time: '03:24:56' },
		{ image: img3, title: 'Surgeon, Josh Rife', price: 490, time: '03:24:56' },
	]

	return (
		<ProjectsContainerBox>
			{data.map(project => (
				<ProjectCard {...project} />
			))}
		</ProjectsContainerBox>
	)
}

const ProjectsContainerBox = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
	gap: 30px;
	background-color: transparent;
	&:hover {
		cursor: pointer;
	}
`
