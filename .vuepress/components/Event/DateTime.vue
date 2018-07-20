<!--
  Created by: Carlos E. Salazar <ce.salazar@gmail.com>
  License: MIT
-->

<template>
  <p>
    {{ datetime }}
  </p>
</template>

<script>
export default {
  props: ['date', 'time'],
  computed: {
    datetime () {
      let date = this.date || this.$page.frontmatter.date
      date = new Date(date)

      let time = this.time || this.$page.frontmatter.time

      return `${date.toDateString()} @ ${time}`
    }
  }
}
</script>
