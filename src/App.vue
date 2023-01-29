<template>
  <div>导航栏 |
    <router-link to="/">first</router-link>
    |
    <router-link to="/xxx">second</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>

export default {
  name: "App"

}
</script>
