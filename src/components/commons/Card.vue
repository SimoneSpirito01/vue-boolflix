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
            <div v-if="content.cast != undefined && content.cast.length">
                <strong>Cast: </strong>
                <ul class="cast">
                    <li v-for="(actor, i) in content.cast" :key="i">{{actor}}</li>
                </ul>
            </div>
            <div>
                <div v-for="(genre, i) in content.genres" :key="i">
                    <strong>Genere {{i+1}}: </strong>
                    <span>{{genre}}</span>
                </div>
            </div>
            <div v-if="content.overview != ''"><strong>Overview:</strong> {{content.overview}}</div>
            <div class="text-uppercase d-flex align-items-center"><span class="me-2 fs-3" v-html="getFlag(content.original_language)"></span>{{content.original_language}}</div>

        </div>

        <div v-else class="info">

            <div><strong>Titolo:</strong> {{content.name}}</div>
            <div v-if="content.name != content.original_name"><strong>Titolo originale:</strong> {{content.original_name}}</div>
            <div v-if="content.vote_average != ''"><strong>Voto:</strong> <i v-for="(star, i) in Math.ceil(content.vote_average / 2)" :key="i" class="fas fa-star"></i></div>
            <div v-if="content.cast != undefined && content.cast.length">
                <strong>Cast: </strong>
                <ul class="cast">
                    <li v-for="(actor, i) in content.cast" :key="i">{{actor}}</li>
                </ul>
            </div>
            <div>
                <div v-for="(genre, i) in content.genres" :key="i">
                    <strong>Genere {{i+1}}: </strong>
                    <span>{{genre}}</span>
                </div>
            </div>
            <div v-if="content.overview != ''"><strong>Overview:</strong> {{content.overview}}</div>
            <div class="text-uppercase d-flex align-items-center"><span class="me-2 fs-3" v-html="getFlag(content.original_language)"></span>{{content.original_language}}</div>
            
        </div>

    </div>
</template>

<script>

export default {
    name: 'Card',
    props: {
        content: Object
    },
    data(){
        return {
            hover: false,
        }
    },
    methods: {
        getFlag: function(lan){
            switch (lan) {
                case 'it':
                    return '&#x1f1ee;&#x1f1f9;';
                case 'es':
                    return '&#x1f1ea;&#x1f1f8;';
                case 'en':
                    return '&#x1f3f4;&#xe0067;&#xe0062;&#xe0065;&#xe006e;&#xe0067;&#xe007f;';
                case 'fr':
                    return '&#x1f1eb;&#x1f1f7;';
                default:
                    return '&#127987;&#8205;&#127752;';
            }
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

                .cast {
                    list-style: square inside url('data:image/gif;base64,R0lGODlhBQAKAIABAAAAAP///yH5BAEAAAEALAAAAAAFAAoAAAIIjI+ZwKwPUQEAOw==');
                    list-style-position: outside;
                    padding-left: 0.8rem;
                    margin-bottom: 0;
                }
            }
        }
    }

</style>