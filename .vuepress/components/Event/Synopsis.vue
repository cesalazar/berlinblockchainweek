<!--
  Created by: Carlos E. Salazar <ce.salazar@gmail.com>
  License: MIT
-->

<template>
  <div>
    <p v-for="paragraph in $page.frontmatter.synopsis">
      {{ paragraph }}
    </p>
  </div>
</template>
