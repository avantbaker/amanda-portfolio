import React from 'react';
import { SubHero, SubheroText } from '../../lib/styles/styles';

export const UnderConstruction = () => {
	return (
		<>
			<SubheroText>Under</SubheroText>
			<SubheroText>Construct</SubheroText>
			<SubheroText>ion</SubheroText>
		</>
	);
};
export const SubHeroSection = ({
	backgroundDisabled = false,
	disableBorders = false,
	children,
	...rest
}) => {
	return (
		<SubHero
			backgroundDisabled={backgroundDisabled}
			disableBorders={disableBorders}
			{...rest}
		>
			{children}
		</SubHero>
	);
};
