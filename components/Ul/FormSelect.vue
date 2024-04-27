<template>
  <div class="select_wrapper">
    <select class="form-select" aria-label="Default select example">
      <option value="1" v-for="(option, index) in options" :key="index">{{ option }}</option>
    </select>
    <span class="select_label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss">
.select_wrapper {
  .form-select {
    border: 1px solid #dde4ee;
    border-radius: 8px;
    padding: 12px 24px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 18px;
    line-height: 122%;
    color: var(--black);
    box-shadow: none;
    margin-bottom: 8px;
    cursor: pointer;
    option {
      max-width: 100%;
      padding: 10px 0;
      min-height: 50px;
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 18px;
      line-height: 122%;
      color: var(--black);
      box-shadow: none;
      cursor: pointer !important;
      transition: 0.3s;
    }
    &:focus {
      option {
        background: var(--white);
      }
    }
  }
  .select_label {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 93%;
    color: var(--dark-gray);
    padding-left: 26px;
  }
  .form-select.decorated {
    option {
      &:hover {
        box-shadow: none;
      }
    }
  }
  // select:focus > option {
  //   background: #000 !important;
  //   box-shadow: none;
  // }
}
</style>
