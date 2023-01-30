<template lang="pug">
  table(v-if="isListReady")
    thead
      tr(style="font-size:0.8em")
        th(style="padding:0 0.7em;")
          span Введенное
        th(style="padding:0 0.7em;")
          span Предыдущее
        th(style="padding:0 0.7em;")
          span Среднее
    tbody
      tr(v-for='calculation of calculations' :key='calculation.id' style="text-align:center")
        td
          span  {{ calculation.current }}
        td
          span  {{ calculation.previous }}
        td
          span  {{ calculation.average }}
</template>

<script>
export default {
  name: 'TableCalculations',
  props: {
    calculations: {
      type: Array || null,
      required: true
    }
  },

  computed: {
    isListReady() {
      return this.calculations.length > 0
    }
  }
}
</script>

<style scoped>
img {
  width: 50px;
}
</style>
