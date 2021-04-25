import React from 'react';
import { FullPageHero } from '../../lib/styles/styles';
import { TitleHeroSection } from '../molecules/TitleHeroSection';
import { Header } from '../molecules/Header';

export const Hero = ({ title, children }) => {
	return (
		<FullPageHero>
			<Header />
			<TitleHeroSection title={title} />
			{children}
		</FullPageHero>
	);
};
