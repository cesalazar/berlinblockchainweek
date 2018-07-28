<!--
  Created by: Carlos E. Salazar <ce.salazar@gmail.com>
  Repository: https://github.com/cesalazar/berlinblockchainweek
  License: MIT
-->

<template>
  <div>
    <p v-for="content in $page.frontmatter.synopsis">
      <ul v-if="content.list">
        <li v-for="item in content.list">
          {{ item }}
        </li>
      </ul>
      <span v-else>
        {{ content }}
      </span>
    </p>
  </div>
</template>
