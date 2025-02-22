<script setup>
import Layout from './src/components/Layout.vue'
</script>

<template>
  <Layout>
    <template #header>
      <h1>🚀 我的網站標題</h1>
    </template>

    <template #sidebar>
      <ul>
        <li>🏠 首頁</li>
        <li>📄 文章</li>
        <li>📞 聯絡</li>
      </ul>
    </template>

    <template #default>
      <p>這是主要內容區域，這裡放文章或其他資訊。</p>
    </template>

    <template #aside>
      <p>🔥 熱門文章</p>
      <p>📢 最新消息</p>
    </template>

    <template #footer>
      <p>© 2025 我的網站 | 版權所有</p>
    </template>
  </Layout>
</template>
