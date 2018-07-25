<!--
  Created by: Carlos E. Salazar <ce.salazar@gmail.com>
  Repository: https://github.com/cesalazar/berlinblockchainweek
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
  data: () => ({
    dayNames: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
  }),
  computed: {
    datetime () {
      let date = this.date || this.$page.frontmatter.date
      date = new Date(date)

      let day = this.dayNames[date.getDay()]
      let month = this.monthNames[date.getMonth()]

      let time = this.time || this.$page.frontmatter.time

      return `${day}, ${date.getDate()} ${month} @ ${time}`
    }
  }
}
</script>
