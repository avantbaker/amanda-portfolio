import GlobalStyle from '../theme/index';
import Typography from '../components/atoms/Text';
import {
	ScollableSubHero,
	ScrollableItem,
} from '../components/molecules/ScollableSubHero';
import {
	ProjectSubHero,
	SubHeroProjectContent,
} from '../components/molecules/ProjectSubHero';
import {
	SubHeroSection,
	UnderConstruction,
} from '../components/molecules/SubHeroSection';
import { Hero } from '../components/organisms/Hero';
import { NavigationWidget, DownArrow } from '../lib/styles/styles';
const { SubheadBold, Text } = Typography;

const WorkSlider = () => {
	return (
		<ScollableSubHero backgroundDisabled>
			<ScrollableItem
				imgSrc="/images/adrien-converse-xzH7K6nVVgI-unsplash.jpeg"
				title="Kids in the Game"
				subtitle="For Visual Soldiers"
			/>
			<ScrollableItem
				imgSrc="/images/adrien-converse-xzH7K6nVVgI-unsplash.jpeg"
				title="FLS Transport"
				subtitle="For BraketHaus"
			/>
			<ScrollableItem
				imgSrc="/images/adrien-converse-xzH7K6nVVgI-unsplash.jpeg"
				title="Kids in the Game"
				subtitle="For Visual Soldiers"
			/>
			<ScrollableItem
				imgSrc="/images/adrien-converse-xzH7K6nVVgI-unsplash.jpeg"
				title="Kids in the Game"
				subtitle="For Visual Soldiers"
			/>
			<ScrollableItem
				imgSrc="/images/adrien-converse-xzH7K6nVVgI-unsplash.jpeg"
				title="Kids in the Game"
				subtitle="For Visual Soldiers"
			/>
			<ScrollableItem
				imgSrc="/images/adrien-converse-xzH7K6nVVgI-unsplash.jpeg"
				title="Kids in the Game"
				subtitle="For Visual Soldiers"
			/>
		</ScollableSubHero>
	);
};

const ProjectHeroContent = () => {
	return (
		<ProjectSubHero>
			<SubHeroProjectContent>
				<div className="project-subhero__info-wrapper">
					<div className="project-subhero__tagline">
						<SubheadBold mb={24}>Play today to change tomorrow.</SubheadBold>
					</div>
					<Text className="project-subhero__text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eius neque
						exercitationem iure mollitia in deleniti unde consequatur nobis velit? Qui
						tempore, dolore voluptatem illo harum molestiae similique error non.
					</Text>
				</div>
				<div className="project-subhero__client">
					<Text>Project for</Text>
					<Text>Visual Soldiers</Text>
				</div>
			</SubHeroProjectContent>
		</ProjectSubHero>
	);
};

function MyApp({ Component, pageProps }) {
	const page = Component.name.toLowerCase();
	let subHeroComponent = <div />;
	let title = '';
	switch (page) {
		case 'home':
			title = 'Brand & Digital';
			subHeroComponent = (
				<SubHeroSection>
					<UnderConstruction />
				</SubHeroSection>
			);
			break;
		case 'work':
			title = 'Work';
			subHeroComponent = <WorkSlider />;
			break;
		case 'workdetails':
			title = 'Project Name';
			subHeroComponent = <ProjectHeroContent />;
			break;
		default:
			break;
	}
	return (
		<>
			<GlobalStyle />
			<Hero title={title}>{subHeroComponent}</Hero>
			<Component {...pageProps} />
			<NavigationWidget>
				<SubheadBold style={{ display: 'flex' }}>
					Work <DownArrow width="12px" />
				</SubheadBold>
			</NavigationWidget>
		</>
	);
}

export default MyApp;
