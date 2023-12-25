type SvgPropsType = {
	iconId: string
}

export const AssetsSvg = (props: SvgPropsType) => {
	return (
		<div>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 25'
				fill='none'
			>
				<path
					d='M6.90001 9.6L11.7 7.5C11.9 7.4 12.1 7.4 12.4 7.5L17.2 9.6C17.6 9.8 18 9.3 17.7 8.9L12.7 2.8C12.4 2.4 11.8 2.4 11.5 2.8L6.50001 8.9C6.10001 9.3 6.50001 9.8 6.90001 9.6Z'
					stroke='white'
					stroke-width='1.5'
					stroke-miterlimit='10'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M6.90001 15.4L11.7 17.5C11.9 17.6 12.1 17.6 12.4 17.5L17.2 15.4C17.6 15.2 18 15.7 17.7 16.1L12.7 22.2C12.4 22.6 11.8 22.6 11.5 22.2L6.50001 16.1C6.10001 15.7 6.50001 15.2 6.90001 15.4Z'
					stroke='white'
					stroke-width='1.5'
					stroke-miterlimit='10'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M12 9.8999L6.8 12.4999L12 15.0999L17.2 12.4999L12 9.8999Z'
					stroke='white'
					stroke-width='1.5'
					stroke-miterlimit='10'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<use xlinkHref={`{iconSprite}#${props.iconId}`} />
			</svg>
		</div>
	)
}
