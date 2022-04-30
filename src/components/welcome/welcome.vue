   
<template>
  <div class="home">
    <!-- main section -->
    <section class="main">
      <navbar />
      <video class="main-bg" autoplay muted loop>
        <source src="@/assets/video/hvideo.mp4" type="video/mp4" />
      </video>
      <main class="discover-your-world">
        <span class="discover">Discover</span>
        <span class="your-world">your world</span>
      </main>
    </section>

    <!-- welcome section -->
    <section id="welcome">
      <div class="top-left">
        <h1 class="welcome-to-our-world">
          <span class="welcome-to"> Welcome to </span>
          <span class="our-world"> our world </span>
        </h1>
        <p class="welcome-text">
          Discover the unique atmosphere of our private residential club
          communities. Once experienced. Never forgotten. This is classic,
          comfortable, modern living in nature’s most spectacular settings
          worldwide. Reassuringly exclusive. Generously welcoming. Find your
          unique world – a place where families love to be; creating
          unforgettable moments, together.
        </p>
      </div>
      <div class="right">
        <img :src="require('@/assets/home/home1.jpg')" alt="Ocean View" />
      </div>
      <div class="bottom-left">
        <img :src="require('@/assets/home/home2.jpg')" alt="Leisure" />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
#app {
  background-color: #ffffff;
}
.home {
  .main {
    overflow: hidden;
    width: 100%;
    position: relative;

    video.main-bg {
      min-width: 100%;
      min-height: 100vh;
    }

    .discover-your-world {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      color: #fff;
      padding: 0 20rem;
      @media screen and (max-width: 500px) {
        padding: 0 1rem;
      }
      @media screen and (min-width: 500.1px) and (max-width: 1000px) {
        padding: 0 2rem;
      }

      .discover,
      .your-world {
        font-size: 6rem;
        display: block;
        line-height: 5rem;
        font-weight: 100;
        @media screen and (max-width: 500px) {
          font-size: 3rem;
          line-height: 2.5rem;
        }
      }

      .discover {
        font-family: "Average", serif;
      }

      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  #welcome {
    background-color: #ffffff;
    background: url("../../assets/home/home3.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    padding: 4rem 8rem;
    @media screen and (max-width: 1000px) {
      padding: 4rem 0;
    }

    display: grid;
    column-gap: 8rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 2fr;
    @media screen and (max-width: 1000px) {
      column-gap: 4rem;
      row-gap: 2rem;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }

    .top-left {
      display: flex;
      flex-direction: column;
      row-gap: 3rem;
      @media screen and (max-width: 1000px) {
        row-gap: 2rem;
        padding: 2rem;
      }

      .welcome-to-our-world {
        span {
          display: block;
          font-size: 3rem;
          line-height: 2.5rem;
          font-weight: lighter;
          @media screen and (max-width: 500px) {
            font-size: 2.5rem;
            line-height: 2rem;
          }
        }
        .welcome-to {
          font-family: "Average", serif;
        }
      }

      .welcome-text {
        color: #777;
        line-height: 2rem;
        @media screen and (max-width: 500px) {
          font-size: 0.9rem;
          line-height: 1.5rem;
        }
      }
    }

    .right {
      grid-row: span 2;
      @media screen and (max-width: 1000px) {
        padding: 0 2rem;
      }

      img {
        width: 100%;
        display: block;
        margin: auto;
      }
    }

    .bottom-left {
      img {
        width: 100%;
        margin-top: 8rem;
        @media screen and (max-width: 500px) {
          margin-top: 2rem;
        }
      }
    }
  }
}
</style>