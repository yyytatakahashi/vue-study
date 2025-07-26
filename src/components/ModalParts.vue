<!--
  ModalParts.vue
  -----------------------------------------------
  共通モーダルコンポーネント。
  任意のタイトル・本文・フッターをスロットで挿入可能。
  Bootstrapのモーダル風デザインで、v-ifで制御。

  親からのprops:
    - visible (Boolean): モーダル表示フラグ

  emitイベント:
    - close: モーダル外または×ボタンクリック時に発火

  使用例（親コンポーネント側）:
    <ModalParts :visible="isOpen" @close="isOpen = false">
      <template #header>タイトル</template>
      <template #body>内容</template>
      <template #footer>フッター</template>
    </ModalParts>
-->

<template>
  <!-- モーダル全体のオーバーレイ -->
  <div
    class="modal fade show d-block"
    tabindex="-1"
    role="dialog"
    v-if="visible"
    @click.self="close"  <!-- 背景クリックで閉じる -->
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <!-- ヘッダー部分（タイトルと×ボタン） -->
        <div class="modal-header">
          <slot name="header">編集</slot>
          <button type="button" class="btn-close" @click="close"></button>
        </div>

        <!-- モーダル本文 -->
        <div class="modal-body">
          <slot name="body" />
        </div>

        <!-- フッター部分（ボタンなど） -->
        <div class="modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// モーダル表示状態を受け取る
defineProps({
  visible: Boolean,
})

// 閉じるイベントを親に通知
const emit = defineEmits(['close'])
const close = () => emit('close')
</script>

<style scoped>
/* モーダル背景を薄い黒に */
.modal {
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1050;
}
</style>
