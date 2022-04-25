<template lang='pug'>

v-container(id="nav")
  router-link(to="/")
    img(src='', idd='logo')
  router-link(to="/") Home
  router-link(to="/cadastroFerramenta") Cadastrar

</template>

<script>

export default {
  name: 'NavbarComponent',
  data () {
    return
  }
}
</script>