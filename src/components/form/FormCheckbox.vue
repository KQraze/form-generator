<script setup lang="ts">
import type { InputAttrs } from '@/types/form'

const props = defineProps<InputAttrs>()

const model = defineModel<boolean>()
</script>

<template>
  <input v-model="model" class="form-checkbox" v-bind="{ ...$attrs, ...props }" />
</template>

<style scoped lang="scss">
.form-checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  appearance: none;
  min-width: 1.2rem;
  height: 1.2rem;
  border: 1px solid black;
  background: white;

  &:checked {
    &:after {
      position: absolute;
      content: '✓';
      color: #563600;
    }
  }
}
</style>
