const url = 'https://www.breakingbadapi.com/api/characters'

const actors = document.querySelector('#actors');
const actorInfo = document.querySelector('#actorInfo')
const inputField = document.querySelector('#inputField');

const getActors = async () => {
    const data = await fetch(url)

    try{
        if(data.ok) {
            const response = await data.json()
             actorsChoice(response);
        }
    }
    catch(error) {
        console.log('ERROR:', error.message)
    }
}

getActors()

