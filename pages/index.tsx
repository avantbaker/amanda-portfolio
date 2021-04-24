import Head from 'next/head';
import React from 'react';
import { FullPageHero } from '../lib/styles/styles';
import { TitleHeroSection } from '../components/molecules/TitleHeroSection';
import { Header } from '../components/molecules/Header';
import styled from 'styled-components';

import { SubHeroSection } from '../components/molecules/SubHeroSection';

const ScollableSubHero = styled(SubHeroSection)`
	display: grid;
	grid-gap: 10px;
	grid-template-columns: 10px repeat(6, calc(50% - 40px)) 10px;
	grid-template-rows: minmax(150px, 1fr);
	overflow-x: scroll;

	&::before,
	&::after {
		content: ‘’;
	}
`;
export default function Home() {
	return (
		<div className="page-home">
			<Head>
				<title>Amanda Robinson - Designer Extraordinaire</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
			</Head>
			<FullPageHero>
				<Header />
				<TitleHeroSection />
				<ScollableSubHero backgroundDisabled>
					<div className="item">Item</div>
					<div className="item">Item</div>
					<div className="item">Item</div>
					<div className="item">Item</div>
					<div className="item">Item</div>
					<div className="item">Item</div>
				</ScollableSubHero>
			</FullPageHero>
		</div>
	);
}
