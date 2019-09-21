<template>
  <ul>
    <single-product v-for="(product, index) in products" :product='product' @remove-product="onRemoveProduct" /> <!-- catch remove-product funct and add its params to onRemoveProduct-->
  </ul>
</template>

<script>
import SingleProduct from "@/components/SingleProduct"
  export default {
    name: "ProductList",
    props: ["products"],
    methods: {
      addProduct(){
        this.products.push(this.newProduct)
        this.newProduct.name = ""
      },
      onRemoveProduct(payload){
        // console.log('id', id)
        const productToRemove = this.products.find((product) => (product.id) == payload.id );
        if (productToRemove){
          this.products.splice(this.products.indexOf(productToRemove), 1);
        }
      }
    },
    components: {
      SingleProduct
    }
  }
</script>
