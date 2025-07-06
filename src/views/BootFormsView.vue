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
            <router-link to="/bootmenu" class="btn btn-primary"> 登録 </router-link>
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
</style>
