<template>
    <div @mouseover="hover = true" @mouseleave="hover = false" class="mycard">

        <div v-if="hover == false" class="poster">
            <img v-if="content.poster_path != null" :src="`https://image.tmdb.org/t/p/w342/${content.poster_path}`" :alt="content.title">
            <div v-else class="d-flex justify-content-center align-items-center h-100" >
                {{content.title}}{{content.name}}
            </div>
        </div>

        <div v-else-if="content.title != undefined" class="info">
            <div><strong>Titolo:</strong> {{content.title}}</div>
            <div v-if="content.title != content.original_title"><strong>Titolo originale:</strong> {{content.original_title}}</div>
            <div v-if="content.vote_average != ''"><strong>Voto:</strong> <i v-for="(star, i) in Math.ceil(content.vote_average / 2)" :key="i" class="fas fa-star"></i></div>
            <div v-if="content.cast != undefined">
                <strong>Cast: </strong>
                <ul class="list-unstyled">
                    <li v-for="(actor, i) in content.cast" :key="i"> - {{actor}}</li>
                </ul>
            </div>
            <div>
                <div v-for="(genre, i) in genres" :key="i">
                    <strong>Genere {{i+1}}: </strong>
                    <span>{{genre}}</span>
                </div>
            </div>
            <div v-if="content.overview != ''"><strong>Overview:</strong> {{content.overview}}</div>
            <div class="mt-3"><img class="me-1" :src="getFlag(content.original_language)" alt="flag"> {{content.original_language}}</div>
        </div>

        <div v-else class="info">
            <div><strong>Titolo:</strong> {{content.name}}</div>
            <div v-if="content.name != content.original_name"><strong>Titolo originale:</strong> {{content.original_name}}</div>
            <div v-if="content.vote_average != ''"><strong>Voto:</strong> <i v-for="(star, i) in Math.ceil(content.vote_average / 2)" :key="i" class="fas fa-star"></i></div>
            <div v-if="content.cast != undefined">
                <strong>Cast: </strong>
                <ul class="list-unstyled">
                    <li v-for="(actor, i) in content.cast" :key="i"> - {{actor}}</li>
                </ul>
            </div>
            <div>
                <div v-for="(genre, i) in genres" :key="i">
                    <strong>Genere {{i+1}}: </strong>
                    <span>{{genre}}</span>
                </div>
            </div>
            <div v-if="content.overview != ''"><strong>Overview:</strong> {{content.overview}}</div>
            <div class="mt-3"><img class="me-1" :src="getFlag(content.original_language)" alt="flag"> {{content.original_language}}</div>
        </div>

    </div>
</template>

<script>
import dataShared from '../../share/dataShared';

export default {
    name: 'Card',
    props: {
        content: Object
    },
    data(){
        return {
            hover: false,
            genres: this.traduceFilters(this.content.genre_ids)
        }
    },
    methods: {
        getFlag: function(lan){
            switch (lan) {
                case 'it':
                    return 'https://flagcdn.com/w40/it.png';
                case 'es':
                    return 'https://flagcdn.com/w40/es.png';
                case 'en':
                    return 'https://flagcdn.com/w40/gb-eng.png';
                case 'fr':
                    return 'https://flagcdn.com/w40/fr.png';
                default:
                    return 'https://upload.wikimedia.org/wikipedia/commons/8/87/Bandiera_della_Pace.png';
            }
        },
        traduceFilters(genre){
            let array = [];
            genre.forEach(element => {
                dataShared.genres.forEach(elm => {
                    if (element == elm.id && !(array.includes(elm.name))) array.push(elm.name)
                })
            });
            return array;
        },
    }
}
</script>

<style lang="scss" scoped>

    .mycard {
        height: 100%;
        cursor: pointer;

        .poster {
            height: 100%;
            
            img {
                width: 100%;
                height: 100%;
                display: block;
                object-fit: cover;
                object-position: top;
            }
        }
        .info {
            height: 100%;
            font-size: 14px;
            overflow-x: auto;
            padding: 10px;

            > div {
                margin: 0;
                padding: 5px 0;

                img {
                width: 40px;
                }

                svg {
                    color: #febc00;
                }
            }
        }
    }

</style>