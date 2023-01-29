<template lang="pug">
  div#app
    nav.navbar.navbar-expand-md.navbar-dark.fixed-top.bg-dark
      div#navbarCollapse.collapse.navbar-collapse
        ul.navbar-nav.mr-auto
          li.nav-item
            a.nav-link(:href="urlPublic") message board
          router-link.nav-item(to="/private/average-numbers" tag="li")
            a.nav-link average numbers
    main.container(role="main")
      router-view
</template>

<script>
export default {
  name: 'App',
  computed: {
    urlPublic() {
      return 'http://localhost:3002/public/message-board'
    }
  }
}
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
