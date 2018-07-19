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

    <tbody v-for="n in 22" v-if="n > 8">

      <tr>
        <td class="hour" rowspan="4"><span>{{ n }}:00</span></td>
        <td v-for="n in 7"></td>
      </tr>

      <tr v-for="n in 3">
        <td v-for="n in 7"></td>
      </tr>

    </tbody>

  </table>
</template>

<script>
export default {
  data: () => ({
    dayNames: [
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'Monday', 
      'Tuesday',
    ],
    days: []
  }),

  mounted () {
    // First calendar day of the event (September 5)
    let dayNumber = 5

    this.dayNames.map(dayName => {
      this.days.push({
        number: dayNumber,
        longName: dayName,
      })

      dayNumber++
    })
  }
}
</script>

<style lang="stylus">
$blue = #626E7E
$light = lighten($blue, 90%)
$light2 = darken($light, 6%)

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
        background $blue
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
            color $blue

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

      &:nth-child(even)
        background $light2

      &:nth-child(4n+0)
        td
          border-bottom 1px solid $blue
        
      td
        text-align center
        vertical-align middle
        border none
        border-left 1px solid $blue
        position relative
        height 12px
        cursor pointer

        &:last-child
          border-right 1px solid $blue

        &.hour
          font-size 1.6em
          padding 0
          color $blue
          background #fff
          border-bottom 1px solid $blue
          border-collapse separate
          min-width 100px
          cursor default

          span
            display block

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
