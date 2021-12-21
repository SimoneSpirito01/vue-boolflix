<template>
    <header>
        <Logo/>
        <Search/>
    </header>
</template>

<script>
import Logo from '../commons/Logo.vue'
import Search from '../sections/Search.vue'

export default {
    name: 'Header',
    components: {
        Logo,
        Search
    }
}
</script>

<style lang="scss" scoped>

    header {
        height: 85px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 60px;
    }

</style>