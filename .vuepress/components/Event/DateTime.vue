<!--
  Created by: Carlos E. Salazar <ce.salazar@gmail.com>
  Repository: https://github.com/cesalazar/berlinblockchainweek
  License: MIT
-->

<template>
  <p class="datetime">
    {{ datetime }}
    <slot></slot>
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
      let datetime = `${day}, ${date.getDate()} ${month}`
      if (time) datetime += ` @ ${time}`
      return datetime
    }
  }
}
</script>
