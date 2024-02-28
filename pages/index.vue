<script setup lang="ts">
definePageMeta({
  layout: 'login'
})
function onSubmit(data: any) {
  console.log('Submitted', data)
}
</script>

<template>
  <div class="flex border rounded-lg max-w-3xl p-8 ml-auto mr-auto shadow-lg content-center">
    <div class="mr-4">
      <h1 class="text-3xl font-bold">Data Bot</h1>
      <p>A bot to allow you to best interact with your data. Ask me anything and I will help you the best with what I know
        and any data you give me.</p>
    </div>
    <div class="ml-4">
      <p>Have an account?</p>
      <UButton to="/login" class="w-32 justify-center" color="primary" variant="solid">Login</UButton>
      <p>Don't have an account?</p>
      <UButton to="/register" class="w-32 justify-center" color="primary" variant="solid">Sign Up</UButton>
    </div>
  </div>
</template>
