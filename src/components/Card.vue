<template>
    <div class="card">
      <!-- 這裡是便當蓋 (header) -->
      <div v-if="$slots.header" class="card-header">
        <slot name="header" />
      </div>
      
      <!-- 這裡是主菜 (default slot) -->
      <div v-if="$slots.default" class="card-content">
        <slot />
      </div>
      
      <!-- 這裡是餐具 (footer) -->
      <div v-if="$slots.footer" class="card-footer">
        <slot name="footer" />
      </div>
    </div>
  </template>
  