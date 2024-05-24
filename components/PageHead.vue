<template>
  <div class="page_head">
    <div
      class="main_container d-flex flex-sm-row flex-column align-items-sm-start align-items-center"
    >
      <button class="back_btn order-sm-1 order-2" @click="$router.go(-1)">
        {{ $t("pagehead.back_btn") }}
      </button>
      <div class="title w-100 p-0 order-sm-2 order-1">
        {{ $t("pagehead.title.title_in") }}
        <span class="d-sm-inline d-none">{{
          $t("pagehead.title.d_none")
        }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page_head {
  padding: 64px 0;
  .back_btn {
    min-width: 110px;
    height: 44px;
    background: var(--black);
    border-radius: 31px;
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 18px;
    line-height: 130%;
    letter-spacing: -0.01em;
    text-align: center;
    color: var(--white);
    border: 1px solid var(--black);
    transition: 0.3s;

    &:hover {
      background-color: transparent;
      color: var(--black);
    }
  }
  .title {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 40px;
    line-height: 112%;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--black);
  }
}
@media (max-width: 992px) {
  .page_head {
    .back_btn {
      font-size: 16px;
      line-height: 120%;
    }
    .title {
      font-size: 28px;
      line-height: 100%;
    }
  }
}
@media (max-width: 576px) {
  .page_head {
    padding: 32px 0;
    .main_container {
      gap: 22px;
    }
    .back_btn {
      min-width: 83px;
      height: 26px;
      font-weight: 400;
      font-size: 14px;
      line-height: 107%;
    }
    .title {
      font-weight: 600;
      font-size: 24px;
      line-height: 100%;
      letter-spacing: -0.01em;
    }
  }
}
</style>
