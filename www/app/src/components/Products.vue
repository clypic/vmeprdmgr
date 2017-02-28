<template>
  <div id="products" class="container">
    <b>List of Products</b>
    <ul class="list-group">
      <li class="list-group-item" v-for="item in list">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'products',
  data () {
    return {
      list: ['Product A', 'Product B', 'Product C', 'Product D']
    }
  },
  beforeMount () {
    this.getList()
  },
  methods: {
    getList: () => {
      console.log(this.list)
      console.dir(this)

      // const getData = ()=> {
      //   return Vue.http.get('http://localhost:8082/api/products')
      //   .then(response => {
      //       // success callback
      //
      //       this.list = response;
      //
      //     }, response => {
      //       // error callback
      //     });
      // }
    }
  }
}
</script>

<style>
</style>
