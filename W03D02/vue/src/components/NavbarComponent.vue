<template lang='pug'>

v-container(id="nav")
  router-link(to="/")
    img(src='', idd='logo')
  router-link(to="/") Home
  span  | 
  router-link(to="/ferramentasCadastradas") Cadastros

</template>

<script>

export default {
  name: 'NavbarComponent',
}
</script>