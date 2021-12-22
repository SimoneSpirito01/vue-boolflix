<template>
    <nav>
        <ul>
            <li v-for="(li, i) in dataShared.navbar" :key="i" @click="liActive(li); visiblePage(i)" :class="{ active: li.active }">{{li.title}}</li>
        </ul>
    </nav>
</template>

<script>
import dataShared from '../../share/dataShared'

export default {
    name: 'Navbar',
    data() {
        return {
            dataShared
        }
    },
    methods: {
        liActive(who){
            dataShared.navbar.forEach(element => {
                element.active = false
            })
            who.active = true;
        },
        visiblePage(who){
            switch (who.title) {
                case 'Home':

            }
        }
    }
}
</script>

<style lang="scss" scoped>

    nav {
        ul {
            display: flex;
            list-style: none;
            margin-bottom: 0;

            li {
                color: #bdbdbd;
                margin: 0 10px;

                &.active {
                    color: white;
                }
            }
        }
    }

</style>