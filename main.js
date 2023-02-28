require('dotenv').config()
// console.log(process.env)

const api_key = process.env.SECRET_KEY


// console.log(api_key);

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': api_key,
		'X-RapidAPI-Host': 'piano-chords.p.rapidapi.com'
	}
};

// const baseAPI = ''

fetch('https://piano-chords.p.rapidapi.com/chords', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


    // bb39485c06mshc6af1ca68daba5ap1aefd3jsn0e426d1875e4