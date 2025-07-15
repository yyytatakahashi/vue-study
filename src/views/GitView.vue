<template>
  <div class="container py-4">
    <b-tabs content-class="mt-3">
      <!-- 1. Gitインストール画面 -->
      <b-tab title="1. Gitのインストール方法">
        <h2 class="mb-3">Gitのインストール手順（Windows）</h2>
        <ol>
          <li><a href="https://git-scm.com/" target="_blank">公式サイト</a>にアクセスして「Download for Windows」をクリック</li>
          <li>ダウンロードしたインストーラーを実行</li>
          <li>基本は「Next」連打でOK（以下はおすすめ設定）
            <ul>
              <li>PATH：<code>Git from the command line...</code></li>
              <li>改行コード：<code>Checkout Windows-style...</code></li>
            </ul>
          </li>
          <li>インストール後、コマンドプロンプトやGit Bashで<code>git --version</code>で確認</li>
        </ol>
        <p class="mt-3 text-danger">よくあるミス：環境変数PATHにGitが入っていないとコマンドが使えない</p>
      </b-tab>

      <!-- 2. GitHubにリポジトリをアップロードする方法 -->
      <b-tab title="2. GitHubにリポジトリをアップする">
        <h2 class="mb-3">ローカルプロジェクトをGitHubにアップロード</h2>
        <ol>
          <li>GitHubで新規リポジトリを作成（READMEはチェックなし）</li>
          <li>ターミナルで以下を実行（プロジェクトのあるフォルダで）
            <pre><code>git init
git add .
git commit -m "初回コミット"
git branch -M main
git remote add origin https://github.com/ユーザー名/リポジトリ名.git
git push -u origin main</code></pre>
          </li>
        </ol>
        <h5 class="mt-3">確認方法</h5>
        <ul>
          <li>GitHub上のリポジトリURLにアクセスし、ファイル一覧が表示されていれば成功</li>
        </ul>
        <p class="text-danger">よくあるミス：リモートURLのユーザー名/リポジトリ名が間違っている</p>
      </b-tab>

      <!-- 3. ブランチ作成とプルリクエスト -->
      <b-tab title="3. ブランチ作成とプルリクエスト">
        <h2 class="mb-3">新しいブランチの作成とプルリク</h2>
        <ol>
          <li>ブランチを作成＆切り替え：<br>
            <code>git checkout -b feature-branch</code>
          </li>
          <li>ファイル編集・コミット：
            <pre><code>git add .
git commit -m "新機能追加"</code></pre>
          </li>
          <li>GitHubにPush：<br>
            <code>git push -u origin feature-branch</code>
          </li>
          <li>GitHub上で「Compare & pull request」ボタンをクリックして、mainブランチへマージ依頼</li>
        </ol>
        <h5 class="mt-3">確認方法</h5>
        <ul>
          <li>GitHub上の「Pull requests」タブで確認・レビュー・マージが可能</li>
        </ul>
        <p class="text-danger">よくあるミス：Pushし忘れ、ブランチ切り替え忘れ</p>
      </b-tab>
    </b-tabs>
  </div>
</template>
<script setup>
</script>
<style scoped>
.container {
  max-width: 960px;
}
pre {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
}
.text-danger {
  font-weight: bold;
  color: #d9534f;
}
</style>
