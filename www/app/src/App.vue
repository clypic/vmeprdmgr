<template>
  <div id="app" class="container">
    <div class="row">
      <ul class="nav nav-pills">
        <li>
          <router-link to="/"><span class="glyphicon glyphicon-home"></span> Home</router-link>
        </li>
        <li>
          <router-link to="/products"><span class="glyphicon glyphicon-th-list"></span> Products</router-link>
        </li>
      </ul>
    </div>
    <router-view class="row"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
