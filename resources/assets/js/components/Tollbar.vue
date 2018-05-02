<template>
    <v-toolbar>
      <!--  <v-toolbar-side-icon></v-toolbar-side-icon> -->
        <v-toolbar-title>Soru&Cevap</v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
            <router-link to="/">
                <v-btn flat>Anasayfa</v-btn>
            </router-link>

            <v-btn flat>Soru Sor</v-btn>
            <v-btn flat>Kategoriler</v-btn>

            <router-link to="/girisyap">
                <v-btn flat>Giris Yap</v-btn>
            </router-link>

        </div>
    </v-toolbar>
</template>

<script>
    export default {
        name: "tollbar"
    }
</script>

<style scoped>

</style>