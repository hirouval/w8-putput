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
const $mailForm = $doc.getElementById('Your email');
const $passForm = $doc.getElementById('Password');
const $button = $doc.getElementById('button');

let address = $mailForm.value;
let password = $passForm.value;
// データの保存
// localStorage.setItem('address', address);
// localStorage.setItem('password', password);

//クリックされたらローカルリポジトリに保存する命令を書く
$button.addEventListener('click' , () =>{

    localStorage.setItem('address', $mailForm.value);
    localStorage.setItem('password', $passForm.value);
});

//データ取り出す
address = localStorage.getItem('address');
password = localStorage.getItem('password');

if($mailForm.addEventListener('click' ,() => {

} )) {
    console.log(address);
};
