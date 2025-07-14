<script setup lang="ts">
import type { InputAttrs } from '@/types/form'

const props = defineProps<InputAttrs>()

const model = defineModel<string | number>({ default: '' })
</script>

<template>
  <input v-model="model" class="form-input" v-bind="{ ...$attrs, ...props }" />
</template>

<style scoped lang="scss">
.form-input {
  display: flex;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.4rem;

  &:focus {
    outline: 1px solid #431100;
  }
}
</style>
