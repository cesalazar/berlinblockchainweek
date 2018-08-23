<!--
  Created by: Carlos E. Salazar <ce.salazar@gmail.com>
  Repository: https://github.com/cesalazar/berlinblockchainweek
  License: MIT
-->

<template>
  <div>
    <HeroInternalPage
      :title="data.name"
    />

    <div class="category">
      <Badge :text="capitalizeWord(data.category)"/>
    </div>

    <Synopsis/>

    <div v-if="data.speakers && data.speakers.length > 0">
      <h2>Speakers</h2>
      <Speakers/>
    </div>

    <div v-if="data.date">
      <h2>Date</h2>
      <DateTime/>
    </div>

    <div v-if="data.venue || data.address">
      <h2 v-if="Array.isArray(data.address)">Venues</h2>
      <h2 v-else>Venue</h2>
      <MapLink/>
    </div>

    <div v-if="data.tickets">
      <h2>More information</h2>
      <TicketsLink/>
    </div>
  </div>
</template>

<script>
import DateTime from './DateTime'
import MapLink from './MapLink'
import Speakers from './Speakers'
import Synopsis from './Synopsis'
import TicketsLink from './TicketsLink'
import { capitalizeWord } from './../../theme/util.js'
const debounce = require('debounce')

export default {
  components: { DateTime, MapLink, Speakers, Synopsis, TicketsLink },
  computed: {
    data () {
      return this.$page.frontmatter
    },

    debounce () {
      return debounce(setContentOffset, 100)
    }
  },
  methods: {
    capitalizeWord (word) {
      return capitalizeWord(word)
    }
  },
  mounted () {
    window.addEventListener('load', this.debounce)
    window.addEventListener('resize', this.debounce)
  },
  destroyed () {
    window.removeEventListener('load', this.debounce)
    window.removeEventListener('resize', this.debounce)
  }
}

const setContentOffset = function () {
  let header = document.querySelector('header')
  let hero = document.querySelector('.hero')
  let category = document.querySelector('.category')

  if (!header || !hero || !category) return

  let offset = header.offsetHeight + hero.offsetHeight

  category.style.marginTop = `${offset}px`
}
</script>

<style scoped lang="stylus">
@import './../../theme/styles/config.styl'

.hero
  position absolute
  top $navbarHeight
  left 0

.badge
  margin-left 0 !important
  margin-right 0 !important

.category
  text-align right
  margin-top $internalHeroHeight + $navbarHeight
h2
  margin-top 1.5em
</style>
