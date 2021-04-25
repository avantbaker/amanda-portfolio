import styled from 'styled-components';
import media from '../../lib/styles/media';

export const ProjectSubHero = styled('div')`
	grid-area: brnd;
	display: flex;
	border-bottom: none !important;
	border-left: none !important;
	border-right: none !important;
`;
export const SubHeroProjectContent = styled('div')`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	margin-top: 24px;

	.project-subhero__client {
		text-align: right;
	}

	.project-subhero__text {
		margin-bottom: 48px;
	}

	${media.large`
		flex-direction: row;
		padding: 24px;
		margin-top: 48px;

		.project-subhero__info-wrapper {
			flex: 3;
    	display: flex;
		}

		.project-subhero__tagline {
			padding-right: 48px;
		}

		.project-subhero__text {
			flex: 0 0 50%;
    	padding-right: 20px;
			margin-top: 0;
			line-height: 1.8;
		}

		.project-subhero__client {
			flex: 1;
			* {
				line-height: 1.8
			}
		}
	`}
`;
