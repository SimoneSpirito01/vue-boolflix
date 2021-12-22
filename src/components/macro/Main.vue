<template>
    <main>
        <div class="container d-flex flex-column">

            <div v-if="dataShared.navbar[0].active || dataShared.navbar[1].active || dataShared.navbar[2].active || dataShared.searchedQuery != ''">
                <Filters/>
            </div>
            <div v-if="dataShared.searchedQuery == '' || dataShared.navbar[0].active">
                <h2 v-if="dataShared.navbar[0].active || dataShared.navbar[1].active || dataShared.navbar[2].active" class="mt-3 mb-5">Daily Trends</h2>
                <div v-if="dataShared.navbar[0].active">
                    <Category title="Movies" :contents="dataShared.dailyMovies"/>
                    <Category title="TV series" :contents="dataShared.dailySeries"/>
                </div>
                <div v-else-if="dataShared.navbar[1].active">
                    <Category title="Movies" :contents="dataShared.dailyMovies"/>
                </div>
                <div v-else-if="dataShared.navbar[2].active">
                    <Category title="TV series" :contents="dataShared.dailySeries"/>
                </div>
                <div v-else>
                    <h2 class="text-center mt-5">Effettua una ricerca!</h2>
                </div>
            </div>
            <div v-else-if="dataShared.movies.length > 0 || dataShared.series.length > 0" class="results">
                <div v-if="dataShared.navbar[1].active">
                    <Category title="Movies" :contents="dataShared.movies"/>
                </div>
                <div v-else-if="dataShared.navbar[2].active">
                    <Category title="TV series" :contents="dataShared.series"/>
                </div>
                <div v-else>
                    <Category title="Movies" :contents="dataShared.movies"/>
                    <Category title="TV series" :contents="dataShared.series"/>
                </div>
            </div>
            <div v-else-if="dataShared.noResults" class="no-results">
                <p>Nessun risultato per la tua ricerca di "{{dataShared.noResultsQuery}}".</p>
                <p>Suggerimenti:</p>
                <ul>
                    <li>Prova con parole chiave diverse.</li>
                    <li>Cerchi un film o un programma TV?</li>
                </ul>
            </div>
        </div>
    </main>
</template>

<script>
import Filters from '../sections/Filters.vue'
import Category from '../commons/Category'
import dataShared from '../../share/dataShared'
import functionsShared from '../../share/functionsShared'

export default {
    name: 'Main',
    components: {
        Filters,
        Category
    },
    data(){
        return {
            dataShared,
        }
    },
    created(){
        const axios = require('axios');
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=d299e29d3e9fc17a1f45092e37356684')
        .then(function (response) {
            dataShared.dailyMovies = [...response.data.results]
            axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=d299e29d3e9fc17a1f45092e37356684')
                .then(function (response) {
                    dataShared.dailySeries = [...response.data.results]
                    functionsShared.getCast(dataShared.dailyMovies, 'movie')
                    functionsShared.getCast(dataShared.dailySeries, 'tv')
                    functionsShared.createFilters(dataShared.dailyMovies, dataShared.dailySeries)

                })
                .catch(function (error) {
                    console.log(error);
                })
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}
</script>

<style lang="scss" scoped>
    
    main {
        margin-top: 85px;

        .results {
        
            > * {
                margin: 20px 0;
            }
        }

        .no-results {
            margin: 90px auto;
        }
    }

</style>