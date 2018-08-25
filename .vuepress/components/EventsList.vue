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
      <div>
        <label>
          <input class="hidden-radio" name="category" type="radio" value="All"
            checked @click="filterEvents('All')"
          />
          <span>All</span>
        </label>
      </div>
      <div v-for="category in categories">
        <label>
          <input class="hidden-radio" name="category" type="radio"
            :value="category" @click="filterEvents(category)"
          />
          <span>{{ category }}s</span>
        </label>
      </div>
    </div>

    <div v-for="day in days" :key="day">
      <h3 class="date-sticky">
        <DateTime :date="day">
          <svg slot="before" enable-background="new 0 0 488.152 488.152" height="488.152" viewBox="0 0 488.152 488.152" width="488.152" xmlns="http://www.w3.org/2000/svg"><path d="m177.854 269.311c0-6.115-4.96-11.069-11.08-11.069h-38.665c-6.113 0-11.074 4.954-11.074 11.069v38.66c0 6.123 4.961 11.079 11.074 11.079h38.665c6.12 0 11.08-4.956 11.08-11.079z"/><path d="m274.483 269.311c0-6.115-4.961-11.069-11.069-11.069h-38.67c-6.113 0-11.074 4.954-11.074 11.069v38.66c0 6.123 4.961 11.079 11.074 11.079h38.67c6.108 0 11.069-4.956 11.069-11.079z"/><path d="m371.117 269.311c0-6.115-4.961-11.069-11.074-11.069h-38.665c-6.12 0-11.08 4.954-11.08 11.069v38.66c0 6.123 4.96 11.079 11.08 11.079h38.665c6.113 0 11.074-4.956 11.074-11.079z"/><path d="m177.854 365.95c0-6.125-4.96-11.075-11.08-11.075h-38.665c-6.113 0-11.074 4.95-11.074 11.075v38.653c0 6.119 4.961 11.074 11.074 11.074h38.665c6.12 0 11.08-4.956 11.08-11.074z"/><path d="m274.483 365.95c0-6.125-4.961-11.075-11.069-11.075h-38.67c-6.113 0-11.074 4.95-11.074 11.075v38.653c0 6.119 4.961 11.074 11.074 11.074h38.67c6.108 0 11.069-4.956 11.069-11.074z"/><path d="m371.117 365.95c0-6.125-4.961-11.075-11.069-11.075h-38.67c-6.12 0-11.08 4.95-11.08 11.075v38.653c0 6.119 4.96 11.074 11.08 11.074h38.67c6.108 0 11.069-4.956 11.069-11.074z"/><path d="m440.254 54.354v59.05c0 26.69-21.652 48.198-48.338 48.198h-30.493c-26.688 0-48.627-21.508-48.627-48.198v-59.262h-137.44v59.262c0 26.69-21.938 48.198-48.622 48.198h-30.499c-26.685 0-48.336-21.508-48.336-48.198v-59.05c-23.323.703-42.488 20.002-42.488 43.723v346.061c0 24.167 19.588 44.015 43.755 44.015h389.82c24.131 0 43.755-19.889 43.755-44.015v-346.061c0-23.721-19.164-43.02-42.487-43.723zm-14.163 368.234c0 10.444-8.468 18.917-18.916 18.917h-327.031c-10.448 0-18.916-8.473-18.916-18.917v-178.753c0-10.448 8.467-18.921 18.916-18.921h327.03c10.448 0 18.916 8.473 18.916 18.921z"/><path d="m96.128 129.945h30.162c9.155 0 16.578-7.412 16.578-16.567v-96.805c0-9.156-7.423-16.573-16.578-16.573h-30.162c-9.156 0-16.578 7.417-16.578 16.573v96.805c0 9.155 7.422 16.567 16.578 16.567z"/><path d="m361.035 129.945h30.162c9.149 0 16.572-7.412 16.572-16.567v-96.805c.001-9.156-7.422-16.573-16.572-16.573h-30.162c-9.154 0-16.577 7.417-16.577 16.573v96.805c0 9.155 7.423 16.567 16.577 16.567z"/></svg>
        </DateTime>
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
          <Badge slot="after" :text="event.frontmatter.category"/>
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
      opacity 1
      color #fff
      font-weight 400
      text-transform uppercase
    svg
      fill #fff
      width 1rem
      height 1rem
      margin-right 0.25em
      opacity 0.7
  div
    margin 2em 0 4em
  .datetime
    color rgba(255, 255, 255, 0.8)
    font-size .9em
  h2
    border-bottom none
    a
      border-bottom 1.5px solid transparent
      transition all .3s ease-out
      text-decoration none !important
      text-shadow 2px 2px 2px #000
      font-weight 400
      &:hover
        border-bottom 1.5px solid $accentColor
  .filters
    margin-top $internalHeroHeight + $navbarHeight
    margin-bottom 0
    border-bottom 0 none
    display flex
    justify-content space-between
    flex-wrap wrap
    label
      cursor pointer
    div
      display inline-block
      margin 0
    span
      font-weight bold
      padding-bottom 0.5em
      border-bottom 1px solid transparent
      transition border 0.2s ease-in-out
      &:hover
        border-bottom 1px solid $accentColor
    input
      cursor pointer
      &.hidden-radio
        display none
    input:checked + span
      border-bottom 1px solid $accentColor
</style>
