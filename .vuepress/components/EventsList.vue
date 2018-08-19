<!--
  Created by: Carlos E. Salazar <ce.salazar@gmail.com>
  Repository: https://github.com/cesalazar/berlinblockchainweek
  License: MIT
-->

<template>
  <div class="events--container">
    <HeroInternalPage
      title="Events"
      link="https://github.com/cesalazar/berlinblockchainweek/issues/new"
      linkText="Submit an Event"
    />
    <div class="filters">
      <span>
        <label>
          <input name="category" type="radio" value="All" checked
            @click="filterEvents('All')"
          />
          <span>All</span>
        </label>
      </span>
      <span v-for="category in categories">
        <label>
          <input name="category" type="radio" :value="category"
            @click="filterEvents(category)"
          />
          <span>{{ category }}s</span>
        </label>
      </span>
    </div>

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
    categories: [],
    events: [],
    days: [],
  }),
  methods: {
    setEvents () {
      let events = this.$site.pages.map(event => {
        let eventName = event.frontmatter.name
        if (eventName && eventName !== 'Sample Template') {
          let category = capitalizeWord(event.frontmatter.category)
          event.frontmatter.category = category
          this.setFilter(category)
          event.day = setEventDay(event.frontmatter.date)
          return event
        }
      })
      // Remove nulls
      events = events.filter(event => event)
      // Sort by date
      events = events.sort((a, b) => a.day - b.day)
      this.events = events
    },
    setFilter (category) {
      let categories = this.categories
      if (categories.indexOf(category) === -1) {
        categories.push(category)
        categories.sort((a, b) => {
          if(a < b) return -1
          if(a > b) return 1
          return 0
        })
      }
    },
    filterEvents (category) {
      this.setEvents()
      if (category !== 'All') {
        this.events = this.events.filter(event => {
          return event.frontmatter.category === category
        })
      }
      this.days = []
      this.setDays()
      if (this.descending) this.days.reverse()
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
  },
  mounted () {
    this.filterEvents('All')
  }
}

function setEventDay (date) {
  let day = new Date(date)
  return day.getUTCDay()
}

function addDays (date, days) {
  let nextDay = new Date(date)
  nextDay = nextDay.setDate(date.getUTCDate() + days)
  return new Date(nextDay)
}

</script>

<style scoped lang="stylus">
@require './../theme/styles/config.styl'

.hero
  position absolute
  top $navbarHeight - 2em
  left 0

.events--container
  .date-sticky
    position sticky
    top $navbarHeight
    background #000
    .datetime
      padding-top 5px
      opacity: 1
      color: #fff
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
    &:hover
      text-decoration: none !important
    span
      font-size 1.3em
  div
    margin 2em 0 4em
  .datetime
    color: rgba(255, 255, 255, 0.8)
  h2
    border-bottom: none
  .filters
    margin-top $internalHeroHeight + $navbarHeight
    margin-bottom 0
    border-bottom 0 none
    display flex
    justify-content space-between
    flex-wrap wrap
  label
    margin-right 1em
    cursor pointer
    input
      margin-top -3px
      vertical-align middle
      cursor pointer
</style>
