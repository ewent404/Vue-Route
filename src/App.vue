<template>
  <el-container>
    <el-header>
      <el-menu mode="horizontal" router>
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="/users">Users</el-menu-item>
        <el-menu-item index="/login" v-if="!isAuthenticated">Login</el-menu-item>
        <el-menu-item @click="logout" v-else>Logout</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAuth } from './composables/useAuth'

export default defineComponent({
  setup() {
    const { isAuthenticated, logout } = useAuth()
    return { isAuthenticated, logout }
  }
})
</script>
