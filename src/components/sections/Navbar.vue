<template>
    <nav>
        <ul>
            <li v-for="(li, i) in dataShared.navbar" :key="i" @click="liActive(li); visiblePage(i)" :class="{ active: li.active }">{{li.title}}</li>
            <li>Popular</li>
            <li>Favorites list</li>
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
            if (who.active) {
                who.active = false;
            } else {
                dataShared.navbar.forEach(element => {
                    element.active = false
                })
                who.active = true;
            }
            dataShared.activeFilter = '';
            
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
                cursor: pointer;

                &.active {
                    color: white;
                }
            }
        }
    }

</style>