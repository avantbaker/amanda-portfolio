import React from 'react';
import styled from 'styled-components';
import media from './media';
import Typography from '../../components/atoms/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const { HeadingBold } = Typography;

const RightArrowComponent = ({ ...rest }) => (
	<FontAwesomeIcon {...rest} icon={faArrowRight} />
);
export const RightArrow = styled(RightArrowComponent)`
	width: 60px;
	${media.large`
	 transform: rotate(90deg);
	 width: 100px;
	`}
`;
export const TitleText = styled(HeadingBold)`
	display: inline-block;
	line-height: 1;
	padding: 12px;
	width: 100%;
	color: white;
	margin-right: 8%;
	background-image: linear-gradient(to bottom, transparent 46%, black 0);
	${media.medium`
			padding: 24px;
		`}
`;
export const FullPageHero = styled('div')`
	height: 100%;
	min-height: 100vh;
	display: grid;
	padding: 20px;
	position: relative;
	grid-template-rows: auto 3fr 2fr 6fr;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-areas:
		'navl navl navl navr'
		'hero hero hero hero'
		'arro arro call call'
		'brnd brnd brnd brnd';

	// Children Borders
	& > div {
		border: 6px solid black;
		&:nth-child(1),
		&:nth-child(4) {
			border-right: none;
		}
		&:nth-child(4) {
			border-left: none;
		}
		&:not(:last-child) {
			border-bottom: none;
		}
	}

	${media.large`
		grid-template-areas:
		'navl navl navl navr'
		'hero hero hero arro'
		'hero hero hero call'
		'brnd brnd brnd brnd';
	`}
`;
export const NavLeft = styled('div')`
	grid-area: navl;
	display: flex;
	flex-direction: column;
	padding: 20px;
	justify-content: center;

	${media.large`
		flex-direction: row;
		border-right: 6px solid black !important;
		justify-content: space-between;
		align-items: center;

		.roles {
			display: flex;
			align-items: center;
			margin-right: 14px;
			& > *:not(:last-child) {
				margin-right: 44px;
			}
		}
	`}
`;
export const NavRight = styled('div')`
	grid-area: navr;
	display: flex;
	justify-content: center;
	padding: 14px;
	.navigation {
		display: none;
	}
	${media.large`
		border-left: none !important;
		.navigation {
			display: flex;
			width: 100%;
			justify-content: space-around;
			align-items: center;
		}
		.hamburger {
			display: none;
		}
	`}
`;
export const TitleHero = styled('div')`
	grid-area: hero;
	display: flex;
	align-items: center;
	padding: 14px;
	background-image: url(/images/adrien-converse-xzH7K6nVVgI-unsplash.jpeg);
	background-size: cover;
`;
export const ArrowContainer = styled('div')`
	grid-area: arro;
	display: flex;
	align-items: center;
	padding: 14px;

	${media.large`
		justify-content: flex-end;
	`}
`;
export const Callout = styled('div')`
	grid-area: call;
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	padding: 14px;
	flex-direction: column;
	text-align: right;
	${media.large`
		border-left: none !important;
	`}
`;
export const SubHero = styled('div')`
	grid-area: brnd;
	display: flex;
	justify-content: center;
	padding: 14px;
	flex-direction: column;
	${({ backgroundDisabled }) =>
		!backgroundDisabled &&
		`
		background-image: url(/images/staticbackground.png);
		background-size: cover;
	`}
`;
export const SubheroText = styled(HeadingBold)`
	text-transform: uppercase;
	padding-left: 12px;
	${media.medium`
			padding-left: 24px;
		`}
	${media.large`
		letter-spacing: 14px;
		line-height: 65px;
		font-size: 110px;
	`}
`;
