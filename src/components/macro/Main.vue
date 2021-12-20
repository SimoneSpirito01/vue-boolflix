<template>
    <main>
        <div class="query">
            <label for="cerca"></label>
            <input v-model="searchQuery" type="search" id="cerca">
            <input @click="doQuery()" type="submit" value="Cerca">
        </div>
        <div class="results">
            <ul v-for="(result, i) in results" :key="i">
                <li>{{result.title}}</li>
                <li>{{result.original_title}}</li>
                <li>{{result.original_language}}</li>
                <li>{{result.vote_average}}</li>
            </ul>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Main',
    data(){
        return {
            searchQuery: '',
            results: null
        }
    },
    methods: {
        doQuery: function(){

            const self = this;
            const axios = require('axios');

            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: 'd299e29d3e9fc17a1f45092e37356684',
                    language: 'it-IT',
                    query: this.searchQuery

                }
            })
            .then(function (response) {
                self.results = [...response.data.results]
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    }
}
</script>

<style lang="scss" scoped>

    .results {
        display: flex;
        flex-wrap: wrap;

        ul {
            margin: 20px;
        }
    }

</style>