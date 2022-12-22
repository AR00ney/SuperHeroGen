//https://superheroapi.com/api/2086813024836041
const SHTOKEN = '2086813024836041'
const URL = `https://www.superheroapi.com/api.php/${SHTOKEN}`
const heroButton = document.getElementById('newHero')
const heroImageDiv = document.getElementById('heroImage')
const searchButton = document.getElementById('search')
const searchInput = document.getElementById('searchInput')

const randomHero = () => {
  const numberOfHeros = 731
  return Math.floor(Math.random() * numberOfHeros) + 1
}

const getRandomHero = (id, name) => {
  fetch(`${URL}/${id}`)
    .then(response => response.json())
    .then(json => {
      console.log(json.powerstats)
      const stats = json
      showHeroInfo(stats)
    })
}
const statToEmoji = {
  intelligence: '🧠',
  strength: '💪',
  speed: '🏍️',
  durability: '🏋️‍♂️',
  power: '📈',
  combat: '⚔️'
}
const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`
  const img = `<img src="${character.image.url}" height=200 width=200>`
  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
  }).join('')
  heroImageDiv.innerHTML = `${name}${img}${stats}`
  console.log(stats)
}


const searchHero = (name) => {
  console.log(searchInput.value)
  fetch(`${URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
      
      const hero = json.results[0]
      showHeroInfo(hero)
    })
}

heroButton.onclick = () => getRandomHero(randomHero())

searchButton.onclick = () => searchHero(searchInput.value)
 

// const img = getSuperHero(json.image)
// document.querySelector('body').innerHTML += `<img src="${img}" height=200 width=200/>`