<template>
  <div class="home">
    <div class="home_main">
      <div class="home-wrap">
        <div class="hero">

          <p class="description">
            {{ data.tagline || $description || 'Welcome to your VuePress site' }}
          </p>
          <h1>{{ data.heroText || $title || 'Hello' }}</h1>
          <p class="action" v-if="data.actionText && data.actionLink">
            <NavLink class="action-button" :item="actionLink"/>
          </p>
        </div>
      </div>
    </div>
    <div class="home_about">
      <div class="home-wrap">
        <h2 class="home_about-title"><b>About</b> the Community Blockchain Week</h2>
        <Content custom/>
      </div>
    </div>
    <div class="home_features">
      <div class="home-wrap">
        <div class="features" v-if="data.features && data.features.length">
          <div class="title">
            <h2><b>Venues</b> of the Community Blockchain Week</h2>
          </div>
          <div class="feature" v-for="feature in data.features">
            <h2>{{ feature.title }}</h2>
            <p>{{ feature.details }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer" v-if="data.footer">
      <span v-for="link in data.footer">
        <a :href="link.url">
          {{ link.text }}
        </a>
      </span>
      <p class="action" v-if="data.actionText && data.actionLink">
        <NavLink class="action-button" :item="actionLink"/>
      </p>
    </div>
  </div>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  components: { NavLink },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'

.home
  // padding $navbarHeight 2rem 0
  // max-width 960px
  // margin 0px auto
  &-wrap
    padding $navbarHeight 2rem 0
    max-width 960px
    margin 0px auto
  &_main
    background url('~/main-bg.jpg')
    background-attachment fixed
    background-size cover
    background-position left bottom
    background-repeat repeat
    color #fff
    padding 200px 0
  &_about
    background #000
    color #fff
    hr, br
      display none
    .home-wrap
      padding 80px 1.5rem
      p
        margin 0 0 30px 0
        max-width 759px
    &-title
      font-size 48px
      font-weight 300
      border-bottom none
      margin 0 0 38px 0
  &_features
    background linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url('~/main-bg.jpg')
    background-attachment fixed
    background-size cover
    background-position left top
    background-repeat no-repeat
    
    color #fff
    .home-wrap
      padding 80px 1.5rem 55px
  .hero
    background none
    text-align center
    img
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      margin-top 0
      font-size 48px
    .description
      margin 15px auto
    .action
      margin 30px auto
    .description
      max-width 35rem
      font-size 20px
      line-height 1.3
      color #fff
    .action-button
      display inline-block
      font-size 18px
      color #fff
      background-color #000
      padding 0.8rem 2rem
      border-radius 29px
      transition border .2s ease-in-out
      border 1px solid #000
      box-sizing border-box
      // border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        border 1px solid $accentColor
  .features
    .title
      padding 0
      width 100%
      h2
        border-bottom 0 none
        margin 0 0 37px 0
        font-size 48px
        font-weight 300
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    max-width 48%
    box-sizing border-box
    margin: 0 0 20px 0
    h2
      font-size 28px
      font-weight 400
      border-bottom none
      padding-bottom 0
      color #fff
      margin 15px 0
    p
      color #fff
      margin 15px 0
      
  .footer
    padding 0.9rem 3.9rem
    background #000
    text-align center
    color lighten($textColor, 25%)
    display flex
    justify-content space-between
    align-items center
    span
      a
        color #fff
        opacity .8
        transition color .3s ease-in-out
        &:hover
          color $accentColor
    .action
      margin 0
      display inline-block
      padding 0.8rem 2rem
      border-radius 29px
      transition border .2s ease-in-out
      border: 1px solid #000
      box-sizing border-box
      font-size 18px
      &:hover
        border 1px solid $accentColor 
      a
        color #fff

@media (max-width: $MQMobile)
  .home
    &_about
      .home-wrap
        padding 40px 1.5rem
    &_features
      .home-wrap
        padding 40px 1.5rem 20px
    &_main
      padding 100px 0
    .features
      flex-direction column
      .title
        h2
          font-size 34px
    .feature
      max-width 100%
    .footer
      padding 0.9rem 1.5rem
      .action
        font-size 14px
      span
        font-size 14px

@media (max-width: $MQMobileNarrow)
  .home
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
        margin  0 1.2rem 2rem
      .description, .action
        margin 0.2rem auto 0.8rem 
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
    .footer
      flex-direction column
      span
        order: 1
        margin: 20px 0 0 0
        font-size: 12px
        
</style>







