<script setup>
import { RouterLink } from 'vue-router'
import HightLight from '@/components/HightLight.vue'
</script>

<template>
  <!-- 品牌故事標題圖 -->
  <div class="mt-80 mt-sm-70 brand-title">
    <h1 class="h1 text-white text-center h3-md">
      品牌故事<br /><span class="eng-title">Brand Story</span>
    </h1>
  </div>
  <!-- 主要內容 -->
  <div class="container py-16">
    <div class="row">
      <!-- 品牌highlight -->
      <div class="col-8 mx-auto mb-12 col-md-4">
        <div class="bg-primary-100 py-8 border-radius-3 p-md-6">
          <h3 class="h5 text-primary-400 text-center mb-3 text-align-md-start">
            走出城市的節奏，穿上自己的步調。
          </h3>
          <p class="text-center mb-1 text-align-md-start">我們相信，每一雙鞋都該帶著個性出場。</p>
          <p class="text-center mb-1 text-align-md-start">
            在 URBNSTEP，我們認為鞋履不只是穿戴飾品，更是你與世界連結的語言。
          </p>
          <p class="text-center text-align-md-start">
            融合城市結構與機能語彙，我們打造適合都會節奏的風格鞋款，陪你自信穿梭每一場風景。
          </p>
        </div>
      </div>
      <!-- 品牌介紹 -->
      <div class="col-10 mx-auto mb-8 col-md-4 mb-md-4">
        <img src="../assets/images/brand-story/about.png" alt="品牌介紹" />
      </div>
      <div class="col-8 mx-auto mb-12 col-md-4 mb-md-8">
        <div class="pb-12 section-line pb-md-8">
          <h2 class="h4 mb-6 h5-md mb-md-4">品牌介紹</h2>
          <p class="h5 text-primary-400 mb-4 h6-md mb-md-3">
            URBNSTEP 是來自台灣的街頭機能鞋品牌，致力於打造「風格與功能並存」的鞋履體驗。
          </p>
          <p class="mb-4 mb-md-3">
            在城市與日常的交錯中，我們看見了步伐的力量。URBNSTEP
            誕生於一群設計師與文化觀察者的交會點——一個相信風格應該來自「真實場景」而非伸展台的團隊。從都市的清晨街角，到午後光影灑落的人行道，我們捕捉的是那些不被刻意編排的時刻，那些用一雙鞋踏出的態度與節奏。每一款鞋的誕生，不只是設計與工藝的結晶，更是一段來自城市靈感的延伸，我們相信：鞋，是穿在腳上的語言。
          </p>
          <p>
            URBNSTEP 的名字來自 Urban +
            Step，代表著我們對每一個走進城市生活的人致敬。我們不追逐潮流，我們關注輪廓、材質、穿著者的心境與身型，創造能陪伴你走進自我節奏的經典之作。選用高品質麂皮、織物與天然橡膠大底，並與獨立插畫家、攝影師合作，打造具有街頭詩意的形象風格。URBNSTEP
            相信，美不是炫耀，而是由內而外的呼吸——一雙鞋，剛好說出你心中的樣子。
          </p>
        </div>
      </div>
      <!-- 品牌歷程 -->
      <div class="col-8 mx-auto mb-12 col-md-4 mb-md-8">
        <div class="pb-12 section-line pb-md-8">
          <h2 class="h4 mb-6 h5-md mb-md-4">品牌歷程</h2>
          <ol class="history-list">
            <li class="mb-3 mb-md-3">
              <time class="pe-2">2019</time
              ><span class="history-desc">URBNSTEP 在台北東區的創意工作室誕生。</span>
            </li>
            <li class="mb-3 mb-md-3">
              <time class="pe-2">2021</time
              ><span class="history-desc"
                >首款【Urban Flow 系列】誕生，結合針織鞋面與城市靈感。</span
              >
            </li>
            <li>
              <time class="pe-2">2025</time
              ><span class="history-desc">URBNSTEP 已成為台灣街頭生活風格的代表鞋履品牌之一。</span>
            </li>
          </ol>
        </div>
      </div>
      <!-- 品牌理念 -->
      <div class="col-8 mx-auto mb-12 col-md-4 mb-md-8">
        <div class="pb-12 section-line pb-md-8">
          <h2 class="h4 mb-6 h5-md mb-md-4">品牌理念</h2>
          <ul>
            <li class="mb-3 concept-item mb-md-3">機能先行：輕量、透氣、防潑水</li>
            <li class="mb-3 concept-item mb-md-3">美學延伸：極簡線條 + 實驗配色</li>
            <li class="concept-item">永續材料：選用環保合成皮革與可回收包裝</li>
          </ul>
        </div>
      </div>
      <!-- 品牌小故事 -->
      <div class="col-8 mx-auto col-md-4">
        <div class="pb-12 section-line brand-story pb-md-8">
          <h2 class="h4 mb-6 h5-md">品牌小故事</h2>
          <RouterLink class="fw-500 d-block text-decoration-underline text-primary-400 py-2 mb-1" to="/story"
            ><i class="bi bi-arrow-up-right me-2"></i>創辦人筆記：我們為什麼想做鞋？</RouterLink
          >
          <RouterLink class="fw-500 d-block text-decoration-underline text-primary-400 py-2 mb-1" to="/story"
            ><i class="bi bi-arrow-up-right me-2"></i>穿上 URBNSTEP 的他們</RouterLink
          >
          <RouterLink class="fw-500 d-block text-decoration-underline text-primary-400 py-2 mb-1" to="/story"
            ><i class="bi bi-arrow-up-right me-2"></i>URBNSTEP 鞋履的誕生過程</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
  <HightLight />
</template>
