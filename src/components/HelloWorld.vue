<template>
  <div class="hello">
    <h1>{{text}}</h1>
    <product-list :products="sharedState.products" />
    <add-product @add-product="onAddProduct" />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import AddProduct from '@/components/AddProduct'
import store from '@/store'

export default {
  name: 'HelloWorld',
  async created(){
    store.fetchProducts()
  },
  data(){
    return {
      text: "Products list:",
      sharedState: store.state
    }
  },
  methods: {
    onAddProduct(product){
      this.products.push(product);
    }
  },
  components: {
    ProductList,
    AddProduct
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
