// コンテンツ読み込み後に実行する
window.onload = function() {
  $("#myform").validate({
  // 各ルールの定義 input要素のnameに対して適用する
  rules: {
    userName: {
        required: true,
    },
    email: {
        required: true,
        email: true
    },
    password: {
        required: true,
        minlength:10,
    },
},
  // 各ルールごとのメッセージ定義
  messages: {
    userName: {
      required: "入力必須項目です",
    },
    email: {
        required: "入力必須項目です",
        email: "有効なメールアドレスを入力してください",
    },
    password: {
        required: "入力必須項目です",
        minlength:"10文字以上で入力してください",
    },
  },
  // エラー要素定義
  errorElement: "em"
});
};

// $(document).ready(function() {
// $("#myform").validate({
//     rules: {
//       text_name: {
//         required: true,
//       },
//     },
//     messages: {
//       text_name: {
//         required: "入力必須項目",
//       },
//     },
//   });
// });