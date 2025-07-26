<!--
  CrudView.vue
  -----------------------------------------------------
  ユーザー一覧画面 + CRUD操作 (Create / Read / Update / Delete)

  🔧 機能概要:
    - ユーザー一覧を表示（全件、または50歳以上で絞り込み）
    - ユーザーの追加（モーダル）
    - ユーザーの編集（モーダル）
    - ユーザーの削除（単体・複数）

  💡 使用している依存コンポーネント:
    - FooterParts.vue（フッターナビゲーション）
    - ModalParts.vue（再利用可能なモーダルUI）

  📡 使用しているAPI（Spring Boot + MyBatis）:
    - GET    /api/users             全ユーザー取得
    - GET    /api/users/over50     50歳以上のユーザー取得
    - POST   /api/users            新規ユーザー追加
    - PUT    /api/users/{id}       ユーザー情報更新
    - DELETE /api/users/{id}       単一ユーザー削除

  🔁 主な状態管理:
    - users: ユーザー一覧データ
    - selectedUserIds: チェックボックスで選択されたID一覧
    - isEditModalOpen: 編集モーダル表示フラグ
    - isAddModalOpen: 新規追加モーダル表示フラグ
    - editUser: 編集対象ユーザー情報
    - newUser: 追加フォームの入力データ

  📌 備考:
    - Bootstrap 5 をベースにスタイリング
    - スクロール対応済みのテーブルUI
    - JSdoc形式コメント + slot活用の再利用可能なモーダル構成

  👤 作成者: あなたの名前（任意）
  🕒 最終更新: 2025-07-18
-->
<template>
  <!-- ユーザー一覧画面全体のコンテナ -->
  <div class="container py-5">
    <!-- タイトル部分 -->
    <div class="table-header mb-3">
      <h2 class="mb-0">ユーザー一覧</h2>
    </div>

    <!-- ボタン操作パネル -->
    <div class="mb-3">
      <!-- 全ユーザー表示ボタン -->
      <button class="btn btn-primary me-2" @click="getAllUsers">全員表示</button>
      <!-- 50歳以上のユーザーを表示するボタン -->
      <button class="btn btn-secondary" @click="getUsersOver50">50歳以上のみ</button>
      <!-- 新規ユーザー追加用モーダルを開くボタン -->
      <button class="btn btn-success ms-2" @click="openAddModal">新規追加</button>
      <!-- 選択されたユーザーを削除するボタン -->
      <button
        class="btn btn-danger ms-2"
        @click="deleteUsers(selectedUserIds)"
        :disabled="selectedUserIds.length === 0"
      >
        複数削除
      </button>
    </div>

    <!-- ユーザー一覧テーブル -->
    <div class="table-container">
      <div class="table-scroll">
        <!-- データがある場合のみ表示 -->
        <table v-if="users.length > 0" class="custom-table">
          <thead>
            <tr>
              <!-- テーブルヘッダー -->
              <th class="sticky-header">ID</th>
              <th class="sticky-header">名前</th>
              <th class="sticky-header">メールアドレス</th>
              <th class="sticky-header">年齢</th>
              <th class="sticky-header">血液型</th>
              <th class="sticky-header">編集</th>
              <th class="sticky-header">削除</th>
              <th class="sticky-header">選択</th>
            </tr>
          </thead>
          <tbody>
            <!-- 各ユーザー行 -->
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td style="text-align: left">{{ user.name }}</td>
              <td style="text-align: left">{{ user.email }}</td>
              <td>{{ user.age }}</td>
              <td>{{ user.blood }}</td>
              <td>
                <button class="btn btn-sm btn-warning me-1" @click="openEditModal(user)">
                  編集
                </button>
              </td>
              <td>
                <button class="btn btn-sm btn-danger" @click="deleteUsers(user.id)">削除</button>
              </td>
              <td>
                <input
                  class="form-check-input my-border"
                  type="checkbox"
                  :value="user.id"
                  v-model="selectedUserIds"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <!-- ユーザーが0件の場合 -->
        <p v-else>ユーザーがいません。</p>
      </div>
    </div>

    <!-- フッターボタンパーツ -->
    <FooterParts :cancelpage="'/'" :okVisible="false" />
  </div>

  <!-- ユーザー編集モーダル -->
  <ModalParts :visible="isEditModalOpen" @close="isEditModalOpen = false">
    <template #header>ユーザー編集</template>
    <template #body>
      <form>
        <!-- 各入力フィールド -->
        <div class="mb-2">
          <label class="form-label">名前</label>
          <input v-model="editUser.name" class="form-control" />
        </div>
        <div class="mb-2">
          <label class="form-label">メール</label>
          <input v-model="editUser.email" class="form-control" />
        </div>
        <div class="mb-2">
          <label class="form-label">年齢</label>
          <input v-model="editUser.age" type="number" class="form-control" />
        </div>
        <div class="mb-2">
          <label class="form-label">血液型</label>
          <input v-model="editUser.blood" class="form-control" />
        </div>
      </form>
    </template>
    <template #footer>
      <button class="btn btn-secondary" @click="isEditModalOpen = false">キャンセル</button>
      <button class="btn btn-primary" @click="updateUser">更新</button>
    </template>
  </ModalParts>

  <!-- ユーザー追加モーダル -->
  <ModalParts :visible="isAddModalOpen" @close="isAddModalOpen = false">
    <template #header>新規ユーザー追加</template>
    <template #body>
      <form>
        <div class="mb-2">
          <label class="form-label">名前</label>
          <input v-model="newUser.name" class="form-control" />
        </div>
        <div class="mb-2">
          <label class="form-label">メール</label>
          <input v-model="newUser.email" class="form-control" />
        </div>
        <div class="mb-2">
          <label class="form-label">年齢</label>
          <input v-model="newUser.age" type="number" class="form-control" />
        </div>
        <div class="mb-2">
          <label class="form-label">血液型</label>
          <input v-model="newUser.blood" class="form-control" />
        </div>
      </form>
    </template>
    <template #footer>
      <button class="btn btn-secondary" @click="isAddModalOpen = false">キャンセル</button>
      <button class="btn btn-primary" @click="addUser">追加</button>
    </template>
  </ModalParts>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { doDelete, doFetch, doPut, doPost } from '@/service/apiClient'
