<script setup lang="ts">
const emit = defineEmits<{
  (e: 'submit', ctx: SubmitEvent): void,
  (e: 'reset', ctx: Event): void,
}>()
</script>

<template>
  <form class="form" @submit.prevent="(ctx) => emit('submit', ctx as SubmitEvent)" @reset.prevent="emit('reset', $event)">
    <div class="form__title">
      <slot name="title" />
    </div>
    <div class="form__fields">
      <slot name="fields" />
    </div>
    <div class="form__buttons">
      <slot name="buttons" />
    </div>
  </form>
</template>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(50px);
  border-radius: 0.5rem;
  box-shadow: 0 0.2rem 2rem rgba(0, 0, 0, 0.2);
  width: 28rem;

  & > div {
    width: 100%;
  }

  &__title {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.5;
  }

  &__fields {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  &__buttons {
    display: flex;
    gap: 0.75rem;
    width: 100%;
  }
}
</style>
