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

export const TitleHeroSection = () => {
	return (
		<>
			<TitleHero>
				<TitleText textTransform="uppercase">Brand & Digital</TitleText>
			</TitleHero>
			<ArrowContainer>
				<RightArrow />
			</ArrowContainer>
			<Callout>
				<Text textTransform="uppercase">Atlanta-Based</Text>
				<Text textTransform="uppercase">Creative Consultant</Text>
			</Callout>
		</>
	);
};
