<template>
  <div>
    <section class="advantages">
      <h1 class="title">Преимущества</h1>
      <div class="advantages_card d-grid">
        <div class="card_item d-flex flex-column align-items-center" v-for="item of advantages" :key="item.id">
          <div class="card_img">
            <img height="110" :src="item.img" :alt="item.img" />
          </div>
          <div class="card_body">
            <div class="card_title">{{ item.head }}</div>
            <div class="card_description">
              {{ item.description }}
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
      advantages: [
        {
          id: 1,
          img: "/img/index/advantages/16.png",
          head: "Юридическая безопасность ",
          description: "все оформляется документально в соответствии с действующим законодательством",
        },
        {
          id: 2,
          img: "/img/index/advantages/17.png",
          head: "Защита денег от инфляции ",
          description: "Вы получаете доход от роста стоимости драгоценного металла ",
        },
        {
          id: 3,
          img: "/img/index/advantages/12.png",
          head: "Гарантия сохранности монет",
          description: "Мы не передаём эмиссионные монеты третьим лицам - уникальное предложение GOLDAO",
        },
        {
          id: 4,
          img: "/img/index/advantages/11.png",
          head: "Моментальная ликвидность",
          description: "Вы можете забрать монеты из хранилища по первому требованию - уникальное предложение GOLDAO",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.advantages {
  padding: 64px 0 0 0;
  .advantages_card {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 32px;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    .card_item {
      background: var(--white);
      box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.07);
      border: 1px solid var(--line-light);
      border-radius: 16px;
      padding: 24px;
      cursor: pointer;
      transition: 0.5s;
      &:hover {
        background: var(--yellow);
        transform: translateY(-10px);
        .card_img {
          img {
            filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(61deg)
              brightness(109%) contrast(101%);
          }
        }
        .card_body {
          .card_title {
            color: var(--white);
          }
          .card_description {
            color: var(--white);
          }
        }
      }
      .card_body {
        .card_title {
          font-family: var(--font-family);
          font-weight: 600;
          font-size: 24px;
          line-height: 100%;
          letter-spacing: -0.01em;
          text-align: center;
          color: var(--black);
          margin: 8px 0;
          transition: 0.3s;
        }
        .card_description {
          font-family: var(--font-family);
          font-weight: 400;
          font-size: 18px;
          line-height: 122%;
          text-align: center;
          color: var(--dark-gray);
          transition: 0.3s;
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  .advantages {
    .advantages_card {
      grid-template-columns: repeat(2, 1fr);
      .card_item {
        padding: 18px;
      }
    }
  }
}
@media (max-width: 768px) {
  .advantages {
    .advantages_card {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
@media (max-width: 576px) {
  .advantages {
    padding-top: 32px;
    .advantages_card {
      padding: 0 16px;
      gap: 16px;
      .card_item {
        padding: 18px;
        .card_img {
          img {
            height: 80px;
          }
        }
        .card_body {
          .card_title {
            font-weight: 700;
            font-size: 18px;
            line-height: 122%;
          }
          .card_description {
            font-weight: 400;
            font-size: 14px;
            line-height: 107%;
          }
        }
      }
    }
  }
}
</style>
