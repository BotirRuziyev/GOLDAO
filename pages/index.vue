<template>
  <div class="index_page">
    <!-- home start -->
    <section class="home d-flex flex-column align-items-center">
      <div class="logo">
        <img src="~/assets/images/logo.svg" alt="" />
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
          class="international_settlement_in d-flex flex-column align-items-center"
        >
          <div class="head">
            <h2 class="title">Применение GOLDAO</h2>
            <p class="description">
              Международные взаиморасчеты с помощью эмиссионных монет
            </p>
          </div>
          <form
            action="#"
            @submit.prevent="calculate"
            class="international_settlement_form d-flex flex-column align-items-center"
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
        </div>
      </div>
    </section>
    <!-- International settlement end -->
  </div>
</template>

<script>
import FormInput from "~/components/Ul/FormInput.vue";
import FormSelect from "~/components/Ul/FormSelect.vue";
export default {
  components: { FormSelect, FormInput },
  data() {
    return {
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
    };
  },
};
</script>

<style lang="scss">
.index_page {
  .home {
    max-width: 976px;
    margin: 0 auto;
    padding-top: 38px;
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
        cursor: pointer;
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
      }
      .international_settlement_form {
        gap: 32px;
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
                input {
                  width: auto;
                  &::placeholder {
                    font-family: var(--font-family);
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 122%;
                    color: var(--dark-gray);
                  }
                }
                select {
                  min-width: 113px;
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
                input {
                  width: auto;
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
                  min-width: 113px;
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
    }
  }
}
</style>
