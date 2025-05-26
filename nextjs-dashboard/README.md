## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.


## メモ
・/app/page.tsx、では Tailwindクラスを使用している  

### tsxファイル
・.tsxファイルはTtpeScriptに加えてJSXも含むことができる  
  (.tsファイルはTypeScriptのみ)  
・.tsxは、React でコンポーネントを作成する際に必須の拡張子  
・tsx を使うことで、コンポーネントの props に型を付けることができ、意図しないデータの流入を防ぐことができる。  

### サーバーサイドコンポーネントとは：Reactのコンポーネントをサーバーサイドでレンダリングする仕組み  
・useStateやuseReducerは使えない  
・async/awaitを使用できる  
    「async/await」：Promiseによる非同期処理をより簡潔に効率よく記述できる  
    functionの前にasyncを記述することにより非同期処理を実行できる関数を定義→Promiseを返す  
    awaitはこのPromiseが返ってくるまで処理を一時停止してくれる演算子  
    →これを回避する方法は、Promise.all()またはPromise.allSettled()を用いて全てのPromiseを同時に開始すること  
・パフォーマンスが高くなる  
・セキュリティの向上  
・追加のAPIレイヤーなしで直接サーバーからデータベースをクエリできる  

### 静的レンダリング：データの取得とレンダリングはビルド時にサーバー上で行われる
・ユーザーがアプリケーションにアクセスするたびにキャッシュされた結果が提供される  
・定期的に更新されるデータを含む場合には適さない→動的レンダリングを使う 

### 動的レンダリング：コンテンツはリクエスト時に各ユーザーのサーバー上でレンダリングされる
・リアルタイムデータや頻繁に更新されるデータを表示できる  

### オプションパラメータ「？」
TypeScript では、関数の引数を定義する際に、それが必須なのか、任意なのかを決定できる。これがオプションパラメーター。TypeScript ではオプションパラメーターは引数名の後に?を追加することで指定できる。  

### デバウンス(Debouncing)
関数の実行頻度を制限する手法。今回のケースではユーザが入力を止めた時にのみデータベースへのクエリを実行する必要がある


### Server Action
クライアント側でデータ管理処理を待たずにサーバー上でデータ更新を行うことができる機能  
つまり、クライアントにJavaScriptがまだ読み込まれていなくても機能する(インターネットが遅い場合も)

### 動的ルートセグメント
データに基づいてルートを作成したい場合に動的ルートセグメントを作成できる(ブログ記事のタイルや製品ページなど)  
フォルダ名を[]で囲むことで作成できる  