<template>
  <div class="header_wrapper">
    <header class="header">
      <div class="main_container">
        <div
          class="header_in d-flex align-items-center justify-content-between"
        >
          <div class="logo">
            <nuxt-link :to="localePath('/')">
              <img src="~/assets/images/Logo.svg" alt="logosvg" />
            </nuxt-link>
          </div>
          <div
            class="header_in_menu d-flex flex-md-row flex-column align-items-md-center justify-content-md-between w-100"
            :class="menumodal ? 'menu_active' : ''"
          >
            <div class="close_menu d-md-none d-flex justify-content-end">
              <button class="close_menu_btn" @click="menumodal = false">
                <img
                  height="30"
                  src="~/assets/images/icons/menu-burger-close.svg"
                  alt="menu-burger-close"
                />
              </button>
            </div>
            <nav
              class="nav_links d-md-flex w-100 justify-content-between order-md-1 order-2"
            >
              <div class="nav_link">
                <nuxt-link :to="localePath('/about')">{{
                  $t("header.header_links.about")
                }}</nuxt-link>
              </div>
              <div
                class="nav_link"
                :class="
                  fullPathUrl.slice(3, fullPathUrl.length) == '/buiseness'
                    ? 'active'
                    : ''
                "
              >
                <nuxt-link :to="localePath('/buiseness')">
                  {{ $t("header.header_links.business") }}</nuxt-link
                >
              </div>
              <div
                class="nav_link"
                :class="
                  fullPathUrl.slice(3, fullPathUrl.length) ==
                    '/holders-detali' ||
                  fullPathUrl.slice(3, fullPathUrl.length) == '/holders'
                    ? 'active'
                    : ''
                "
              >
                <nuxt-link :to="localePath('/holders-detali')">
                  {{ $t("header.header_links.holders") }}</nuxt-link
                >
              </div>
            </nav>
            <div
              class="header_contact d-flex align-items-center order-md-2 order-1"
            >
              <div class="region position-relative order-md-1 order-4">
                <button
                  class="region_btn d-flex align-items-center"
                  :class="modal ? 'region_btn_active' : ''"
                  @click="(modal = true), (langmod = false)"
                >
                  <img src="~/assets/images/icons/region.svg" alt="region" />
                  <div class="region_val" v-if="locale == 'ru'">Регион</div>
                  <div class="region_val" v-if="locale == 'en'">Region</div>
                </button>
              </div>
              <div class="lang position-relative order-md-2 order-3">
                <div
                  class="language_widget d-flex align-items-center justify-content-center"
                  :class="langmod ? 'language_widget_active' : ''"
                  @click="(langmod = !langmod), (regionmod = false)"
                >
                  {{ locale }}
                </div>
                <div
                  class="lang_menu position-absolute"
                  :class="langmod ? 'menu_active' : ''"
                >
                  <div
                    class="lang_option d-flex align-items-center justify-content-center"
                    v-for="(lang, i) in countries"
                    :key="i"
                    @click="(langmod = !langmod), langFun(lang)"
                  >
                    {{ lang }}
                  </div>
                </div>
              </div>
              <div class="contact_link order-md-3 order-2">
                <a href="mailto:info@goldao.ru">
                  <img src="~/assets/images/icons/message.svg" alt="messages" />
                </a>
              </div>
              <div class="contact_link order-md-4 order-1">
                <a href="#">
                  <img
                    src="~/assets/images/icons/telegram.svg"
                    alt="telegram"
                  />
                </a>
              </div>
              <div class="login d-none">
                <a
                  href="#"
                  class="d-flex align-items-center justify-content-center"
                >
                  Войти
                </a>
              </div>
            </div>
          </div>
          <button class="burger_btn d-md-none" @click="menumodal = true">
            <svg
              width="24"
              height="20.5"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 1H0" stroke="#7D7F86" stroke-width="2" />
              <path d="M18 8H0" stroke="#7D7F86" stroke-width="2" />
              <path d="M18 15H0" stroke="#7D7F86" stroke-width="2" />
            </svg>
          </button>
        </div>
      </div>
    </header>
    <!-- language selection modal start -->
    <div
      class="language_selection_modal position-fixed w-100 d-flex align-items-center justify-content-center"
      :class="modal ? 'active' : ''"
    >
      <div class="modal_in_wrapper">
        <div class="modal_in d-flex flex-column align-items-center">
          <div class="close_img d-flex justify-content-end w-100">
            <button
              class="close_btn bg-transparent border-0"
              @click="modal = false"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L12.25 12.25M23.5 23.5L12.25 12.25M12.25 12.25L23.5 1L1 23.5"
                  stroke="#DCDCDC"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
          <p class="description_big">
            <span>GOLDAO</span> {{ $t("header.modal.description_big") }}
          </p>
          <form
            action="#"
            class="language_selection_form d-flex flex-column align-items-center"
            @submit.prevent="accept"
          >
            <div class="form_control w-100">
              <form-select
                :label="$t('header.modal.labels.one')"
                :options="regions"
              ></form-select>
            </div>
            <div class="form_control w-100">
              <form-select
                :label="$t('header.modal.labels.two')"
                :options="
                  locale == 'ru'
                    ? [
                        { value: 'ru', content: 'Русский' },
                        { value: 'en', content: 'Американский' },
                      ]
                    : [
                        { value: 'ru', content: 'Russian' },
                        { value: 'en', content: 'American' },
                      ]
                "
                @update:value="langSwitch"
              ></form-select>
            </div>
            <p class="description_small">
              {{ $t("header.modal.description_small") }}
              <a href="https://goldao.org" target="_blank">goldao.org</a>
            </p>
            <button class="accept_btn" @click="changeLanguage">
              {{ $t("header.modal.accept_btn") }}
            </button>
          </form>
        </div>
      </div>
    </div>
    <!-- language selection modal end -->
  </div>
