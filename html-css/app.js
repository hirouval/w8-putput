//your emailとJavaScriptを連携する
//PasswordとJavaScriptを連携する
//sign inボタンとJavaScriptを連携する
//signボタンを押したらローカルストレージにデータを保存する
//sign inを押したらメールとパスワードに入力されたデータを変数に代入する
//localstlageに保存をする
//ローカルストレージからデータを取り出す
//取り出したデータをメールとパスワードに出力する

//your email要素と取得さらにその値を取得
//Password要素と取得さらにその値を取得
//sign inボタン要素と取得
//ローカルリポジトリに保存する命令を書く
//ローカルリポジトリからデータを取り出す命令をかく
//クリックされたらローカルリポジトリに保存する命令を書く


const $doc = document;
// console.log($doc);
let $mailForm = $doc.getElementById('Your email');
let $passForm = $doc.getElementById('Password');
const $button = $doc.getElementById('button');

// console.log($mailForm);

$button.addEventListener('click' , () =>{

    //クリックされたらローカルリポジトリに保存する命令を書く
    let $mailValue = $mailForm.value;
    let $passValue = $passForm.value;

    localStorage.setItem('address', $mailValue);
    localStorage.setItem('password', $passValue);

});

//データの保存
// localStorage.setItem('address', address);
// localStorage.setItem('password', password);

let address = localStorage.getItem('address');
let password = localStorage.getItem('password');

// //データ取り出す

if(address){
    $mailForm.value = address;
}

if(password){
    $passForm.value = password;
}





// const $doc = document;
// const $mailForm = $doc.getElementById('Your email');
// const $passForm = $doc.getElementById('Password');
// const $button = $doc.getElementById('button');

// // ローカルストレージからデータを取得してフォームに設定
// const storedAddress = localStorage.getItem('address');
// const storedPassword = localStorage.getItem('password');

// if (storedAddress) {
//     $mailForm.value = storedAddress;
// }

// if (storedPassword) {
//     $passForm.value = storedPassword;
// }

// // クリックされたらローカルストレージに保存する命令を書く
// $button.addEventListener('click', () => {
//     // ボタンがクリックされたときにフォームの値を取得
//     const address = $mailForm.value;
//     const password = $passForm.value;

//     // ローカルストレージに値を保存
//     localStorage.setItem('address', address);
//     localStorage.setItem('password', password);
// });



