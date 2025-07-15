<template>
  <div class="bootforms mb-2">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <h2 class="mb-2">フォーム（Forms）</h2>
        <p class="">
          フォームは、ラベルに <code>.form-label</code> を、<code>&lt;input&gt; </code>
          等のコントロールに <code>.form-control</code> を指定します。
        </p>
        <form>
          <div class="mb-2">
            <label class="form-label" for="name">名前</label>
            <input class="form-control" type="text" name="name" id="name" />
          </div>
          <div class="mb-2">
            <label class="form-label" for="address">メールアドレス</label>
            <input class="form-control" type="text" name="address" id="address" />
          </div>
          <div class="d-flex gap-3">
            <button type="reset" class="btn btn-secondary">リセット</button>
            <router-link to="/bootmenu" class="btn btn-primary button"> 登録 </router-link>
          </div>
        </form>
        <h5 class="mt-4">
          Code
          <button type="button" class="btn btn-sm btn-outline-info ms-2" @click="toggleCode(1)">
            {{ showCode1 ? '非表示' : '表示' }}
          </button>
        </h5>
        <pre v-if="showCode1" class="bg-dark text-white p-3 rounded"><code>&lt;form&gt;
  &lt;div class="mb-2"&gt;
    &lt;label class="form-label" for="name"&gt;名前&lt;/label&gt;
    &lt;input class="form-control" type="text" name="name" id="name"&gt;
  &lt;/div&gt;
  &lt;div class="mb-2"&gt;
    &lt;label class="form-label" for="address"&gt;メールアドレス&lt;/label&gt;
    &lt;input class="form-control" type="text" name="address" id="address"&gt;
  &lt;/div&gt;
  &lt;button type="reset" class="btn btn-secondary"&gt;リセット&lt;/button&gt;
  &lt;button type="submit" class="btn btn-primary"&gt;登録&lt;/button&gt;
&lt;/form&gt;</code></pre>
      </div>
    </div>
  </div>
  <div class="bootforms mb-2">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <h2 class="mb-2">フォームテキスト(Form text)</h2>
        <p class=""><code>.form-text</code> は、フォームの注釈分などのテキストを表示します。</p>
        <form>
          <div class="mb-2">
            <input class="form-control" type="text" name="name" />
            <div class="form-text">全角文字で入力してください</div>
          </div>
        </form>
        <h5 class="mt-4">
          Code
          <button type="button" class="btn btn-sm btn-outline-info ms-2" @click="toggleCode(2)">
            {{ showCode2 ? '非表示' : '表示' }}
          </button>
        </h5>
        <pre
          v-if="showCode2"
          class="bg-dark text-white p-3 rounded"
        ><code>&lt;input class="form-control" type="text" name="name"&gt;
  &lt;div class="form-text" for="name"&gt;全角文字で入力してください&lt;/div&gt;
</code></pre>
      </div>
    </div>
  </div>
  <div class="bootforms mb-2">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <h2 class="mb-2">サイジング(Sizing)</h2>
        <p class="">
          <code>.form-control-lg</code> は大きなフォーム、<code>.form-control-sm</code>
          は小さなフォームを表示します。
        </p>
        <div class="mb-2">
          <input class="form-control form-control-sm mb-1" type="text" />
          <input class="form-control mb-1" type="text" />
          <input class="form-control form-control-lg" type="text" />
        </div>
        <h5 class="mt-4">
          Code
          <button type="button" class="btn btn-sm btn-outline-info ms-2" @click="toggleCode(3)">
            {{ showCode3 ? '非表示' : '表示' }}
          </button>
        </h5>
        <pre
          v-if="showCode3"
          class="bg-dark text-white p-3 rounded"
        ><code>&lt;input class="form-control form-control-sm" type="text" /&gt;
