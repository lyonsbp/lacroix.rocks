<template>
  <v-layout row align-center justify-space-between="">
    <v-flex xs2 mr-3>
      <v-fab-transition>
        <v-btn d-flex
          v-show="!isFirstFact"
          @click="prevFact()"
          fab class="blue darken-2 white--text">
          <v-icon>chevron_left</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-flex>

    <v-flex xs7>
      <v-card class="fact-card">
        <v-card-title>
          <div class="headline">Lacroix Fun Facts!</div>
        </v-card-title>
          <v-card-text class="text-xs-left ml-2">
            <div class="subheading">{{ factList[this.currentFact] }}</div>
          </v-card-text>
        <v-card-actions>
          <v-btn @click="randomFact()" flat>Random Fact</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>

    <v-flex xs2>
      <v-fab-transition>
        <v-btn
          v-show="!isLastFact"
          @click="nextFact()"
          fab class="blue darken-2 white--text">
          <v-icon>chevron_right</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      factList: {
        0: `Did you know? Every bottle of LaCroix sold provides housing\
        for the homeless.`,
        1: `People who do not like LaCroix tend to have a drastically lower IQ \
        than those who do.`,
        2: `LaCroix has often been likened to "an orgasm in a can".`,
        3: `LaCroix tastes like freedom unleashed.`,
        4: `LaCroix is single-handedly saving the pandas from extinction. 🐼`,
        5: `"Pamplemousse" is French for "Grapefruit".`
      },
      currentFact: 0
    }
  },
  methods: {
    nextFact () {
      if (!this.isLastFact) {
        this.currentFact++
      }
    },
    prevFact () {
      if (!this.isFirstFact) {
        this.currentFact--
      }
    },
    randomFact () {
      let randomNum = Math.floor(Math.random() * this.numFacts)
      if (randomNum !== this.currentFact) {
        this.currentFact = randomNum
      } else {
        this.randomFact()
      }
    }
  },
  computed: {
    numFacts () {
      return Object.keys(this.factList).length
    },
    isFirstFact () {
      return this.currentFact === 0
    },
    isLastFact () {
      return this.currentFact === this.numFacts - 1
    }
  }
}
</script>

<style lang="scss">

</style>
