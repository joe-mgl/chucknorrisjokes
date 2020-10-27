import React from 'react';
const JokeCard = ({ randomJoke }) => {
	return(
		<div className='mw8 tc center br3 pa3 pa4-ns mv3 ba b--black-40'> 
			<img className='h4 w4' alt='chuck' 
				 src='https://assets.chucknorris.host/img/avatar/chuck-norris.png' 
			/>
			<div>
				<p className='lh-copy measure center white f1 black-70'>{randomJoke}</p>
			</div>
		</div>
	)
}

export default JokeCard;