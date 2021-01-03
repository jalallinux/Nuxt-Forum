<template>
  <v-navigation-drawer
    @input="atInput"
    color="brown darken-4"
    :value="toggle"
    :right="false"
    temporary
    fixed
  >
    <v-list>
      <v-list-item>
        <v-list-item-action>
          <v-icon class="white--text">
            mdi-bell
          </v-icon>
        </v-list-item-action>
        <v-list-item-title class="white--text text-center">اعلانات سایت</v-list-item-title>
      </v-list-item>
      <v-divider color="white" />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NotificationBar",

  props: {
    toggle: {
      type: Boolean,
      default: false
    },
  },

  methods: {
    atInput(value) {
      this.$emit('toggle', value)
    }
  },
}
</script>

<style scoped>
</style>
