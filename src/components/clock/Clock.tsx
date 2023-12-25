import styled from 'styled-components'
import iconSprite from '../../assets/images/icon-sprite.svg'
import { myTheme } from '../../styles/ThemeStyled'

type ClockPropsType = {
	iconId?: string
	width?: string
	height?: string
	viewBox?: string
}

export const Clock = (props: ClockPropsType) => {
	return (
		<div>
			<svg
				width={props.width || '24'}
				height={props.height || '25'}
				viewBox={props.viewBox || '0 0 24 25'}
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g id='vuesax/linear/clock'>
					<g id='clock'>
						<path
							id='Vector'
							d='M22 12.5C22 18.02 17.52 22.5 12 22.5C6.48 22.5 2 18.02 2 12.5C2 6.98 6.48 2.5 12 2.5C17.52 2.5 22 6.98 22 12.5Z'
							stroke='white'
							stroke-width='1.5'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							id='Vector_2'
							d='M15.71 15.68L12.61 13.83C12.07 13.51 11.63 12.74 11.63 12.11V8.01001'
							stroke='white'
							stroke-width='1.5'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</g>
				</g>
				<use xlinkHref={`${iconSprite}#${props.iconId}`} />
			</svg>
		</div>
	)
}
