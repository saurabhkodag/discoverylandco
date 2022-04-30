<template>
  <section id="LandofDiscovery">
    <div class="HeaderBlock">
      <div class="Header">
        <div id="h1">Lands of</div>
        <div id="h2">Discovery</div>
      </div>
      <div class="textContent">
        A world away from the day-to-day. Your escape. Your haven. Your world.
        Explore the map below and take a journey to our communities.
      </div>
      <nav class="globe-nav">
        <button
          v-for="(land, idx) in lands"
          :key="idx"
          class="animated-hr black globe-nav-item"
          v-html="land.continent"
          @click="setContinent(idx)"
          :class="[selectedContinent === idx ? 'router-link-active' : '']"
        ></button>
      </nav>
    </div>
    <div class="GoogleEarth">
      <img
        id="backgroundImg"
        :src="lands[selectedContinent].globeImage"
        alt="GoogleEarth"
      />
      <div class="blackBox">
        <div class="textContent">
          <div class="buttons">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFF"
                class="bi bi-arrow-left"
                viewBox="0 0 16 16"
                @click="previousPlace()"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFF"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
                @click="nextPlace()"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </div>
          <div class="icons">
            <div class="temperature">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-brightness-high"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                />
              </svg>
              <p
                v-html="
                  lands[selectedContinent].locations[selectedPlace].temperature
                "
              ></p>
            </div>
            <div class="wind">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-wind"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <p
                v-html="lands[selectedContinent].locations[selectedPlace].winds"
              ></p>
            </div>
            <div class="compass">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-compass"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                />
                <path
                  d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"
                />
              </svg>
              <p
                v-html="
                  lands[selectedContinent].locations[selectedPlace].compass
                "
              ></p>
            </div>
          </div>
          <div class="locationName">
            <p
              v-html="
                lands[selectedContinent].locations[selectedPlace].locationTitle
              "
            ></p>
            <h1
              v-html="
                lands[selectedContinent].locations[selectedPlace]
                  .locationSubtitle
              "
            ></h1>
          </div>
          <div class="locationPin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-geo-alt"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
              />
              <path
                d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              />
            </svg>
            <p
              v-html="
                lands[selectedContinent].locations[selectedPlace].coordinate
              "
            ></p>
          </div>
        </div>
        <img
          id="overlayImage"
          :src="lands[selectedContinent].locations[selectedPlace].image"
          alt=""
        />
      </div>
    </div>
  </section>
</template>
<script type="module" src="./home_land.ts"></script>
<style scoped lang="scss">
@import "./home_land.scss";
</style>