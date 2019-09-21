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

export default {
  name: 'HelloWorld',
  data(){
    return {
      text: "Products list:",
      products: [
        {
          id: 0,
          name: "product one"
        },
        {
          id: 1,
          name: "product two"
        },
        {
          id: 2,
          name: "product three"
        }
      ]
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
