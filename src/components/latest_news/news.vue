<template>
  <div class="bg-white">
    
    <div class="wrapper-container">
      <div class="press-content-1">
        <h1 id="container-header">Latest News</h1>
        <div class="press-slideshow">
          <img :src="slideshowData[selectedPage].image" alt="">
          <div class="whitebox bg-white">
            <p>News</p><br>
            <h1>{{slideshowData[selectedPage].title}}</h1><br>
            <p>{{slideshowData[selectedPage].body}}</p><br>
            <button class="button"><span>Read Article</span></button>
          </div>
        </div>
        <div class="page-details">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000" class="bi bi-arrow-left" viewBox="0 0 16 16" @click="previousPlace()">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
          </button>
          <p>{{selectedPage+1}} - {{slideshowData.length}}</p>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000" class="bi bi-arrow-right" viewBox="0 0 16 16" @click="nextPlace()">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    </div>
<!--
<div class="press-latest-card-outer">
    <div class="press-latest-card">
      <div class="card-back">
        <div class="image">
          <img
            :src="slideshowData[selectedPage].image"
            alt="Latest News Image"
          />
        </div>
        
      </div>
      <div class="card-front">
        <div class="heading">
          <div class="title">News</div>
          <div class="subtitle" >{{slideshowData[selectedPage].title}}</div>
        </div>
        <div class="content" >
          {{slideshowData[selectedPage].body}}
        </div>
        <div class="button">
          <button>Read Article</button>
        </div>
      </div>
    </div>

    
    <div class="pages">
      <arrow-left @click="previousPage()" />
      <div class="page-number">
       {{selectedPage+1}} - {{slideshowData.length}}
      </div>
      <arrow-right @click="nextPage()" />
    </div>
  </div>
     <div class="main_news">
        <div class="left_news">
            <img class="images" :src="slideshowData[selectedPage].image">
        </div>
        <div class="right_news">
            <div class="content">
            <h1 class="hh">{{slideshowData[selectedPage].title}}</h1>
            <p>{{slideshowData[selectedPage].body}}</p>
            </div>
            <button class="bt-1">Read Article</button>
        </div>
    </div>
    <div class="bt">
    <button style="padding: 0;border: none;background: none;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000" class="bi bi-arrow-left" viewBox="0 0 16 16" style="width:30px;height:30px" @click="previousPlace()">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
          </button>
          <p class="txt">{{selectedPage+1}} - {{slideshowData.length}}</p>
          <button style="padding: 0;border: none;background: none;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000" class="bi bi-arrow-right" viewBox="0 0 16 16" style="width:30px;height:30px" @click="nextPlace()">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
    </button>
    </div>
   -->
</template>
<script type="module" src="./news.ts"></script>
<style lang="sass">
@import "./news.scss"
</style>
