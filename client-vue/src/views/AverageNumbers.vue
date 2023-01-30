<template lang="pug">
div(style="margin-top:5em; margin-left-0em;")
  div
    p Определение среднего числа
    input(type="text" v-model="digit" placeholder="Введите число")
    button.btn.btn-success(type="button" @click="calc") calc
    div
      input(type="checkbox" v-model="isNegative")
      label(style="margin-left:0.3em;margin-right:1em;") negative
      input(type="checkbox" v-model="isFractional")
      label(style="margin-left:0.3em;") fractional
  div
    p(v-if="isCurrentError") Данные текущих вычислений некорректны
    tag-table-calculations(v-if="hasCurrentData" :calculations="currentCalculations")
  div
    p(style="margin-top:1.5em;") История вычислений
    p(v-show="!hasHistoryData && historyCalculations !== null && !isHistoryError") Отсутствует
    p(v-if="isHistoryError") Поступившие исторические данные некорректны
    tag-table-calculations(v-if="hasHistoryData" :calculations="historyCalculations")

</template>

<script>
import axios from 'axios'
import TableCalculations from '../components/TableCalculations.vue'
const config = require('../config.js')
export default {
  name: 'AverageNumbers',
  components: {
    'tag-table-calculations': TableCalculations
  },
  data: () => {
    return {
      historyCalculations: [],
      currentCalculations: [],
      digit: null,
      isNegative: false,
      isFractional: false
    }
  },
  computed: {
    hasHistoryData() {
      return Array.isArray(this.historyCalculations) && this.historyCalculations.length > 0
    },
    isHistoryError() {
      return this.historyCalculations !== null && !Array.isArray(this.historyCalculations)
    },
    hasCurrentData() {
      return Array.isArray(this.currentCalculations) && this.currentCalculations.length > 0
    },
    isCurrentError() {
      return this.currentCalculations !== null && !Array.isArray(this.currentCalculations)
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      axios
        .get(config.apiUrl + '/calculation-history')
        .then(response => response.data)
        .then(calculations => (this.historyCalculations = calculations.reverse()))
    },
    calc() {
      if (!this.digit) {
        alert('The number is empty')
        return
      }
      if (isNaN(this.digit)) {
        alert('The value in number is not a number')
        return
      }
      if (this.isNegative === +this.digit >= 0) {
        alert('The number does not correspond to the negative factor')
        return
      }
      if (this.isFractional !== this.digit.toString().includes('.')) {
        alert('The number does not correspond to the fractional factor')
        return
      }
      axios
        .post(config.apiUrl + '/calculation-maker', { digit: this.digit })
        .then(response => response.data)
        .then(average => {
          const allPrevious = [
            ...this.historyCalculations.reverse(),
            ...this.currentCalculations.reverse()
          ]
          this.currentCalculations.unshift({
            current: this.digit,
            previous: allPrevious.length ? allPrevious.slice(-1)[0].current : 0,
            average,
            id: allPrevious.length ? allPrevious.slice(-1)[0].id + 1 : 1
          })
          this.digit = null
          this.isNegative = false
          this.isFractional = false
        })
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
