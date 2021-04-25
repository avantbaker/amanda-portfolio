import GlobalStyle from '../theme/index';
import Typography from '../components/atoms/Text';
import {
	ScollableSubHero,
	ScrollableItem,
} from '../components/molecules/ScollableSubHero';
import { Hero } from '../components/organisms/Hero';
import { NavigationWidget, DownArrow } from '../lib/styles/styles';
const { SubheadBold } = Typography;

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Hero>
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
			</Hero>
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
