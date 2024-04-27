<template>
  <div class="input_wrapper">
    <input :type="type" :value="value" id="investmentperiod" @input="$emit('update:value', $event.target.value)" />
    <div class="input_label">{{ label }}</div>
  </div>
</template>

<script>
// import { mask } from "vue-the-mask";
// v-mask="['### ### ### ###', '### ### ### ###']"
export default {
  // directives: { mask },
  props: {
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
      default: "",
    },
    value: [Number, String],
  },
  emits: ["update:value"],
};
</script>

<style lang="scss">
.input_wrapper {
  #investmentperiod {
    width: 100%;
    border: 1px solid #dde4ee;
    border-radius: 8px;
    padding: 12px 24px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 18px;
    line-height: 122%;
    color: var(--black);
    margin-bottom: 8px;
    &:focus {
      outline: 1px solid var(--black);
    }
  }
  .input_label {
    display: block;
    width: 100%;
    margin-left: 26px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 93%;
    text-align: start;
    color: var(--dark-gray);
  }
}
</style>
