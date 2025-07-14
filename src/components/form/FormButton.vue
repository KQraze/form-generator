<template>
  <button v-bind="$attrs" :class="['form-button', $attrs.type === 'reset' && 'form-button_red']">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.form-button {
  appearance: none;
  border: none;
  display: flex;
  padding: 0.4rem 0.8rem;
  border-radius: 0.4rem;
  color: white;
  cursor: pointer;

  background: green;

  &_red {
    background: #b50000;
  }
}
</style>
