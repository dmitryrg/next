<template lang="pug">
  div#app
    nav.navbar.navbar-expand-md.navbar-dark.fixed-top.bg-dark
      div#navbarCollapse.collapse.navbar-collapse
        ul.navbar-nav.mr-auto
          router-link.nav-item(to="/private/" tag="li" exact="")
            a.nav-link About
          router-link.nav-item(to="/private/users" tag="li")
            a.nav-link Users
          li.nav-item
            a.nav-link(:href="urlCeo") CEO
    main.container(role="main")
      router-view
</template>

<script>
export default {
  name: 'App',
  computed: {
    urlCeo() {
      return 'http://localhost:3002/public/ceo'
    }
  }
}
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
