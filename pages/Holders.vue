<template>
  <main class="index_page page_section" id="holders">
    <!-- coin holders start -->
    <section class="coin_holders">
      <h1 class="title">GOLDAO для держателей монет</h1>
      <div class="about_coins">
        <div class="about_coins_in">
          <div
            class="about_coins_item d-flex align-items-sm-center"
            v-for="coin of coins"
            :key="coin.id"
          >
            <img :src="coin.img" alt="coin" />
            <p class="description">{{ coin.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- coin holders end -->

    <!-- revenue generate start -->
    <section class="revenue_generate">
      <h1 class="title d-sm-block d-none">
        Получение дохода за хранение монет
      </h1>
      <div class="revenue_generate_in d-grid">
        <div class="revenue_generate_about">
          <div class="revenue_generate_about_head">
            GOLDAO предлагает Вам получать доход за хранение монет
          </div>
          <div
            class="revenue_generate_item"
            v-for="item of revenue"
            :key="item.id"
          >
            <div class="head">{{ item.head }}</div>
            <p class="description">{{ item.description }}</p>
            <p class="description" v-if="item.description2">
              {{ item.description2 }}
            </p>
          </div>
        </div>
        <div class="income_calculator_wrapper">
          <div class="income_calculator">
            <div class="income_calculator_title">
              Калькулятор возможного дохода
            </div>
            <form
              action="#"
              @submit.stop.prevent="submit"
              :class="statistic ? 'd-none' : ''"
            >
              <div class="form_control">
                <form-select
                  label="Валюта вашей страны"
                  :options="options"
                ></form-select>
              </div>
              <div class="form_control">
                <form-select
                  label="Количество инвестиционных монет"
                  :options="['50 шт', '100 шт', '150 шт', '200 шт']"
                ></form-select>
              </div>
              <div class="form_control">
                <div class="form_control_in d-flex align-items-start">
                  <button
                    class="month_minus_btn"
                    @click="value > 1 ? (value -= 1) : value"
                  >
                    <svg
                      width="37"
                      height="36"
                      viewBox="0 0 47 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="23.8828" cy="23" r="23" fill="#FAFAFA" />
                      <circle
                        cx="23.8828"
                        cy="23"
                        r="22.5"
                        stroke="black"
                        stroke-opacity="0.05"
                      />
                      <path
                        d="M31.8828 23H15.8828"
                        stroke="#CFD2DD"
                        stroke-width="1.5"
                      />
                    </svg>
                  </button>
                  <form-input
                    label="Срок инвестиций (месяцев)"
                    :value="value"
                    type="text"
                  ></form-input>
                  <button class="month_plus_btn" @click="value += 1">
                    <svg
                      width="37"
                      height="36"
                      viewBox="0 0 37 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="18.8828" cy="18" r="18" fill="#FAFAFA" />
                      <circle
                        cx="18.8828"
                        cy="18"
                        r="17.5"
                        stroke="black"
                        stroke-opacity="0.05"
                      />
                      <path
                        d="M18.8828 11V18M18.8828 25V18M18.8828 18H25.8828M18.8828 18H11.8828"
                        stroke="black"
                        stroke-width="1.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <button
                  class="calculate_income_btn user-select-none"
                  @click="statistic = true"
                >
                  Рассчитать доход
                </button>
              </div>
            </form>
            <div class="income_statistic" :class="!statistic ? 'd-none' : ''">
              <div class="income_statistic_item">
                <div class="item_val text-center">600 000 ₽</div>
                <div class="item_label">
                  Сумма ваших инвестиций
                  <span class="d-sm-inline d-none">на покупку 50 монет</span>
                </div>
              </div>
              <div class="income_statistic_item">
                <div class="item_val text-center">6000 ₽</div>
                <div class="item_label">Сумма вознаграждений за 2 месяца</div>
              </div>
              <div class="income_statistic_item">
                <div class="item_val text-center">15% годовых</div>
                <div class="item_label">Доходность</div>
              </div>
              <div class="income_statistic_btn d-flex flex-md-row flex-column">
                <button
                  class="reset_btn order-md-1 order-2 user-select-none"
                  @click="statistic = false"
                >
                  Сбросить значения
                </button>
                <nuxt-link
                  class="more_details_btn order-md-2 order-1 user-select-none"
                  to="/holders-detali"
                >
                  Подробнее
                </nuxt-link>
              </div>
            </div>
          </div>
          <p class="income_calculator_description">
            Не является коммерческим предложением, GOLDAO не гарантирует
            получение дохода на капитал, отраженный доход является результатом
            расчета и зависит от количества применений монет держателя
            пользователями в месяц
          </p>
        </div>
      </div>
    </section>
    <!-- revenue generate end -->

    <!-- advantages start -->
    <Advantages />
    <!-- advantages end -->

    <!-- question answer start-->
    <QuestionAnswer />
    <!-- question answer end-->
  </main>
</template>

<script>
import FormInput from "~/components/Ul/FormInput.vue";
import FormSelect from "~/components/Ul/FormSelect.vue";
export default {
  components: { FormSelect, FormInput },
  data() {
    return {
      value: 2,
      statistic: false,
      options: ["Российский рубль", "Доллар"],
      coins: [
        {
          id: 1,
          img: "/img/index/coin.png",
          description:
            "Купите эмиссионные монеты из драгоценных металлов - золота, серебра или платины",
        },
        {
          id: 2,
          img: "/img/index/coin2.png",
          description:
            "Покупка эмиссионных монет - это инвестиция в драгоценные металлы и защиты  денег от инфляции",
        },
        {
          id: 3,
          img: "/img/index/coin3.png",
          description:
            "Покупка эмиссионных монет с помощью GOLDAO - получение дохода за  их хранение",
        },
      ],
      revenue: [
        {
          id: 1,
          head: "ВЫ: ",
          description:
            "➜ покупаете и размещаете эмиссионные монеты на хранение",
        },
        {
          id: 2,
          head: "ПОЛЬЗОВАТЕЛИ:",
          description:
            "➜ проводят взаиморасчеты с применением монет БЕЗ ИХ ФИЗИЧЕСКОГО перемещения",
          description2:
            "➜ пользователи платят транзакционные комиссии за использование монет",
        },
        {
          id: 3,
          head: "ВЫ: ",
          description:
            "➜ получаете 50% от транзацкионных комиссий, которые платят пользователи ",
        },
      ],
    };
  },
  methods: {
    // updatevalue(value) {
    //   // this.value = Number(value);
    // },
  },
};
</script>

<style lang="scss">
// coin holders start
.coin_holders {
  padding: 64px 0 0 0;
  .about_coins {
    background: var(--yellow);
    padding: 73px 32px;
    .about_coins_in {
      max-width: 1150px;
      margin: 0 auto;
      .about_coins_item {
        gap: 17px;
        margin-bottom: 41px;
        &:last-child {
          margin-bottom: 0;
        }
        img {
          height: 100px;
        }
        .description {
          font-family: var(--font-family);
          font-weight: 400;
          font-size: 32px;
          line-height: 106%;
          letter-spacing: -0.01em;
          color: var(--black);
        }
      }
    }
  }
}
// coin holders end

// revenue generate start
.revenue_generate {
  padding: 64px 0 0 0;
  .revenue_generate_in {
    max-width: 1264px;
    margin: 0 auto;
    padding: 0 32px;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    .revenue_generate_about {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 32px;
      line-height: 106%;
      letter-spacing: -0.01em;
      color: #000;
      .revenue_generate_about_head {
        margin-bottom: 25px;
      }
      .revenue_generate_item {
        .head {
          font-weight: 600;
          font-size: 24px;
          line-height: 100%;
          margin-bottom: 25px;
        }
        .description {
          font-size: 18px;
          line-height: 122%;
          margin-bottom: 25px;
        }
      }
    }
    .income_calculator_wrapper {
      .income_calculator {
        border: 1px solid var(--light-gray);
        border-radius: 16px;
        padding: 35px 40px;
        box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.07);
        background: var(--white);
        margin-bottom: 16px;
        .income_calculator_title {
          max-width: 443px;
          margin: 0 auto;
          font-family: var(--font-family);
          font-weight: 400;
          font-size: 32px;
          line-height: 106%;
          letter-spacing: -0.01em;
          text-align: center;
          color: var(--black);
          margin-bottom: 16px;
        }
        form {
          max-width: 348px;
          margin: 0 auto;
          .form_control {
            margin-bottom: 16px;

            .form_control_in {
              gap: 14px;
              margin-bottom: 8px;
              button {
                background: transparent;
                border: 0;
              }
            }
          }
          .calculate_income_btn {
            background: var(--black);
            padding: 11px 15px;
            border-radius: 22px;
            border: 0;
            font-family: var(--font-family);
            font-weight: 400;
            font-size: 18px;
            line-height: 122%;
            text-align: center;
            color: var(--white);
            user-select: none;
            transition: 0.3s;

            &:hover {
              background: var(--yellow);
              color: var(--white);
            }
          }
        }
      }
      .income_statistic {
        max-width: 348px;
        margin: 0 auto;
        .income_statistic_item {
          margin-bottom: 16px;
          .item_val {
            border: 1px solid var(--line-light);
            border-radius: 8px;
            padding: 12px 24px;
            background: var(--gray-for-background);
            font-family: var(--font-family);
            font-weight: 800;
            font-size: 18px;
            line-height: 122%;
            color: var(--black);
            margin-bottom: 8.2px;
          }
          .item_label {
            font-family: var(--font-family);
            font-weight: 400;
            font-size: 14px;
            line-height: 93%;
            text-align: center;
            color: var(--black);
          }
        }
        .income_statistic_btn {
          gap: 16px;
          button {
            border: 2px solid #dde4ee;
            border-radius: 22px;
            padding: 11px 15px;
            background-color: transparent;
            font-family: var(--font-family);
            font-weight: 400;
            font-size: 18px;
            line-height: 122%;
            text-align: center;
            color: var(--black);
            transition: 0.3s;

            &:hover {
              background: var(--yellow);
              color: var(--white);
              border-color: var(--yellow);
            }
          }
          .more_details_btn {
            border: 2px solid transparent;
            border-radius: 22px;
            padding: 11px 15px;
            background: #20263b;
            font-family: var(--font-family);
            font-weight: 400;
            font-size: 18px;
            line-height: 122%;
            text-align: center;
            color: var(--white);
            text-decoration: none;
            transition: 0.3s;

            &:hover {
              background: var(--yellow);
              color: var(--white);
              border-color: var(--yellow);
            }
          }
        }
      }
      .income_calculator_description {
        padding: 0 30px;
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 14px;
        line-height: 107%;
        text-align: center;
        color: var(--dark-gray);
      }
    }
  }
}
// revenue generate end

@media (max-width: 992px) {
  .revenue_generate {
    .revenue_generate_in {
      gap: 17px;
    }
  }
}
@media (max-width: 768px) {
  .revenue_generate {
    .revenue_generate_in {
      grid-template-columns: repeat(1, 1fr);
      gap: 17px;
      .income_calculator_wrapper {
        max-width: 520px;
        margin: 0 auto;
      }
    }
  }
}
@media (max-width: 576px) {
  .coin_holders {
    padding-top: 32px;
    .about_coins {
      padding: 23px 16px;
      .about_coins_in {
        .about_coins_item {
          margin-bottom: 20px;
          &:last-child {
            margin-bottom: 0;
          }
          img {
            max-height: 60px;
          }
          .description {
            font-weight: 400;
            font-size: 18px;
            line-height: 122%;
          }
        }
      }
    }
  }
  .revenue_generate {
    padding-top: 32px;
    .revenue_generate_in {
      padding: 0 16px;
      .revenue_generate_about {
        font-weight: 400;
        font-size: 14px;
        line-height: 107%;
        .revenue_generate_about_head {
          font-family: var(--font-family);
          font-weight: 600;
          font-size: 24px;
          line-height: 100%;
          letter-spacing: -0.01em;
          text-align: center;
          color: var(--black);
          margin-bottom: 4px;
        }
        .revenue_generate_item {
          margin-bottom: 15px;
          .head {
            font-weight: 700;
            font-size: 18px;
            line-height: 122%;
            color: #000;
            margin-bottom: 15px;
          }
          .description {
            font-weight: 400;
            font-size: 14px;
            line-height: 107%;
            margin-bottom: 15px;
          }
        }
      }
      .income_calculator_wrapper {
        .income_calculator {
          padding: 35px 30px;
          .income_calculator_title {
            font-weight: 600;
            font-size: 24px;
            line-height: 100%;
            letter-spacing: -0.01em;
            margin-bottom: 16px;
          }
          form {
            .calculate_income_btn {
              width: 100%;
            }
            .form_control {
              .form_control_in {
                .input_wrapper {
                  .input_label {
                    margin-left: 24px;
                  }
                }
              }
              &:nth-child(3) {
                .form_control_in {
                  .input_wrapper {
                    position: relative;
                    margin-bottom: 23px;
                    .input_label {
                      width: auto;
                      position: absolute;
                      top: calc(100%);
                      white-space: nowrap;
                      margin: 0;
                      left: 50%;
                      transform: translateX(-50%);
                    }
                  }
                }
              }
            }
          }
        }
        .income_statistic {
          .income_statistic_item {
            margin-bottom: 14px;
          }
        }
        .income_calculator_description {
          padding: 0;
        }
      }
    }
  }
}
</style>
