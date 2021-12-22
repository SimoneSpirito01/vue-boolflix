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
import functionsShared from '../../share/functionsShared'

export default {
    name: 'Search',
    data(){
        return {
            dataShared,
            functionsShared
        }
    },
    methods: {
        query(api, type){
            dataShared.navbar.forEach(element => {
                element.active = false;
            })
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
                functionsShared.createFilters(dataShared.movies, dataShared.series)
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
            functionsShared.getCast(dataShared.movies, 'movie');
            functionsShared.getCast(dataShared.series, 'tv');
            
        },
    }
}
</script>

<style lang="scss" scoped>

</style>