import vue from 'vue';

export default vue.observable({
    searchQuery: '',
    noResults: false,
    noResultsQuery: '',
    movies: [],
    series: [],
    genres: [],
    activeFilter: ''
});