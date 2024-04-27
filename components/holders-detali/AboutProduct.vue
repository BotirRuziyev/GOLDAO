<template>
  <div class="about_product">
    <div class="main_container">
      <div class="about_product_in">
        <div class="section_title">{{ title }}</div>
        <div class="about_product_list d-flex flex-lg-row flex-column align-items-center">
          <div class="list_item w-100 order-lg-1 order-2">
            <div
              class="list_item_body w-100 d-flex align-items-center justify-content-between"
              v-for="(item, index) in product[0].productbody"
              :key="index"
            >
              <div>
                <div class="list_head" v-if="item.head" :class="item.fontweight ? 'head_weight' : ''">
                  {{ item.head }}
                </div>
                <div class="list_head_description" v-if="item.headbottom">{{ item.headbottom }}</div>
              </div>
              <div class="list_right_block d-flex align-items-center">
                <div class="list_value w-100" v-if="item.value">{{ item.value }}</div>
                <div class="list_currency_symbol w-100" v-if="item.currencysymbol">{{ item.currencysymbol }}</div>
              </div>
            </div>
          </div>
          <div class="list_images d-flex align-items-center order-lg-2 order-1" v-if="product[1]">
            <div v-for="(img, i) in product[1].images" :key="i">
              <img :src="img" :alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Array,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.about_product {
  padding-top: 64px;
  .about_product_in {
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.07);
    background: var(--white);
    border: 1px solid #dde4ee;
    border-radius: 16px;
    padding: 48px 116px;
    .section_title {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 32px;
      line-height: 106%;
      letter-spacing: -0.01em;
      text-align: center;
      color: var(--black);
      margin-bottom: 18px;
    }
    .about_product_list {
      gap: 16px;
      .list_item {
        .list_item_body {
          padding: 9px 0;
          gap: 16px;
          border-bottom: 1px solid #ebedf5;
          border-radius: 10px 10px 0 0;
          transition: 0.3s;
          &:hover {
            background-color: var(--map-yes-goldao);
            padding: 9px 15px;
            box-shadow: 0 0 10px var(--gray-for-background);
            .list_right_block {
              .list_value {
                background-color: transparent !important;
              }
              .list_currency_symbol {
                background-color: transparent;
              }
            }
          }
          .list_head {
            font-family: var(--font-family);
            font-weight: 400;
            font-size: 24px;
            line-height: 100%;
            letter-spacing: -0.01em;
            color: var(--black);
            // white-space: nowrap;
          }
          .head_weight {
            font-weight: 600;
          }
          .list_head_description {
            font-family: var(--font-family);
            font-weight: 400;
            font-size: 14px;
            line-height: 107%;
            color: var(--black);
          }
          .list_right_block {
            gap: 16px;
            .list_value {
              min-width: 216px;
              background: var(--map-yes-goldao);
              border-radius: 18px;
              padding: 5px 0px 4px 0px;
              font-family: var(--font-family);
              font-weight: 600;
              font-size: 24px;
              line-height: 100%;
              letter-spacing: -0.01em;
              text-align: center;
              color: var(--black);
              white-space: nowrap;
              transition: 0.3s;
            }
            .list_currency_symbol {
              min-width: 216px;
              background: var(--gray-for-background);
              border-radius: 24px;
              padding: 5px 0px 4px 0px;
              font-family: var(--font-family);
              font-weight: 400;
              font-size: 24px;
              line-height: 100%;
              letter-spacing: -0.01em;
              text-align: center;
              color: var(--black);
              white-space: nowrap;
              transition: 0.3s;
            }
          }
        }
      }
      .list_images {
        gap: 16px;
        img {
          max-height: 210px;
          height: 100%;
        }
      }
    }
  }
}
@media (max-width: 1400px) {
  .about_product {
    .about_product_in {
      padding: 48px 32px;
    }
  }
}
@media (max-width: 992px) {
  .about_product {
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
    .about_product_in {
      .about_product_list {
        .list_item {
          .list_item_body {
            flex-direction: column;
            .list_head {
              text-align: center;
              font-weight: 400;
            }
            .list_head_description {
              font-size: 14px;
              line-height: 107%;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 576px) {
  .about_product {
    padding-top: 32px;
    .main_container {
      .about_product_in {
        padding: 0;
        border: 0;
        box-shadow: none;
        .section_title {
          font-size: 24px;
          line-height: 100%;
          letter-spacing: -0.01em;
          margin-bottom: 16px;
        }
        .about_product_list {
          .list_item {
            .list_item_body {
              gap: 8px;
              .list_head {
                font-size: 18px;
                line-height: 122%;
              }
              .list_right_block {
                width: 100%;
                gap: 8px;
                justify-content: center;
                .list_value {
                  min-width: auto;
                  width: 100%;
                  max-width: 250px;
                  font-size: 18px;
                  line-height: 122%;
                }
                .list_currency_symbol {
                  font-size: 14px;
                  line-height: 107%;
                  min-width: 97px;
                  max-width: 97px;
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
