<template>
  <section class="platform">
    <section class="container">
      <div class="core">
        <span class="title">{{ t('platform.title') }}</span>
        <span class="desc">{{ t('platform.desc') }}</span>
      </div>
      <!-- 业务 -->
      <section class="service">
        <span class="title">{{ t('platform.firstPartTitle') }}</span>
        <div class="data_grid">
          <span v-for="(item, index) in serviceList" :key="index" class="grid_item">
            <img :src="item.icon" alt="">
            <span class="label">{{ t(item.label) }}</span>
            <span class="desc">{{ t(item.desc) }}</span>
          </span>
        </div>
      </section>
      <!-- 在线支付 -->
      <section class="online">
        <div class="header">
          <img :src="Online" alt="">
          {{ t('platform.online') }}
        </div>
        <span class="title">{{ t('platform.onlineMainTitle') }}</span>
        <span class="desc">{{ t('platform.onlineMainDesc') }}</span>
        <span class="secondary">{{ t('platform.onlineSecondaryTitle') }}</span>
        <span class="tip">{{ t('platform.onlineSecondaryDesc') }}</span>
        <section class="onlineList">
          <div class="item" v-for="(item, index) in onlineList" :key="index">
            <span class="label">{{ t(item.label) }}</span>
            <span class="desc">{{ t(item.info) }}</span>
          </div>
        </section>
        <img class="onlineBg" :src="OnlineBg" alt="">
      </section>

      <!-- 数据洞察 -->
      <section class="data_check">
        <div class="header">
          <img :src="See" alt="">
          {{ t('platform.dataCheck') }}
        </div>
        <span class="title">{{ t('platform.dataCheckTitle') }}</span>
        <span class="desc">{{ t('platform.dataCheckDesc') }}</span>
        <img class="data_check_bg" :src="dataCheck" alt="">
      </section>

      <!-- 定制 -->
      <section class="custom">
        <span class="title">{{ t('platform.endTitle') }}</span>
        <span class="desc">{{ t('platform.endDesc') }}</span>
        <img class="customBg" :src="Custom" alt="">
      </section>
    </section>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import Global from '@/assets/images/global.svg'
import Chance from '@/assets/images/chance.svg'
import Online from '@/assets/images/online.svg'
import OnlineBg from '@/assets/images/online.jpg'
import See from '@/assets/images/see.svg'
import dataCheck from '@/assets/images/data_check.jpg'
import Custom from '@/assets/images/custom.jpg'

const { t } = useI18n()

const serviceList = [
  { icon: Global, label: 'platform.serviceList[0].label', desc: 'platform.serviceList[0].desc' },
  { icon: Chance, label: 'platform.serviceList[1].label', desc: 'platform.serviceList[1].desc' }
]

const onlineList = [
  { label: 'platform.onlineList[0].label', info: 'platform.onlineList[0].info' },
  { label: 'platform.onlineList[1].label', info: 'platform.onlineList[1].info' },
  { label: 'platform.onlineList[2].label', info: 'platform.onlineList[2].info' }
]
</script>

<style lang="scss" scoped>
.platform {
  display: flex;
  width: 100%;

  .container {
    padding: 30px 200px;
    max-width: 1944px;
    min-width: 270px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .core {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 96px;

      .title {
        margin-bottom: 12px;
        font-size: 64px;
        font-weight: 700;
        line-height: 74px;
        letter-spacing: -0.015em;
        text-align: center;
      }

      .desc {
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
        text-align: center;
      }
    }

    .service {
      width: 100%;
      margin-bottom: 96px;
      padding: 96px 0;
      border-top: 1px solid $main_color;

      display: flex;
      flex-direction: column;

      .title {
        padding: 0 12px;
        margin-bottom: 48px;
        font-size: 32px;
        font-weight: 700;
        letter-spacing: -0.015em;
        line-height: 42px;
      }

      .data_grid {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .grid_item {
          display: flex;
          flex-direction: column;

          img {
            width: 24px;
            height: 24px;
          }
          
          .label {
            margin: 24px 0 12px 0;
            font-size: 20px;
            font-weight: 700;
            line-height: 30px;
          }
        }
      }
    }

    .online {
      display: flex;
      flex-direction: column;

      width: 100%;
      padding-top: 96px;
      border-top: 1px solid $main_color;

      .header {
        display: flex;
        align-items: center;
        font-size: 24px;

        img {
          width: 24px;
          height: 24px;
          margin-right: 12px;
        }
      }

      .title {
        margin: 40px 0;
        font-size: 48px;
        line-height: 48px;
        font-weight: 700;
      }

      .desc {
        font-size: 24px;
      }

      .secondary {
        margin: 40px 0 10px 0;
        font-size: 30px;
      }

      .onlineList {
        margin-top: 40px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        .item {
          display: flex;
          flex-direction: column;
          max-width: 300px;

          .label {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 12px;
          }

          .desc {
            font-size: 15px;
            font-weight: 400;
          }
        }
      }

      .onlineBg {
        margin-top: 40px;
        width: 600px;
        height: auto;
      }
    }

    .data_check {
      width: 100%;
      margin-top: 96px;
      padding: 96px 0;
      border-top: 1px solid $main_color;

      display: flex;
      flex-direction: column;
      
      .header {
        display: flex;
        align-items: center;
        font-size: 24px;

        img {
          width: 24px;
          height: 24px;
          margin-right: 12px;
        }
      }

      .title {
        margin: 40px 0;
        font-size: 48px;
        line-height: 48px;
        font-weight: 700;
      }

      .desc {
        font-size: 24px;
      }

      .data_check_bg {
        margin-top: 40px;
        width: 600px;
        height: auto;
      }
    }

    .custom {
      width: 100%;
      margin-top: 48px;
      padding: 48px 0;
      border-top: 1px solid $main_color;

      display: flex;
      flex-direction: column;

      .title {
        margin: 40px 0;
        font-size: 48px;
        line-height: 48px;
        font-weight: 700;
      }

      .desc {
        font-size: 24px;
      }

      .customBg {
        margin-top: 40px;
        width: 400px;
        height: auto;
      }
    }
  }
}
</style>