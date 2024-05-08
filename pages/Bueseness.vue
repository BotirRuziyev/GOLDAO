<template>
  <div class="bueseness page_section" id="bueseness">
    <section class="home">
      <h1 class="title">Эмиссионные монеты для бизнеса</h1>
      <p class="description">
        Используйте эмиссионные монеты из золота, серебра или платины, которые
        выпускают Центральные Банки разных стран, в коммерческой деятельности
      </p>
    </section>

    <!-- import export contracts start -->
    <section class="import_export_contracts">
      <div class="title_small d-sm-block d-none">
        Эмиссионные монеты для взаиморасчетов по импортно-экспортным контрактам
      </div>
      <div class="import_export_contracts_form">
        <div class="calculations_coins">
          <div class="calculations_coins_title">
            Взаиморасчет с применением монет
          </div>
          <form action="#" class="calculations_coins_form d-flex flex-column">
            <div class="form_control">
              <form-select
                label="Страна компании-покупателя"
                :selected="true"
                :options="[
                  'Выберите страну',
                  'Россия',
                  'Узбекистан',
                  'Америка',
                ]"
                :class="calculation ? 'final_settlement' : ''"
              ></form-select>
            </div>
            <div class="form_control d-flex flex-sm-row flex-column">
              <form-input
                placeholder="Введите сумму"
                label="Сумма взаиморасчета"
                :value="value"
                :class="calculation ? 'final_settlement' : ''"
              ></form-input>
              <form-select
                class="currency"
                label="Валюта взаиморасчёта"
                :options="['USD', 'RUB', 'UZS']"
                :class="calculation ? 'final_settlement' : ''"
              ></form-select>
            </div>
            <div class="form_control">
              <form-select
                label="Страна компании-продавца"
                :selected="true"
                :options="[
                  'Выберите страну',
                  'Россия',
                  'Узбекистан',
                  'Америка',
                ]"
                :class="calculation ? 'final_settlement' : ''"
              ></form-select>
            </div>
            <div class="form_control">
              <form-select
                label="Валюта получения продавцом"
                :selected="true"
                :options="['Выберите валюту', 'USD', 'RUB', 'UZS']"
                :class="calculation ? 'final_settlement' : ''"
              ></form-select>
            </div>
            <div class="form_bottom d-flex flex-column align-items-center">
              <div class="comission" v-if="calculation">Комиссия - 4%</div>
              <div
                class="calculete_btn d-flex justify-content-center w-100"
                v-if="!calculation"
              >
                <ul-button
                  btncontent="Рассчитать"
                  @click="CalculationFun"
                ></ul-button>
              </div>
              <div
                class="calculations_coins_more_btn d-flex flex-sm-row flex-column align-items-center w-100"
                v-if="calculation"
              >
                <ul-button
                  btncontent="Сбросить значения"
                  class="reset_btn order-sm-1 order-2"
                  @click="ResetFun"
                ></ul-button>
                <nuxt-link
                  to="/holders-detali"
                  class="more_details_btn w-100 order-sm-2 order-1"
                  >Подробнее</nuxt-link
                >
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    <!-- import export contracts end -->

    <!-- countries currencies  start -->
    <section class="countries_currencies">
      <div class="title_small">Валюты стран участников взаиморасчетов</div>
      <!-- <div class="currencies_swiper d-flex align-items-center w-100">
        <div
          class="swiper_slide d-flex align-items-center"
          v-for="(slide, i) in currencies"
          :key="i"
        >
          <div class="currencies_icon">
            {{ slide.slice(0, 1) }}
          </div>
          <div class="currencies_name">
            {{ slide.slice(1, slide.length) }}
          </div>
        </div>
      </div> -->
      <Swiper
        :loop="true"
        :breakpoints="{
          '0': {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
          '400': {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          '768': {
            slidesPerView: 3.5,
            spaceBetween: 53,
          },
          '992': {
            slidesPerView: 4.5,
            spaceBetween: 53,
          },
          '1200': {
            slidesPerView: 5.5,
            spaceBetween: 53,
          },
        }"
        class="currencies_swiper mySwiper"
      >
        <SwiperSlide
          v-for="(slide, i) in currencies"
          :key="i"
          class="swiper_slide d-flex align-items-center"
        >
          <div class="currencies_icon">
            {{ slide.slice(0, 1) }}
          </div>
          <div class="currencies_name">
            {{ slide.slice(1, slide.length) }}
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
    <!-- countries currencies end -->

    <!-- advantages start -->
    <Advantages />
    <!-- advantages end -->

    <!-- about start -->
    <About
      to=""
      page_title="Расчет взаиморасчетов по импортно-экспортным сделкам в нашем Телеграм"
      button_content="Написать"
    />
    <!-- about end -->
    <!-- question answer start -->
    <QuestionAnswer />
    <!-- question answer end -->
  </div>
</template>
<script>
import FormInput from "~/components/Ul/FormInput.vue";
import FormSelect from "~/components/Ul/FormSelect.vue";
import UlButton from "~/components/Ul/UlButton.vue";
export default {
  components: { FormSelect, FormInput, UlButton },
  data() {
    return {
      value: "",
      calculation: false,
      currencies: [
        "€ Евро",
        "$ Доллар США",
        "¥ Китайский юань",
        "₹ Индийская рупия",
        "₽ Российский рубль",
        "£ Фунт стерлингов",
        "₣ Швейцарский франк",
      ],
    };
  },
  methods: {
    CalculationFun(e) {
      document.querySelectorAll("select").forEach((select) => {
        select.setAttribute("disabled", false);
      });
      document.querySelectorAll("input").forEach((input) => {
        input.setAttribute("readonly", true);
        this.value = input.value;
      });
      this.calculation = true;
      e.preventDefault();
    },
    ResetFun(e) {
      document.querySelectorAll("select").forEach((select) => {
        select.removeAttribute("disabled");
      });
      document.querySelectorAll("input").forEach((input) => {
        input.removeAttribute("readonly");
      });
      this.calculation = false;
      e.preventDefault();
    },
  },
};
</script>

<style lang="scss">
.bueseness {
  .home {
    padding: 64px 32px 0;
    .description {
      max-width: 1100px;
      margin: 0 auto;
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 24px;
      line-height: 125%;
      letter-spacing: -0.02em;
      text-align: center;
      color: var(--black);
    }
  }
  .import_export_contracts {
    padding: 64px 0 0;
    .title_small {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 32px;
      line-height: 106%;
      letter-spacing: -0.01em;
      text-align: center;
      color: var(--black);
      margin-bottom: 30px;
      padding: 0 32px;
    }
    .import_export_contracts_form {
      max-width: 1138px;
      margin: 0 auto;
      padding: 70px 32px 112px;
      background: url("~/assets/images/map.png") no-repeat center;
      .calculations_coins {
        max-width: 448px;
        margin: 0 auto;
        border: 1px solid var(--light-gray);
        border-radius: 16px;
        padding: 35px 40px;
        box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.07);
        background: var(--white);
        .calculations_coins_title {
          font-family: var(--font-family);
          font-weight: 400;
          font-size: 24px;
          line-height: 125%;
          letter-spacing: -0.02em;
          text-align: center;
          color: var(--black);
          margin-bottom: 16px;
        }
        .calculations_coins_form {
          gap: 16px;
          .form_control {
            gap: 8px;
            padding: 0 10px;
            .input_wrapper {
              width: 100%;
            }
            .currency {
              max-width: 113px;
              .select_label {
                display: none;
              }
            }
          }
          .form_bottom {
            gap: 16px;
            .comission {
              font-family: var(--font-family);
              font-weight: 400;
              font-size: 24px;
              line-height: 125%;
              letter-spacing: -0.02em;
              text-align: center;
              color: var(--black);
            }
            .calculete_btn {
              button {
                max-width: 234px;
                width: 100%;
              }
            }
            .calculations_coins_more_btn {
              gap: 16px;
              .reset_btn {
                width: 100%;
                background-color: var(--white);
                color: var(--black);
                border: 2px solid #dde4ee;
                &:hover {
                  background: var(--yellow);
                  color: var(--white);
                  border-color: var(--yellow);
                }
              }
              .more_details_btn {
                max-width: 148px;
                background-color: var(--black);
                border-radius: 22px;
                padding: 11px 0;
                font-family: var(--font-family);
                font-weight: 400;
                font-size: 18px;
                line-height: 125%;
                text-align: center;
                color: var(--white);
                text-decoration: none;
                transition: 0.3s;
                &:hover {
                  background: var(--yellow);
                  color: var(--white);
                }
              }
            }
          }
        }
      }
    }
  }
  .countries_currencies {
    padding: 40px 0 60px;
    margin-top: 64px;
    background: var(--gray-for-background);
    overflow: hidden;
    .title_small {
      font-family: var(--font-family);
      font-weight: 600;
      font-size: 24px;
      line-height: 100%;
      letter-spacing: -0.01em;
      text-align: center;
      color: var(--black);
      margin-bottom: 34px;
    }
    .currencies_swiper {
      .swiper_slide {
        gap: 16px;
        &:nth-child(1) {
          padding-left: 53px;
        }
        // &:nth-child(2) {
        //   max-width: 148px;
        // }
        // &:nth-child(3) {
        //   max-width: 174px;
        // }
        // &:nth-child(4) {
        //   max-width: 182px;
        // }
        // &:nth-child(5) {
        //   max-width: 189px;
        // }
        // &:nth-child(6) {
        //   max-width: 178px;
        // }
        // &:nth-child(7) {
        //   max-width: 214px;
        // }
        .currencies_icon {
          font-family: var(--font-family);
          font-weight: 400;
          font-size: 40px;
          line-height: 112%;
          letter-spacing: -0.02em;
          text-align: center;
          color: var(--light-gray);
        }
        .currencies_name {
          font-family: var(--font-family);
          font-weight: 400;
          font-size: 18px;
          line-height: 122%;
          color: var(--black);
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .bueseness {
    .home {
      padding: 32px 16px 0;
      .description {
        font-size: 18px;
        line-height: 122%;
      }
    }
    .import_export_contracts {
      padding-top: 32px;
      .import_export_contracts_form {
        background-size: calc(100% + 106px);
        background-position: top;
        width: 100%;
        padding: 190px 16px 0;
        .calculations_coins {
          padding: 35px 30px;
          gap: 16px;
          .calculations_coins_title {
            font-weight: 600;
            line-height: 100%;
            letter-spacing: -0.01em;
            padding: 0 11px;
          }
          .calculations_coins_form {
            padding: 0;
            .form_control {
              padding: 0;
              .currency {
                max-width: 100%;
                width: 100%;
                .select_label {
                  display: block;
                }
              }
            }
            .form_bottom {
              gap: 16px;
              .calculations_coins_more_btn {
                gap: 16px;
                .more_details_btn {
                  width: 100%;
                  max-width: 100%;
                }
              }
            }
          }
        }
      }
    }
    .countries_currencies {
      padding: 21px 0 34px;
      .title_small {
        font-weight: 700;
        font-size: 18px;
        line-height: 122%;
        margin-bottom: 14px;
      }
      .currencies_swiper {
        .swiper_slide {
          padding-left: 16px;
          &:first-child {
            padding-left: 30px;
          }
        }
      }
    }
  }
}
</style>
