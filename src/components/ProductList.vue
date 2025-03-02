<template>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - ${{ product.price }}
        <button @click="addToCart(product)">加入購物車</button>
      </li>
    </ul>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: {
      products: Array,
    },
    emits: ['add-to-cart'],
    setup(props, { emit }) {
      const addToCart = (product) => {
        emit('add-to-cart', product);
      };
  
      return { addToCart };
    },
  });
  </script>
  