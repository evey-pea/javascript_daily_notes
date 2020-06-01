function makeGetRequest(theUrl, callback) {
    const request = new XMLHttpRequest();
    request.open("GET", theUrl, true);
    request.onload = (res) => callback(res.currentTarget.responseText);
    request.send();
};

// 'Core' Item #3
makeGetRequest('https://pokeapi.co/api/v2/pokemon/ditto', (data) => { console.log(data) });

// 'Core' Item #4
makeGetRequest('https://pokeapi.co/api/v2/pokemon/ditto', (data) => { console.log(JSON.parse(data)) });
