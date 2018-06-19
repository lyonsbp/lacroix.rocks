<template>
  <v-toolbar>
    <v-toolbar-title>LaCroix.rocks</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat to="/">Fun Facts</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn flat @click="changeTheme()">{{ themeString }}</v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    changeTheme () {
      this.$store.commit('swapTheme')
    }
  },
  computed: {
    themeString () {
      return this.$store.state.darkTheme === true ? 'Swap to Light Theme' : 'Swap To Dark Theme'
    }
  }
}
</script>

<style>

</style>
