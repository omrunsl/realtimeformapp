<template>
    <v-container>
        <v-form @submit.prevent="login">

            <v-text-field
                    label="E-mail"
                    v-model="form.email"
                    type="email"
                    required
            ></v-text-field>

            <v-text-field
                    label="Şifre"
                    v-model="form.password"
                    type="password"
                    required
            ></v-text-field>

            <v-btn
                color="green"
                type="submit"
            >
                Giris
            </v-btn>

            <router-link to="/kayitol">
                <v-btn color="blue">Kayıt Ol</v-btn>
            </router-link>

        </v-form>
    </v-container>
</template>

<script>
    export default {
        name: "login",
        data(){
            return {
                form:{
                    email:null,
                    password:null
                }
            }
        },
        created(){
          if(User.loggedIn()){
              this.$router.push({name:'forum'})
          }
        },
        methods:{
            login(){
                User.login(this.form)
            }
        },
    }
</script>

<style scoped>

</style>