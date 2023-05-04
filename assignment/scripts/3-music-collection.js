console.log('***** Music Collection *****')

let collection = []; // Create collection array, starts empty

function addToCollection(title, artist, yearPublished){ // Have to have room for the three seperate things
    let musicInfo = { title, artist, yearPublished } // I forgot if this is proper formatting but it seemed like the most normal to do
    collection.push(musicInfo); // pushing each entry into the collection array
    return musicInfo;
}


addToCollection("Give yourself a try","a brief inquiry into online relationships","2018");
addToCollection("Blessings ft. (Ty Dolla$)","Coloring book","2016");
addToCollection("Derezzed","Daft Punk , Avicii ","2011");
addToCollection("Desperado","The Eagles","1973");
addToCollection("Everybody wants to rule the world","Tears for fears","1985");
addToCollection("Hollywood baby","100 Gecs","2023");


console.log(collection); // in the console log there is thing called prototype and Im not sure what any of it is trying to tell me

function showCollection(musicInfoArray){ // 
  for (let i=0; i < musicInfoArray.length; i++){ // making sure I use let for these for loops from now on
    console.log( musicInfoArray[i].title,'By', musicInfoArray[i].artist,'published in', musicInfoArray[i].yearPublished);

  } 
}
showCollection(collection);


/* - Create a variable `collection` that starts as an empty array.

- Add a function named `addToCollection`. This function should:
  - Take in the album's `title`, `artist`, `yearPublished` as input parameters
  - Create a new object having the above properties
  - Add the new object to the end of the `collection` array
  - Return the newly created object

  

- Test the `addToCollection` function:
  - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
  - Console.log each album as added using the returned value.
  - After all are added, console.log the `collection` array.

- Add a function named `showCollection`. This function should:
  - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
  - Console.log the number of items in the array.
  - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

  function show collection(){

    console.log(title + 'by' + artist + 'published in' + );
  }

- Test the `showCollection` function.

- Add a function named `findByArtist`. This function should:
  - Take in `artist` (a string) parameter
  - Create an array to hold any results, empty to start
  - Loop through the `collection` and add any objects with a matching artist to the array.
  - Return the array with the matching results. If no results are found, return an empty array.

function findByArtist(){

    let artistArray = [];
    // use a while loop like while artist still has songs to list keep listing the songs
    console.log(artistArray[]);
    
}

- Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

> When testing your functions, write all tests in the JavaScript file! */
