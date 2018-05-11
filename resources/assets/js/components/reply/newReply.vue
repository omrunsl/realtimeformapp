<template>
  <div class="mt-4">
    <markdown-editor  v-model="body"></markdown-editor>
    <v-btn dark color="green" @click="submit">
      Cevapla
    </v-btn>
  </div>
</template>

<script>
export default {
  props:['questionSlug'],
  data(){
    return{
      body:null
    }
  },
  methods:{
    submit(){
      axios.post(`/api${this.questionSlug}/reply`,{body:this.body})
      .then(res => {
        this.body = ''
        EventBus.$emit('newReply', res.data.reply)
        window.scroolTo(0,0)
      })
    }
  }
}
</script>

<style>

</style>
