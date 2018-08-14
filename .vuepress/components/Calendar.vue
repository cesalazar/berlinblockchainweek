<!--
  Original source: https://codepen.io/javiercf/pen/GviKy
  Adapted by: Carlos E. Salazar <ce.salazar@gmail.com>
  Repository: https://github.com/cesalazar/berlinblockchainweek
  License: MIT
-->

<template>
  <div ref="wrapper">
    <table>
      <thead>
        <tr>
          <th class="hour"></th>
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
          <td v-for="d in firstDay + 6" v-if="d >= firstDay">
            <div v-for="event in checkEvents(d,t)" v-if="event">
              <a :href="$withBase(event.path)">{{ event.name }}</a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data: () => ({
    // First calendar day of the event (September 5)
    firstDay: 5,
    // Hours without the leading zero nor trailing minutes
    firstHour: 8,
    lastHour: 22,
    dayNames: [
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'Monday', 
      'Tuesday',
    ],
    days: [],
    events: [],
  }),

  methods: {
    checkEvents (day, hour) {
      return this.events.map(event => {
        if (event.day === day && event.hour === hour)
          return event
      })
    },

    setDays () {
      let dayNumber = this.firstDay

      this.dayNames.map(dayName => {
        this.days.push({
          number: dayNumber,
          longName: dayName,
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
          if (fm.endDate) {
            if (fm.endDate !== fm.date) {
              let endDay = new Date(fm.endDate).getUTCDate()
              duration = (endDay - day) + 1
            }
          }

          for (i; i < duration; i++){
            this.events.push({
              path: path,
              name: fm.name,
              time: fm.time,
              day: day + i,
              hour,
            })
          }
        }
      })
    },

    setWrapperHeight () {
      let body = document.getElementsByTagName('body')[0]
      let offset = document.getElementsByTagName('header')[0].offsetHeight
      let wrapper = this.$refs.wrapper
      let wrapperHeight = window.innerHeight - offset
      wrapper.style.height = `${wrapperHeight}px`
      wrapper.style.overflow = 'auto'
      body.style.overflow = 'hidden'
    },

    addListeners () {
      this.$refs.wrapper.addEventListener('scroll', scrollHeaders)
      window.addEventListener('resize', this.setWrapperHeight)
    }
  },

  mounted () {
    this.setDays()
    this.getEvents()
    this.setWrapperHeight()
    this.addListeners()
  },

  beforeDestroy () {
    let body = document.getElementsByTagName('body')[0]
    body.style.overflow = 'auto'
  }
}

const scrollHeaders = function () {
  let translate = `translate(0,${this.scrollTop}px)`
  this.querySelector('thead').style.transform = translate
  this.querySelector('thead').style.zIndex = 2
}

</script>

<style lang="stylus">
@import '../theme/styles/config.styl'

$headerColor = #000
$borderColor = #222
$thickBorder = 2px solid $borderColor
$thinBorder = 1px solid $borderColor
$backgroundColor = #151515
$lightColor = lighten($headerColor, 90%)

table
  width 100%
  display inline-table
  border-spacing 0
  border-collapse separate
  margin 0 0 2em
  thead
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
        
  tbody
    tr
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

  @media(max-width:60em)
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
