<template>
  <div>
    <section class="question_answer">
      <h1 class="title">Вопросы о системе</h1>
      <div class="main_container">
        <div class="accordion question_answer_accordion" id="accordionExample">
          <div
            class="accordion-item"
            :class="item.show ? 'accordion-item-active' : ''"
            v-for="item of questionanswer"
            :key="item.id"
          >
            <h2 class="accordion-header" id="item.id">
              <button
                class="accordion-button"
                :class="!item.show ? 'collapsed' : ''"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="`#${item.id}`"
                :aria-expanded="item.show"
                aria-controls="collapseOne"
                @click="accordion(item.id)"
              >
                {{ item.head }}
              </button>
            </h2>
            <div
              :id="item.id"
              class="accordion-collapse collapse"
              :class="item.show ? 'show' : ''"
              aria-labelledby="item.id"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                {{ item.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questionanswer: [
        {
          id: 1,
          head: "Где именно хранятся монеты",
          description:
            "Монеты хранятся в нашем офисе по адресу Москва ул. Замоскворецкая, в сейфе огеустойчивом, при желании мы можем арендовать сейфовую ячеку тогда стоимость её аренды будет вычитаться из процентов по комиссиям.",
          show: true,
        },
        {
          id: 2,
          head: "Как делается расчёт количества монет необходимых для сделки? Описание",
          description:
            "Монеты хранятся в нашем офисе по адресу Москва ул. Замоскворецкая, в сейфе огеустойчивом, при желании мы можем арендовать сейфовую ячеку тогда стоимость её аренды будет вычитаться из процентов по комиссиям.",
          show: false,
        },
        {
          id: 3,
          head: "Какое минимальное количество монет я могу купить? Описание",
          description:
            "Монеты хранятся в нашем офисе по адресу Москва ул. Замоскворецкая, в сейфе огеустойчивом, при желании мы можем арендовать сейфовую ячеку тогда стоимость её аренды будет вычитаться из процентов по комиссиям.",
          show: false,
        },
        {
          id: 4,
          head: "Как стать инвестором? Описание",
          description:
            "Монеты хранятся в нашем офисе по адресу Москва ул. Замоскворецкая, в сейфе огеустойчивом, при желании мы можем арендовать сейфовую ячеку тогда стоимость её аренды будет вычитаться из процентов по комиссиям.",
          show: false,
        },
        {
          id: 5,
          head: "Что такое складские расписки в формате GTD?",
          description:
            "Монеты хранятся в нашем офисе по адресу Москва ул. Замоскворецкая, в сейфе огеустойчивом, при желании мы можем арендовать сейфовую ячеку тогда стоимость её аренды будет вычитаться из процентов по комиссиям.",
          show: false,
        },
        {
          id: 6,
          head: "У меня есть свои монеты я могу их разместить на хранение в GOLDAO?",
          description:
            "Монеты хранятся в нашем офисе по адресу Москва ул. Замоскворецкая, в сейфе огеустойчивом, при желании мы можем арендовать сейфовую ячеку тогда стоимость её аренды будет вычитаться из процентов по комиссиям.",
          show: false,
        },
        {
          id: 7,
          head: "Могу ли я забрать монеты в любой момент?",
          description:
            "Монеты хранятся в нашем офисе по адресу Москва ул. Замоскворецкая, в сейфе огеустойчивом, при желании мы можем арендовать сейфовую ячеку тогда стоимость её аренды будет вычитаться из процентов по комиссиям.",
          show: false,
        },
      ],
    };
  },
  methods: {
    accordion(_id) {
      document.querySelectorAll(".accordion-item").forEach((element, index) => {
        if (index + 1 == _id) {
          element.classList.toggle("accordion-item-active");
        } else {
          element.classList.remove("accordion-item-active");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.question_answer {
  padding-top: 65px;

  .question_answer_accordion {
    .accordion-item {
      background: var(--gray-for-background);
      border: 1px solid var(--line-light);
      border-radius: 16px;
      padding: 12px 66px;
      margin-bottom: 16px;
      transition: 0.3s;
      &:hover {
        box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.07);
        background: var(--white);
        border: 1px solid var(--line-light);
        transform: scale(1.01);
      }

      &:last-child {
        margin-bottom: 0;
      }

      .accordion-button {
        background-color: transparent;
        box-shadow: none;
        padding: 11px 0 11px 52px;
        margin-bottom: 4px;
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 32px;
        line-height: 106%;
        letter-spacing: -0.01em;
        color: var(--black);
        position: relative;

        &::after {
          position: absolute;
          width: 32px;
          height: 32px;
          background-image: url("~/assets/images/icons/opeh_stack.svg");
          background-size: cover;
          transform: translateY(-50%) rotate(0);
          transform-origin: center;
          transition: 0.15s;
          left: 0;
          top: 50%;
        }

        &:not(.collapsed)::after {
          transform: translateY(-50%) rotate(45deg);
        }
      }

      .accordion-body {
        padding: 0px 0px 14px 52px;
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 18px;
        line-height: 122%;
        color: var(--dark-gray);
      }
    }

    .accordion-item-active {
      box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.07);
      background: var(--white);
      border: 1px solid var(--line-light);
      &:hover {
        transform: scale(1);
      }
    }
  }
}

@media (max-width: 768px) {
  .question_answer {
    .question_answer_accordion {
      .accordion-item {
        padding: 16px;
      }
    }
  }
}
@media (max-width: 576px) {
  .question_answer {
    padding-top: 32px;
    .question_answer_accordion {
      .accordion-item {
        .accordion-button {
          font-weight: 700;
          font-size: 18px;
          line-height: 122%;
          padding: 0 0 0 25px;
          margin-bottom: 8px;
          &::after {
            width: 22px;
            height: 22px;
            top: 11px;
          }
        }
        .accordion-body {
          font-weight: 400;
          font-size: 14px;
          line-height: 107%;
          padding: 0 0 0 25px;
        }
      }
    }
  }
}
</style>
