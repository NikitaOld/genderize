const form = document.getElementById('form');
const input = document.getElementById('input');

let firstName = '';
const serverUrl = 'https://api.genderize.io';
let url = '';

function setName(name){
    firstName = name;
}

function setURL(name){
    setName(name);
    url = `${serverUrl}?name=${firstName}`
}

function main(){
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        setURL(input.value);

        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data.gender))
    })
}

main()