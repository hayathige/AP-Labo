const question = 'viscuitを使ったプログラミング授業は次のうちのどれに当てはまりますか？';
const answers = [
  'アンプラグド', 
  'ソフトウェア', 
  'フィジカル', 
  'アクティブ'
];
const correct = 'ソフトウェア';

function question_select() {
  
  const $button = document.getElementsByTagName('button');
  const buttonLength = $button.length;
  //クイズの問題文、選択肢を定義
  const setupQuiz =() => {
    document.getElementById('js-question').textContent = question;
    let buttonIndex = 0;
    let buttonLength = $button.length;
    while(buttonIndex < buttonLength){
      $button[buttonIndex].textContent = answers[buttonIndex];
      buttonIndex++;
    }
  }
  setupQuiz();
 
  const clickHandler = (e) => {
    if(correct === e.target.textContent){
      window.alert('正解！');
    } else {
      window.alert('不正解！');
    }
  };
  //ボタンをクリックしたら正誤判定
  let handlerIndex = 0;
  while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click',　(e) =>{
    clickHandler(e);
    });
    
    handlerIndex++;
  }
}

window.addEventListener("load", question_select);