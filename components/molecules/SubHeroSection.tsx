import React from 'react';
import { SubHero, SubheroText } from '../../lib/styles/styles';

const UnderConstruction = () => {
	return (
		<>
			<SubheroText>Under</SubheroText>
			<SubheroText>Construct</SubheroText>
			<SubheroText>ion</SubheroText>
		</>
	);
};
export const SubHeroSection = ({ backgroundDisabled = false, children, ...rest }) => {
	return (
		<SubHero backgroundDisabled={backgroundDisabled} {...rest}>
			{children}
		</SubHero>
	);
};
