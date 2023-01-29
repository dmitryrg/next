<template lang="pug">
div
  div
    p Старт
</template>

<script>

export default {
  name: 'Home',
  data: () => {
    return {
      users: [
        {firstName:'Violetta', lastName:'Apple'}
      ],
      search: ''
    }
  }
}
</script>

<style scoped>
</style>
