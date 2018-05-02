<script>
    export default {
        name: "logout",
        created(){
            EventBus.$emit('cikisyap');
        }

    }
</script>

<style scoped>

</style>