<template>
  <div class="spinner-wrapper">
    <span class="spinner"></span>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.spinner-wrapper {
  @apply flex flex-col items-center justify-center w-full h-full;
}
.spinner {
  width: 48px;
  height: 48px;
  border: 5px solid rgb(13 148 136);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
