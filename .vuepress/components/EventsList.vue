<!--
  Created by: Carlos E. Salazar <ce.salazar@gmail.com>
  License: MIT
-->

<template>
  <div class="events--container">
    <div v-for="event in events" v-if="event.frontmatter.title">
      <!-- Event's name -->
      <h2>
        <a :href="event.path">{{ event.frontmatter.title }}</a>
      </h2>

      <!-- Event's description -->
      <p>{{ event.frontmatter.description }}</p>

      <!-- Date and time -->
      <p>{{ event.frontmatter.date }} @ {{ event.frontmatter.time }}</p>
    </div>
  </div>
</template>

<script>
export default {
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
