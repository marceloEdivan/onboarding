<template lang='pug'>

v-container(id="nav")
  router-link(to="/")
    img(src='', idd='logo')
  span
  router-link(to="/") Home
  span  | 
  router-link(to="/participantes") Participantes

</template>

<script>

export default {
  name: 'NavbarComponent',
  data () {
    return
  }
}
</script>