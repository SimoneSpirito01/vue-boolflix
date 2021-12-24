<template>

    <div v-if="filteredContents.length > 0" class="category">
        <h2>{{title}}</h2>
        <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 justify-content-center justify-content-md-start">
            <div v-for="(content, i) in filteredContents" :key="i" class="col">
                <Card :content="content"/>
            </div>
        </div>
    </div>

</template>

<script>
import dataShared from '../../share/dataShared'
import Card from '../commons/Card'

export default {
    name: 'Category',
    props: {
        title: String,
        contents: Array
    },
    components: {
        Card
    },
    data(){
        return {
            dataShared
        }
    },
    computed: {
        filteredContents(){
            if (dataShared.activeFilter != '') {
                let array = [];
                this.contents.forEach(element => {
                    element.genres.forEach(genre => {
                        if (genre == dataShared.activeFilter) array.push(element);
                    })
                })
                return array;
            } else {
                return this.contents;
            }
        }
    }
}
</script>

<style lang="scss" scoped>

    .category {
        margin-top: 25px;

        .row {

            .col {
                max-width: 250px;
                aspect-ratio: 2;
                margin: 10px 0;
            }
    }
    }

</style>