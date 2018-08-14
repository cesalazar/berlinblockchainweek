<template>
  <header class="navbar">
    <router-link :to="$localePath" class="home-link">
      <img class="logo" :src="$withBase(logo)" alt="Logo">
    </router-link>
    <div class="links">
      <NavLinks class="can-hide"/>
      <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia"/>
      <SearchBox v-else-if="$site.themeConfig.search !== false"/>
    </div>
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>
  </header>
</template>

<script>
import SidebarButton from './SidebarButton.vue'
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from './SearchBox.vue'
import NavLinks from './NavLinks.vue'

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox },
  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },
    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    },
    logo () {
      return require('./../public/logo.png')
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'

.navbar
  padding 0.9rem 3.5rem
  line-height $navbarHeight - 1.4rem
  position relative
  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 1.8rem
    min-width $navbarHeight - 1.4rem
    margin-right 0
    vertical-align top
  .site-name
    font-size 1.3rem
    font-weight 600
    color #fff
    position relative
  .links
    font-size 0.9rem
    position absolute
    right 3.5rem
    top 0.7rem

@media (max-width: $MQMobile)
  .navbar
    padding 0.9rem 1.5rem
    .links
      right 3.5rem
    .logo
      height 2rem
      min-width 2rem
    
    .can-hide
      display none
</style>
