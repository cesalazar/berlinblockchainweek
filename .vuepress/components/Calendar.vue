<!--
  Original source: https://codepen.io/javiercf/pen/GviKy
  Adapted by: Carlos E. Salazar <ce.salazar@gmail.com>
  Repository: https://github.com/cesalazar/berlinblockchainweek
  License: MIT
-->

<template>
  <div ref="wrapper">
    <HeroInternalPage title="Calendar" />

    <table>
      <thead>
        <tr>
          <th class="hour" @click="toggleHeadersLock">
            <div class="headers--lock" v-if="lockHeaders">
              <svg height="584.354" viewBox="80.994 1 423.365 584.354" width="423.365" xmlns="http://www.w3.org/2000/svg"><path d="m463.992 271.55c49.913-69.839 40.488-167.836-24.772-226.628-70.127-63.177-178.581-57.525-241.761 12.605l-56.459 62.67q44.222 39.67 43.737 39.39l56.455-62.666c41.455-46.015 112.615-49.724 158.629-8.27 46.015 41.453 49.729 112.616 8.274 158.632l-7.16 7.947c-31.314-6.585-70.217-12.563-108.256-12.563-87.065 0-172.554 29.266-173.631 29.624-9.257 3.087-16.775 5.762-23.657 8.415-8.207 3.164-14.397 12.259-14.397 21.157v224.641c0 8.837 6.15 17.94 14.305 21.172 63.097 25.003 129.505 37.678 197.379 37.678s134.282-12.678 197.382-37.681c8.152-3.231 14.299-12.332 14.299-21.169v-224.641c0-8.898-6.189-17.993-14.4-21.16-6.885-2.653-14.402-5.328-23.652-8.415-.091-.03-.809-.268-2.315-.738zm-217.939 98.731c0-25.769 20.875-46.622 46.623-46.622 25.746 0 46.621 20.851 46.621 46.622 0 17.075-9.629 31.371-23.311 39.475v77.081c0 12.886-10.426 23.311-23.311 23.311-12.886 0-23.311-10.425-23.311-23.311v-77.081c-13.681-8.104-23.311-22.4-23.311-39.475z" fill-rule="evenodd"/></svg>
            </div>
            <div class="headers--lock" v-else>
              <svg height="585.354" viewBox="80.994 0 423.365 585.354" width="423.365" xmlns="http://www.w3.org/2000/svg"><path d="m292.679 0c-94.389 0-171.183 76.791-171.183 171.183v97.767c0 1.111-1.371 2.983-2.448 3.341-9.257 3.087-16.775 5.762-23.657 8.415-8.207 3.164-14.397 12.259-14.397 21.157v224.641c0 8.837 6.15 17.94 14.305 21.172 63.097 25.003 129.505 37.678 197.379 37.678s134.282-12.678 197.382-37.681c8.152-3.231 14.299-12.332 14.299-21.169v-224.641c0-8.898-6.189-17.993-14.4-21.16-6.885-2.653-14.402-5.328-23.652-8.415-1.074-.358-2.445-2.231-2.445-3.342v-97.766c-.005-94.389-76.794-171.18-171.183-171.18zm-46.626 370.281c0-25.769 20.875-46.622 46.623-46.622 25.746 0 46.621 20.851 46.621 46.622 0 17.075-9.629 31.371-23.311 39.475v77.081c0 12.886-10.426 23.311-23.311 23.311-12.886 0-23.311-10.425-23.311-23.311v-77.081c-13.681-8.104-23.311-22.4-23.311-39.475zm158.947-199.101v84.355c-36.834-7.926-74.623-11.94-112.306-11.943-37.666 0-75.447 4.015-112.338 11.934v-84.346c0-61.935 50.386-112.32 112.32-112.32 61.933-.001 112.324 50.385 112.324 112.32z"/></svg>
            </div>
          </th>
          <th v-for="day in days" :key="day.number">
            <span class="day">{{ day.number }}</span>
            <span class="long">{{ day.longName }}</span>
            <span class="short">{{ day.longName.substring(0, 3) }}</span>
          </th>
        </tr>
      </thead>

      <tbody v-for="t in lastHour" v-if="t >= firstHour">
        <tr>
          <!-- Hour column -->
          <td class="hour">
            <span>{{ t < 10 ? '0' + t : t }}:00</span>
          </td>

          <!-- Each day column -->
          <td v-for="d in firstDay + 13" v-if="d >= firstDay">
            <div v-for="event in checkEvents(d, t)" v-if="event">
              <a :href="$withBase(event.path)">{{ event.name }}</a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const debounce = require('debounce')

