<script setup lang="ts">
import type { TextareaAttrs } from '@/types/form'

const props = defineProps<TextareaAttrs>()

const model = defineModel<string>({ default: '' })
</script>

<template>
  <textarea v-model="model" v-bind="{ ...$attrs, ...props }" :class="['form-textarea', $attrs.class]"></textarea>
</template>

<style scoped lang="scss">
.form-textarea {
  display: flex;
  border: none;
  resize: vertical;
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  font-family: inherit;
  font-size: 1rem;

  &:focus {
    outline: 1px solid #431100;
  }
}
</style>
