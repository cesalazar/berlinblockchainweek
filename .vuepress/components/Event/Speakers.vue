<template>
  <div class="speakers--container">
    <div v-for="speaker in $page.frontmatter.speakers">
      <!-- Picture -->
      <img v-if="speaker.picture" :src="speaker.picture" :alt="speaker.name" />

      <!-- Name -->
      <h4>{{ speaker.name }}</h4>

      <!-- Job title -->
      <h5 v-if="speaker.title">
        {{ speaker.title }}

        <!-- Company -->
        <span v-if="speaker.company">
          &nbsp;&#8226;&nbsp;

          <!-- Company's website -->
          <a v-if="speaker.companyURL" :href="speaker.companyURL" target="_blank" rel="noopener noreferrer">
            {{ speaker.company }}
          </a>
          <span v-else>{{ speaker.company }}</span>
        </span>
      </h5>

      <!-- TODO: include icons -->
      <!-- Twitter -->
      <a v-if="speaker.twitter" :href="'https://twitter.com/'+speaker.twitter" target="_blank" rel="noopener noreferrer">
        {{ speaker.twitter }}
      </a>&nbsp;

      <!-- Personal website -->
      <a v-if="speaker.website" :href="speaker.website" target="_blank" rel="noopener noreferrer">
        {{ speaker.website }}
      </a>

      <!-- Bio -->
      <p v-if="speaker.bio">
        {{ speaker.bio }}
      </p>
    </div>
  </div>
</template>

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