import FooterParts from '@/components/FooterParts.vue'
import ModalParts from '@/components/ModalParts.vue'

/**
 * 全ユーザー一覧（User型）のリアクティブデータ
 * @type {import('vue').Ref<Array<{ id: number, name: string, email: string, age: number, blood: string }>>}
 */
const users = ref([])

/**
 * チェックボックスで選択されたユーザーID一覧
 * @type {import('vue').Ref<number[]>}
 */
const selectedUserIds = ref([])

/**
 * ユーザー編集用モーダルの表示状態
 * @type {import('vue').Ref<boolean>}
 */
const isEditModalOpen = ref(false)

/**
 * 編集対象のユーザーデータ
 * @type {import('vue').Ref<{ id: number|null, name: string, email: string, age: number, blood: string }>}
 */
const editUser = ref({
  id: null,
  name: '',
  email: '',
  age: 0,
  blood: '',
})

/**
 * ユーザー追加用モーダルの表示状態
 * @type {import('vue').Ref<boolean>}
 */
const isAddModalOpen = ref(false)

/**
 * 新規追加用のユーザーデータ
 * @type {import('vue').Ref<{ name: string, email: string, age: number, blood: string }>}
 */

const newUser = ref({
  name: '',
  email: '',
  age: 0,
  blood: '',
})

/**
 * 編集モーダルを開く
 * @param {{ id: number, name: string, email: string, age: number, blood: string }} user
 */
const openEditModal = (user) => {
  editUser.value = { ...user } // 編集元のユーザー情報をコピー
  isEditModalOpen.value = true
}

/**
 * 追加モーダルを開く（newUserの初期化）
 */
const openAddModal = () => {
  newUser.value = { name: '', email: '', age: 0, blood: '' }
  isAddModalOpen.value = true
}

/**
 * 全ユーザーを取得して表示
 * @returns {Promise<void>}
 */
const getAllUsers = async () => {
  try {
    const data = await doFetch('http://localhost:8080/api/users', '全ユーザーの取得に失敗しました')
    users.value = data
  } catch (error) {
    console.error('取得エラー:', error)
  }
}

/**
 * 50歳以上のユーザーだけ取得して表示
 * @returns {Promise<void>}
 */
const getUsersOver50 = async () => {
  try {
    const data = await doFetch(
      'http://localhost:8080/api/users/over50',
      '50歳以上ユーザーの取得に失敗しました',
    )
    users.value = data
    selectedUserIds.value = []
  } catch (error) {
    console.error('取得エラー:', error)
  }
}

/**
 * ユーザーを1件または複数件削除する
 * @param {number | number[]} ids - 削除対象のIDまたはIDの配列
 * @returns {Promise<void>}
 */
