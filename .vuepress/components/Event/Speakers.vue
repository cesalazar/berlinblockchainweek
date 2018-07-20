<!--
  Created by: Carlos E. Salazar <ce.salazar@gmail.com>
  License: MIT
-->

<template>
  <div class="speakers--container">
    <div v-for="speaker in $page.frontmatter.speakers">

      <!-- Picture -->
      <img v-if="speaker.picture"
        :src="'/assets/img/' + speaker.picture"
        :alt="speaker.name"
      />

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
            indicator="true"
          />
          <span v-else>
            {{ speaker.company }}
          </span>
        </span>
      </h5>

      <!-- TODO: include icons -->
      <!-- Twitter -->
      <ExternalLink v-if="speaker.twitter"
        :url="'https://twitter.com/' + speaker.twitter"
        :caption="speaker.twitter"
      />

      &nbsp;

      <!-- Personal website -->
      <ExternalLink v-if="speaker.website" :url="speaker.website" :caption="speaker.website"/>

      <!-- Bio -->
      <p v-if="speaker.bio">
        {{ speaker.bio }}
      </p>
    </div>
  </div>
</template>

<script>
import ExternalLink from '../Utils/ExternalLink.vue'

export default {
  components: { ExternalLink }
}
</script>

<style lang="stylus">
.speakers--container
  text-align center
  display flex
  flex-direction row
  flex-wrap wrap

  div
    /* padding 1em */
    margin 1em
    flex-basis 45%

  h5
    margin-top -1em
</style>
