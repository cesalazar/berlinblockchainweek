<!--
  Created by: Carlos E. Salazar <ce.salazar@gmail.com>
  License: MIT
-->

<template>
  <div class="ticket--container">
    <!-- Ticket price -->
    <span class="ticket--price" v-if="$page.frontmatter.price > 0">
      <b>{{ "Cost: " + $page.frontmatter.price + "€" }}</b> 
    </span>

    <!-- Link to ticket sale -->
    <span v-if="$page.frontmatter.tickets" class="button">
      <ExternalLink
        :url="$page.frontmatter.tickets"
        caption="Tickets"
        indicator="true"
      />
    </span>
  </div>
</template>

<script>
import ExternalLink from '../Utils/ExternalLink'

export default {
  components: { ExternalLink }
}
</script>

<style lang="stylus">
.ticket--container
  margin-top 1.5em

.ticket--price
  margin-right 1em
</style>
