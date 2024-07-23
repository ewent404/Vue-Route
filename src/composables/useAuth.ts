import { ref } from 'vue'
import { useRoute } from 'vue-router'

export function useAuth() {
  const isAuthenticated = ref(false)

  const login = async (username: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    isAuthenticated.value = true
    if (isAuthenticated.value) {
      window.location.href = '/detail'
      localStorage.setItem('isAuthenticated', isAuthenticated.value.toString())
    }
  }

  const logout = () => {
    isAuthenticated.value = false
  }

  return { isAuthenticated, login, logout }
}
