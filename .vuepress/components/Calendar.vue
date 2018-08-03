<!--
  Original source: https://codepen.io/javiercf/pen/GviKy
  Adapted by: Carlos E. Salazar <ce.salazar@gmail.com>
  Repository: https://github.com/cesalazar/berlinblockchainweek
  License: MIT
-->

<template>
  <table>

    <thead>
      <tr>
        <th></th>
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
          <span v-for="event in checkEvents(d,t)" v-if="event">
            <a :href="$withBase(event.path)">{{ event.name }}</a>
          </span>
        </td>
      </tr>
    </tbody>

  </table>
</template>

<script>
export default {
  data: () => ({
    // First calendar day of the event (September 5)
    firstDay: 5,
    // Hours without the leading zero nor trailing minutes
    firstHour: 9,
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
          let day = new Date(fm.date).getDate()
          let hour = Number(fm.time.split(':')[0])
          let duration = 1
          let i = 0

          // When the event spans more than one day
          if (fm.endDate) {
            if (fm.endDate !== fm.date) {
              let endDay = new Date(fm.endDate).getDate()
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
$headerColor = #626E7E
$light = lighten($headerColor, 90%)

table
  width 100%
  display inline-table
  border-spacing 0
  border-collapse separate
  table-layout fixed
  margin-bottom 2em

  thead
    tr
      th
        background $headerColor
        color $light
        padding 0.5em
        overflow hidden
        border none

        &:first-child
          border-radius 3px 0 0 0
         
        &:last-child
          border-radius 0 3px 0 0

        .day
          display block
          font-size 1.2em
          border-radius 50%
          width 30px
          height 30px
          margin 0 auto 5px
          padding 5px
          line-height 1.8

          &.active
            background $light
            color $headerColor

        .long
          display none

        .short
          display block

        i
          vertical-align middle
          font-size 2em
        
  tbody
    tr
      background $light

      td
        text-align center
        vertical-align middle
        border none
        border-left 1px solid $headerColor
        position relative
        border-bottom 1px solid lighten($headerColor, 60%)
        padding 0

        &:last-child
          border-right 1px solid $headerColor

        &.hour
          font-size 1.6em
          padding 0
          color $headerColor
          background #fff
          border-bottom 1px solid $headerColor
          border-collapse separate
          min-width 100px

        span
          display block
          padding 0.5em 0

  @media(max-width:60em)
    thead
      tr
        th
          .long
            display none
          

          .short
            display block

    tbody
      tr
        td
          &.hour
            span
              transform rotate(270deg)
              -webkit-transform rotate(270deg)
              -moz-transform rotate(270deg)

        /* TODO: fix media queries */
        /* @media(max-width:27em){ */
        /*         thead{ */
        /*               tr{ */
        /*                     th{ */
        /*                           font-size: 65%; */
        /*                           .day{ */
        /*                                 display: block; */
        /*                                 font-size: 1.2em; */
        /*                                 border-radius: 50%; */
        /*                                             width: 20px; */
        /*                                 height: 20px; */
        /*                                 margin: 0 auto 5px; */
        /*                                 padding: 5px; */
        /*  */
        /*                                 &.active{ */
        /*                                     background: @light; */
        /*                                       color: @blue; */
        /*                                 } */
        /*                           } */
        /*                     } */
        /*               } */
        /*         } */
        /*         tbody{ */
        /*               tr{ */
        /*                     td{ */
        /*                           &.hour{ */
        /*                                 font-size: 1.7em; */
        /*                                 span{ */
        /*                                   transform:translateY(16px)rotate(270deg); */
        /*       -webkit-transform:translateY(16px)rotate(270deg); */
        /*       -moz-transform:translateY(16px)rotate(270deg); */
        /*                                 } */
        /*                           } */
        /*     } */
        /*               } */
        /*         } */
        /*   } */
</style>
