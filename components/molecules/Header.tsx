import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLeft, NavRight } from '../../lib/styles/styles';
import Typography from '../atoms/Text';

const { SubheadBold, TextBold, Text } = Typography;

export const Header = () => {
	return (
		<>
			<NavLeft>
				<div className="title">
					<SubheadBold textTransform="uppercase">A. Robinson</SubheadBold>
				</div>
				<div className="roles">
					<Text textTransform="uppercase">Brand Strategist</Text>
					<Text textTransform="uppercase">Visual Designer</Text>
				</div>
			</NavLeft>
			<NavRight>
				<div className="hamburger">
					<FontAwesomeIcon height="30px" icon={faBars} />
				</div>
				<div className="navigation">
					<div className="navigation-item">
						<TextBold textTransform="uppercase">About</TextBold>
					</div>
					<div className="navigation-item">
						<TextBold textTransform="uppercase">Work</TextBold>
					</div>
					<div className="navigation-item">
						<TextBold textTransform="uppercase">Void</TextBold>
					</div>
					<div className="navigation-item">
						<TextBold textTransform="uppercase">Contact</TextBold>
					</div>
				</div>
			</NavRight>
		</>
	);
};
