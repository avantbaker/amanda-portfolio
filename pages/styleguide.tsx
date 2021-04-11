import Typography from '../components/atoms/Text';

const { HeadingBold, Heading, SubheadBold, Subhead, Body, BodyBold } = Typography;

function StyleGuide() {
	return (
		<div>
			<HeadingBold>Hello there</HeadingBold>
			<Heading>Hello there</Heading>
			<SubheadBold>Hello there</SubheadBold>
			<Subhead>Hello there</Subhead>
			<Body>Hello there</Body>
			<BodyBold>Hello there</BodyBold>
		</div>
	);
}

export default StyleGuide;
