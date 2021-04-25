import React from 'react';
import { FullPageHero } from '../../lib/styles/styles';
import { TitleHeroSection } from '../molecules/TitleHeroSection';
import { Header } from '../molecules/Header';

export const Hero = ({ children }) => {
	return (
		<FullPageHero>
			<Header />
			<TitleHeroSection />
			{children}
		</FullPageHero>
	);
};
