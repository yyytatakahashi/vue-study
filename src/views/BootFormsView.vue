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
        <h5 class="mt-4">Code</h5>
        <pre class="bg-dark text-white p-3 rounded"><code>&lt;form&gt;
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
        <h5 class="mt-4">Code</h5>
        <pre
          class="bg-dark text-white p-3 rounded"
        ><code>&lt;input class="form-control" type="text" name="name"&gt;
  &lt;div class="form-text for="name"&gt;全角文字で入力してください&lt;/div&gt;
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
        <h5 class="mt-4">Code</h5>
        <pre
          class="bg-dark text-white p-3 rounded"
        ><code>&lt;input class="form-control" type="text" name="name"&gt;
  &lt;div class="form-text for="name"&gt;全角文字で入力してください&lt;/div&gt;
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
          <input class="form-check-input" type="radio" id="radio_1" name="gender" value="male" checked />
          <label class="form-check-label" for="radio_1">男性</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" id="radio_2" name="gender" value="female" />
          <label class="form-check-label" for="radio_2">女性</label>
        </div>
        <h5 class="mt-4">Code</h5>
        <pre class="bg-dark text-white p-3 rounded"><code>&lt;div class="form-check"&gt;
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
        <p class="">
          <code>.form-switch</code>はスイッチスタイルのチェックボックスを表示します。
        </p>
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="switch_1" name="kyoka" value="yes" checked />
          <label class="form-check-label" for="switch_1">マイクやカメラへのアクセス許可</label>
        </div>
        <h5 class="mt-4">Code</h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'bootForms',
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
