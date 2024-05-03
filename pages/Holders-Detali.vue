<template>
  <div class="holders_detali">
    <!-- page head start -->
    <PageHead />
    <!-- page head end -->

    <!-- About start -->
    <About
      page_title="Держатели GOLDAO получают доход от комиссий, которые платят пользователи GOLDAO за коммерческое использование эмиссионных монет без их физического перемещения"
      to="#"
      button_content="Связаться с GOLDAO"
    />
    <!-- About end -->

    <!-- calculation parameters start -->
    <div class="calculation_parameters">
      <div class="calculation_parameters_title">Параметры для расчета ожидаемого дохода</div>
      <p class="calculation_parameters_description">
        Ожидаемый доход держателей зависит от страны, валюты и суммы, на которую будут куплены и размещены на хранение
        эмиссионные монеты
      </p>
      <form
        action="#"
        @submit.prevent="calculation"
        class="calculation_parameters_form d-lg-flex d-grid align-items-start"
      >
        <div class="form_control">
          <form-select label="Страна" :options="['СНГ', 'СНГ', 'СНГ']"></form-select>
        </div>
        <div class="form_control">
          <form-input label="Сумма" :value="value" type="text"></form-input>
        </div>
        <div class="form_control d-sm-block d-none">
          <form-select label="Валюта" :options="['Российский рубль', 'Доллар']"></form-select>
        </div>
        <div class="form_control d-sm-none d-block">
          <form-select label="" :options="['RUB', 'USD ']"></form-select>
        </div>
        <button class="restore_btn">Обновить</button>
      </form>
    </div>
    <!-- calculation parameters end -->

    <!-- expected income start -->
    <div class="expected_income">
      <div class="section_title"> Ожидаемый доход</div>
      <div class="main_container">
        <div class="expected_income_card d-grid align-items-start">
          <div class="card_item" v-for="(item, index) in expected" :key="index">
            <div class="card_value">{{ item.value }}</div>
            <div class="card_body">{{ item.description }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- expected income end -->

    <!-- about product start -->
    <div class="exchange_rates">
      <about-product title="Курсы валют и цены драгоценных металлов" :product="aboutproduct"></about-product>
    </div>
    <!-- about product end -->

    <!-- coins in calculation start -->
    <div class="coins_calculation">
      <div class="section_title">Монеты в расчете</div>
      <about-product
        title="Монета 50 рублей 2008 года ММД «Георгий Победоносец»"
        :product="coinscalculation"
      ></about-product>
    </div>
    <!-- coins in calculation end -->

    <!-- purchasing and storing coins -->
    <div class="purchasing_storing_coins">
      <about-product title="Покупка и размещение на хранение монет" :product="purchasingproduct"></about-product>
    </div>
    <!-- purchasing and storing coins -->

    <!-- warehouse receipts start -->
    <div class="warehouse_receipts">
      <about-product title="Выпуск складских расписок в формате GTD" :product="warehouseproduct"></about-product>
    </div>
    <!-- warehouse receipts end -->

    <!-- About start -->
    <About page_title="Узнайте больше в нашем телеграмм-боте GOLDAO" to="#" button_content="Написать" />
    <!-- About end -->
  </div>
</template>

<script>
import AboutProduct from "~/components/holders-detali/AboutProduct.vue";
import FormInput from "~/components/Ul/FormInput.vue";
import FormSelect from "~/components/Ul/FormSelect.vue";
export default {
  components: { FormInput, FormSelect, AboutProduct },
  data() {
    return {
      value: 100000,
      expected: [
        {
          value: "1 000 000 RUB",
          description: "Сумма покупки монет",
        },
        {
          value: "17 штук",
          description: "Количество купленных монет",
        },
        {
          value: "4,2500 oz",
          description: "Вес золота в монетах",
        },
        {
          value: "6605,21 RUB",
          description: "Доход от 1 оборота",
        },
        {
          value: "0,66%",
          description: "Доходность за 1 транзакцию",
        },
        {
          value: "3,96%",
          description: "Доходность за 6 месяцев, при 1 обороте в месяц",
        },
      ],
      aboutproduct: [
        {
          productbody: [
            {
              head: "Цена золота",
              value: "2265,00",
              currencysymbol: "XAU / USD",
            },
            {
              head: "Курс локальной валюты",
              value: "92,41",
              currencysymbol: "XAU / USD",
            },
            {
              head: "Курс локальной валюты",
              value: "209 298,00",
              currencysymbol: "XAU / USD",
            },
            {
              head: "Страна производитель",
              value: "Россия",
              currencysymbol: "XAU / USD",
            },
          ],
        },
      ],
      coinscalculation: [
        {
          productbody: [
            {
              head: "Вес монеты",
              value: "7,89 г.",
            },
            {
              head: "Проба монеты",
              value: "999",
            },
            {
              head: "Цена продажи",
              value: "60 500,00",
            },
            {
              head: "Цена выкупа",
              value: "60 500,00",
            },
          ],
        },
        {
          images: ["/img/holders-detali/coin.png", "/img/holders-detali/coin2.png"],
        },
      ],
      purchasingproduct: [
        {
          productbody: [
            {
              head: "Количество монет, которое купит инвестор",
              value: "17",
              currencysymbol: "шт.",
            },
            {
              head: "Остаток, который возвращается инвестору",
              value: "25 952,02",
              currencysymbol: "RUB",
            },
            {
              head: "Количество унций золота, которое получит инвестор",
              value: "4,2500",
              currencysymbol: "oz",
              fontweight: true,
            },
            {
              head: "Стоимость золота в монетах",
              headbottom: "сумма денежных средств, которая будет использоваться в обороте сервиса",
              value: "889 516,50",
              currencysymbol: "RUB",
            },
            {
              head: "Размер премии в стоимости монет",
              headbottom: "сумма денежных средств, которая не будет использоваться в обороте GOLDAO",
              value: "84 531,48",
              currencysymbol: "RUB",
            },
          ],
        },
      ],
      warehouseproduct: [
        {
          productbody: [
            {
              head: "Вес золота в обороте",
              currencysymbol: "oz",
            },
            {
              head: "Количество GTD: обеспечены монетами держателя",
              value: "4,25000 GTD (RU)",
              currencysymbol: "RUB",
            },
            {
              head: "Количество GTD: обеспечены монетами других регионов",
              value: "4,25000 GTD (X)",
              currencysymbol: "RUB",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.about {
  &:nth-child(2) {
    .about_in {
      background: var(--gray-for-background);
      .about_title {
        color: var(--black);
      }
      .about_btn {
        color: var(--white);
        background: var(--black);

        &:hover {
          background-color: var(--yellow);
        }
      }
    }
  }
}
.calculation_parameters {
  padding: 64px 32px 0;
  .calculation_parameters_title {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 32px;
    line-height: 106%;
    letter-spacing: -0.01em;
    text-align: center;
    color: var(--black);
    margin-bottom: 16px;
  }
  .calculation_parameters_description {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 18px;
    line-height: 122%;
    text-align: center;
    color: #000;
    margin-bottom: 16px;
  }
  .calculation_parameters_form {
    max-width: 1240px;
    margin: 0 auto;
    gap: 16px;
    .form_control {
      max-width: 348px;
      width: 100%;
    }
    .restore_btn {
      background: #20263b;
      border: 1px solid var(--black);
      border-radius: 22px;
      padding: 11px 25px;
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 18px;
      line-height: 122%;
      text-align: center;
      color: var(--white);
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background-color: transparent;
        color: var(--black);
      }
    }
  }
}
.expected_income {
  padding-top: 64px;
  .section_title {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 32px;
    line-height: 106%;
    letter-spacing: -0.01em;
    text-align: center;
    color: var(--black);
    margin-bottom: 38px;
  }
  .expected_income_card {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    .card_item {
      box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.07);
      background: var(--white);
      border: 1px solid #dde4ee;
      border-radius: 16px;
      transition: 0.3s;
      &:hover {
        transform: scale(1.05) translateY(-10px);
        background-color: var(--yellow);
        .card_body {
          color: var(--white);
        }
      }
      &:nth-child(n + 4) {
        .card_value {
          background: var(--map-yes-goldao);
        }
      }
      .card_value {
        border-radius: 15px 15px 0 0;
        padding: 18px 10px;
        background: var(--gray-for-background);
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 40px;
        line-height: 112%;
        letter-spacing: -0.02em;
        text-align: center;
        color: var(--black);
      }
      .card_body {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 24px;
        line-height: 100%;
        letter-spacing: -0.01em;
        text-align: center;
        color: var(--black);
        padding: 19px 10px;
        transition: 0.2s;
      }
    }
  }
}
.coins_calculation {
  padding-top: 64px;
  .section_title {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 40px;
    line-height: 112%;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--black);
  }
  .about_product {
    padding-top: 32px;
    .about_product_in {
      .about_product_list {
        .list_item {
          .list_item_body {
            .list_right_block {
              .list_value {
                background: var(--gray-for-background);
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .calculation_parameters {
    .calculation_parameters_form {
      max-width: 576px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .expected_income {
    .expected_income_card {
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
      .card_item {
        .card_value {
          font-size: 32px;
          line-height: 100%;
        }
        .card_body {
          font-size: 18px;
          line-height: 90%;
        }
        &:nth-child(n + 3) {
          .card_value {
            background-color: var(--gray-for-background);
          }
        }
        &:nth-child(n + 5) {
          .card_value {
            background-color: var(--map-yes-goldao);
          }
        }
        .card_value {
          background-color: var(--map-yes-goldao);
        }
      }
    }
  }
  .coins_calculation {
    .about_product {
      .about_product_in {
        .about_product_list {
          .list_item {
            .list_item_body {
              flex-direction: row;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 576px) {
  .calculation_parameters {
    padding: 32px 16px 0;
    .calculation_parameters_title {
      font-weight: 400;
      font-size: 24px;
      line-height: 100%;
      letter-spacing: -0.01em;
      margin-bottom: 16px;
    }
    .calculation_parameters_description {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 14px;
      line-height: 107%;
      text-align: center;
      color: #000;
      margin-bottom: 16px;
    }
    .calculation_parameters_form {
      grid-template-columns: repeat(5, 1fr);
      row-gap: 16px;
      column-gap: 10px;
      .form_control {
        max-width: 100%;
        grid-column: 1/6;
        &:nth-child(2) {
          grid-column: 1/4;
        }
        &:nth-child(4) {
          grid-column: 4/6;
        }
      }
      .restore_btn {
        grid-column: 2/5;
      }
    }
  }
  .expected_income {
    padding-top: 32px;
    .section_title {
      font-size: 24px;
      line-height: 100%;
      letter-spacing: -0.01em;
      margin-bottom: 32px;
    }
    .expected_income_card {
      grid-template-columns: repeat(1, 1fr);
      gap: 16px;
      .card_item {
        .card_value {
          background-color: var(--gray-for-background);
        }
        &:nth-child(n + 4) {
          .card_value {
            background-color: var(--map-yes-goldao);
          }
        }
        .card_value {
          font-size: 24px;
          line-height: 125%;
          letter-spacing: -0.02em;
        }
        .card_body {
          font-size: 14px;
          line-height: 107%;
        }
      }
    }
  }
  .coins_calculation {
    .section_title {
      font-size: 24px;
      line-height: 100%;
      letter-spacing: -0.01em;
    }
    .about_product {
      .about_product_in {
        border: 1px solid #dde4ee;
        border-radius: 16px;
        padding: 16px;
        box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.07);
        background: var(--white);
        .section_title {
          font-weight: 700;
          font-size: 18px;
          line-height: 122%;
        }
        .about_product_list {
          .list_item {
            .list_item_body {
              height: 47px;
              &:last-child {
                border: 0;
              }
              .list_head {
                min-width: auto;
                font-size: 14px;
                line-height: 107%;
              }
              .list_right_block {
                max-width: 152px;
                .list_value {
                  font-weight: 400;
                }
              }
            }
          }
          .list_images {
            gap: 10px;
            img {
              height: auto;
              width: 100%;
            }
          }
        }
      }
    }
  }
  .about {
    .about_in {
      .telegram_img {
        display: block !important;
      }
    }
  }
}
@media (max-width: 400px) {
  .exchange_rates {
    .about_product {
      .main_container {
        .about_product_in {
          .about_product_list {
            .list_item {
              .list_item_body {
                .list_right_block {
                  .list_currency_symbol {
                    max-width: 97px;
                    min-width: 97px;
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
</style>
