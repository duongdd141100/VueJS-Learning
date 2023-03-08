<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

    <div class="wrapper">
      <nav>
        <RouterLink to="/component1">Component 1</RouterLink> |
        <RouterLink to="/component2">Component 2</RouterLink>
      </nav>
    </div>

  <RouterView />
</template>
