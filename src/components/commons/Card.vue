<template>
  <div
    @mouseover="hoverCard"
    @mouseleave="leaveCard"
    class="mycard"
    :class="{ active: hover }"
  >
    <div v-if="hover == false" class="poster_card">
      <img
        class="background"
        v-if="content.backdrop_path != null"
        :src="`https://image.tmdb.org/t/p/w342/${content.backdrop_path}`"
        :alt="content.title"
      />
      <div
        v-else
        class="d-flex justify-content-center align-items-center h-100"
      >
        {{ content.title }}{{ content.name }}
      </div>
      <img v-if="Math.floor(Math.random() * 10) + 1 <= 4" class="b-logo" src="../../assets/img/b-boolflix.png" alt="" />
    </div>

    <div v-else-if="content.title != undefined" class="info">
      <div><strong>Titolo:</strong> {{ content.title }}</div>
      <div v-if="content.title != content.original_title">
        <strong>Titolo originale:</strong> {{ content.original_title }}
      </div>
      <div v-if="content.vote_average != ''">
        <strong>Voto:</strong>
        <i
          v-for="(star, i) in Math.ceil(content.vote_average / 2)"
          :key="i"
          class="fas fa-star"
        ></i>
      </div>
      <div v-if="content.cast != undefined && content.cast.length">
        <strong>Cast: </strong>
        <ul class="cast">
          <li v-for="(actor, i) in content.cast" :key="i">{{ actor }}</li>
        </ul>
      </div>
      <div>
        <div v-for="(genre, i) in content.genres" :key="i">
          <strong>Genere {{ i + 1 }}: </strong>
          <span>{{ genre }}</span>
        </div>
      </div>
      <div v-if="content.overview != ''">
        <strong>Trama:</strong> {{ content.overview }}
      </div>
      <div class="text-uppercase d-flex align-items-center">
        <span
          class="me-2 fs-3"
          v-html="getFlag(content.original_language)"
        ></span
        >{{ content.original_language }}
      </div>
    </div>

    <div v-else class="info">
      <div><strong>Titolo:</strong> {{ content.name }}</div>
      <div v-if="content.name != content.original_name">
        <strong>Titolo originale:</strong> {{ content.original_name }}
      </div>
      <div v-if="content.vote_average != ''">
        <strong>Voto:</strong>
        <i
          v-for="(star, i) in Math.ceil(content.vote_average / 2)"
          :key="i"
          class="fas fa-star"
        ></i>
      </div>
      <div v-if="content.cast != undefined && content.cast.length">
        <strong>Cast: </strong>
        <ul class="cast">
          <li v-for="(actor, i) in content.cast" :key="i">{{ actor }}</li>
        </ul>
      </div>
      <div>
        <div v-for="(genre, i) in content.genres" :key="i">
          <strong>Genere {{ i + 1 }}: </strong>
          <span>{{ genre }}</span>
        </div>
      </div>
      <div v-if="content.overview != ''">
        <strong>Trama:</strong> {{ content.overview }}
      </div>
      <div class="text-uppercase d-flex align-items-center">
        <span
          class="me-2 fs-3"
          v-html="getFlag(content.original_language)"
        ></span
        >{{ content.original_language }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    content: Object,
  },
  data() {
    return {
      hover: false,
      actHover: false,
      hoverTime: 0,
    };
  },
  methods: {
    getFlag: function (lan) {
      switch (lan) {
        case "it":
          return "&#x1f1ee;&#x1f1f9;";
        case "es":
          return "&#x1f1ea;&#x1f1f8;";
        case "en":
          return "&#x1f3f4;&#xe0067;&#xe0062;&#xe0065;&#xe006e;&#xe0067;&#xe007f;";
        case "fr":
          return "&#x1f1eb;&#x1f1f7;";
        default:
          return "&#127987;&#8205;&#127752;";
      }
    },
    hoverCard() {
      if (this.hover == false) {
        if (this.actHover == false) {
          this.actHover = true;
          const addTime = setInterval(() => {
            if (this.actHover) {
              this.hoverTime++;
              if (this.hoverTime >= 4) {
                this.hover = true;
                clearInterval(addTime);
              }
            } else {
              clearInterval(addTime);
            }
          }, 100);
        } else {
          this.hoverTime = 0;
        }
      }
    },
    leaveCard() {
      this.hoverTime = 0;
      this.hover = false;
      this.actHover = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.mycard {
  height: 100%;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: transform 0.5s, font-size 0.5s, z-index 0.5s, position 0.5s;
  transition-delay: 0s;
  border-radius: 10px;
  background-color: #141414;
  position: relative;

  &.active {
    transform: scale(1.5);
    position: relative;
    z-index: 10;
    font-size: 10px;

    .info {
      font-size: 10px;
    }
  }

  .poster {
    height: 100%;

    img {
      &.background {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        object-position: top;
        border-radius: 10px;
      }

      &.b-logo {
        width: 12px;
        height: 24px;
        position: absolute;
        top: 7px;
        left: 7px;
      }
    }
  }
  .info {
    width: 85%;
    height: 100%;
    overflow-x: auto;
    padding: 10px 0;
    margin: 0 auto;

    // &::-webkit-scrollbar-track {
    //   box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    //   -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    //   border-radius: 10px;
    //   background-color: #f5f5f5;
    //   padding: 0 2px;
    // }

    // &::-webkit-scrollbar {
    //   width: 6px;
    // }

    // &::-webkit-scrollbar-thumb {
    //   box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    //   border-radius: 10px;
    //   -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    //   background-color: #555;
    // }

    > div {
      margin: 0;
      padding: 5px 5px 5px 0;

      img {
        width: 40px;
      }

      svg {
        color: #febc00;
      }

      .cast {
        list-style: square inside
          url("data:image/gif;base64,R0lGODlhBQAKAIABAAAAAP///yH5BAEAAAEALAAAAAAFAAoAAAIIjI+ZwKwPUQEAOw==");
        list-style-position: outside;
        padding-left: 0.8rem;
        margin-bottom: 0;
      }
    }
  }
}
</style>
