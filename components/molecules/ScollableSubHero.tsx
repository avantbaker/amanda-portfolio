import React from 'react';
import { RightArrow } from '../../lib/styles/styles';
import styled from 'styled-components';
import media from '../../lib/styles/media';
import Typography from '../atoms/Text';
const { SubheadBold, Text } = Typography;

export const ScollableSubHero = styled('div')`
	grid-area: brnd;
	display: grid;
	grid-gap: 24px;
	grid-template-columns: repeat(6, 80%) 24px;
	grid-template-rows: minmax(150px, 1fr);
	padding: 0 20px;
	overflow-x: scroll;

	${media.medium`
		grid-template-columns: repeat(6, calc(70% - 40px)) 24px;
		grid-gap: 40px;
		
	`}
	${media.large`
		grid-template-columns: repeat(6, calc(40% - 40px)) 1px;
		grid-gap: 40px;
	`}

	&:after {
		content: '';
	}
`;
const ScrollableItemWrapper = styled('div')`
	padding-top: 14%;
	.scrollable-item {
		&__content {
			padding-left: 24px;
			position: relative;
			display: flex;
			flex-direction: column;
			height: 100%;
			justify-content: space-between;
			height: 65%;
		}

		&__title {
			position: relative;
			z-index: 2;
			&--sub {
				position: relative;
				z-index: 2;
			}
		}

		&__img-wrapper {
			position: absolute;
			bottom: -25%;
			right: -5%;
			width: 60%;
			background-color: #ededed;
			z-index: 0;
			opacity: 0.3;
			max-width: 230px;

			${media.large`
			right: 10%;
			max-width: 280px;
			`}

			&::after {
				content: '';
				display: block;
				padding-bottom: 100%;
				z-index: 0;
			}
		}
	}
`;
const HorizontalBar = styled('div')`
	position: relative;
	z-index: 3;
	width: 80%;
	height: 6px;
	background: black;
	${media.medium`
	width: 75%;
	`}
`;
const RightArrowWithSpace = styled(RightArrow)`
	margin-bottom: 14px;
`;
export const ScrollableItem = ({ title = '', subtitle = '', imgSrc = '' }) => {
	return (
		<ScrollableItemWrapper className="scrollable-item">
			<div className="scrollable-item__content">
				<SubheadBold mb={10} className="scrollable-item__title">
					{title}
				</SubheadBold>
				<div>
					<Text mb={24} zIndex={20} className="scrollable-item__title--sub">
						{subtitle}
					</Text>
					<RightArrowWithSpace disableRotate />
					<HorizontalBar />
				</div>
				<div
					className="scrollable-item__img-wrapper"
					style={{ backgroundImage: `url(${imgSrc})`, backgroundSize: 'cover' }}
				></div>
			</div>
		</ScrollableItemWrapper>
	);
};
