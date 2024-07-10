<template>
  <section class="main">
    <section class="container" @click="router.replace('/platform')">
      <div class="content">
        <span>
          {{ t('home.firstDesc') }}
        </span>
        <span>
          {{ t('home.secondDesc') }}
        </span>
      </div>
      
      <!-- 轮播图 -->
      <el-carousel :interval="3000" arrow="never">
        <el-carousel-item v-for="(item, index) in bannerList" :key="index">
          <img :src="item" alt="" >
        </el-carousel-item>
      </el-carousel>
    </section>
  </section>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n'

import banner1 from '@/assets/images/banner1.jpg'
import banner2 from '@/assets/images/banner2.jpg'
import banner3 from '@/assets/images/banner3.jpg'

const router = useRouter()
const { t } = useI18n()

const bannerList = [banner1, banner2, banner3]
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 30px;

  .container {
    position: relative;
    margin-bottom: 40px;
    width: 100%;
    line-height: 1.5;

    .content {
      box-sizing: border-box;
      position: absolute;
      z-index: 100;
      padding: 100px;
      text-align: center;

      width: 100%;
      height: calc(100vh - 72px);

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      span {
        color: #fff;
        font-weight: 700;
      }
    }
    
    :deep(.el-carousel__container) {
      width: 100%;
      height: calc(100vh - 72px);

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>