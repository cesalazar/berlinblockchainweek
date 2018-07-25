<!--
  Created by: Carlos E. Salazar <ce.salazar@gmail.com>
  Repository: https://github.com/cesalazar/berlinblockchainweek
  License: MIT
-->

<template>
  <div class="speakers--container">
    <div v-for="speaker in $page.frontmatter.speakers">

      <!-- Picture -->
      <!-- TODO: fix picture path (not loading) -->
      <!-- <img v&#45;if="speaker.picture" -->
      <!--   :src="'/assets/img/' + speaker.picture" -->
      <!--   :alt="speaker.name" -->
      <!-- /> -->

      <!-- Name -->
      <h4>{{ speaker.name }}</h4>

      <!-- Job title -->
      <h5 v-if="speaker.title">
        {{ speaker.title }}

        <!-- Company -->
        <span v-if="speaker.company">
          &nbsp;&#8226;&nbsp;

          <!-- Company's website -->
          <ExternalLink v-if="speaker.companyURL"
            :url="speaker.companyURL"
            :caption="speaker.company"
          />
          <span v-else>
            {{ speaker.company }}
          </span>
        </span>
      </h5>

      <!-- Bio -->
      <p v-if="speaker.bio">
        {{ speaker.bio }}
      </p>

      <!-- Links-->
      <div>
        <!-- TODO: include icons (twitter, website) -->
        <!-- Twitter -->
        <ExternalLink v-if="speaker.twitter"
          :url="'https://twitter.com/' + speaker.twitter"
          :caption="'@' + speaker.twitter"
        />

        &nbsp;

        <!-- Personal website -->
        <ExternalLink v-if="speaker.website"
          :url="speaker.website"
          :caption="removeProtocol(speaker.website)"
        />
      </div>

    </div>
  </div>
</template>

<script>
import ExternalLink from '../Utils/ExternalLink.vue'

export default {
  components: { ExternalLink },
  methods: {
    removeProtocol (url) {
      if (!url) return
      url = url.split(/https?:\/\//)
      return url[1]
    }
  }
}
</script>

<style lang="stylus">
.speakers--container
  text-align center
  display flex
  flex-direction row
  flex-wrap wrap
  justify-content space-between

  &>div
    box-sizing border-box
    border 1px solid lighten(#999999, 80%)
    padding 1em
    margin-top 2em
    flex 0 1 22em
    display flex
    flex-direction column

    img
      margin 0 auto
      max-height 5em

    &>div:nth-last-child(1)
      margin-top auto

    &:nth-last-child(1)
      margin-bottom 1.5em

  h5
    margin-top -1em
</style>
