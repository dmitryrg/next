<template lang="pug">
div
  div
    //input(type="text" @input="search = $event.target.value")
    //button(type="button" @click="findUsers") Найти
    p(v-show="!hasData && calculations !== null && !isError") Не найдено
    p(v-if="isError") {{calculations.err.message}}
    table(v-if="hasData")
      thead
        tr
          th
            span Введенное
          th
            span Предыдущее
          th
            span Среднее
      tbody
        tr(v-for='calculation of calculations' :key='calculation.id')
          td
            span  {{ calculation.current }}
          td
            span  {{ calculation.previous }}
          td
            span  {{ calculation.average }}
</template>

<script>
import axios from 'axios'
const config = require('../config.js')
export default {
  name: 'AverageNumbers',
  data: () => {
    return {
      calculations: null
    }
  },
  computed: {
    hasData() {
      return Array.isArray(this.calculations) && this.calculations.length > 0
    },
    isError() {
      return this.calculations !== null && !Array.isArray(this.calculations)
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      axios
        .get(config.apiUrl + '/history')
        .then(response => response.data)
        .then(calculations => (this.calculations = calculations))
    }
  }
}
</script>

<style scoped>
button {
  margin: 20px 5px;
}
img {
  width: 50px;
}
</style>
