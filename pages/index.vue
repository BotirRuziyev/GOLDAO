<template>
  <div class="index_page">
    <!-- home start -->
    <section class="home d-flex flex-column align-items-center">
      <div class="logo d-sm-block d-none">
        <img src="~/assets/images/Logo.svg" alt="" />
      </div>
      <p class="description">
        Не банковская инфраструктура для коммерческого применения эмиссионных
        монет из золота, серебра или платины
      </p>
      <div class="home_card d-grid w-100">
        <div class="card_item" v-for="item of homecard" :key="item.id">
          <div class="card_img text-center">
            <img :src="item.img" alt="06" />
          </div>
          <div class="card_title">{{ item.title }}</div>
        </div>
      </div>
    </section>
    <!-- home end -->

    <!-- International settlement start -->
    <section class="international_settlement">
      <div class="main_container">
        <div
          class="international_settlement_in d-flex flex-column align-items-center position-relative"
        >
          <div class="head">
            <h2 class="title">Применение GOLDAO</h2>
            <p class="description">
              Международные взаиморасчеты с помощью эмиссионных монет
            </p>
          </div>
          <form
            action="#"
            @submit.prevent="calculate = true"
            class="international_settlement_form d-flex flex-column align-items-center position-relative"
          >
            <div class="international_settlement_form_in d-grid">
              <div class="send_form">
                <div class="form_control_head">Откуда отправить?</div>
                <div class="form_control">
                  <form-select
                    label=""
                    :options="[
                      'Выберите страну',
                      'Россия',
                      'Узбекистан',
                      'Америка',
                    ]"
                  ></form-select>
                </div>
                <div class="form_control d-flex">
                  <form-input
                    placeholder="Введите сумму"
                    label=""
                    value=""
                    class="w-100"
                  ></form-input>
                  <form-select :options="['USD', 'RUB', 'UZS']"></form-select>
                </div>
              </div>
              <div class="acceptance_form">
                <div class="form_control_head">Откуда отправить?</div>
                <div class="form_control">
                  <form-select
                    label=""
                    :options="[
                      'Выберите страну',
                      'Россия',
                      'Узбекистан',
                      'Америка',
                    ]"
                  ></form-select>
                </div>
                <div class="form_control d-flex">
                  <form-input
                    placeholder="Сумма к получению"
                    label=""
                    value=""
                    :disabled="true"
                    class="amount_received"
                  ></form-input>
                  <form-select :options="['USD', 'RUB', 'UZS']"></form-select>
                </div>
              </div>
            </div>
            <button class="calculate_btn">Рассчитать</button>
          </form>
          <nuxt-link to="/about" class="learn_more position-relative"
            >Узнать больше о GOLDAO</nuxt-link
          >
          <div class="blur position-absolute">
            <img
              src="~/assets/images/international_settlement_blur.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <!-- International settlement end -->

    <!-- business start -->
    <section class="business_section section" v-if="calculate">
      <div class="main_container">
        <div class="section_in">
          <h2 class="section_title">GOLDAO для бизнеса</h2>
          <p class="section_description">
            <span class="text-bold">Применяйте эмиссионные монеты</span> для
            взаиморасчета по импортно-экспортному контракту
          </p>
          <div class="section_card d-grid">
            <div class="card_item" v-for="(item, i) in business" :key="i">
              <div class="card_sum">{{ item.sum }}</div>
              <p class="card_body">
                {{ item.description }}
              </p>
            </div>
          </div>
          <div class="section_link text-center">
            <nuxt-link to="/bueseness"
              >Узнать больше о GOLDAO для бизнеса</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>
    <!-- business end -->

    <!-- about start -->
    <section class="about_section section" v-if="calculate">
      <div class="main_container">
        <div class="section_in">
          <h2 class="section_title">GOLDAO для держателей монет</h2>
          <p class="section_description">
            <span class="text-bold">Получайте доход</span> за покупку, хранение
            и предоставление эмиссионных монет для проведения взаиморасчетов
          </p>
          <div class="section_card d-grid">
            <div class="card_item" v-for="(item, i) in about" :key="i">
              <div class="card_sum">{{ item.sum }}</div>
              <p class="card_body">
                {{ item.description }} <span>{{ item.span }}</span>
              </p>
            </div>
          </div>
          <div class="section_link text-center">
            <nuxt-link to="/holders-detali"
              >Узнать больше о GOLDAO для владельцев монет</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>
    <!-- about end -->

    <!-- countries application start -->
    <section class="countries_application_section section" v-if="calculate">
      <div class="main_container">
        <div class="section_in">
          <h2 class="section_title">GOLDAO в странах применения</h2>
          <div class="section_card d-grid">
            <div class="card_item" v-for="(item, i) in CApplication" :key="i">
              <div class="card_sum">{{ item.sum }}</div>
              <p class="card_body">
                {{ item.description }}
              </p>
            </div>
          </div>
          <div class="section_link text-center">
            <nuxt-link to="#"
              >Компании-участники инфраструктуры GOLDAO</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>
    <!-- countries application end -->
  </div>
