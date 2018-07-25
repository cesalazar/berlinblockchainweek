<!--
  Created by: Carlos E. Salazar <ce.salazar@gmail.com>
  Repository: https://github.com/cesalazar/berlinblockchainweek
  License: MIT
-->

<template>
  <div class="events--container">
    <!-- TODO: this 'v-if' probably should be a category, instead of the name -->
    <div v-for="event in events" v-if="event.frontmatter.name">
      <!-- Event's name -->
      <h2>
        <a :href="$withBase(event.path)">{{ event.frontmatter.name }}</a>
      </h2>

      <!-- Event's description -->
      <p>{{ event.frontmatter.description }}</p>

      <!-- Date and time -->
      <DateTime :date="event.frontmatter.date" :time="event.frontmatter.time"/>
    </div>
  </div>
</template>

<script>
import DateTime from './Event/DateTime.vue'

export default {
  components: { DateTime },
  computed: {
    events () {
      return this.$site.pages
    }
  }
}
</script>

<style lang="stylus">
.events--container
  div
    margin 2em 0 4em
    border-bottom 1px solid darken(#E9EBEE, 5%)
</style>
