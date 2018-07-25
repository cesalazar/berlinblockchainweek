<!--
  Created by: Carlos E. Salazar <ce.salazar@gmail.com>
  Repository: https://github.com/cesalazar/berlinblockchainweek
  License: MIT
-->

<template>
  <a :href="url" target="_blank" rel="noopener noreferrer">
    {{ caption }}
    <OutboundLink v-if="indicator === 'true'"/>
  </a>
</template>

<script>
// Sadly, the validation only renders a warning on the console during
// development and nothing else.
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      required: true
    },
    indicator: String
  }
}
</script>
