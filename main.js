//Example fetch using pokemonapi.co


document.querySelector('button').addEventListener('click', getFacts)
 
function getFacts(){


  fetch("https://cat-fact.herokuapp.com/facts")
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data[0].text
        document.querySelector('h3').innerText = data[1].text
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      })
    }

