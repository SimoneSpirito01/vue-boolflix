import vue from 'vue';

export default vue.observable({
    searchQuery: '',
    noResults: false,
    noResultsQuery: '',
    movies: [],
    series: [],
    dailyMovies: [],
    dailySeries: [],
    genres: [],
    activeFilter: '',
    navbar: [
        {
            title: 'Home',
            active: true
        },
        {
            title: 'Movies',
            active: false
        },
        {
            title: 'TV series',
            active: false
        },
        {
            title: 'Popular',
            active: false
        },
        {
            title: 'Favorites list',
            active: false
        }
    ],
    
});