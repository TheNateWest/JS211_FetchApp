// require('dotenv').config()
// // console.log(process.env)

// const api_key = process.env.SECRET_KEY


// console.log(api_key);

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': api_key,
// 		'X-RapidAPI-Host': 'piano-chords.p.rapidapi.com'
// 	}
// };

// // const baseAPI = ''

// fetch('https://piano-chords.p.rapidapi.com/chords', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


    // bb39485c06mshc6af1ca68daba5ap1aefd3jsn0e426d1875e4
let chordData = [];
const root = document.getElementById("root")


	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'bb39485c06mshc6af1ca68daba5ap1aefd3jsn0e426d1875e4',
			'X-RapidAPI-Host': 'piano-chords.p.rapidapi.com'
		}
	};
	
	fetch('https://piano-chords.p.rapidapi.com/chords', options)
		.then(response => response.json())
		.then(response => chordData=response)
		.catch(err => console.error(err))
		.then(()=> {
			const chords = Object.keys(chordData).map((key) => {
				console.log(key);
				return {
				  name: key,
				  variations: Object.values(chordData[key])
				};
			  })
			  chords.map((chord) => {
				console.log(chord)
				const div = document.createElement("div")
				div.classList.add("main-container")
				div.innerHTML = `
					Key: ${chord.name}
					<div class = "chord-container">
						${chord.variations.map((variation) => {
							return `<div>
								<h3>Chord Name: ${variation.name}</h3>
								${variation.notes.map((note) => {
									return `<div>
									${note}
									</div>`
								}).join(" ")}
							</div>`
						}).join(' ')}
					</div>
				`
				root.appendChild(div)
			  })
		})