<template>
  <footer class="footer">
    <div class="main_container">
      <div class="footer_in d-lg-flex justify-content-between">
        <div class="logo text-lg-end">
          <img class="d-lg-block d-none" src="~/assets/images/footerlogo.svg" alt="footerlogo" />
          <img class="d-lg-none d-block" src="~/assets/images/footermoblogo.svg" alt="footermoblogo" />
        </div>
        <div class="menu_item">
          <div class="head">Для бизнеса</div>
          <div class="nav_link">
            <a href="#">Приём платежей от физлиц за товары и услуги</a>
          </div>
          <div class="nav_link">
            <a href="#">Расчёт с зарубежными контрагентами </a>
          </div>
        </div>
        <div class="menu_item">
          <div class="head">Инвесторам</div>
          <div class="nav_link">
            <a href="#">Инвестировать в монеты</a>
          </div>
          <div class="nav_link">
            <a href="#">Открыть офис GOLDAO</a>
          </div>
        </div>
        <div class="menu_item">
          <div class="head">
            <a href="Tel:+74951234567">+7 (495) 123-45-67</a>
          </div>
          <div class="messengers d-flex">
            <div class="messenger_icon d-flex align-item-center">
              <a href="#">
                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.9545 0.906982H22.4685L14.7914 9.34397L23.8229 20.8248H16.7513L11.2125 13.8617L4.87495 20.8248H1.35878L9.57024 11.8005L0.90625 0.906982H8.15741L13.164 7.2715L18.9545 0.906982ZM17.7212 18.8024H19.6683L7.09937 2.82318H5.00986L17.7212 18.8024Z"
                    fill="#CFD2DD"
                  />
                </svg>
              </a>
              <a href="#">
                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.3643 0C6.46076 0 0.864258 5.5965 0.864258 12.5C0.864258 18.362 4.90026 23.281 10.3448 24.632V16.32H7.76726V12.5H10.3448V10.854C10.3448 6.5995 12.2703 4.6275 16.4473 4.6275C17.2393 4.6275 18.6058 4.783 19.1648 4.938V8.4005C18.8698 8.3695 18.3573 8.354 17.7208 8.354C15.6713 8.354 14.8793 9.1305 14.8793 11.149V12.5H18.9623L18.2608 16.32H14.8793V24.9085C21.0688 24.161 25.8648 18.891 25.8648 12.5C25.8643 5.5965 20.2678 0 13.3643 0Z"
                    fill="#CFD2DD"
                  />
                </svg>
              </a>
              <a href="#">
                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.62162 1.75736C0.864258 3.51472 0.864258 6.34312 0.864258 12V13C0.864258 18.6569 0.864258 21.4853 2.62162 23.2427C4.37898 25 7.20738 25 12.8643 25H13.8643C19.5211 25 22.3495 25 24.1069 23.2427C25.8643 21.4853 25.8643 18.6569 25.8643 13V12C25.8643 6.34312 25.8643 3.51472 24.1069 1.75736C22.3495 0 19.5211 0 13.8643 0H12.8643C7.20738 0 4.37898 0 2.62162 1.75736ZM5.08307 7.60422C5.21849 14.1042 8.46848 18.0105 14.1664 18.0105H14.4894V14.2917C16.5831 14.5001 18.1663 16.0313 18.8018 18.0105H21.7601C20.9476 15.0521 18.8121 13.4167 17.4788 12.7917C18.8121 12.0209 20.6871 10.1459 21.135 7.60422H18.4475C17.8642 9.66672 16.1352 11.5417 14.4894 11.7188V7.60422H11.8018V14.8126C10.1351 14.3959 8.03098 12.3751 7.93723 7.60422H5.08307Z"
                    fill="#CFD2DD"
                  />
                </svg>
              </a>
            </div>
            <div class="email">
              <a href="mailto:info@goldao.ru">info@goldao.ru</a>
            </div>
          </div>
          <div class="location">
            107564, г. Москва, ул. Красная площадь, д. 2, 75
            <br />
            ИНН 7702705290 | КПП 770901001
          </div>
          <div class="copyright">© ООО "ГОЛДАО" 2024</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: 64px;
  background: linear-gradient(180deg, #fdfdfd 0%, #f7f7f8 100%);
  padding: 37px 0 57px;
  .footer_in {
    gap: 20px;
    .logo {
      max-width: 280px;
      width: 100%;
    }
    .menu_item {
      .head {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 24px;
        line-height: 125%;
        letter-spacing: -0.02em;
        color: var(--light-gray);
        margin-bottom: 6px;
        a {
          font-family: var(--font-family);
          font-weight: 400;
          font-size: 24px;
          line-height: 125%;
          letter-spacing: -0.02em;
          color: var(--light-gray);
          text-decoration: none;
        }
      }
      .nav_link {
        a {
          font-family: var(--font-family);
          font-weight: 400;
          font-size: 14px;
          line-height: 107%;
          color: #141824;
          text-decoration: none;
          white-space: nowrap;
        }
      }
      .messengers {
        gap: 15px;
        margin-bottom: 9px;
        .messenger_icon {
          gap: 15px;
        }
        .email {
          a {
            font-family: var(--font-family);
            font-weight: 400;
            font-size: 14px;
            line-height: 107%;
            color: var(--black);
            text-decoration: none;
          }
        }
      }
      .location {
        max-width: 332px;
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 14px;
        line-height: 107%;
        color: #141824;
        margin-bottom: 11px;
      }
      .copyright {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 14px;
        line-height: 107%;
        color: #141824;
      }
    }
  }
}
@media (max-width: 992px) {
  .footer {
    padding: 36px 0 100px;
    background: var(--yellow);
    .footer_in {
      .logo {
        margin-bottom: 20px;
      }
      .menu_item {
        margin-bottom: 15px;
        &:last-child {
          margin-bottom: 25px;
        }
        .head {
          font-weight: 700;
          font-size: 18px;
          line-height: 122%;
          color: var(--white);
          margin-bottom: 5px;
          a {
            font-weight: 600;
            font-size: 24px;
            line-height: 100%;
            letter-spacing: -0.01em;
            color: var(--white);
            margin-bottom: 3px;
          }
        }
        .nav_link {
          line-height: 12px;
          margin-bottom: 7px;
          a {
            font-weight: 400;
            font-size: 14px;
            line-height: 107%;
            color: #141824;
          }
        }
        .messengers {
          .messenger_icon {
            svg {
              path {
                fill: var(--white);
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 576px) {
  .footer {
    padding-top: 18px;
  }
}
</style>
