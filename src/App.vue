<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup lang="ts">
// App component acts as router outlet
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #000;
  overflow-x: hidden;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 16px;
}

.btn-primary {
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #000;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
}

.btn-secondary {
  background: transparent;
  color: #FFD700;
  border: 2px solid #FFD700;
}

.btn-secondary:hover {
  background: #FFD700;
  color: #000;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-padding {
  padding: 80px 0;
}

@media (max-width: 768px) {
  .section-padding {
    padding: 60px 0;
  }
  
  .container {
    padding: 0 15px;
  }
}
</style>