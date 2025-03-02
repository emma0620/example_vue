<template>
    <div class="layout">
      <!-- 上方瀏覽 Header -->
      <header class="header">
        <slot name="header"> 預設標題 </slot>
      </header>
  
      <div class="container">
        <!-- 左邊 Sidebar -->
        <aside class="sidebar">
          <slot name="sidebar"> 預設側邊欄 </slot>
        </aside>
  
        <!-- 主要內容 -->
        
  
        <!-- 右側資訊 -->
        <aside class="aside">
          <slot name="aside"> 預設右側資訊 </slot>
        </aside>
      </div>
  
      <!-- 下方資訊 Footer -->
      <footer class="footer">
        <slot name="footer"> 預設底部資訊 </slot>
      </footer>
    </div>
  </template>
  
  <style>
  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  .header, .footer {
    background-color: lightgray;
    text-align: center;
    padding: 10px;
  }
  
  .container {
    display: flex;
    flex: 1;
  }
  
  .sidebar {
    width: 200px;
    background-color: skyblue;
    padding: 10px;
  }
  
  .main {
    flex: 1;
    padding: 10px;
    background-color: white;
  }
  
  .aside {
    width: 200px;
    background-color: lightyellow;
    padding: 10px;
  }
  
  .footer {
    background-color: gray;
    color: white;
  }
  </style>
  