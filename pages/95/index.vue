<template>
  <div class="home">
    <div class="home__head">
      <a href="https://www.gosuslugi.ru/" class="home__link">
        <img src="@/assets/logo.svg" alt="Госуслуги" class="home__img">
      </a>

      <div class="home__lang">
        <img src="@/assets/russia.png" alt="russia" class="home__img home__img_ru">

        <p class="home__ru">
          RUS
        </p>
      </div>
    </div>

    <img src="@/assets/card_1.png" alt="card" class="home__card">

    <div class="home__date">
      <i class='bx bx-calendar home__icon'></i>
      <p class="home__text">
        Действует до: <span>05.09.2022</span>
      </p>
    </div>

    <div class="home__data">
      <p class="home__text">
        П***** А**** К*************
      </p>
      <p class="home__text">
        Дата рождения: <span>26.05.1990</span>
      </p>
      <p class="home__text">
        Паспорт: 76** ***165
      </p>
    </div>

    <button class="home__btn" type="button" @click="click">
      Закрыть
    </button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    click () {
      window.location.href = 'https://www.gosuslugi.ru/'
    }
  }
}
</script>

<style lang="scss">
body {
	padding: 0;
  margin: 0;
}

.home {
  padding: 60px 10px 60px 10px;
  font-family: 'Rubik', sans-serif;

  &__head {
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__card {
    display: block;
    width: 100%;
    min-width: 300px;
    max-width: 350px;
    margin-top: 25px;
    margin-left: auto;
    margin-right: auto;
  }

  &__date {
    margin-top: 15px;
    padding-bottom: 25px;
    border-bottom: 2px solid #e5e5e5;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6f7478;
    font-size: 14px;
  }

  &__icon {
    font-size: 23px;
    margin-right: 10px;
  }

  span {
    color: #616669;
    padding: 0;
    margin: 0;
    font-weight: 400;
  }

  &__text {
    padding: 0;
    margin: 0;
  }

  &__data {
    text-align: center;
    color: #000;
    font-size: 14px;
    margin-top: 20px;

    p {
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__btn {
    display: block;
    cursor: pointer;
    background: none;
    outline: none;
    width: 100%;
    min-width: 300px;
    max-width: 350px;
    padding: 15px;
    text-align: center;
    border: 2px solid #45658c;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    font-size: 15px;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    color: #45658c;
    margin-top: 25px;
  }

  &__lang {
    display: flex;
    align-items: center;
  }

  &__img_ru {
    width: 40px;
    margin-right: 5px;
  }
}
</style>