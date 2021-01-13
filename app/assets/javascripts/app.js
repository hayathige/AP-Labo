const question = 'viscuitを使ったプログラミング授業は次のうちのどれに当てはまりますか？';
const answers = [
  'アンプラグド', 
  'ソフトウェア', 
  'フィジカル', 
  'アクティブ'
];
const correct = 'ソフトウェア';

function question_select() {
  document.getElementById('js-question').textContent = question;gi
}

window.addEventListener("load", question_select);