<template>
    <main>
        <div class="container">
            <div v-if="dataShared.movies.length > 0 || dataShared.series.length > 0" class="results">
                <Category title="Movies" :contents="dataShared.movies"/>
                <Category title="TV series" :contents="dataShared.series"/>
            </div>
            <div v-else-if="dataShared.noResults == false">
                <h2 class="text-center mt-5">Effettua una ricerca</h2>
            </div>
            <div v-else class="no-results">
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

    .no-results {
        width: 40%;
        margin: 90px auto 0;
    }

</style>