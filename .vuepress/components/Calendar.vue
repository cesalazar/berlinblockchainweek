<!--
  Original source: https://codepen.io/javiercf/pen/GviKy
  Adapted by: Carlos E. Salazar <ce.salazar@gmail.com>
  Repository: https://github.com/cesalazar/berlinblockchainweek
  License: MIT
-->

<template>
  <div class="responsive-table fixed-table-container" id="fixed-table-container-1">
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
              <span v-for="event in checkEvents(d,t)" v-if="event">
                <a :href="$withBase(event.path)">{{ event.name }}</a>
              </span>
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
$headerColor = #000
$light = lighten($headerColor, 90%)

.content
  padding: 0 !important
  
.responsive-table
  overflow-x: auto
  position: relative

table
  font-family: Montserrat
  width 100%
  display inline-table
  border-spacing 0
  border-collapse separate
  margin-bottom 2em
  position relative
  overflow-x visible
  thead
    tr
      th
        background $headerColor
        color $light
        padding 20px 0
        overflow hidden
        border: none
        border-top: 1px solid #222
        span
          font-size: 24px
          font-weight: 400
        span:first-child
          font-size: 32px
          font-weight: 500
        .day
          font-size 1.2em
          margin-right: 5px

          &.active
            background $light
            color $headerColor

        .long
          display none

        i
          vertical-align middle
          font-size 2em
        
  tbody
    tr
      background #151515

      td
        text-align left
        vertical-align top
        border none
        border-left 2px solid #222
        position relative
        border-bottom 2px solid #222
        padding 0
        padding: 10px
        width: 100px
        a
          color #fff
          font-size: 16px
          font-weight: 400
          font-family: Montserrat
          transition: .3s ease-in-out
          &:hover
            text-decoration: none !important
            color #f1003e

        &:last-child
          border-right 1px solid $headerColor

        &.hour
          font-size 1.6em
          padding 0
          color #fff
          background #151515
          border-bottom 2px solid #222
          border-collapse separate
          min-width 100px
          text-align center
          vertical-align middle
          padding: 15px 0

  @media(max-width:60em)
  
    .hour
      font-size: 1.3em !important
      min-width: 40px !important
    .day
      font-size: 20px !important
    .long, .short
      font-size: 18px !important

    thead
      tr
        th
          .long
            display none
          .short
            display block
          .day
            margin: 0

    tbody
      tr
        td
          padding: 7px
          min-width: 90px !important
          a
            font-size: 12px
          &.hour
            span
              // transform rotate(270deg)
              // -webkit-transform rotate(270deg)
              // -moz-transform rotate(270deg)
              writing-mode: vertical-rl
              transform: rotate(180deg)

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
