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
  <div class="pagination">
    <button class="arrow-buttons" @click="changeIndex(-1)">&#8592;</button>
    {{ index + 1 }} - 15
    <button class="arrow-buttons" @click="changeIndex(1)">&#8594;</button>
  </div>
</template>

<script type='module' src='./pressNews.ts'></script>