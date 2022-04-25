<template lang="pug">
  
v-container
  h1 Participantes
  br
  CardUser(v-for="(participante, id) in participantes", :key="id", v-bind:user="participante")
      
</template>

<script>
import CardUser from "../components/CardUser.vue"

export default {
  components:{
    CardUser
  },

  data (){
    return {
      estagiarios : ['marceloEdivan', 'mat-eus', 'firminoandre', 'ekmiyabe', 'samuelfilipeprevision'],
      participantes: []
    }
  },

  methods: {
    async getUser(){
      let res, result

      for (let estagiario of this.estagiarios){
        console.log(estagiario)
        res = await fetch(`https://api.github.com/users/${estagiario}`)
        result = await res.json()

        console.log(result)

        this.participantes.push({
          name    : result.name,
          login   : result.login,
          picture : result.avatar_url
        })
      }
    }
  },
  
  mounted (){
    this.getUser();
  }
}
</script>