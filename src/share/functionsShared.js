import vue from 'vue';
import dataShared from './dataShared';

export default vue.observable({
    getCast(array, type) {
        array.forEach(element => {
            const axios = require('axios');
            let url = `https://api.themoviedb.org/3/${type}/${element.id}/credits`
            axios.get(url, {
                params: {
                    api_key: 'd299e29d3e9fc17a1f45092e37356684',
                    language: 'it-IT',
                }
            })
            .then(function (response) {
                let array = [];
                for (let i = 0; i < 5 && i < response.data.cast.length; i++){
                    array.push(response.data.cast[i].name)
                }
                element.cast = [...array];
            })
            .catch(function (error) {
                console.log(error);
            })
        });
    },
    createFilters(array1, array2){
        array1.forEach(element => {
            element.genres = [];
            element.genre_ids.forEach(genre_id => {
                dataShared.genres.forEach(elm => {
                    if (genre_id == elm.id && !(element.genres.includes(elm.name)))element.genres.push(elm.name)
            })
            })
            
        });
        array2.forEach(element => {
            element.genres = [];
            element.genre_ids.forEach(genre_id => {
                dataShared.genres.forEach(elm => {
                    if (genre_id == elm.id && !(element.genres.includes(elm.name)))element.genres.push(elm.name)
            })
            })
            
        });
    }
});

