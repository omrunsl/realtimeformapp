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
                Giriş
            </v-btn>

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
        methods:{
            login(){
                User.login(this.form)
            }
        },
    }
</script>

<style scoped>

</style>