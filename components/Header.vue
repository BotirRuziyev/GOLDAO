<template>
  <header class="header">
    <div class="main_container">
      <div class="header_in d-flex align-items-center justify-content-between">
        <div class="logo">
          <nuxt-link to="/">
            <img src="~/assets/images/Logo.svg" alt="logosvg" />
          </nuxt-link>
        </div>
        <div
          class="header_in_menu d-flex flex-lg-row flex-column align-items-lg-center justify-content-lg-between w-100"
          :class="modal ? 'menu_active' : ''"
        >
          <div class="close_menu d-lg-none d-flex justify-content-end">
            <button class="close_menu_btn" @click="modal = false">
              <img height="30" src="~/assets/images/icons/menu-burger-close.svg" alt="menu-burger-close" />
            </button>
          </div>
          <nav class="nav_links d-lg-flex w-100 justify-content-between order-lg-1 order-2">
            <div class="nav_link d-none">
              <nuxt-link to="/">Главная</nuxt-link>
            </div>
            <div class="nav_link">
              <nuxt-link to="/">О проекте</nuxt-link>
            </div>
            <div class="nav_link">
              <nuxt-link to="/">Для бизнеса</nuxt-link>
            </div>
            <div class="nav_link active">
              <nuxt-link to="/">Для держателей</nuxt-link>
            </div>
            <div class="nav_link d-none">
              <nuxt-link to="/">Юридическая информация</nuxt-link>
            </div>
          </nav>
          <div class="header_contact d-flex align-items-center order-lg-2 order-1">
            <div class="region position-relative order-lg-1 order-4">
              <button
                class="region_btn d-flex align-items-center"
                :class="regionmod ? 'region_btn_active' : ''"
                @click="(regionmod = !regionmod), (langmod = false)"
              >
                <img src="~/assets/images/icons/region.svg" alt="region" />
                <div class="region_val">Регион</div>
              </button>
              <div class="region_menu position-absolute" :class="regionmod ? 'menu_active' : ''">
                <div
                  class="region_option d-flex align-items-center justify-content-center"
                  v-for="(region, i) in regionlist"
                  :key="i"
                  @click="(regionmod = !regionmod), regionFun(region)"
                >
                  {{ region }}
                </div>
              </div>
            </div>
            <div class="lang position-relative order-lg-2 order-3">
              <div
                class="language_widget d-flex align-items-center justify-content-center"
                :class="langmod ? 'language_widget_active' : ''"
                @click="(langmod = !langmod), (regionmod = false)"
              >
                RU
              </div>
              <div class="lang_menu position-absolute" :class="langmod ? 'menu_active' : ''">
                <div
                  class="lang_option d-flex align-items-center justify-content-center"
                  v-for="(lang, i) in langlist"
                  :key="i"
                  @click="(langmod = !langmod), langFun(lang)"
                >
                  {{ lang }}
                </div>
              </div>
            </div>
            <div class="contact_link order-lg-3 order-2">
              <a href="mailto:info@goldao.ru">
                <img src="~/assets/images/icons/message.svg" alt="messages" />
              </a>
            </div>
            <div class="contact_link order-lg-4 order-1">
              <a href="#">
                <img src="~/assets/images/icons/telegram.svg" alt="telegram" />
              </a>
            </div>
            <div class="login d-none">
              <a href="#" class="d-flex align-items-center justify-content-center"> Войти </a>
            </div>
          </div>
        </div>
        <button class="burger_btn d-lg-none" @click="modal = true">
          <svg width="24" height="20.5" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 1H0" stroke="#7D7F86" stroke-width="2" />
            <path d="M18 8H0" stroke="#7D7F86" stroke-width="2" />
            <path d="M18 15H0" stroke="#7D7F86" stroke-width="2" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
      langmod: false,
      regionmod: false,
      langlist: ["ENG", "RU", "UZ", "CHN", "KAZ"],
      regionlist: ["Россия", "Узбекистан", "Германия", "Италия", "Турция"],
    };
  },
  methods: {
    regionFun(region) {
      document.querySelector(".region_val").innerHTML = region;
    },
    langFun(lang) {
      document.querySelector(".language_widget").innerHTML = lang;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 26px 0;
  background-color: var(--white);
  position: sticky;
  top: 0;
  z-index: 100;
  .header_in {
    gap: 16px;
    .header_in_menu {
      gap: 10px;
      .close_menu {
        margin-bottom: 30px;
        .close_menu_btn {
          background-color: transparent;
          border: 0;
          img {
            filter: brightness(0) saturate(100%) invert(52%) sepia(10%) saturate(162%) hue-rotate(189deg)
              brightness(93%) contrast(93%);
          }
        }
      }
      .nav_links {
        max-width: 415px;
        gap: 5px;
        .nav_link {
          display: block;
          position: relative;
          &::after {
            content: "";
            width: 0;
            height: 2px;
            background-color: var(--yellow);
            position: absolute;
            bottom: calc(0px - 2px);
            left: 50%;
            transform: translateX(-50%);
            transition: 0.3s;
          }
          &:hover {
            &::after {
              width: 100%;
            }
            a {
              color: var(--black);
            }
          }
          a {
            display: block;
            border-radius: 22px;
            padding: 10px 15px;
            font-family: var(--font-family);
            font-weight: 600;
            font-size: 16px;
            line-height: 81%;
            text-align: center;
            color: var(--dark-gray);
            white-space: nowrap;
            text-decoration: none;
            transition: 0.3s;
          }
        }
        .active {
          a {
            background: var(--yellow);
            font-family: var(--font-family);
            font-weight: 600;
            font-size: 16px;
            line-height: 81%;
            text-align: center;
            color: var(--white);
          }
          &:hover {
            &::after {
              width: 0;
            }
            a {
              color: var(--white);
            }
          }
        }
      }
      .header_contact {
        gap: 16px;
        .region {
          .region_btn {
            background: var(--gray-for-background);
            gap: 5px;
            padding: 10px 20px 10px 12px;
            border: 0;
            border-radius: 22px;
            transition: 0.3s;
            &:hover {
              background: var(--black);
              img {
                filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(44deg)
                  brightness(103%) contrast(103%);
              }
              .region_val {
                color: var(--white);
              }
            }
            img {
              transition: 0.3s;
            }
            .region_val {
              font-family: var(--font-family);
              font-weight: 600;
              font-size: 16px;
              line-height: 81%;
              text-align: center;
              color: var(--dark-gray);
              cursor: pointer;
              user-select: none;
              transition: 0.3s;
            }
          }
          .region_btn_active {
            background: var(--black);
            color: var(--white);
            border-radius: 8px 8px 0 0;
            img {
              filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(44deg)
                brightness(103%) contrast(103%);
            }
            .region_val {
              color: var(--white);
            }
          }
          .region_menu {
            min-width: 100%;
            top: 100%;
            left: 0;
            transform: translate(0, 50px);
            border-radius: 0 0 8px 8px;
            overflow: hidden;
            opacity: 0;
            visibility: hidden;
            transition: 0.3s;
            .region_option {
              // min-width: 44px;
              // min-height: 44px;
              font-family: var(--second-family);
              font-weight: 600;
              font-size: 16px;
              color: var(--dark-gray);
              padding: 8px 0;
              cursor: pointer;
              background-color: var(--gray-for-background);
              transition: 0.3s;

              &:hover {
                background: var(--black);
                color: var(--white);
              }
            }
          }
          .menu_active {
            transform: translate(0, 0);
            opacity: 1;
            visibility: visible;
          }
        }
        .contact_link {
          img {
            transition: 0.3s;
          }
          &:hover {
            img {
              transform: scale(1.1);
            }
          }
        }
        .lang {
          .language_widget {
            width: 44px;
            height: 44px;
            border-radius: 100%;
            font-family: var(--second-family);
            font-weight: 600;
            font-size: 16px;
            line-height: 10px;
            color: var(--dark-gray);
            background-color: var(--gray-for-background);
            cursor: pointer;
            user-select: none;
            transition: 0.3s;

            &:hover {
              background: var(--black);
              color: var(--white);
            }
          }
          .language_widget_active {
            background: var(--black);
            color: var(--white);
          }
          .lang_menu {
            top: 100%;
            left: 50%;
            transform: translate(-50%, 50px);
            border-radius: 8px;
            overflow: hidden;
            opacity: 0;
            visibility: hidden;
            transition: 0.3s;
            .lang_option {
              min-width: 44px;
              min-height: 44px;
              font-family: var(--second-family);
              font-weight: 600;
              font-size: 16px;
              color: var(--dark-gray);
              padding: 8px 0;
              cursor: pointer;
              background-color: var(--gray-for-background);
              transition: 0.3s;

              &:hover {
                background: var(--black);
                color: var(--white);
              }
            }
          }
          .menu_active {
            transform: translate(-50%, 5px);
            opacity: 1;
            visibility: visible;
          }
        }
        .login {
          width: 113px;
          height: 44px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 22px;
          background: var(--black);
          user-select: none;
          transition: 0.3s;

          &:hover {
            background: var(--yellow);
            color: var(--white);
          }
          a {
            width: 100%;
            height: 100%;
            font-family: var(--font-family);
            font-weight: 400;
            font-size: 18px;
            line-height: 122%;
            text-align: center;
            color: var(--white);
            text-decoration: none;
          }
        }
      }
    }
    .burger_btn {
      background-color: transparent;
      border: 0;
      svg {
        vertical-align: top;
      }
    }
  }
}

// media
@media (max-width: 1350px) {
  .header {
    .header_in {
      .logo {
        img {
          width: 190px;
        }
      }
    }
  }
}
@media (max-width: 991px) {
  .header {
    .header_in {
      .header_in_menu {
        max-width: 50%;
        min-width: 450px;
        height: 100vh;
        background: #f5f5f5;
        flex-direction: column !important;
        position: fixed;
        top: 0;
        left: -100%;
        z-index: 999;
        padding: 30px 20px;
        visibility: hidden;
        transition: 0.5s;
        &::before {
          content: "";
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0);
          position: absolute;
          top: 0;
          left: 100%;
          z-index: -1;
          transition: 0.5s;
        }
        .close_menu_btn {
          display: block !important;
        }
        .nav_links {
          .nav_link {
            margin-bottom: 30px;
            &::after {
              display: none;
            }
            a {
              display: inline-block;
            }
          }
        }
        .header_contact {
          margin-bottom: 35px;
          .contact_link {
            display: block;
          }
          .region {
            .region_btn {
              padding: 7px 10px;
              img {
                height: 20px;
              }
            }
            .region_menu {
              .region_option {
                padding: 12px 0;
              }
            }
          }
        }
      }
      .menu_active {
        left: 0;
        visibility: visible;
        &::before {
          background-color: rgba(0, 0, 0, 0.3);
        }
      }
      .burger_btn {
        display: block !important;
      }
    }
  }
}
@media (max-width: 576px) {
  .header {
    padding: 9px 0;
    .header_in {
      .logo {
        img {
          width: 174px;
        }
      }
      .header_in_menu {
        width: 100%;
        max-width: 100%;
        min-width: 100%;
        padding: 16px;
        .close_menu {
          margin-bottom: 25px;
          .close_menu_btn {
            img {
              height: 25px;
            }
          }
        }
        &::before {
          display: none;
        }
        .header_contact {
          .contact_link {
            height: 35px;
            a {
              display: block;
            }
            img {
              height: 35px;
            }
          }
          .region {
            .region_btn {
              .region_val {
                font-size: 12px;
                line-height: 7px;
              }
            }
            .region_menu {
              .region_option {
                font-size: 12px;
                line-height: 7px;
                padding: 12px 0;
              }
            }
          }
          .lang {
            .language_widget {
              width: 35px;
              height: 35px;
              font-size: 12px;
              line-height: 7px;
            }
            .lang_menu {
              .lang_option {
                min-width: 35px;
                min-height: 30px;
                font-size: 12px;
                line-height: 7px;
                padding: 0;
              }
            }
          }
          .login {
            width: 90px;
            height: 35px;
            a {
              font-size: 14px;
              line-height: 122%;
            }
          }
        }
      }
      .burger_btn {
        svg {
          width: 18px;
          height: 16px;
        }
      }
    }
  }
}
</style>
