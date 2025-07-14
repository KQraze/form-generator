<script setup lang="ts">
import { useId, computed, useAttrs } from 'vue'

import { FormCheckbox, FormTextarea, FormSelect, FormInput } from './'
import type { FormField } from '@/types/form'

const vId = useId()
const attrs = useAttrs()

const props = withDefaults(defineProps<FormField>(), {
  id: () => '',
  label: () => '',
  type: () => 'text',
  options: () => [],
  rows: () => 0,
  cols: () => 0,
  placeholder: () => '',
  required: () => false,
})

const model = defineModel<unknown>()

const field = computed(() => {
  const properties = { ...attrs, ...props }

  switch (props.type) {
    case 'checkbox':
      return { component: FormCheckbox, data: properties }
    case 'textarea': {
      const { type, ...data } = properties
      return { component: FormTextarea, data }
    }
    case 'select': {
      const { type, ...data } = properties
      return { component: FormSelect, data }
    }
    default:
      return { component: FormInput, data: properties }
  }
})
</script>

<template>
  <label
    :class="['form-field', type === 'checkbox' && 'form-field_checkbox']"
    :for="String(id) || vId"
  >
    {{ label }}
    <slot :name="name">
      <component :is="field.component" v-model="model" v-bind="{ ...field.data, id: id || vId }" />
    </slot>
  </label>
</template>

<style scoped lang="scss">
.form-field {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.2rem;

  &_checkbox {
    display: inline-flex;
    justify-content: start;
    flex-direction: row-reverse;
  }
}
</style>
