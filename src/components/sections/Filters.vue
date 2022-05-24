<template>
    <div class="filters">
        <button @click="toggleFilter(filter)" type="button" v-for="(filter, i) in getFilters" :key="i" class="filter btn btn-secondary btn-sm" :class="(dataShared.activeFilter == filter) ? 'active' : null">
            {{filter}}
        </button>
    </div>
</template>

<script>
import dataShared from '../../share/dataShared'

export default {
    name: 'Filters',
    data(){
        return {
            dataShared,
        }
    },
    methods: {
        toggleFilter(filter){
            (dataShared.activeFilter == filter) ? dataShared.activeFilter = '' : dataShared.activeFilter = filter;
        },
    },
    computed: {
        getFilters(){
            let array = [];
            if ((dataShared.dailyMovies.length > 0 && dataShared.dailySeries.length > 0) && (dataShared.navbar[0].active || dataShared.searchedQuery == '')){
                if (dataShared.navbar[0].active) {
                    dataShared.dailyMovies.forEach(element => {
                        element.genres.forEach(genre => {
                            if (!(array.includes(genre))) array.push(genre)
                        })
                    });
                    dataShared.dailySeries.forEach(element => {
                        element.genres.forEach(genre => {
                            if (!(array.includes(genre))) array.push(genre)
                        })
                    });
                } else if (dataShared.navbar[1].active) {
                    dataShared.dailyMovies.forEach(element => {
                        element.genres.forEach(genre => {
                            if (!(array.includes(genre))) array.push(genre)
                        })
                    });
                } else {
                    dataShared.dailySeries.forEach(element => {
                        element.genres.forEach(genre => {
                            if (!(array.includes(genre))) array.push(genre)
                        })
                    });
                }
                
            } else if (dataShared.movies.length > 0 && dataShared.series.length > 0) {
                if (dataShared.navbar[1].active) {
                    dataShared.movies.forEach(element => {
                        element.genres.forEach(genre => {
                            if (!(array.includes(genre))) array.push(genre)
                        })
                    });
                } else if (dataShared.navbar[2].active) {
                    dataShared.series.forEach(element => {
                        element.genres.forEach(genre => {
                            if (!(array.includes(genre))) array.push(genre)
                        })
                    });
                } else {
                    dataShared.movies.forEach(element => {
                        element.genres.forEach(genre => {
                            if (!(array.includes(genre))) array.push(genre)
                        })
                    });
                    dataShared.series.forEach(element => {
                        element.genres.forEach(genre => {
                            if (!(array.includes(genre))) array.push(genre)
                        })
                    });
                }
            }
            return array;

            // if (dataShared.navbar[0].active || dataShared.navbar[1].active) {
            //         console.log('active')
            //     if (dataShared.dailyMovies.length > 0) {
            //         console.log('len')
            //         dataShared.dailyMovies.forEach(element => {
            //         element.genres.forEach(genre => {
            //             console.log('ok')
            //             if (!(array.includes(genre))) array.push(genre)
            //         })
            //     });
            //     }
            // } else if (dataShared.navbar[0].active || dataShared.navbar[2].active) {
            //     if (dataShared.dailySeries.length > 0) {
            //         dataShared.dailySeries.forEach(element => {
            //         element.genres.forEach(genre => {
            //             if (!(array.includes(genre))) array.push(genre)
            //         })
            //     });
            //     }
            // }
        },
        
    }
}
</script>

<style lang="scss" scoped>

    .filters {
        display: flex;
        flex-wrap: wrap;

        .filter {
            margin: 10px 5px;
            border: none;
            background-color: #0b0b0b;
            color: #bdbdbd;

            &:focus {
                background-color: #6c757d;
                border-color: #6c757d;
                box-shadow: none;
            }

            &.active {
                background-color: #5c636a;
                border-color: #565e64;
                box-shadow: 0 0 0 0.25rem rgb(130 138 145 / 50%);
            }
        }
    }

@media (max-width: 576px) {
    .filter {
        font-size: 9px;
    }
}

</style>