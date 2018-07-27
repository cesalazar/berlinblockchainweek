<!--
  Created by: Carlos E. Salazar <ce.salazar@gmail.com>
  Repository: https://github.com/cesalazar/berlinblockchainweek
  License: MIT
-->

<template>
  <div class="events--container">
    <h1>
      Events
      <a class="action-button" @click="reverseDates">
        Sort
        <span v-if="descending">↑</span>
        <span v-else>↓</span>
      </a>
    </h1>

    <div v-for="day in days" :key="day">
      <h3 class="date-sticky">
        <DateTime :date="day"/>
      </h3>

      <div v-for="event in events" v-if="day === event.frontmatter.date"
        :key="event.key"
      >
        <!-- Event's name -->
        <h2>
          <a :href="$withBase(event.path)">{{ event.frontmatter.name }}</a>
        </h2>

        <!-- Event's description -->
        <p>{{ event.frontmatter.description }}</p>

        <!-- Date and time -->
        <DateTime :date="event.frontmatter.date"
          :endDate="event.frontmatter.endDate"
          :time="event.frontmatter.time"
          :endTime="event.frontmatter.endTime"
        >
          <Badge :text="event.frontmatter.category"/>
        </DateTime>
      </div>
    </div>
  </div>
</template>

<script>
import DateTime from './Event/DateTime.vue'
import { capitalizeWord } from './../theme/util.js'

export default {
  components: { DateTime },
  data: () => ({
    firstDay: new Date('2018-09-05'),
    duration: 7,
    descending: false,
    events: [],
    days: [],
  }),
  methods: {
    setEvents () {
      let events = this.$site.pages.map(event => {
        if (event.frontmatter.name) {
          let category = event.frontmatter.category
          event.frontmatter.category = capitalizeWord(category)
          event.day = setEventDay(event.frontmatter.date)
          return event
        }
      })
      // Remove nulls
      events = events.filter((event) => event != null)
      // Sort by date
      events = events.sort((a, b) => a.day - b.day)
      this.events = events
    },
    reverseDates () {
      this.descending = !this.descending
      return this.days.reverse()
    },
    setDays () {
      let nextDay = ''
      for (let i = 0; i < this.duration; i++) {
        nextDay = addDays(this.firstDay, i)
        nextDay = nextDay.toJSON()
        this.days.push(nextDay)
        this.removeEmptyDay(nextDay)
      }
    },
    // Remove the days without events
    removeEmptyDay (day) {
      let count = 0
      this.events.map(event => {
        if (day === event.frontmatter.date) count++
      })
      if (count === 0) this.days.splice(-1, 1)
    },
    capitalizeWord (word) {
      return capitalizeWord(word)
    }
  },
  mounted () {
    this.setEvents()
    this.setDays()
  }
}

function setEventDay (date) {
  let day = new Date(date)
  return day.getDay()
}

function addDays (date, days) {
  let nextDay = new Date(date)
  nextDay = nextDay.setDate(date.getDate() + days)
  return new Date(nextDay)
}

</script>

<style lang="stylus">
@require './../theme/styles/config.styl'

.events--container
  .date-sticky
    position sticky
    top $navbarHeight
    background #FFF
    .datetime
      padding-top 5px
  .action-button
    cursor pointer
    display inline-block
    font-size 1.2rem
    vertical-align middle
    margin-left 1em
    padding 0 0.5em 0.2em
    border-radius 4px
    transition background-color .1s ease
    box-sizing border-box
    float right
    margin-top 4px
    span
      font-size 1.3em
  div
    margin 2em 0 4em
</style>
