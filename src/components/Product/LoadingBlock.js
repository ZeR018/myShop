import ContentLoader from 'react-content-loader';

const LoadingBlock = () => {
	return (
		<ContentLoader
			speed={2}
			width={252}
			height={400}
			viewBox='0 0 252 400'
			backgroundColor='#f3f3f3'
			foregroundColor='#ecebeb'
		>
			<rect x='0' y='368' rx='3' ry='3' width='150' height='9' />
			<rect x='0' y='0' rx='0' ry='0' width='252' height='336' />
			<rect x='0' y='346' rx='8' ry='8' width='94' height='16' />
		</ContentLoader>
	);
};

export default LoadingBlock;