export default {
  data: () => ({
    // First calendar day of the event (March 1)
    firstDay: 1,
    // Hours without the leading zero nor trailing minutes
    firstHour: 8,
    lastHour: 23,
    dayNames: [
      'Friday',
      'Saturday',
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
    ],
    days: [],
    events: [],
    lockHeaders: false
  }),

  computed: {
    debounceScroll () {
      return debounce(scrollHeaders, 100)
    },

    debounceResize () {
      return debounce(this.setWrapperHeight, 100)
    }
  },

  methods: {
    checkEvents (day, hour) {
      return this.events.map(event => {
        if (event.day === day && event.hour === hour) {
          return event
        }
      })
    },

    setDays () {
      let dayNumber = this.firstDay

      this.dayNames.map(dayName => {
        this.days.push({
          number: dayNumber,
          longName: dayName
        })

        dayNumber++
      })
    },

    getEvents () {
      const pages = this.$site.pages

      pages.map(event => {
        let path = event.path
        let fm = event.frontmatter

        if (fm.name && fm.time && fm.name !== 'Sample Template') {
          let day = new Date(fm.date).getUTCDate()
          let hour = Number(fm.time.split(':')[0])
          let duration = 1
          let i = 0

          // When the event spans more than one day
          if (fm.endDate && fm.endDate !== fm.date) {
            let endDay = new Date(fm.endDate).getUTCDate()
            duration = (endDay - day) + 1
          }

          for (i; i < duration; i++) {
            this.events.push({
              path: path,
              name: fm.name,
              time: fm.time,
              day: day + i,
              hour
            })
          }
        }
      })
    },

    // The wrapper needs a fixed height to allow the headers to move
    setWrapperHeight () {
      let body = document.getElementsByTagName('body')[0]
      let header = document.getElementsByTagName('header')[0]
      let wrapper = this.$refs.wrapper

      if (!body || !header || !wrapper) return

      wrapper.style.height = `${window.innerHeight - header.offsetHeight}px`
      wrapper.style.overflow = 'auto'
      body.style.overflow = 'hidden'
    },

    toggleHeadersLock () {
      if (!this.lockHeaders) {
        this.$refs.wrapper.addEventListener('scroll', this.debounceScroll)
      } else {
        this.$refs.wrapper.removeEventListener('scroll', this.debounceScroll)
        resetHeadersPosition()
      }

      this.lockHeaders = !this.lockHeaders
    }
  },

  mounted () {
    this.setDays()
    this.getEvents()
    this.setWrapperHeight()
    this.toggleHeadersLock()
    window.addEventListener('resize', this.debounceResize)
  },

  beforeDestroy () {
    let body = document.getElementsByTagName('body')[0]
    body.style.overflow = 'auto'
    window.removeEventListener('resize', this.debounceResize)
  }
}

const scrollHeaders = function () {
  let hero = this.querySelector('.hero')
  let thead = this.querySelector('thead')
  let hours = this.querySelectorAll('.hour')

  if (!hero || !thead || !hours) return

  let heroHeight = hero.offsetHeight

  if (this.scrollTop >= heroHeight) {
    thead.style.transform = `translate(0, ${this.scrollTop - heroHeight}px)`
  } else {
    thead.style.transform = `translate(0, 0)`
  }

  for (let hour of hours) {
    hour.style.transform = `translate(${this.scrollLeft}px, 0)`
  }
}

const resetHeadersPosition = function () {
  let hero = document.querySelector('.hero')
  let thead = document.querySelector('thead')
  let hours = document.querySelectorAll('.hour')

  if (!hero || !thead || !hours) return

  thead.style.transform = `translate(0, 0)`

  for (let hour of hours) {
    hour.style.transform = `translate(0, 0)`
  }
}
</script>

<style scoped lang="stylus">
@import '../theme/styles/config.styl'

$headerColor = #000
$borderColor = #222
$thickBorder = 2px solid $borderColor
$thinBorder = 1px solid $borderColor
$backgroundColor = #151515
$lightColor = lighten($headerColor, 90%)
$headersTransition = all 0.25s ease-out

table
  width 100%
  display inline-table
  border-spacing 0
  border-collapse separate
  margin 0 0 2em
  position relative
  z-index 4
  thead
    transition $headersTransition
    z-index 3
    tr
      th
        background $headerColor
        color $lightColor
        padding 1em 0
        border none
        border-top $thinBorder
        span
          font-size 24px
          font-weight 400
        .day
          font-size 32px
          font-weight 500
          margin-right 5px
          &.active
            background $lightColor
            color $headerColor
        .short
          display none
        .long
          display block
        .headers--lock
          cursor pointer
          svg
            width 1.5em
            height 1.5em
            fill rgba(255, 255, 255, 0.5)
            transition fill .3s ease-in-out
            &:hover
              fill $accentColor
        &.hour
          transition $headersTransition

  tbody
    tr
      .hour
        background $backgroundColor
        border-right $thinBorder
        transition $headersTransition
        z-index 2
      background $backgroundColor
      td
        text-align left
        vertical-align middle
        border none
        border-bottom $thickBorder
        border-left $thickBorder
        padding 10px
        width 100px
        a
          display block
          color #fff
          font-size 16px
          font-weight 400
          font-family Montserrat
          transition .3s ease-in-out
        &:last-child
          border-right $thinBorder
        &.hour
          font-size 1.6em
          color #fff
          border-bottom $thickBorder
          border-collapse separate
          min-width 100px
          text-align center
          vertical-align middle
          padding 15px 0
        div
          margin 0.5em 0
        div + div
          &:before
            border-top $thickBorder
            padding-top 0.6em
            display block
            margin 0 auto
            width 90%
            content ' '

@media(max-width: 64em)
  .hero
    width 100%
    top $navbarHeight
    left 0
    pointer-events none
    position fixed

  table
    margin-top $internalHeroHeight
    thead
      tr
        th
          .day
            font-size 20px
            margin 0
          .long
            display none
          .short
            font-size 18px
            display block
          .headers--lock
            svg
              transition none
              &:hover
                fill rgba(255, 255, 255, 0.5)

    tbody
      tr
        td
          padding 7px
          a
            font-size 12px
          &.hour
            font-size 1.3em
            min-width 40px
            span
              writing-mode vertical-rl
              transform rotate(180deg)
</style>
