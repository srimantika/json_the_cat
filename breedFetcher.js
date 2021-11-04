const request = require('request');


const breedName = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, resp, body) => {
  //console.log(body);
  // console.log(typeof body);

    if (error) {
      callback(`Failed to fetch request details: ${error}`,null);
    }

    const data = JSON.parse(body);
 
  //console.log(data);

    const breed = data[0];
    if (breed) {
      callback(null,breed.description);
    } else {
      callback(`Failed to find the breed ${breedName}`,null);
    }
  });

};

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});