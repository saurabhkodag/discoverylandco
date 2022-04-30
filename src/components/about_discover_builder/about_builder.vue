<template>
  <section id="welcome">
    <div class="top-left">
      <h1 class="welcome-to-our-world">
        <span class="welcome-to"> Discovery Builders </span>
      </h1>
      <p class="welcome-text">
        Every Discovery property is wonderfully in-tune with its natural
        surroundings - a harmonious blend of the architecturally impressive with
        the environmentally sensitive. And your every expectation will be met,
        with our meticulous eye for detail matching outstanding levels of
        craftsmanship and master building.
      </p>
    </div>
    <div class="right">
      <img :src="require('@/assets/About/builder1.jpg')" alt="Ocean View" />
    </div>
    <div class="bottom-left">
      <img :src="require('@/assets/About/builder2.jpg')" alt="Leisure" />
    </div>
  </section>
</template>

<style scoped lang="scss">
#app {
  background-color: #ffffff;
}

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

#welcome {
  display: flex;
  align-content: center;
  background-color: #ffffff;
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
    padding-top: 30%;
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
    top: -10%;
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
</style>