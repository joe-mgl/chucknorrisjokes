import React from 'react';
import './JokeCard.css'

const JokeCard = ({ randomJoke }) => {
	return(
		<div className='mw8 tc center br3 pa3 pa4-ns mv3 ba b--black-40'> 
			<img className='h3 w3' alt='chuck' 
				 src='https://assets.chucknorris.host/img/avatar/chuck-norris.png' 
			/>
			<div>
				<p className='flex lh-copy measure center white f2 black-60'>{randomJoke}</p>
			</div>
		</div>
	)
}

export default JokeCard;