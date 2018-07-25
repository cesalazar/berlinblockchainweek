<!--
  Created by: Carlos E. Salazar <ce.salazar@gmail.com>
  Repository: https://github.com/cesalazar/berlinblockchainweek
  License: MIT
-->

<template>
  <p>
    <span v-if="$page.frontmatter.venue">
      {{ $page.frontmatter.venue }}<br/>
    </span>

    <!-- TODO: encode the address -->
    <ExternalLink
      :url="'https://www.google.com/maps/place/' + $page.frontmatter.address"
      :caption="$page.frontmatter.address"
    />
  </p>
</template>

<script>
import ExternalLink from '../Utils/ExternalLink.vue'

export default {
  components: { ExternalLink },
}
</script>
