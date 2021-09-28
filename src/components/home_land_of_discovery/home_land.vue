
   
<template>
<div class="component_three_text" style="background:white">
<div class="component_left">
</div>
<div class="component_center">
  <div class="component_header">
    <div class="component_text"> Lands of </div>
    <div class="component_text"> Discovery </div>
  
     <div class="component_subheader_text">A world away from the day-to-day. Your escape. Your haven. Your world.</div>
     <div class="component_subheader_text">Explore the map below and take a journey to our communities.</div> 
    </div>
</div>  

</div>
<div class="image_nav">
<button class="bt">North America & Caribbean</button>
<button class="bt">Hawaii</button>
<button class="bt">Europe</button>
</div>
<div class="component_three_image">
  <div class="component_three_image_left">
    <div class="info_image">
    <img src="@/assets/home/world1.jpg">
    </div>
  </div>
      <div class="info">
      <div class="info_left">
        <div class="bt-d" >
          <svg class="bt1" @click="bt_prev(this.current.id)" fill="#fff" height="1.1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.06 20.91"><path d="M28.06 9.81H2.2l8.89-8.9c.01-.03-.9-.91-.9-.91l-10 10c0 .01-.01.01-.02.02l-.04.04c-.01.01-.02.02-.02.03-.01.01-.02.03-.03.05-.01.01-.01.03-.02.04 0 .01-.01.02-.01.03v.02c-.01.01-.01.03-.01.04 0 .02-.01.03-.01.05 0 .01 0 .03-.01.04 0 .02 0 .03-.01.05v.1c0 .02 0 .03.01.05 0 .01 0 .03.01.04 0 .02.01.03.01.05 0 .01.01.03.01.04 0 .01 0 .01.01.02 0 .01.01.02.02.03.01.01.01.03.02.04.01.02.02.03.03.05.01.01.02.02.02.03.01.01.02.03.04.04l.02.02 10 10c0 .01.91-.91.91-.91L2.2 11.1h25.86V9.81z"></path></svg>
          <svg class="bt2" @click="bt_next(this.current.id)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.06 20.91" fill="#fff" height="1.1rem"><path d="M0 11.1h25.86L16.97 20c0 .04.91.92.91.91l10-10c0-.01.01-.01.02-.02l.04-.04c.01-.01.02-.02.02-.03.01-.01.02-.03.03-.05.01-.01.01-.03.02-.04 0-.01.01-.02.01-.03v-.02c.01-.01.01-.03.01-.04 0-.02.01-.03.01-.05 0-.01 0-.03.01-.04 0-.02 0-.03.01-.05v-.05-.05c0-.02 0-.03-.01-.05 0-.01 0-.03-.01-.04 0-.02-.01-.03-.01-.05 0-.01-.01-.03-.01-.04 0-.01 0-.01-.01-.02 0-.01-.01-.02-.02-.03-.01-.01-.01-.03-.02-.04-.01-.02-.02-.03-.03-.05-.01-.01-.02-.02-.02-.03-.01-.01-.02-.03-.04-.04.01 0 0-.01 0-.01l-10-10c0-.01-.91.91-.91.91l8.89 8.9H0v1.29z"></path></svg>
          </div>
        <div class="info_wheather">
          <div class="wheather_column">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#f3f3f3" class="bi bi-brightness-low" viewBox="0 0 16 16">
          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm.5-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z"/>
          </svg>
          <span>{{current.temperature}}</span>
          </div>
          <div class="wheather_column">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#f3f3f3" class="bi bi-wind" viewBox="0 0 16 16">
                            <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
             </svg>
            <span>{{current.winds}}</span>
          </div>
          <div class="wheather_column">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#f3f3f3" class="bi bi-compass" viewBox="0 0 16 16">
                            <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                            <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
            </svg>
          <span>{{current.compass}}</span>
        </div>
        </div>
        <div class="info_city">
            {{current.locationTitle}}
        </div>
      <div class="info_place">
        {{current.locationSubtitle}}
      </div>
      <div class="info_coordinate">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#f3f3f3" class="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        </svg>
        <span> {{current.coordinate}}</span>
      </div>
    </div>
    <div class="info_rigth">
      <img :src=current.image>
      </div>
</div>
</div>
</template>>
<script type="module" src="./home_land.ts"></script>
<style scoped lang="scss">
@import './home_land.scss';
</style>