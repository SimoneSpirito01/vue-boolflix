<template>
    <main>
        <div class="container">
            <div class="results">
                <Category title="Movies" :contents="dataShared.movies"/>
                <Category title="Series" :contents="dataShared.series"/>
            </div>
        </div>
    </main>
</template>

<script>
import Category from '../commons/Category'
import dataShared from '../../share/dataShared'

export default {
    name: 'Main',
    components: {
        Category
    },
    data(){
        return {
            dataShared
        }
    }
}
</script>

<style lang="scss" scoped>
    
    .results {
        > * {
            margin: 20px 0;
        }
    }

</style>