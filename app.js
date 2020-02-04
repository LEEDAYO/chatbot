//express モジュールをインポート。これは先ほどインポート済み
var express = require('express')

//express アプリケーションを作成
var app = express()

//ここに、ルートディレクトリにGETリクエストが送信された時の処理を書く
//つまり、ルートディレクトリ(google.comであればhttp://google.com)へ、ブラウザでURLアクセスされたとき
app.get('/', function(req,res){
    // 実際にアクセスされた時に返す文字列
    res.send('Hello World!')
})

//ここで、webサーバーを3000番ポートに起動する
//ちなみに、http標準ポートは80番、
//https標準ポートは443番ポートが利用される
app.listen(3000, function(){
    console.log('http://localhost:3000にブラウザでアクセスしてください。')
})
