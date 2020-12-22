import AnimatedLogo from './components/AnimatedLogo';
import Blob from './components/Blob';

import AnimatedCollaboration from './components/AnimatedCollaboration';

import AnimatedWebsite from './components/AnimatedWebsite';

function App() {
	return (
		<div className="App" style={{ textAlign: 'center' }}>
			<h4>Website under development...</h4>
			<div>Please Visit Later</div>
			<AnimatedLogo />
			<Blob>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur omnis
				provident exercitationem illo ratione, officiis natus ad. Iure dolorem
				quisquam beatae laboriosam at qui earum voluptatibus vel accusamus
				voluptas? Inventore. Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Ut ea necessitatibus totam, tempora vitae aliquid sed ad nam illum
				voluptatem quae, quia dolorem incidunt veniam suscipit temporibus,
				debitis dolore ipsa? Lorem, ipsum dolor sit amet consectetur adipisicing
				elit. Ea minima dignissimos enim, reiciendis voluptatem cumque magnam
				fuga autem quas culpa nam cum! Quidem voluptatum nisi distinctio saepe
				modi recusandae consequatur.
			</Blob>
			<AnimatedWebsite />
			<AnimatedCollaboration />
		</div>
	);
}

export default App;
