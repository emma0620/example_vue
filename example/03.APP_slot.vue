<script setup>
import Card from './src/components/Card.vue'

import SuccessMessage from './src/components/SuccessMessage.vue'
import ErrorMessage from './src/components/ErrorMessage.vue'
import { ref } from 'vue'

const currentComponent = ref('SuccessMessage')

const components = {
  SuccessMessage,
  ErrorMessage
}

const message = ref('操作成功！')
</script>


<template>
  <Card>
    <template #header>
      <h1>雞腿便當 🍗</h1>
    </template>

    <template #default>
      <p>白飯 + 雞腿 + 小菜</p>
    </template>

    <template #footer>
      <em>附湯一碗 🥣</em>
    </template>
  </Card>
 <br>
 <br>

  <div>
    <button @click="currentComponent = 'SuccessMessage'">顯示成功</button>
    <button @click="currentComponent = 'ErrorMessage'">顯示錯誤</button>

    <!-- 動態渲染組件，並傳入 props -->
    <component :is="components[currentComponent]" :msg="message"></component>
  </div>


</template>
