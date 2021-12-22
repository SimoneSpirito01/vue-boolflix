<template>
    <nav>
        <ul>
            <li v-for="(li, i) in navbar" :key="i" @click="liActive(i)" :class="{ active: li.active }">{{li.title}}</li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            navbar: [
                {
                    title: 'Home',
                    active: false
                },
                {
                    title: 'Movies',
                    active: false
                },
                {
                    title: 'TV series',
                    active: false
                },
                {
                    title: 'Popular',
                    active: false
                },
                {
                    title: 'Favorites list',
                    active: false
                }
            ]
        }
    },
    methods: {
        liActive(who){
            this.navbar.forEach(element => {
                element.active = false
            })
            this.navbar[who].active = true;
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