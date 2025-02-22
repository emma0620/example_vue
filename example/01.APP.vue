

<template>
    <button @click="increment">
        {{ count }}
    </button>

    <div>
      <h1>這是 `#app` 的內容</h1>
      <p>這部分不受 `container-1` 和 `container-2` 控制</p>
    </div>

    <button @click="say('hello')">Say hello</button>
	<button @click="say('bye')">Say bye</button>
	<!-- 使用特殊的 $event 變量 -->
<button @click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>

<!-- 使用內聯箭頭函數 -->
<button @click="(event) => warn('Form cannot be submitted yet.', event)">
  Submit
</button>

    <div>
    <h1>v-if 與 v-show 範例</h1>
    <button @click="toggle">切換顯示狀態</button>
    
    <!-- v-if：條件為 true 時才渲染，為 false 時整個元素會被移除 -->
    <div v-if="showIf" class="if-box">
      <p>這個區塊使用 v-if 控制 ({{ showIf ? '顯示' : '隱藏' }})</p>
    </div>
    
    <!-- v-show：元素始終存在於 DOM，只是透過 CSS 控制顯示或隱藏 -->
    <div v-show="showShow" class="show-box">
      <p>這個區塊使用 v-show 控制 ({{ showShow ? '顯示' : '隱藏' }})</p>
    </div>
  </div>

    <div 
      :class="['product-card', { 'out-of-stock': !isAvailable }]"
      :style="cardStyle"
    >
      <!-- 圖片綁定 -->
      <img :src="product.image" :alt="product.name">
      
      <!-- 標題和價格 -->
      <h2 :style="{ color: titleColor }">{{ product.name }}</h2>
      <p :class="priceClass">NT$ {{ product.price }}</p>
      
      <!-- 庫存狀態 -->
      <div :class="stockStatusClass">
        {{ isAvailable ? '有庫存' : '售完' }}
      </div>
  
      <!-- 購買按鈕 -->
      <button 
        :disabled="!isAvailable"
        :class="{ 'disabled-btn': !isAvailable }"
        @click="addToCart"
      >
        加入購物車
      </button>
    </div>

    <div 
      :class="['product-card', { 'out-of-stock': !isAvailable }]"
      :style="cardStyle"
    >
      <!-- 圖片綁定 -->
      <img :src="product.image" :alt="product.name">
      
      <!-- 標題和價格 -->
      <h2 :style="{ color: titleColor }">{{ product.name }}</h2>
      <p :class="priceClass">NT$ {{ product.price }}</p>
      
      <!-- 庫存狀態 -->
      <div :class="stockStatusClass">
        {{ isAvailable ? '有庫存' : '售完' }}
      </div>
  
      <!-- 購買按鈕 -->
      <button 
        :disabled="!isAvailable"
        :class="{ 'disabled-btn': !isAvailable }"
        @click="addToCart"
      >
        加入購物車
      </button>
    </div>
  </template>
  
  <script setup>
  import { reactive, computed } from 'vue'

  import { ref } from 'vue'



  function say(message) {
  alert(message)
}

function warn(message, event) {
  // 這裡可以訪問原生事件
  if (event) {
    event.preventDefault()
  }
  alert(message)
}



const count = ref(2)

function increment() {
  count.value++
}
  

    // 使用 ref 來建立狀態變數
const showIf = ref(true)
const showShow = ref(true)

// 切換顯示狀態的函式
function toggle() {
  // 改變狀態，觸發 Vue 自動更新畫面
  showIf.value = !showIf.value
  showShow.value = !showShow.value
}


  // 用 reactive 建立 product 物件（資料狀態）
  const product = reactive({
    name: '超級好喝珍奶',
    price: 60,
    image: '/bubble-tea.jpg',
    stock: 5
  })
  
  // 常數資料不需要 reactive，直接定義即可
  const titleColor = '#2c3e50'
  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }
  
  // 計算屬性：是否有庫存
  const isAvailable = computed(() => product.stock > 0)
  
  // 計算屬性：價格對應的 CSS 類別
  const priceClass = computed(() => ({
    'price': true,
    'sale-price': product.price < 50
  }))
  
  // 計算屬性：庫存狀態的 CSS 類別
  const stockStatusClass = computed(() => ({
    'status': true,
    'in-stock': isAvailable.value,
    'out-of-stock': !isAvailable.value
  }))
  
  // 定義加入購物車的方法
  function addToCart() {
    if (isAvailable.value) {
      product.stock--
      alert('已加入購物車！')
    }
  }
  </script>
  
  <style>

.if-box {
  padding: 10px;
  margin-top: 10px;
  background-color: #e0f7fa;
  border: 1px solid #00acc1;
}

.show-box {
  padding: 10px;
  margin-top: 10px;
  background-color: #fce4ec;
  border: 1px solid #ec407a;
}

  .product-card {
    width: 300px;
    margin: 20px;
  }
  
  .product-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .price {
    font-size: 20px;
    font-weight: bold;
  }
  
  .sale-price {
    color: red;
  }
  
  .status {
    padding: 5px;
    margin: 10px 0;
    text-align: center;
  }
  
  .in-stock {
    background-color: #4CAF50;
    color: white;
  }
  
  .out-of-stock {
    background-color: #f44336;
    color: white;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #2196F3;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button.disabled-btn {
    background-color: #cccccc;
    cursor: not-allowed;
  }
  </style>
  