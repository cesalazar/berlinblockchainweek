<!--
  Created by: Carlos E. Salazar <ce.salazar@gmail.com>
  Repository: https://github.com/cesalazar/berlinblockchainweek
  License: MIT
-->

<template>
  <div class="ticket--container">
    <!-- Ticket price -->
    <span class="ticket--price">
      Cost:&nbsp;{{ price }}
    </span>

    <!-- Link to ticket sale -->
    <span v-if="$page.frontmatter.tickets" class="button">
      <ExternalLink
        :url="$page.frontmatter.tickets"
        caption="Website"
        indicator="true"
      />
    </span>
  </div>
</template>

<script>
import ExternalLink from '../Utils/ExternalLink'

export default {
  components: { ExternalLink },
  computed: {
    price () {
      let price = this.$page.frontmatter.price
      if (!price || price === 0) {
        return 'Free'
      }
      price += ' €'
      return price
    }
  }
}
</script>

<style lang="stylus">
.ticket--container
  margin-top 1.5em

.ticket--price
  margin-right 1em
</style>
