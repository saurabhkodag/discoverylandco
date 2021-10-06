<template>
    <div class="press-grid-main-div">
        <h1 class="latest-news-header">Press</h1>
        <div class="press-grid-div">
            <div class="press-grid">
                <h1 v-text="pressData[index][0].heading"></h1>
                <p v-text="pressData[index][0].para"></p>
                <button class="btn1 btn-border-2">Read Article</button>
            </div>
            <div class="press-grid">
                <h1 v-text="pressData[index][1].heading"></h1>
                <p v-text="pressData[index][1].para"></p>
                <button class="btn1 btn-border-2">Read Article</button>
            </div>
            <div class="press-grid">
                <h1 v-text="pressData[index][2].heading"></h1>
                <p v-text="pressData[index][2].para"></p>
                <button class="btn1 btn-border-2">Read Article</button>
            </div>
            <div class="press-grid">
                <h1 v-text="pressData[index][3].heading"></h1>
                <p v-text="pressData[index][3].para"></p>
                <button class="btn1 btn-border-2">Read Article</button>
            </div>
        </div>

        <div v-for="items in pressData" v-bind:key="items" class="press-grid-div1">
            <div v-for="item in items" v-bind:key="item" class="press-grid">
                <h1 v-text="item.heading"></h1>
                <p v-text="item.para"></p>
                <button class="btn1 btn-border-2">Read Article</button>
            </div>
        </div>
    </div>
    <!-- <div class="page-details">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" style="boder:none;" fill="#000" class="bi bi-arrow-left" viewBox="0 0 16 16" @click="previousPlace()">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
          </button>
          <p>{{index+1}} - 15</p>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000" class="bi bi-arrow-right" viewBox="0 0 16 16" @click="nextPlace()">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </button>
        </div> -->
            <div class="pagination">
            <button class="arrow-buttons"  @click="changeIndex(-1)">&#8592;</button> 
            {{index+1}} - 15
            <button class="arrow-buttons" @click="changeIndex(1)">&#8594;</button> 
        </div>
</template>

<script type='module' src='./pressNews.ts'></script>