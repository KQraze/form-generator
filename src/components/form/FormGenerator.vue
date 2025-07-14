<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { BaseForm, FormField, FormButton } from '@/components/form'
import type { Form } from '@/types/form'

interface IProps {
  form: Form
}

const props = defineProps<IProps>()

const emit = defineEmits<{
  (e: 'submit', ctx: SubmitEvent): void
  (e: 'reset', ctx: Event): void
}>()

const state = defineModel<Record<string, unknown>>({ default: {} })

const initialState = ref<Record<string, unknown>>({})

const triggerKey = ref(0)

const onSubmit = (e: SubmitEvent) => {
  if (props.form?.onSubmit) props.form?.onSubmit({ ...e, data: state.value })
  emit('submit', e)
}

const onReset = (e: Event) => {
  Object.assign(state.value, initialState.value)
  triggerKey.value++
  if (props.form.onReset) props.form?.onReset(e)
  emit('reset', e)
}

onMounted(() => {
  props.form.fields?.forEach((item) => {
    switch (item.type) {
      case 'checkbox':
        state.value[item.name] = false
        break
      case 'select':
        state.value[item.name] = undefined
        break
      default:
        state.value[item.name] = ''
    }
  })
  Object.assign(initialState.value, state.value)
})
</script>

<template>
  <BaseForm @submit="onSubmit" @reset="onReset">
    <template #title>
      {{ form?.title }}
    </template>
    <template #fields>
      <FormField
        v-for="field in form?.fields"
        :key="`${field.name}-${triggerKey}`"
        v-model="state[field.name]"
        v-bind="field"
      >
        <template #[field.name]>
          <slot :name="`field-${field.name}`" :field="field" />
        </template>
      </FormField>
    </template>
    <template #buttons>
      <FormButton>Отправить</FormButton>
      <FormButton type="reset">Сброс</FormButton>
    </template>
  </BaseForm>
</template>

<style scoped lang="scss"></style>
