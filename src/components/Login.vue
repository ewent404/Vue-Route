<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-row justify="center">
    <el-col :span="8">
      <h2>Login</h2>
      <el-form @submit.prevent="login">
        <el-form-item>
          <el-input v-model="username" placeholder="Username" required></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="password" type="password" placeholder="Password" required></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">Login</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useAuth } from '../composables/useAuth'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

export default defineComponent({
  setup() {
    const { login } = useAuth()
    const router = useRouter()
    const username = ref('')
    const password = ref('')

    const handleLogin = async () => {
      try {
        await login(username.value, password.value)
        ElMessage.success('Login successful')
        router.push('/users')
      } catch (error) {
        ElMessage.error('Login failed')
      }
    }

    return { username, password, login: handleLogin }
  }
})
</script>
