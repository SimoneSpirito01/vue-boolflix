<template>
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item" v-for="(li, i) in dataShared.navbar" :key="i" @click="liActive(li); visiblePage(i)" :class="{ active: li.active }">{{li.title}}</li>
                <li class="nav-item">Popular</li>
                <li class="nav-item">Favorites list</li>
            </ul>
        </div>
    </nav> -->
    <nav>
        <div>
            <ul >
                <li  v-for="(li, i) in dataShared.navbar" :key="i" @click="liActive(li); visiblePage(i)" :class="{ active: li.active }">{{li.title}}</li>
                <li>Popular</li>
                <li>Favorites list</li>
            </ul>
        </div>
    </nav>
    
</template>

<script>
import dataShared from '../../share/dataShared';
import 'bootstrap';

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

@media (max-width: 576px) {
    nav {
        ul {
            font-size: 12px;
            padding: 0;
        }
    }
}



</style>