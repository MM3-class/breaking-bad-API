
const actorsChoice = (response) => {
    
    actors.innerHTML = `
        <select onchange= "printInfo(this.value)">
        <option>Select One character</option>
        ${response.map(character => `<option>${character.name}</option>`)}
        </select>
        `
}
const printInfo = async (name) => {
    if(name !== 'Select One character') {
        const data = await fetch(`${url}?name=${name}`);
        const response = await data.json();
        console.log(response[0])
        actorInfo.innerHTML =
        `<h1>${response[0].name} </h1>
        <h2>Appearance on:<br> ${response[0].appearance} <br>Season</h2>
        <img src = "${response[0].img}">
        `
    }
}






