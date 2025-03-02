<template>
    <div v-if="cart.length > 0">
      <h2>購物車</h2>
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - ${{ item.price }} x {{ item.quantity }}
          <input type="number" v-model="item.quantity" @change="updateCart(item)">
          <button @click="removeFromCart(item)">移除</button>
        </li>
      </ul>
      <p>總價: ${{ totalPrice }}</p>
    </div>
    <p v-else>購物車是空的</p>
  </template>
  
  
  <script>
  import { defineComponent, computed } from 'vue';
  
  export default defineComponent({
    props: {
      cart: Array,
    },
    emits: ['update-cart', 'remove-from-cart'],
    setup(props, { emit }) {
  
      const totalPrice = computed(() => {
        return props.cart.reduce((total, item) => total + item.price * item.quantity, 0);
      });
  
  
      const updateCart = (item) => {
          // 確保數量不小於 1
        if (item.quantity < 1) {
             item.quantity = 1;
         }
         emit('update-cart', item, item.quantity);
      };
  
  
      const removeFromCart = (item) => {
        emit('remove-from-cart', item);
      };
  
      return { totalPrice, updateCart, removeFromCart };
    },
  });
  </script>