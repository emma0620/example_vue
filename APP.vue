<template>
  <div>
    <button @click="openCart">顯示購物車</button>

      <el-dialog v-model="cartVisible" title="購物車" width="50%">
        <ShoppingCart :cart="cart" @update-cart="updateCart" @remove-from-cart="removeFromCart" />
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="cartVisible = false">關閉</el-button>
            <el-button type="primary" @click="checkout">結帳</el-button>
          </span>
        </template>
      </el-dialog>

      <ProductList @add-to-cart="addToCart" :products="products" />
</div>
</template>

<script>
import ProductList from './src/components/ProductList.vue';
import ShoppingCart from './src/components/ShoppingCart.vue';
import { reactive } from 'vue';

export default {
  components: {
    ProductList,
    ShoppingCart,
  },
  setup() {
    const products = [
      { id: 1, name: 'Product A', price: 10 },
      { id: 2, name: 'Product B', price: 20 },
      { id: 3, name: 'Product C', price: 30 },
    ];

    const cart = reactive([]); // 使用 reactive() 讓 cart 成為響應式物件

    const addToCart = (product) => {
      const existingItem = cart.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
    };

    const updateCart = (item, quantity) => {
      item.quantity = quantity;
    };

    const removeFromCart = (item) => {
      const index = cart.indexOf(item);
      if (index > -1) {
        cart.splice(index, 1);
      }
    };

    return { products, cart, addToCart, updateCart, removeFromCart };
  },
};
</script>