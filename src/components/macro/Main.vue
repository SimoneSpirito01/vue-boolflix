<template>
    <main>
        <div class="query">
            <label for="cerca"></label>
            <input v-model="searchQuery" type="search" id="cerca">
            <input @click="doQuery()" type="submit" value="Cerca">
        </div>
        <div class="results">
            <div class="movies">
                <h2>Movies</h2>
                <div class="list">
                    <ul v-for="(movie, i) in movies" :key="i">
                        <li>{{movie.title}}</li>
                        <li>{{movie.original_title}}</li>
                        <li><img :src="getFlag(movie.original_language)"></li>
                        <li>{{movie.vote_average}}</li>
                    </ul>
                </div>
            </div>
            <div class="series">
                <h2>Series</h2>
                <div class="list">
                    <ul v-for="(serie, i) in series" :key="i">
                    <li>{{serie.name}}</li>
                    <li>{{serie.original_name}}</li>
                    <li><img :src="getFlag(serie.original_language)"></li>
                    <li>{{serie.vote_average}}</li>
                </ul>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Main',
    data(){
        return {
            searchQuery: '',
            movies: '',
            series: []
        }
    },
    methods: {
        query: function(api, type){
            const self = this;
            const axios = require('axios');

            axios.get(api, {
                params: {
                    api_key: 'd299e29d3e9fc17a1f45092e37356684',
                    language: 'it-IT',
                    query: self.searchQuery

                }
            })
            .then(function (response) {
                if (type == 'movie'){
                    console.log(response.data.results)
                    self.movies = [...response.data.results]
                } else if (type == 'serie'){
                    self.series = [...response.data.results]
                }
            })
            .catch(function (error) {
                console.log(error);
            })  

            
        },
        doQuery: function(){
            this.query('https://api.themoviedb.org/3/search/movie', 'movie');
            this.query('https://api.themoviedb.org/3/search/tv', 'serie');
            
            
        },
        getFlag: function(lan){
            switch (lan) {
                case 'it':
                    return 'https://flagcdn.com/w40/it.png';
                case 'es':
                    return 'https://flagcdn.com/w40/es.png';
                case 'en':
                    return 'https://flagcdn.com/w40/gb-eng.png';
                case 'fr':
                    return 'https://flagcdn.com/w40/fr.png';
                default:
                    return 'https://upload.wikimedia.org/wikipedia/commons/8/87/Bandiera_della_Pace.png';
            }
        }
    }
}
</script>

<style lang="scss" scoped>

    .list{
        display: flex;
        flex-wrap: wrap;

        ul {
            margin: 20px;

            img {
                width: 40px;
            }
        }
    }

</style>