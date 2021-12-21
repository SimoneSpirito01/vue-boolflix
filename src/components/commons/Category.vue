<template>

    <div v-if="contents.length > 0" class="category">
        <h2>{{title}}</h2>
        <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 justify-content-center justify-content-md-start">
            <div v-for="(content, i) in contents" :key="i" class="col">
                <Card :content="content"/>
            </div>
        </div>
    </div>

</template>

<script>
import Card from '../commons/Card'

export default {
    name: 'Category',
    props: {
        title: String,
        contents: Array
    },
    components: {
        Card
    }
}
</script>

<style lang="scss" scoped>

    .row {

        .col {
            max-width: 250px;
            aspect-ratio: 9/10;
            margin: 10px 0;
        }
    }

</style>