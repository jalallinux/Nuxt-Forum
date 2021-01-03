<template>
  <v-footer
    app
    absolute
    color="yellow darken-3"
  >
    <span>انجمن تخصصی برنامه نویسان &copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer > span > a {
  text-decoration: none;
}
</style>
