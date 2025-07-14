<script setup lang="ts">
import type { SelectAttrs } from '@/types/form'

const props = defineProps<SelectAttrs>()

const model = defineModel<string>();
</script>

<template>
  <select :id="props.id" v-model="model" :name="props.name" :class="['form-select', $attrs.class]">
    <option :value="undefined" selected disabled>Выберите...</option>
    <option v-for="option in props.options" :key="option" :value="option">{{ option }}</option>
  </select>
</template>

<style scoped lang="scss">
.form-select {
  display: flex;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.4rem;

  &:focus {
    outline: 1px solid #431100;
  }
}
</style>
