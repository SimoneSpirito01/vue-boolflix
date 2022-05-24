<template>
  <div id="app">
    <Header/>
    <Main/>
  </div>
</template>

<script>
import dataShared from './share/dataShared.js'
import Header from './components/macro/Header.vue'
import Main from './components/macro/Main.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main
  },
  data(){
    return {
      dataShared
    }
  },
  created(){
    const axios = require('axios');
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=d299e29d3e9fc17a1f45092e37356684&language=it-IT')
    .then(function (response) {
        dataShared.genres = [...response.data.genres]
        axios.get('https://api.themoviedb.org/3/genre/tv/list?api_key=d299e29d3e9fc17a1f45092e37356684&language=it-IT')
        .then(function (response) {
            dataShared.genres.push(...response.data.genres)
            
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

<style lang="scss">
@import './assets/global.scss';



</style>
