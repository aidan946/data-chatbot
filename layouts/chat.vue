<template>
  <div class="flex">
    <div>
      <UButton
        icon="i-heroicons-pencil-square"
        size="sm"
        color="primary"
        variant="solid"
        label="Button"
        :trailing="false"
      />
      <UVerticalNavigation :links="links" />
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const links = [{
  label: 'Profile',
  badge: 100
}, {
  label: 'Installation',
  to: '/getting-started/installation'
}, {
  label: 'Vertical Navigation',
  to: `${route.path.startsWith('/dev') ? '/dev' : ''}/components/vertical-navigation`
}, {
  label: 'Command Palette',
  to: '/components/command-palette'
}]
</script>
