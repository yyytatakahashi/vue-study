<template>
  <div class="footer-parts d-flex justify-content-end gap-2 mt-4">
    <button
      v-if="okVisible"
      class="btn btn-primary btn-lg same-width-btn"
      type="button"
      @click="goOk"
    >
      OK
    </button>
    <button
      v-if="cancelVisible"
      class="btn btn-secondary btn-lg same-width-btn"
      type="button"
      @click="goCancel"
    >
      キャンセル
    </button>
  </div>
</template>

<script setup>
/**
 * FooterParts
 * 画面下部に固定表示されるOK・キャンセルボタン付きのフッターパーツ。
 *
 * @prop {string} okpage - OKボタン押下時の遷移先パス
 * @prop {string} cancelpage - キャンセルボタン押下時の遷移先パス
 * @prop {boolean} okVisible - OKボタンの表示/非表示（デフォルト: true）
 * @prop {boolean} cancelVisible - キャンセルボタンの表示/非表示（デフォルト: true）
 *
 * @function goOk - OKボタン押下時にokpageへ遷移
 * @function goCancel - キャンセルボタン押下時にcancelpageへ遷移
 */
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'

const props = defineProps({
  okpage: { type: String, required: true },
  cancelpage: { type: String, required: true },
  okVisible: { type: Boolean, default: true },
  cancelVisible: { type: Boolean, default: true },
})
const router = useRouter()

/**
 * OKボタン押下時の遷移処理
 */
function goOk() {
  router.push(props.okpage)
}
/**
 * キャンセルボタン押下時の遷移処理
 */
function goCancel() {
  router.push(props.cancelpage)
}
</script>

<style scoped>
.footer-parts {
  position: fixed;
  left: 0;
  bottom: 20px;
  width: 98vw;
}
.same-width-btn {
  min-width: 8.5em;
}
</style>
