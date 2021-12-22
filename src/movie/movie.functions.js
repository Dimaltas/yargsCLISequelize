const Movie = require("./movie.table");

exports.addMovie = async (movieObj) => {
    try{
        await Movie.sync();
        await Movie.create(movieObj);
        console.log(`Successfully added ${movieObj.title} to the database`);
    } catch(error) {
        console.log(error);
    }
}