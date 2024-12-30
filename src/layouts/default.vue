<template>
  <div>
    <Menubar :model="items" class="mb-5">
        <template #start>
            <img alt="Vue logo" src="https://vuejs.org/images/logo.png" class="w-10" >
        </template>
        <template #item="item">
            <NuxtLink :to="item.item.route" class="flex items-center gap-1 p-2">
                <i :class="item.item.icon"/>
                <span>{{ item.label }}</span>
            </NuxtLink>
        </template>
        <template #end>
            <NuxtLink to="/logout" class="flex items-center gap-1 p-2">
                <i class="pi pi-sign-out"/>
            </NuxtLink>
        </template>
    </Menubar>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
        route: '/'
    },
    {
        label: 'Exercises',
        icon: 'pi pi-briefcase',
        route: '/exercises'
    },
    {
        label: 'About',
        icon: 'pi pi-info-circle',
        route: '/about'
    }
]);
</script>
