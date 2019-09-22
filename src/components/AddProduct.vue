<template>
  <form @submit.prevent="onSubmit()">
    <input name="newProduct" v-model="newProduct.name" v-validate="'required|min:4'"/>
    <button>Add next product</button>
    <div v-show="errors.has('newProduct')">
      {{ errors.first('newProduct') }}
    </div>
  </form>
</template>

<script>
import uuid from 'uuid/v4'; //do nadania id

export default {
  data(){
    return {
      newProduct: {
        name: ""
      }
    }
  },
  methods: {
    onSubmit(){
      this.$validator.validateAll().then(result => {
         if (!result) {
           return;
         }
         this.$emit('add-product',{
           id: uuid(),
           name: this.newProduct.name
         })
         // this.products.push({
         //   id: uuid(),
         //   // ...this.newProduct
         //   // id: this.newProduct.id,
         //   name: this.newProduct.name
         // });
         this.newProduct.name = '';
         this.$validator.reset();
       });
    }
  }
}
</script>
