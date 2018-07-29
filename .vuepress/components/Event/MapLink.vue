<!--
  Created by: Carlos E. Salazar <ce.salazar@gmail.com>
  Repository: https://github.com/cesalazar/berlinblockchainweek
  License: MIT
-->

<template>
  <div>
    <p v-for="venue in venues">
      <span v-if="venue.name">
        {{ venue.name }}<br/>
      </span>

      <ExternalLink
        :url="'https://www.google.com/maps/place/' + venue.address"
        :caption="venue.address"
        :indicator="'true'"
      />
    </p>
  </div>
</template>

<script>
import ExternalLink from '../Utils/ExternalLink.vue'

export default {
  components: { ExternalLink },
  computed: {
    venues () {
      let addresses = this.$page.frontmatter.address
      let venues = this.$page.frontmatter.venue
      // Multiple venues
      if (Array.isArray(venues)) {
        let count = -1
        return venues.map(venue => {
          count++
          return {
            name: venue,
            address: addresses[count]
          }
        })
      }
      // Single venue
      return [{
        name: venues || null,
        address: addresses
      }]
    }
  }
}
</script>
