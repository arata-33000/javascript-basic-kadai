// Dateオブジェクトを作成
const today = new Date();

// 年、月、日を取得
const year = today.getFullYear();
// getMonth()は0から始まるため、1を加える
const month = today.getMonth() + 1;
const day = today.getDate();

// コンソールに年月日を出力
console.log(year + '年' + month + '月' + day + '日');