import { ref } from 'vue'

interface User {
  id: string
  name: string
  email: string
}

export function useUsers() {
  const users = ref<User[]>([
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' }
  ])

  const getUsers = async () => {
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 500))
    return users.value
  }

  const getUserById = async (id: string) => {
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 500))
    return users.value.find((user) => user.id === id)
  }

  return { getUsers, getUserById }
}
