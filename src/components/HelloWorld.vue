<template>
  <div class="hello">
    <h1>{{text}}</h1>
    <product-list :products="products" />
    <add-product @add-product="onAddProduct" />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import AddProduct from '@/components/AddProduct'
import store from '@/store'

export default {
  name: 'HelloWorld',
  data(){
    return {
      text: "Products list:",
    }
  },
  computed: {
    products(){
      return this.$store.state.products;
    }
  },
  methods: {
    onAddProduct(product){
      // this.sharedState.products.push(product);
      this.$store.dispatch('addProduct', product)
    }
  },
  created(){
    this.$store.dispatch('fetchProducts')
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
