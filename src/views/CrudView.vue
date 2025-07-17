<template>
  <div class="container py-5">
    <h2 class="mb-4">ユーザー一覧</h2>
    <ul v-if="users.length > 0" class="list-group">
      <li class="list-group-item" v-for="user in users" :key="user.id">
        {{ user.name }}（{{ user.email }}）
      </li>
    </ul>
    <p v-else>ユーザーがいません。</p>
  </div>
  <FooterParts :cancelpage="'/'" :okVisible="false" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import FooterParts from '../components/FooterParts.vue'

const users = ref([])

onMounted(() => {
  axios
    .get('http://localhost:8080/api/users')
    .then((response) => {
      users.value = response.data
    })
    .catch((error) => {
      console.error('API取得エラー:', error)
    })
})
</script>
