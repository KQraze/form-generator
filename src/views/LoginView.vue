<script setup lang="ts">
import { useStore } from 'vuex'
import { computed, reactive } from 'vue'
import { FormGenerator } from '@/components/form'

const store = useStore()

interface State {
  email: string
  password: string
}

const state = reactive<Partial<State>>({})

const form = computed(() => store.state.forms.forms.authorization)
</script>

<template>
  <main class="page">
    <FormGenerator v-model="state" :form="form">
      <template #field-password>
        <input
          v-model="state.password"
          type="password"
          class="custom-input"
          placeholder="Поле отражающее возможность кастомизации..."
        />
      </template>
    </FormGenerator>
  </main>
</template>

<style scoped lang="scss">
.custom-input {
  border: 1px dashed black;
  padding: 0.2rem 1rem;
}
</style>
