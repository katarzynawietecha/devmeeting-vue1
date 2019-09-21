import axios from 'axios';

const store = {
  state: {
    products: []
  },
  async fetchProducts(){
    await axios.get('http://localhost:3000/products').then(res => this.state.products = res.data);
    // console.log(this.state.products);
  },
  addProduct(product) {
    this.state.products.push(product);
  }
}

export default store;
