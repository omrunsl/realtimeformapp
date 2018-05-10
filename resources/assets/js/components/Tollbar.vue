<template>
    <v-toolbar>
      <!--  <v-toolbar-side-icon></v-toolbar-side-icon> -->
        <v-toolbar-title>Soru&Cevap</v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">


            <router-link
                    v-for="item in items"
                    :key="item.title"
                    :to="item.to"
                    v-if="item.show"
                    >
                <v-btn flat>{{item.title}}</v-btn>
            </router-link>

        </div>
    </v-toolbar>
</template>

<script>
    export default {
        name: "tollbar",
        data(){
            return {
                items:[
                    {title: 'Forum', to: '/forum',show: true},
                    {title: 'Soru Sor', to:'/sor',show: User.loggedIn()},
                    {title: 'Kategori', to:'/kategori',show: User.admin()},
                    {title: 'Giris', to: '/girisyap',show: !User.loggedIn()},
                    {title: 'Cikis', to:'/cikisyap',show: User.loggedIn()}
                ]
            }
        },
        created(){
            EventBus.$on('cikisyap', () => {
                User.logOut()
            })
        }
    }
</script>

<style scoped>

</style>