&lt;input class="form-control" type="text" /&gt;
&lt;input class="form-control form-control-lg" type="text" /&gt;
</code></pre>
      </div>
    </div>
  </div>
  <div class="bootforms mb-2">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <h2 class="mb-2">チェックボックス＆ラジオボタン(Checks & Radios)</h2>
        <p class="">
          チェックボックスやラジオボタンには<code>.form-check</code>,<code>.form-check-input</code>,<code
            >.form-check-label</code
          >
          を指定します。
        </p>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="check_1" name="agree" value="yes" />
          <label class="form-check-label" for="check_1">規約に同意します</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            id="radio_1"
            name="gender"
            value="male"
            checked
          />
          <label class="form-check-label" for="radio_1">男性</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" id="radio_2" name="gender" value="female" />
          <label class="form-check-label" for="radio_2">女性</label>
        </div>
        <h5 class="mt-4">
          Code
          <button type="button" class="btn btn-sm btn-outline-info ms-2" @click="toggleCode(4)">
            {{ showCode4 ? '非表示' : '表示' }}
          </button>
        </h5>
        <pre
          v-if="showCode4"
          class="bg-dark text-white p-3 rounded"
        ><code>&lt;div class="form-check"&gt;
  &lt;input class="form-check-input" type="checkbox" id="check_1" name="agree" value="yes" /&gt;
  &lt;label class="form-check-label" for="check_1"&gt;規約に同意します&lt;/label&gt;
&lt;/div&gt;
&lt;div class="form-check"&gt;
  &lt;input class="form-check-input" type="radio" id="radio_1" name="gender" value="male" checked /&gt;
  &lt;label class="form-check-label" for="radio_1"&gt;男性&lt;/label&gt;
&lt;/div&gt;
&lt;div class="form-check"&gt;
  &lt;input class="form-check-input" type="radio" id="radio_2" name="gender" value="female" /&gt;
  &lt;label class="form-check-label" for="radio_2"&gt;女性&lt;/label&gt;
&lt;/div&gt;
</code></pre>
      </div>
    </div>
  </div>
  <div class="bootforms mb-2">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <h2 class="mb-2">スイッチ(Switches)</h2>
        <p class=""><code>.form-switch</code>はスイッチスタイルのチェックボックスを表示します。</p>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="switch_1"
            name="kyoka"
            value="yes"
            checked
          />
          <label class="form-check-label" for="switch_1">マイクやカメラへのアクセス許可</label>
        </div>
        <h5 class="mt-4">
          Code
          <button type="button" class="btn btn-sm btn-outline-info ms-2" @click="toggleCode(5)">
            {{ showCode5 ? '非表示' : '表示' }}
          </button>
        </h5>
        <pre
          v-if="showCode5"
          class="bg-dark text-white p-3 rounded"
        ><code>&lt;div class="form-check form-switch"&gt;
  &lt;input
    class="form-check-input"
    type="checkbox"
    id="switch_1"
    name="kyoka"
    value="yes"
    checked
  /&gt;
  &lt;label class="form-check-label" for="switch_1"&gt;マイクやカメラへのアクセス許可&lt;/label&gt;
&lt;/div&gt;
</code></pre>
      </div>
    </div>
  </div>
  <div class="bootforms mb-2">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <h2 class="mb-2">インラインチェック＆ラジオ(Inline check & radio)</h2>
        <p class="">
          <code>.form-check-inline</code
          >を指定すると、チェックボックスやラジオボタンを横並びに表示します。
        </p>
        <!--チェックボックスクラス-->
        <div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="agree_info"
              name="agree[]"
              value="info"
            />
            <label class="form-check-label" for="agree_info">個人情報の取扱いに同意します</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="agree_mail"
              name="agree[]"
              value="mail"
            />
            <label class="form-check-label" for="agree_mail">広告メールの受信に同意します</label>
          </div>
        </div>
        <!--ラジオボタンクラス-->
        <div class="mt-3">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="radio_3"
              name="gender2"
              value="male2"
              checked
            />
            <label class="form-check-label" for="radio_3">男性</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="radio_4"
              name="gender2"
              value="female2"
            />
            <label class="form-check-label" for="radio_4">女性</label>
          </div>
        </div>
        <h5 class="mt-4">
          Code
          <button type="button" class="btn btn-sm btn-outline-info ms-2" @click="toggleCode(6)">
            {{ showCode6 ? '非表示' : '表示' }}
          </button>
        </h5>
        <pre
          v-if="showCode6"
          class="bg-dark text-white p-3 rounded"
        ><code>&lt;div class="form-check form-check-inline"&gt;
  &lt;input
    class="form-check-input"
    type="checkbox"
    id="agree_info"
    name="agree[]"
    value="info"
  /&gt;
  &lt;label class="form-check-label" for="agree_info"&gt;個人情報の取扱いに同意します&lt;/label&gt;
