<template>
    <div class="query">
        <label for="cerca"></label>
        <input @keyup.enter="doQuery()
        " v-model="dataShared.searchQuery" type="search" id="cerca">
        <input @click="doQuery()" type="submit" value="Cerca">
    </div>
</template>

<script>
import dataShared from '../../share/dataShared'

export default {
    name: 'Search',
    data(){
        return {
            dataShared
        }
    },
    methods: {
        query(api, type){
            dataShared.activeFilter = '';
            const self = this;
            const axios = require('axios');

            axios.get(api, {
                params: {
                    api_key: 'd299e29d3e9fc17a1f45092e37356684',
                    language: 'it-IT',
                    query: dataShared.searchQuery
                }
            })
            .then(function (response) {
                if (response.data.results.lenght > 0){
                    dataShared.noResults = false;
                } else {
                    dataShared.noResults = true;
                    dataShared.noResultsQuery = dataShared.searchQuery;
                }
                if (type == 'movie'){
                    dataShared.movies = [...response.data.results];
                } else if (type == 'serie'){
                    dataShared.series = [...response.data.results];
                }
                self.createCast();
                self.createFilters()
            })
            .catch(function (error) {
                console.log(error);
            });

            
        },
        doQuery(){
            this.query('https://api.themoviedb.org/3/search/movie', 'movie');
            this.query('https://api.themoviedb.org/3/search/tv', 'serie');
        },
        createCast() {
            this.getCast(dataShared.movies, 'movie');
            this.getCast(dataShared.series, 'tv');
            
        },
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
        createFilters(){
            dataShared.movies.forEach(element => {
                element.genres = [];
                element.genre_ids.forEach(genre_id => {
                    dataShared.genres.forEach(elm => {
                        if (genre_id == elm.id && !(element.genres.includes(elm.name)))element.genres.push(elm.name)
                })
                })
                
            });
            dataShared.series.forEach(element => {
                element.genres = [];
                element.genre_ids.forEach(genre_id => {
                    dataShared.genres.forEach(elm => {
                        if (genre_id == elm.id && !(element.genres.includes(elm.name)))element.genres.push(elm.name)
                })
                })
                
            });
        },

    }
}
</script>

<style lang="scss" scoped>

</style>