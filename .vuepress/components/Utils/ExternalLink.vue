<!--
  Created by: Carlos E. Salazar <ce.salazar@gmail.com>
  Repository: https://github.com/cesalazar/berlinblockchainweek
  License: MIT
-->

<template>
  <a :href="url" :title="title" target="_blank" rel="noopener noreferrer">
    {{ caption }}
    <slot v-if="!caption"></slot>
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
    title: {
      type: String,
      required: false
    },
    caption: {
      type: String,
      required: false
    },
    indicator: String
  }
}
</script>
