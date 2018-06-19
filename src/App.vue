<template>
  <v-app :dark="useDarkTheme" id="app">
    <toolbar-component/>
    <v-content>
      <v-container>
        <fact-viewer/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import FactViewer from './components/FactViewer.vue'
import ToolbarComponent from './components/Toolbar.vue'

export default {
  name: 'app',
  components: {
    FactViewer,
    ToolbarComponent
  },
  computed: {
    useDarkTheme () {
      return this.$store.state.darkTheme
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
