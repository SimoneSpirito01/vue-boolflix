<template>
    <div class="query">
        <form action="#" class="d-flex ">
            <input @keyup.enter="doQuery()
            " v-model="dataShared.searchQuery" type="search" id="cerca">
            <input @click.prevent="doQuery()" type="submit" value="Cerca">
        </form>
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

            dataShared.searchedQuery = dataShared.searchQuery;

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

    .query {

        form {
            height: 27px;

            input {
                height: 100%;
                border: none;
                background: none;
                border: 2px solid #bdbdbd;
                outline: none;
            }

            input:first-child {
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                padding-left: 6px;
                color: #bdbdbd;

            }

            input:last-child {
                width: 50px;
                font-size: 14px;
                border-left: 0px solid lightgray;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
                text-align: center;
                user-select: none;
                color: #bdbdbd;

            }
        }



        
    }

</style>