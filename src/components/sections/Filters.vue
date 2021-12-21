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
            return array;
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

</style>