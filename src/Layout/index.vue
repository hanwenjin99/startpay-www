<template>
  <section class="layou_container">
    <!-- 头部 -->
    <header class="header">
      <section class="header_page_container">
        <div class="header_grid">
          <div class="left">
            <div class="logo">Start Pay</div>
            <nav class="nav">
              <div class="guide">
                <span
                  class="navItem"
                  v-for="item in navList"
                  :key="item.key"
                  @click.stop="item.routePath && router.push(item.routePath)"
                >
                  {{ t(item.name) }}
                </span>
              </div>
            </nav>
          </div>
          <!-- 语言切换 -->
          <el-dropdown>
            <span class="language">{{ t('header.language') }}</span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  v-for="item in languageList"
                  :key="item.key"
                  @click.stop="changeLanguage(item.key)"
                >{{ item.name }}</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </section>
    </header>
    <main class="main">
      <router-view />
    </main>
    <footer class="footer">
      <section class="container">
        <div class="left">
          <span @click.stop="router.push('/about')">{{ t('footer.about') }}</span>
          <span>{{ t('footer.termsOfService') }}</span>
          <span>{{ t('footer.developDocument') }}</span>
          <span>{{ t('footer.address') }}</span>
        </div>
        <div class="right_code">
          <img :src="Code" alt="">
          <span class="title">Telegram {{ t('footer.group') }}</span>
          <span class="desc">{{ t('footer.contact') }}</span>
        </div>
      </section>
    </footer>
  </section>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import Code from '@/assets/images/code.jpg'

const router = useRouter()
const { t, locale } = useI18n()

const languageList = [
  { key: 'zh', name: '简体中文' },
  { key: 'en', name: 'English' }
]

const navList = reactive([
  { key: 'homePage', name: 'header.homePage', routePath: '/' },
  { key: 'merchant', name: 'header.business' },
  { key: 'about', name: 'header.about', routePath: '/about' },
  { key: 'resource', name: 'header.documentAndResource' }
])

const changeLanguage = (key: string) => {
  locale.value = key
}
</script>

<style lang="scss" scoped>
.layou_container {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;
  min-height: 100vh;

  .header {
    background-color: #fff;
    height: 72px;
    position: sticky;
    top: 0;
    transform: translateY(0);
    width: 100%;
    z-index: 10;
    display: flex;
    justify-content: center;

    .header_page_container {
      padding: 0 96px;
      max-width: 1944px;
      min-width: 270px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 72px;

      .header_grid {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        width: 100%;

        .left {
          display: flex;
        }

        .logo {
          font-size: 36px;
          font-weight: bold;
          font-family: fantasy;
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          color: #00112c;

          .guide {
            display: flex;
            align-items: center;
            .navItem {
              margin-left: 24px;
              cursor: pointer;
              display: inline-flex;
              align-items: center;
              font-size: 16px;
              padding: 3px 0;
              line-height: 26px;

              img {
                width: 24px;
                height: 24px;
                margin-left: 10px;
              }
            }
          }
        }

        .language {
          color: #00112c !important;
          cursor: pointer;
          outline: none;
        }
      }
    }
  }
  
  .main {
    display: flex;
    flex: 1;
    z-index: 1;
    height: 100%;
    width: 100%;
  }

  .footer {
    height: 100%;
    min-height: 120px;
    background-color: $main_color;
    color: #fff;
    display: flex;
    justify-content: center;

    .container {
      padding: 60px 96px;
      max-width: 1944px;
      min-width: 270px;
      width: 100%;
      display: flex;
      justify-content: space-between;

      .left {
        display: flex;
        flex-direction: column;

        span {
          margin-bottom: 15px;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
          &:last-child:hover {
            text-decoration: none;
          }
        }
      }

      .right_code {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 170px;
        height: 250px;
        padding: 20px;
        box-sizing: border-box;
        border: 2px solid #fff;
        border-radius: 20px;

        img {
          width: 120px;
          height: 120px;
          border-radius: 8px;
        }

        .title {
          font-weight: bold;
          font-size: 16px;
          margin: 4px 0;
        }

        .desc {
          font-size: 14px;
          word-break: break-all;
        }
      }
    }
  }
}

// 调整下拉菜单样式
:deep(.el-dropdown-menu__item) {
  color: #00112c;
}

:deep(.el-dropdown-menu__item:not(.is-disabled):focus) {
  background-color: #00112c;
  color: #fff;
}
</style>