&lt;/div&gt;
&lt;div class="form-check form-check-inline"&gt;
  &lt;input
    class="form-check-input"
    type="checkbox"
    id="agree_mail"
    name="agree[]"
    value="mail"
  /&gt;
  &lt;label class="form-check-label" for="agree_mail"&gt;広告メールの受信に同意します&lt;/label&gt;
&lt;/div&gt;

&lt;div class="form-check form-check-inline"&gt;
  &lt;input class="form-check-input" type="radio" id="radio_3" name="gender" value="male" /&gt;
  &lt;label class="form-check-label" for="radio_3"&gt;男性&lt;/label&gt;
&lt;/div&gt;
&lt;div class="form-check form-check-inline"&gt;
  &lt;input
    class="form-check-input"
    type="radio"
    id="radio_4"
    name="gender"
    value="female"
  /&gt;
  &lt;label class="form-check-label" for="radio_4"&gt;女性&lt;/label&gt;
&lt;/div&gt;
</code></pre>
      </div>
    </div>
  </div>
  <div class="bootforms mb-2">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <h2 class="mb-2">レンジ(Range)</h2>
        <p class="">
          <code>.form-range</code> はレンジを表示します。minとmaxで最小値と最大値を設定できます。
        </p>
        <div class="mb-2">
          <label class="form-label">例</label>
          <input
            class="form-range"
            type="range"
            id="range_1"
            v-model="rangeValue"
            min="0"
            max="100"
          />
          <div>現在の値: {{ rangeValue }}</div>
        </div>
        <h5 class="mt-3">
          Code
          <button type="button" class="btn btn-sm btn-outline-info ms-2" @click="toggleCode(7)">
            {{ showCode7 ? '非表示' : '表示' }}
          </button>
        </h5>
        <pre
          v-if="showCode7"
          class="bg-dark text-white p-3 rounded"
        ><code>&lt;label class="form-label"&gt;例&lt;/label&gt;
&lt;input class="form-range" type="range" id="range_1" /&gt;
</code></pre>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

/**
 * コードブロックの表示・非表示を管理するリアクティブな状態
 */
const showCode1 = ref(false)
const showCode2 = ref(false)
const showCode3 = ref(false)
const showCode4 = ref(false)
const showCode5 = ref(false)
const showCode6 = ref(false)
const showCode7 = ref(false)

// レンジの値を管理するリアクティブ変数
const rangeValue = ref(50) // 初期値50

/**
 * 指定された番号のコードブロックの表示状態を切り替える
 * @param {number} num - 切り替えるコードブロックの番号
 */
function toggleCode(num) {
  switch (num) {
    case 1:
      showCode1.value = !showCode1.value
      break
    case 2:
      showCode2.value = !showCode2.value
      break
    case 3:
      showCode3.value = !showCode3.value
      break
    case 4:
      showCode4.value = !showCode4.value
      break
    case 5:
      showCode5.value = !showCode5.value
      break
    case 6:
      showCode6.value = !showCode6.value
      break
    case 7:
      showCode7.value = !showCode7.value
      break
    default:
      // 無効な番号は何もしない
      break
  }
}
</script>
<style scoped>
.bootforms {
  background-color: #f7e4eb;
  padding: 2rem;
}

/* ネットで見たcssを真似してみただけなのでコメントアウト */
/* .button {
  color: #ffffff;
  padding: 15px 40px;
  background-color: #df3a3a;
  font-family: monospace;
  border-radius: 50px;
  border: 2px solid rgb(255, 255, 255);
  box-shadow: inset 4px 4px 10px #bcbcbc inset -4px -4px 10px #ffffff;
} */
</style>
