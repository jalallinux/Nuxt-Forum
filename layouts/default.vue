<template>
  <v-app>
    <Sidebar :toggle="toggleSidebar" @toggle="updateSidebarToggle" />
    <v-app-bar
      color="yellow darken-3"
      :clipped-left="true"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="toggleSidebar = !toggleSidebar" />
      <v-toolbar-title>انجمن تخصصی برنامه نویسان</v-toolbar-title>
      <v-spacer />

      <v-btn icon @click.stop="toggleNotificationBar = !toggleNotificationBar">
        <v-icon v-if="Math.random() < 0.5" color="red">mdi-bell-ring</v-icon>
        <v-icon v-else>mdi-bell</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <NotificationBar :toggle="toggleNotificationBar" @toggle="updateNotificationBarToggle" />
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/app/Footer'
import NotificationBar from "@/components/app/NotificationBar";
import Sidebar from "@/components/app/Sidebar";

export default {
  components: {
    Sidebar, NotificationBar, Footer
  },

  data () {
    return {
      toggleSidebar: false,
      toggleNotificationBar: false
    }
  },

  methods: {
    updateSidebarToggle(value) {
      this.toggleSidebar = value
    },
    updateNotificationBarToggle(value) {
      this.toggleNotificationBar = value
    }
  },
}
</script>

<style>
.v-list-item > .v-list-item__action {
  margin-left: 8px !important;
}
footer > span > a {
  text-decoration: none;
}
</style>
