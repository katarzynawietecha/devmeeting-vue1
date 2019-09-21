<template>
  <li>
    {{ product.name }}<button @click="removeProduct(product.id)">Remove</button>
  </li>
</template>

<script>
export default {
  name: 'SingleProduct',
  props: ['product'],
  methods: {
    removeProduct(id){
      this.$emit('remove-product',{ id }) //emit product id
    }
  }
}
</script>
