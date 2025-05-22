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
