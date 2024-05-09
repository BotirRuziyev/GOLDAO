<template>
  <div class="select_wrapper">
    <select
      class="form-select"
      aria-label="Default select example"
      :class="select ? 'not_selected' : ''"
      @change="onChange()"
    >
      <option
        value="1"
        v-for="(option, index) in options"
        :key="index"
        :class="option == 'Выберите страну' ? 'd-none' : ''"
      >
        {{ option }}
      </option>
    </select>
    <div class="select_label" v-if="label != ''">{{ label }}</div>
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
    selected: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      select: this.selected,
    };
  },
  methods: {
    onChange() {
      this.select = false;
    },
  },
};
</script>
<style lang="scss">
.select_wrapper {
  width: 100%;
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
    &:disabled {
      font-weight: 700;
      background: var(--gray-for-background);
      color: var(--black);
      border: none;
      cursor: auto;
    }
  }
  .not_selected {
    color: var(--light-gray);
  }
  .select_label {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    color: var(--dark-gray);
    padding-left: 26px;
    margin-top: 8px;
  }
  .form-select.decorated {
    option {
      &:hover {
        box-shadow: none;
      }
    }
  }
}
</style>
