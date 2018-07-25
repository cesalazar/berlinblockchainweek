<!--
  Created by: Carlos E. Salazar <ce.salazar@gmail.com>
  Repository: https://github.com/cesalazar/berlinblockchainweek
  License: MIT
-->

<template>
  <div>
    <p v-for="paragraph in $page.frontmatter.synopsis">
      {{ paragraph }}
    </p>
  </div>
</template>
