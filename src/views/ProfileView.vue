<script setup lang="ts">
import { useStore } from 'vuex'
import { computed, onMounted, reactive } from 'vue'
import { FormGenerator } from '@/components/form'

const store = useStore()

const state = reactive({})

const form = computed(() => store.state.forms.forms.profile)

onMounted(async () => {
  Object.assign(state, await store.dispatch('getUser'))
})
</script>

<template>
  <main class="page">
    <FormGenerator v-model="state" :form="form" />
  </main>
</template>

<style scoped lang="scss"></style>
