<template>
  <section class="about">
    <section class="container">
      <div class="explain">
        <span class="title">{{ t('about.firstLabel') }}</span>
        <span class="desc">{{ t('about.firstDesc') }}</span>
      </div>
      <div class="explain">
        <span class="title">{{ t('about.secondLabel') }}</span>
        <span class="desc">{{ t('about.secondDesc') }}</span>
      </div>
      <div class="explain">
        <span class="title">{{ t('about.thirdLabel') }}</span>
        <span class="desc">{{ t('about.thirdDesc') }}</span>
      </div>
      <div class="explain">
        <span class="title">{{ t('about.fourthLabel') }}</span>
        <span class="desc">{{ t('about.fourthDesc') }}</span>
      </div>
      <!-- 覆盖图 -->
      <img :src="Scope" alt="">
      <div class="explain">
        <span class="title">{{ t('about.fifthLabel') }}</span>
        <span class="desc">{{ t('about.fifthDesc') }}</span>
      </div>
      <!-- 联系方式 -->
      <div class="contact">
        <span>{{ t('about.contacts') }}：</span>
        <span>{{ t('about.weChat') }}：</span>
        <span>Tg：</span>
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

import Scope from '@/assets/images/scope.jpg'

const { t } = useI18n()
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  width: 100%;
  .container {
    padding: 10px 200px;
    max-width: 1944px;
    min-width: 270px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .explain {
      margin-bottom: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 66%;

      .title {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 12px;
        letter-spacing: -0.015em;
        line-height: 42px;
      }

      .desc {
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
      }
    }

    .contact {
      display: flex;
      flex-direction: column;
      max-width: 1944px;
      min-width: 270px;
      width: 66%;

      span {
        margin-bottom: 20px;
      }
    }
  }
}
</style>