const  express = require ('express')
const server = express();
const popularFilms = require('./src/data/MostPopularMovies.json')
const popularShows = require ('./src/data/MostPopularTVs.json')
const popularTime = require('./src/data/BoxOfficeAllTime.json')

server.get('/popularfilms',  (req, res) => {
    return res.json(popularFilms)
});
server.get('/populartvshows',  (req, res) => {
    return res.json(popularShows)
});

server.get('/popularallthetime',  (req, res) => {
    return res.json(popularTime)
});

server.listen(3000, () => {
    console.log('Server is running on port 3000')
});