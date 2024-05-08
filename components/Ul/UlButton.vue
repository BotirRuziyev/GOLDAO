<template>
  <button class="ul_btn">{{ btncontent }}</button>
</template>

<script>
export default {
  props: {
    btncontent: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.ul_btn {
  min-height: 44px;
  background: var(--black);
  border: none;
  padding: 11px 0;
  border-radius: 22px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  line-height: 122%;
  text-align: center;
  color: var(--white);
  transition: 0.3s;
  &:hover {
    background: var(--yellow);
    color: var(--white);
  }
}
</style>
