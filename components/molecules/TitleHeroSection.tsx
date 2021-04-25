import React from 'react';
import Typography from '../atoms/Text';
const { Text } = Typography;

import {
	TitleHero,
	TitleText,
	ArrowContainer,
	RightArrow,
	Callout,
} from '../../lib/styles/styles';

export const TitleHeroSection = ({ title = 'Brand & Digital' }) => {
	return (
		<>
			<TitleHero>
				<TitleText textTransform="uppercase">{title}</TitleText>
			</TitleHero>
			<ArrowContainer>
				<RightArrow width="60px" />
			</ArrowContainer>
			<Callout>
				<Text textTransform="uppercase">Atlanta-Based</Text>
				<Text textTransform="uppercase">Creative Consultant</Text>
			</Callout>
		</>
	);
};
