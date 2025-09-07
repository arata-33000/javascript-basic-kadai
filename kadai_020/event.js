// id属性が'btn'のHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// id属性が'text'のHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// ボタンがクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  // textのテキストコンテンツを書き換える
  text.textContent = 'ボタンがクリックされました';
});
