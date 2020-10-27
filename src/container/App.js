import React, { Component } from 'react';
import JokeCard from '../component/JokeCard';
import 'tachyons';

class App extends Component {
	constructor() {
		super()
		this.state = {randomJoke: ''}
	}

	componentDidMount() {
		fetch('https://api.chucknorris.io/jokes/random')
		.then(response => response.json())
		.then(random => this.setState({ randomJoke: random.value}));
	}
	
	render() {
		return (
			<div>
				<h1 className='f1 f-headline-ns tc db mb3 mb4-ns'>Chuck Got Jokes</h1>
				<div className='tc'>
					<button onClick={() => window.location.reload(false)} 
									className='f6 dim br3 ba bw1 ph3 pv2 mb2 dib mid-gray'>
									Random Joke
					</button>
				</div>
				<JokeCard randomJoke={this.state.randomJoke} />
			</div>
		);
	}
}

export default App;