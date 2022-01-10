<template>
    <header>
        <div class="left">
            <Logo/>
            <Navbar/>
        </div>
        <div class="right">
            <Search/>
            <div class="bell"><i class="fas fa-bell"></i></div>
            <div class="account">
                <img src="https://occ-0-2943-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcD7ar6C7nv9U2YfOu33ikPAO4VittMNlwNlhsCdAxmbJYGrr46WCmGJfN4fkZ1D3AufurqS0kCYDoV4La-_xxI.png?r=318" alt="profile-image">
                <i class="fas fa-sort-down"></i>
            </div>
        </div>
    </header>
</template>

<script>
import Logo from '../commons/Logo.vue'
import Navbar from '../sections/Navbar.vue'
import Search from '../sections/Search.vue'

export default {
    name: 'Header',
    components: {
        Logo,
        Navbar,
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
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: rgb(20, 20, 20);
        z-index: 100;

        .left, .right {
            display: flex;
            align-items: center;

            > * {
                margin: 0 10px;

                img {
                    border-radius: 6px;
                    margin-right: 8px;
                    margin-bottom: 2px;
                }
            }
        }

        .right {
            .bell {
                cursor: pointer;
                
                svg {
                    font-size: 25px;
                }
            }

            .account {
                cursor: pointer;
            }
        }
    }

    @media (max-width: 576px) {
        header {
            height: 70px;
            padding: 0 10px;

            .left {
                flex-direction: row-reverse;
            }
        }
    }

</style>