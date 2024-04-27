<template>
  <div class="about">
    <div class="main_container">
      <div class="about_in d-flex flex-md-row flex-column align-items-center justify-content-end">
        <div class="telegram_img d-none">
          <a href="#">
            <img src="~/assets/images/telegrammob.svg" alt="telegrammob" />
          </a>
        </div>
        <div class="about_title w-100">
          {{ page_title }}
        </div>
        <nuxt-link :to="to" class="about_btn">{{ button_content }}</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    to: {
      type: String,
      default: "#",
    },
    page_title: {
      type: String,
      default: "",
    },
    button_content: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss">
.about {
  .about_in {
    background: #20263b;
    border-radius: 16px;
    padding: 32px 75px;
    gap: 33px;
    .about_title {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 18px;
      line-height: 122%;
      text-align: center;
      color: var(--white);
    }
    .about_btn {
      min-width: 290px;
      background: var(--yellow);
      border-radius: 30px;
      padding: 15px 20px;
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 24px;
      line-height: 26px;
      letter-spacing: -0.02em;
      text-align: center;
      color: var(--black);
      text-decoration: none;
      white-space: nowrap;
      transition: 0.3s;

      &:hover {
        background-color: var(--white);
        color: var(--black);
      }
    }
  }
}
@media (max-width: 992px) {
  .about {
    .about_in {
      padding: 30px 15px;
      gap: 15px;
      .about_btn {
        font-size: 20px;
        min-width: 230px;
      }
    }
  }
}
@media (max-width: 576px) {
  .about {
    .about_in {
      padding: 20px 15px;
      .about_title {
        font-size: 14px;
        line-height: 107%;
      }
      .about_btn {
        font-size: 18px;
        line-height: 122%;
        padding: 10px 20px;
      }
    }
  }
}
</style>
