<template>
  <el-card v-if="user">
    <template #header>
      <h3>{{ user.name }}</h3>
    </template>
    <el-descriptions :column="1" border>
      <el-descriptions-item label="Email">{{ user.email }}</el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, PropType } from 'vue'
import { useUsers } from '../composables/useUsers'

export default defineComponent({
  props: {
    id: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props) {
    const { getUserById } = useUsers()
    const user = ref<{ id: string; name: string; email: string } | null>(null)
    onMounted(async () => {
      const fetchedUser = await getUserById(props.id)
      if (fetchedUser) {
        user.value = fetchedUser
        console.log(user)
      }
    })

    return { user }
  }
})
</script>
