import styled from 'styled-components';

const fontFamilies: { bold: string; regular: string } = {
	bold: 'FiraBold',
	regular: 'FiraRegular',
};

import {
	borderRadius,
	color,
	fontFamily,
	fontSize,
	fontStyle,
	fontWeight,
	letterSpacing,
	lineHeight,
	size,
	space,
	textAlign,
	textStyle,
} from 'styled-system';

const CustomStyledSystemComponent = styled.div`
	${space}
	${fontSize}
  ${fontStyle}
  ${size}
  ${color}
  ${textStyle}
  ${letterSpacing}
  ${fontFamily}
  ${fontWeight}
  ${borderRadius}
  ${lineHeight}
  ${textAlign}
`;

export const typographyStyles = {
	HeadingBold: {
		fontSize: [50, 51, 52],
		lineHeight: ['80px', '81px', '82px'],
		margin: 0,
		marginBottom: '10px',
		fontFamily: fontFamilies.bold,
		as: 'h1',
	},
	HeadingRegular: {
		fontSize: [50, 51, 52],
		lineHeight: ['80px', '81px', '82px'],
		fontFamily: fontFamilies.regular,
		margin: 0,
		marginBottom: '10px',
		as: 'h1',
	},
	SubheadBold: {
		fontSize: [37, 39, 43],
		margin: 0,
		marginBottom: '10px',
		lineHeight: ['60px', '61px', '62px'],
		fontFamily: fontFamilies.bold,
		as: 'h2',
	},
	SubheadRegular: {
		margin: 0,
		marginBottom: '10px',
		fontSize: [37, 39, 43],
		lineHeight: ['60px', '61px', '62px'],
		fontFamily: fontFamilies.regular,
		as: 'h2',
	},
	BodyBold: {
		margin: 0,
		marginBottom: '10px',
		fontSize: [14, 15, 16],
		lineHeight: ['20px', '24px', '28px'],
		fontFamily: fontFamilies.bold,
		as: 'p',
	},
	BodyRegular: {
		margin: 0,
		marginBottom: '10px',
		fontSize: [14, 15, 16],
		lineHeight: ['20px', '24px', '28px'],
		fontFamily: fontFamilies.regular,
		as: 'p',
	},
};

const createComponent = (textStyle, displayName) => {
	const component = (props) => (
		<CustomStyledSystemComponent {...textStyle} {...props}>
			{props.children}
		</CustomStyledSystemComponent>
	);
	component.displayName = displayName;
	return component;
};

const Typography = {
	HeadingBold: createComponent(typographyStyles.HeadingBold, 'HeadingBold'),
	Heading: createComponent(typographyStyles.HeadingRegular, 'Heading'),
	SubheadBold: createComponent(typographyStyles.SubheadBold, 'SubheadBold'),
	Subhead: createComponent(typographyStyles.SubheadRegular, 'Subhead'),
	BodyBold: createComponent(typographyStyles.BodyBold, 'BodyBold'),
	Body: createComponent(typographyStyles.BodyRegular, 'Body'),
};

export default Typography;

// const Text = styled('div')(
// 	variant({
// 		scale: 'text',
// 		variants: {
// 			headingBold: {
// 				fontFamily: 'FiraBold',
// 				fontSize: [4],
// 			},
// 			headingRegular: {
// 				fontFamily: 'FiraRegular',
// 			},
// 			headingSmallBold: {
// 				fontFamily: 'FiraBold',
// 			},
// 			headingSmallRegular: {
// 				fontFamily: 'FiraRegular',
// 			},
// 			bodyBold: {
// 				fontFamily: 'FiraBold',
// 			},
// 			bodyRegular: {
// 				fontFamily: 'FiraRegular',
// 			},
// 		},
// 	})
// );

// const CustomText = ({ as = 'div', variant = 'bodyRegular', children }) => {
// 	return (
// 		<Text as={as} variant={variant}>
// 			{children}
// 		</Text>
// 	);
// };
