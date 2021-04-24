import GlobalStyle from '../theme/index';
import styled from 'styled-components';
import Typography from '../components/atoms/Text';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { SubheadBold } = Typography;

const NavigationWidget = styled('div')`
	position: fixed;
	bottom: 0;
	background-color: black;
	color: white;
	padding: 12px 24px;
	display: flex;
`;

const ArrowComponent = ({ ...rest }) => <FontAwesomeIcon {...rest} icon={faCaretDown} />;

const DownArrow = styled(ArrowComponent)`
	height: 24px;
	margin-left: 24px;
`;

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
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
