<template>
  <div>
    <p v-for="paragraph in $page.frontmatter.synopsis">
      {{ paragraph }}
    </p>
  </div>
</template>
