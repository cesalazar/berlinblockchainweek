<!--
  Created by: Carlos E. Salazar <ce.salazar@gmail.com>
  Repository: https://github.com/cesalazar/berlinblockchainweek
  License: MIT
-->

<template>
  <div class="synopsis--content">
    <p v-for="content in data">
      <ul v-if="content.list">
        <li v-for="item in content.list">
          <span v-html="item"></span>
        </li>
      </ul>
      <span v-else v-html="content"></span>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    data () {
      let fm = this.$page.frontmatter

      // TODO: inject the component when replacing the link
      // let link = <ExternalLink
      //       url="$2"
      //       caption="$1"
      //       indicator="true"
      //     />

      let blocks = fm.synopsis.map(block => {
        if (typeof block === 'string'){
          block = replaceLink(block)
        }

        if (typeof block === 'object' && block.list) {
          block.list = block.list.map(item => replaceLink(item))
        }

        return block
      })

      return blocks
    }
  }
}

const replaceLink = function (text) {
  // Look for links writen in markdown: [caption](url)
  let regex = /\[(.*)\]\((.*)\)/g

  return text.replace(
    regex,
    `<a href="$2" target="_blank" rel="noopener noreferrer">$1 <svg
    class="icon outbound" xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15"
    height="15"> <path fill="currentColor"
    d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
    <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5
    77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9
    71.5,22.9"></polygon></svg></a>`
  )
}
</script>

<style lang="stylus">
.synopsis--content
  a
    text-decoration none !important
    transition all 0.2s ease-out
    border-bottom 1px solid transparent
    text-shadow 2px 2px 2px #000
    &:hover
      border-bottom 1px solid
</style>