const deleteUsers = async (ids) => {
  const targetIds = Array.isArray(ids) ? ids : [ids]

  if (targetIds.length === 0) {
    alert('削除するユーザーを選択してください')
    return
  }

  const confirmMsg =
    targetIds.length === 1
      ? 'このユーザーを削除してもよろしいですか？'
      : '選択したユーザーを削除してもよろしいですか？'

  if (!confirm(confirmMsg)) return

  for (const id of targetIds) {
    try {
      await doDelete(`http://localhost:8080/api/users/${id}`, 'ユーザー削除に失敗しました')
      users.value = users.value.filter((u) => u.id !== id)
    } catch (error) {
      console.error(`ID ${id} の削除失敗`, error)
    }
  }

  selectedUserIds.value = []
}

/**
 * 編集されたユーザー情報を更新
 * @returns {Promise<void>}
 */
const updateUser = async () => {
  try {
    await doPut(
      `http://localhost:8080/api/users/${editUser.value.id}`,
      editUser.value,
      'ユーザーの更新に失敗しました',
    )
    isEditModalOpen.value = false
    await getAllUsers()
  } catch (err) {
    console.error('更新失敗:', err)
  }
}

/**
 * 入力されたユーザーを追加
 * @returns {Promise<void>}
 */
const addUser = async () => {
  try {
    await doPost('http://localhost:8080/api/users', newUser.value, 'ユーザー追加に失敗しました')
    await getAllUsers()
    isAddModalOpen.value = false
  } catch (error) {
    console.error('追加エラー:', error)
  }
}

// 初期表示で全ユーザーを取得
onMounted(() => {
  getAllUsers()
})
</script>

<style scoped>
/* ユーザー画面全体の背景色 */
.container {
  background-color: #fefefe;
}

/* タイトルの見た目 */
.table-header h2 {
  font-weight: bold;
  font-size: 1.8rem;
  color: #444;
}

/* テーブル外枠のデザイン */
.table-container {
  background: #fff;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

/* テーブルスクロールエリア */
.table-scroll {
  overflow-x: auto;
  overflow-y: auto;
  max-height: 600px;
}

/* スクロールバーをかわいく */
.table-scroll::-webkit-scrollbar {
  height: 8px;
  width: 8px;
}
.table-scroll::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 4px;
}
.table-scroll::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}

/* テーブルスタイル */
.custom-table {
  min-width: 1000px;
  width: 100%;
  border-collapse: collapse;
}

/* セルの内側余白や枠線 */
.custom-table th,
.custom-table td {
  padding: 12px 16px;
  text-align: center;
  border: 1px solid #dee2e6;
}

/* テーブルヘッダーの背景色 */
.custom-table thead {
  background-color: #f3f3f3;
}

/* テーブルヘッダーを固定 */
.sticky-header {
  position: sticky;
  top: 0;
  background-color: #f3f3f3;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

/* 奇数行と偶数行で背景色を変える */
.custom-table tbody tr:nth-child(even) {
  background-color: #fcfcfc;
}
.custom-table tbody tr:hover {
  background-color: #e8f5ff;
  transition: background 0.2s ease;
}

/* ボタンの共通スタイル */
button.btn {
  padding: 8px 16px;
  font-weight: 600;
  border-radius: 8px;
}
button.btn-primary {
  background-color: #4a90e2;
  border-color: #4a90e2;
}
button.btn-secondary {
  background-color: #50b97d;
  border-color: #50b97d;
}
button.btn:hover {
  opacity: 0.9;
}

/* 各列の幅指定 */
.custom-table th:nth-child(1),
.custom-table td:nth-child(1) {
  width: 30px;
}
/* 名前 */
.custom-table th:nth-child(2),
.custom-table td:nth-child(2) {
  width: 150px;
}
/* メールアドレス */
.custom-table th:nth-child(3),
.custom-table td:nth-child(3) {
  width: 250px;
}
/* 年齢、血液型、操作列など */
.custom-table th:nth-child(4),
.custom-table td:nth-child(4),
.custom-table th:nth-child(5),
.custom-table td:nth-child(5),
.custom-table th:nth-child(6),
.custom-table td:nth-child(6),
.custom-table th:nth-child(7),
.custom-table td:nth-child(7) {
  width: 80px;
}
/* チェックボックス列 */
.custom-table th:nth-child(8),
.custom-table td:nth-child(8) {
  width: 30px;
}

/* チェックボックスのスタイル */
.my-border {
  border: 1px solid #444;
  transform: scale(1.4);
}

/* レスポンシブ対応：画面が狭い時フォントを小さく */
@media (max-width: 768px) {
  .custom-table {
    font-size: 0.9rem;
  }
}
</style>
