<template>
  <header class="header">
    <div class="header__content">
      <div class="header__logo">
        <span>📝</span>
        <span>FormGen</span>
      </div>
      <nav class="header__navigation">
        <RouterLink to="/login" class="header__link" active-class="active">Авторизация</RouterLink>
        <RouterLink to="/register" class="header__link" active-class="active"
          >Регистрация</RouterLink
        >
        <RouterLink to="/profile-edit" class="header__link" active-class="active"
          >Профиль</RouterLink
        >
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
  padding: 0.5rem;

  &__content {
    background: linear-gradient(90deg, rgba(107, 90, 84, 0.4) 0%, rgba(255, 250, 238, 0.4) 100%);
    box-shadow: 0 2px 12px rgba(255, 179, 167, 0.2);
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 0.7rem 2rem;
    border-radius: 0.5rem;
  }

  &__logo {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.03em;
    gap: 0.5rem;
    & > span:first-child {
      font-size: 1.7rem;
    }
  }

  &__navigation {
    display: flex;
    gap: 2rem;
  }

  &__link {
    color: #fff;
    font-weight: 500;
    text-decoration: none;
    padding: 0.3rem 0.8rem;
    border-radius: 0.3rem;
    transition:
      background 0.2s,
      color 0.2s;

    &:hover,
    &.active {
      background: rgba(255, 255, 255, 0.4);
      color: #000000;
    }
  }
}
</style>