</template>

<script>
import FormSelect from "./Ul/FormSelect.vue";
import { useAvailableCountries } from "~/api/countries.js";
import { useCompanies } from "~/api/company.js";
export default {
  components: { FormSelect },
  async setup() {
    const { locale, locales, setLocale } = useI18n();
    const { data: companies } = await useCompanies();
    const { data: countries } = await useAvailableCountries();
    return { countries, locale, companies };
  },
  data() {
    return {
      modal: false,
      menumodal: false,
      langmod: false,
      regionmod: false,
      langlist: ["ENG", "RU"],
      regions: [],
      lang: "",
      useI18n: useI18n(),
    };
  },
  mounted() {
    setTimeout(this.language, 1000);
    this.companies.content.forEach((element) => {
      this.regions.push(element.region);
    });
  },
  methods: {
    langFun(lang) {
      document.querySelector(".language_widget").innerHTML = lang;
    },
    language() {
      this.modal = true;
    },
    langSwitch(val) {
      localStorage.setItem("lang", val);
    },
    changeLanguage() {
      this.useI18n.setLocale(`${localStorage.getItem("lang")}`);
      this.modal = false;
    },
  },
  computed: {
    fullPathUrl: function () {
      return this.$route.fullPath;
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
            filter: brightness(0) saturate(100%) invert(52%) sepia(10%)
              saturate(162%) hue-rotate(189deg) brightness(93%) contrast(93%);
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
                filter: brightness(0) saturate(100%) invert(100%) sepia(0%)
                  saturate(0%) hue-rotate(44deg) brightness(103%) contrast(103%);
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
            img {
              filter: brightness(0) saturate(100%) invert(100%) sepia(0%)
                saturate(0%) hue-rotate(44deg) brightness(103%) contrast(103%);
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
            text-transform: uppercase;
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
            max-height: 300px;
            top: 100%;
            left: 50%;
            transform: translate(-50%, 50px);
            border-radius: 8px;
            overflow: auto;
            opacity: 0;
            visibility: hidden;
            transition: 0.3s;

            &::-webkit-scrollbar {
              width: 0;
            }
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
.index_header {
  display: none;
}

.language_selection_modal {
  height: 100vh;
  background: rgba(35, 36, 48, 0);
  top: 0;
  padding: 16px;
  z-index: 101;
  visibility: hidden;
  transition: 0.5s;
  .modal_in_wrapper {
    max-width: 810px;
    width: 100%;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.25);
    background: var(--yellow);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 32px;
    padding: 20px;
    transform: translateY(200px);
    opacity: 0;
    transition: 0.5s;
    .modal_in {
      box-shadow: 0 0 16px 0 rgba(28, 31, 41, 0.5);
      background: var(--white);
      border: 2px solid var(--yellow);
      border-radius: 16px;
      padding: 40px;
      gap: 16px;
      .close_btn {
        margin: -25px -25px 0 0;
      }
      .description_big {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 24px;
        line-height: 125%;
        letter-spacing: -0.02em;
        text-align: center;
        color: var(--black);
        margin-top: -16px;
        margin-bottom: 0;
        span {
          font-weight: 600;
        }
      }
      .language_selection_form {
        gap: 16px;
        .form_control {
          max-width: 348px;
          margin: 0 auto;
        }
        .description_small {
          max-width: 524px;
          width: 100%;
          border-radius: 16px;
          padding: 13px 10px;
          background: var(--gray-for-background);
          font-family: var(--font-family);
          font-weight: 400;
          font-size: 14px;
          line-height: 107%;
          text-align: center;
          color: var(--black);
          margin-bottom: 0;
          a {
            text-decoration: none;
            color: var(--black);
          }
        }
        .accept_btn {
          max-width: 148px;
          width: 100%;
          background-color: var(--black);
          border-radius: 22px;
          padding: 11px;
          border: 0;
          font-family: var(--font-family);
          font-weight: 400;
          font-size: 18px;
          line-height: 122%;
          text-align: center;
          color: var(--white);
          transition: 0.3s;

          &:hover {
            background-color: var(--yellow);
          }
        }
      }
    }
  }
}
.language_selection_modal.active {
  background: rgba(35, 36, 48, 0.49);
  visibility: visible;
  .modal_in_wrapper {
    transform: translateY(0);
    opacity: 1;
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
@media (max-width: 992px) {
  .header {
    padding: 15px 0;
    .header_in {
      gap: 10px;
      .logo {
        img {
          width: 150px;
        }
      }
      .header_in_menu {
        .nav_links {
          max-width: 325px;
          gap: 0;
          .nav_link {
            a {
              font-size: 13px;
              line-height: 81%;
              padding: 7px 12px;
            }
          }
        }
        .header_contact {
          gap: 10px;
          .region {
            .region_btn {
              padding: 7px 10px;
              .region_val {
                font-size: 12px;
                line-height: 71%;
              }
              img {
                height: 18px;
              }
            }
            .region_menu {
              .region_option {
                padding: 10px 0;
                font-size: 12px;
                line-height: 71%;
              }
            }
          }
          .lang {
            .language_widget {
              width: 32px;
              height: 32px;
              font-size: 10px;
              line-height: 8px;
            }
            .lang_menu {
              border-radius: 5px;
              .lang_option {
                min-width: 32px;
                min-height: 32px;
                font-size: 10px;
                line-height: 8px;
              }
            }
          }
          .contact_link {
            img {
              height: 32px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
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
        transition: 0.3s;
        &::before {
          content: "";
          width: 100%;
          height: 100%;
          background: rgba(35, 36, 48, 0);
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
          background: rgba(35, 36, 48, 0.49);
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
        padding: 9px 12px;
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
  .index_header {
    display: block;
  }
  .language_selection_modal {
    .modal_in_wrapper {
      padding: 10px;
      border-radius: 15px;
      .modal_in {
        padding: 20px;
        border-radius: 12px;
        .close_img {
          .close_btn {
            margin-top: -10px;
            margin-right: -10px;
            svg {
              height: 20px;
            }
          }
        }
        .description_big {
          font-size: 16px;
          line-height: 18px;
          margin-bottom: 0;
        }
        .language_selection_form {
          .description_small {
            font-size: 12px;
            line-height: 12px;
          }
          .accept_btn {
            font-size: 14px;
            padding: 8px;
          }
        }
      }
    }
  }
}
</style>
