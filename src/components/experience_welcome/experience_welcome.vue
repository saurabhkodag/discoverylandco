<template>
  <div class="home">
    <section class="main">
      <navbar />
      <video class="main-bg" autoplay muted loop>
        <source
          src="https://dxaurk9yhilm4.cloudfront.net/experiences_hero.mp4?mtime=20190609072805"
          type="video/mp4"
        />
      </video>
      <main class="discover-your-world">
        <span class="discover">Unforgettable</span>
        <span class="your-world">experiences</span>
      </main>
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