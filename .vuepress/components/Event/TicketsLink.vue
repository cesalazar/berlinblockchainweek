<!--
  Created by: Carlos E. Salazar <ce.salazar@gmail.com>
  Repository: https://github.com/cesalazar/berlinblockchainweek
  License: MIT
-->

<template>
  <div class="ticket--container">
    <!-- Ticket price -->
    <span class="ticket--price">
      <b>
        Cost:&nbsp;
        <span v-if="$page.frontmatter.price > 0">{{ $page.frontmatter.price }} €</span>
        <span v-else>Free</span>
      </b>
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
