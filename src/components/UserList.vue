<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <h2>User List</h2>
      <el-menu>
        <el-menu-item v-for="user in users" :key="user.id" :index="user.id">
          <router-link :to="`/users/${user.id}`">{{ user.name }}</router-link>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="16">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useUsers } from '../composables/useUsers'

export default defineComponent({
  setup() {
    const { getUsers } = useUsers()
    const users = ref<{ id: string; name: string; email: string }[]>([])

    onMounted(async () => {
      users.value = await getUsers()
    })

    return { users }
  }
})
</script>
