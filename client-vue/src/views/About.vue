<template lang="pug">
  extends ../../../server-node/SRC/templates/common-layout

  block log-status
    span Уважаемый Дмитрий
    include ../../../server-node/SRC/templates/button-login

  block left-bar
    .layout-row-categories
      a(href="http://localhost:8080/private/about") О нас
      a(href="http://localhost:8080/private/users") Пользователи
      a(href="http://localhost:8080/private/phones") Телефоны

  block main-content
    .layout-row-action Место для расположения личного кабинета
</template>

<script>
export default {
  name: 'About',
  data: () => {
    return {
      data2temp: 'Передаю в шаблон вью из контроллера',
      data2layoutVue: 'Передаю в лэйаут из контроллера'
    }
  }
}
</script>