</template>

<script>
import FormInput from "~/components/Ul/FormInput.vue";
import FormSelect from "~/components/Ul/FormSelect.vue";
export default {
  components: { FormSelect, FormInput },
  data() {
    return {
      calculate: false,
      homecard: [
        {
          id: 1,
          img: "/img/index/03.svg",
          title: "Анонимно",
        },
        {
          id: 2,
          img: "/img/index/06.svg",
          title: "Безопасно",
        },
        {
          id: 3,
          img: "/img/index/16.svg",
          title: "Легально",
        },
        {
          id: 4,
          img: "/img/index/05.svg",
          title: "Выгодно",
        },
      ],
      business: [
        {
          sum: "1 000 000 RUB",
          description: "Сумма отправления",
        },
        {
          sum: "99 670 USD",
          description: "Сумма получения",
        },
        {
          sum: "7%",
          description: "Комиссия с транзакции",
        },
      ],
      about: [
        {
          sum: "65 000 RUB",
          description: "Доход держателей от транзакции в",
          span: "стране отправителя",
        },
        {
          sum: "1 523 USD",
          description: "Доход держателей от транзакции в",
          span: "стране отправителя",
        },
        {
          sum: "16%",
          description: "Процент годовых от транзакции",
        },
        {
          sum: "16%",
          description: "Процент годовых от транзакции",
        },
      ],
      CApplication: [
        {
          sum: "93 RUB / 1 USD",
          description: "Курс национальной валюты",
        },
        {
          sum: "1 RUB / 0,010628 USD",
          description: "Курс в выбранной валюте",
        },
        {
          sum: "5 919 090 RUB",
          description: "Цена унции золота",
        },
        {
          sum: "2 401,20 USD",
          description: "Цена унции золота",
        },
        {
          sum: "Георгий Победоносец, 30 г.",
          description: "Название монет",
        },
        {
          sum: "Георгий Победоносец, 30 г.",
          description: "Название монет",
        },
        {
          sum: "120 000 RUB",
          description: "Цена монет",
        },
        {
          sum: "999 USD",
          description: "Расписки GOLDAO в обращении",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.index_page {
  .home {
    max-width: 1040px;
    margin: 0 auto;
    padding: 38px 32px 0;
    .logo {
      margin-bottom: 34px;
      img {
        height: 70px;
      }
    }
    .description {
      max-width: 760px;
      margin: 0 auto;
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 24px;
      line-height: 100%;
      letter-spacing: -0.01em;
      text-align: center;
      color: var(--black);
      margin-bottom: 16px;
    }
    .home_card {
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      .card_item {
        border: 1px solid var(--line-light);
        border-radius: 16px;
        padding: 8px 24px 12px 24px;
        box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.07);
        background: var(--white);
        transition: 0.5s;

        &:hover {
          background-color: var(--yellow);
          transform: translateY(-10px);
          img {
            filter: brightness(0) saturate(100%) invert(100%) sepia(100%)
              saturate(0%) hue-rotate(181deg) brightness(103%) contrast(103%);
          }
          .card_title {
            color: var(--white);
          }
        }
        .card_img {
          margin-bottom: 8px;
          img {
            transition: 0.3s;
          }
        }
        .card_title {
          font-family: var(--font-family);
          font-weight: 700;
          font-size: 18px;
          line-height: 122%;
          text-align: center;
          color: var(--black);
          transition: 0.3s;
        }
      }
    }
  }
  .international_settlement {
    margin-top: 48px;
    .international_settlement_in {
      overflow: hidden;
      padding: 48px 40px 32px 40px;
      border-radius: 16px;
      box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.07);
      background: var(--black);
      gap: 32px;
      .title {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 40px;
        line-height: 112%;
        letter-spacing: -0.02em;
        text-align: center;
        color: var(--white);
        margin-bottom: 2px;
      }
      .description {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 18px;
        line-height: 122%;
        text-align: center;
        color: var(--white);
        margin-bottom: 0;
      }
      .international_settlement_form {
        gap: 32px;
        z-index: 2;
        .international_settlement_form_in {
          grid-template-columns: repeat(2, 1fr);
          gap: 57px;
          .form_control_head {
            font-family: var(--font-family);
            font-weight: 400;
            font-size: 24px;
            line-height: 125%;
            letter-spacing: -0.02em;
            text-align: center;
            color: var(--white);
            margin-bottom: 14px;
          }
          .form_control {
            gap: 8px;
          }
          .send_form {
            .form_control {
              &:nth-child(2) {
                margin-bottom: 16px;
              }
              &:last-child {
                .select_wrapper {
                  max-width: 113px;
                }
                input {
                  display: block;
                  min-width: 100%;
                  width: 100%;
                  &::placeholder {
                    font-family: var(--font-family);
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 122%;
                    color: var(--dark-gray);
                  }
                }
                select {
                  width: 100%;
                }
              }
            }
          }
          .acceptance_form {
            .form_control {
              &:nth-child(2) {
                margin-bottom: 16px;
              }
              &:last-child {
                .select_wrapper {
                  max-width: 113px;
                }
                input {
                  background: rgba(255, 255, 255, 0.1);
                  &::placeholder {
                    font-family: var(--font-family);
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 122%;
                    color: var(--light-gray);
                  }
                }
                select {
                  width: 100%;
                }
              }
            }
          }
        }
        .calculate_btn {
          max-width: 234px;
          width: 100%;
          border-radius: 22px;
          padding: 11px 14px;
          border: 0;
          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
          background: var(--yellow);
          font-family: var(--font-family);
          font-weight: 400;
          font-size: 18px;
          line-height: 122%;
          text-align: center;
          color: var(--black);
          transition: 0.3s;
          &:hover {
            background-color: var(--white);
          }
        }
      }
      .learn_more {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 24px;
        line-height: 110%;
        letter-spacing: -0.02em;
        text-align: center;
        color: var(--light-gray);
        text-decoration: none;
        border-bottom: 1px solid var(--light-gray);
        z-index: 2;
        transition: 0.3s;

        &:hover {
          color: var(--yellow);
          border-color: var(--yellow);
        }
      }
      .blur {
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  .section {
    margin-top: 48px;
    .section_in {
      border: 1px solid var(--light-gray);
      border-radius: 16px;
      padding: 48px 40px;
      box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.07);
      background: var(--white);
      .section_title {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 40px;
        line-height: 112%;
        letter-spacing: -0.02em;
        text-align: center;
        color: var(--black);
        margin-bottom: 2px;
      }
      .section_description {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 18px;
        line-height: 122%;
        text-align: center;
        color: var(--black);
        .text-bold {
          font-weight: 700;
        }
      }
      .section_card {
        max-width: 753px;
        margin: 32px auto;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 57px;
        row-gap: 10px;
        .card_item {
          transition: 0.3s;
          &:hover {
            transform: translateY(-10px);
            .card_sum {
              border-radius: 8px 8px 0 0;
            }
            .card_body {
              background-color: var(--map-yes-goldao);
            }
          }
          .card_sum {
            background: var(--map-yes-goldao);
            border-radius: 8px;
            padding: 12px 24px 10px 24px;
            font-family: var(--font-family);
            font-weight: 600;
            font-size: 24px;
            line-height: 100%;
            letter-spacing: -0.01em;
            text-align: center;
            color: var(--black);
          }
          .card_body {
            margin: 0;
            font-family: var(--font-family);
            font-weight: 400;
            font-size: 18px;
            line-height: 122%;
            text-align: center;
            color: var(--black);
            padding: 10px 25px;
            border-radius: 0 0 8px 8px;
            transition: 0.3s;
            span {
              font-weight: 700;
            }
          }
        }
      }
      .section_link {
        a {
          font-family: var(--font-family);
          font-weight: 400;
          font-size: 24px;
          line-height: 125%;
          letter-spacing: -0.02em;
          color: var(--dark-gray);
          text-decoration: none;
          padding: 0;
          border-bottom: 1px solid var(--dark-gray);
          transition: 0.3s;

          &:hover {
            color: var(--yellow);
            border-color: var(--yellow);
          }
        }
      }
    }
  }
  .business_section {
    .section_in {
      .section_card {
        .card_item {
          &:last-child {
            width: 100%;
            position: relative;
            left: 60%;
          }
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .index_page {
    .international_settlement {
      .international_settlement_in {
        gap: 32px;
        .international_settlement_form {
          .international_settlement_form_in {
            max-width: 600px;
            gap: 16px;
            .send_form {
              .form_control {
                .input_wrapper {
                  input {
                    padding: 12px 16px;
                  }
                }
                .select_wrapper {
                  select {
                    padding: 12px 16px;
                  }
                }
                &:last-child {
                  .select_wrapper {
                    max-width: 96px;
                  }
                }
              }
            }
            .acceptance_form {
              .form_control {
                gap: 6px;
                .input_wrapper {
                  input {
                    padding: 12px 8px 12px 16px;
                  }
                }
                .select_wrapper {
                  select {
                    padding: 12px 16px;
                  }
                }
                &:last-child {
                  .select_wrapper {
                    max-width: 92px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .index_page {
    .home {
      .home_card {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    .international_settlement {
      .international_settlement_in {
        .international_settlement_form {
          .international_settlement_form_in {
            grid-template-columns: repeat(1, 1fr);
            .send_form {
              .form_control {
                .input_wrapper {
                  input {
                    padding: 12px 16px;
                  }
                }
                .select_wrapper {
                  select {
                    padding: 12px 16px;
                  }
                }
                &:last-child {
                  .select_wrapper {
                    max-width: 96px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .section {
      .section_in {
        .section_card {
          grid-template-columns: repeat(2, 1fr);
          // max-width: 360px;
          .card_item {
            // left: 0 !important;
            .card_body {
              font-size: 14px;
              line-height: 107%;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 650px) {
  .index_page {
    .section {
      .section_in {
        .section_card {
          grid-template-columns: repeat(1, 1fr);
          max-width: 360px;
          .card_item {
            left: 0 !important;
          }
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .index_page {
    .home {
      padding: 32px 16px 0;
      .description {
        font-weight: 600;
        font-size: 24px;
        line-height: 100%;
        letter-spacing: -0.01em;
      }
    }
    .international_settlement {
      margin-top: 32px;
      .main_container {
        padding: 0;
      }
      .international_settlement_in {
        padding: 32px 16px;
        border-radius: 0;
        gap: 16px;
        .head {
          .title {
            font-weight: 600;
            font-size: 24px;
            line-height: 100%;
            margin-bottom: 10px;
          }
          .description {
            font-weight: 400;
            font-size: 14px;
            line-height: 107%;
          }
        }
        .international_settlement_form {
          gap: 16px;
          .international_settlement_form_in {
            .form_control_head {
              font-weight: 700;
              font-size: 18px;
              line-height: 122%;
              letter-spacing: 1px;
              margin-bottom: 16px;
            }
            .send_form {
              .form_control {
                .input_wrapper {
                  input {
                    padding: 12px 19px 12px 24px;
                  }
                }
                .select_wrapper {
                  select {
                    padding: 12px 19px 12px 24px;
                  }
                }
                &:last-child {
                  .select_wrapper {
                    max-width: 110px;
                    select {
                      padding: 12px 20px;
                    }
                  }
                }
              }
            }
            .acceptance_form {
              .form_control {
                .input_wrapper {
                  input {
                    padding: 12px 19px 12px 24px;
                  }
                }
                .select_wrapper {
                  select {
                    padding: 12px 19px 12px 24px;
                  }
                }
                &:last-child {
                  .select_wrapper {
                    max-width: 110px;
                    select {
                      padding: 12px 20px;
                    }
                  }
                }
              }
            }
          }
          .calculate_btn {
            max-width: 166px;
          }
        }
        .learn_more {
          font-size: 18px;
          line-height: 122%;
        }
      }
    }
    .section {
      margin-top: 32px;
      .section_in {
        padding: 20px 16px;
        .section_title {
          font-size: 24px;
          line-height: 100%;
          letter-spacing: -0.01em;
          margin-bottom: 20px;
        }
        .section_description {
          font-size: 18px;
          line-height: 122%;
        }
        .section_card {
          margin: 16px auto;
          .card_item {
            .card_sum {
              padding: 5px 10px;
            }
            .card_body {
              padding: 5px 15px;
            }
          }
        }
        .section_link {
          line-height: 15px;
          a {
            font-size: 14px;
          }
        }
      }
    }
  }
}
@media (max-width: 400px) {
  .index_page {
    .international_settlement {
      .international_settlement_in {
        .international_settlement_form {
          .international_settlement_form_in {
            .acceptance_form {
              .form_control {
                gap: 12px;
                &:nth-child(2) {
                  margin-bottom: 12px;
                }
                &:last-child {
                  flex-direction: column;
                  .input_wrapper {
                    order: 2;
                  }
                  .select_wrapper {
                    max-width: 100%;
                    order: 1px;
                    select {
                      padding: 12px 20px;
                    }
                  }
                }
              }
            }
          }
          .calculate_btn {
            max-width: 166px;
          }
        }
        .learn_more {
          font-size: 18px;
          line-height: 122%;
        }
      }
    }
  }
}
</style>
