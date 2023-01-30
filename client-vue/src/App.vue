<template lang="pug">
  div#app
    nav.navbar.navbar-expand-md.navbar-dark.fixed-top.bg-dark
      div#navbarCollapse.collapse.navbar-collapse
        ul.navbar-nav.mr-auto
          li.nav-item
            a.nav-link(:href="urlPublic") message board
          router-link.nav-item(to="/private/average-numbers" tag="li")
            a.nav-link average numbers
          li.nav-item
            a.nav-link(:href="urlGit") git repository
    main.container(role="main")
      router-view
</template>

<script>
const config = require('./config.js')
export default {
  name: 'App',
  computed: {
    urlPublic() {
      return `${config.serverSideRenderUrl}/message-board`
    },
    urlGit() {
      return `${config.gitRepositoryUrl}/`
    }
  }
}
</script>

<style>
#app {
  margin-left: 0;
  margin-top: 60px;
}
</style>
