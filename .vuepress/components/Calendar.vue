<!--
  Original source: https://codepen.io/javiercf/pen/GviKy
  Adapted by: Carlos E. Salazar <ce.salazar@gmail.com>
  Repository: https://github.com/cesalazar/berlinblockchainweek
  License: MIT
-->

<template>
  <div>
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
    }
  },

  mounted () {
    this.setDays()
    this.getEvents()
  }
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
  margin-bottom 2em
  overflow-x auto
  thead
    tr
      th
        background $headerColor
        color $lightColor
        padding 1em 0
        overflow hidden
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
        .long
          display none
        
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
          .long
            font-size 18px
            display none
          .short
            font-size 18px
            display block
          .day
            font-size 20px
            margin 0

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
