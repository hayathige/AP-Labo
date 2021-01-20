const quiz = [
  {
    question: '小学校プログラミング教育の手引きで示されているA分類ではないものはどれ？',
    answers: [
      '正多角形',
      '電気の利用',
      '探究的な学習',
      'リズムの組み合わせ'
    ],
    correct: 'リズムの組み合わせ'
  }, {
    question: 'viscuitを使ったプログラミング授業は次のうちのどれに当てはまりますか？？',
    answers: [
      'アンプラグド',
      'ソフトウェア',
      'フィジカル',
      'アクティブ'
    ],
    correct: 'ソフトウェア'
  }, {
    question: 'プログラムング教育が必要なのはどの学年？',
    answers: [
      '低学年',
      '中学年',
      '高学年',
      '全学年'
    ],
    correct: '全学年'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

function question_select() {
  
  const $button = document.getElementsByTagName('button');
  const buttonLength = $button.length;
  //クイズの問題文、選択肢を定義
  const setupQuiz =() => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    let buttonLength = $button.length;
    while(buttonIndex < buttonLength){
      $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
      buttonIndex++;
    }
  }
  setupQuiz();
 
  const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
      window.alert('正解！');
      score++;
    } else {
      window.alert('不正解！');
    }
    
    quizIndex++;
    
    if(quizIndex < quizLength){
      //問題数がまだあればこちらを実行
      setupQuiz();
    }else{
    //問題数がもうなければこちらを実行
      window.alert('終了！あなたの正解数は'+ score +'/'+quizLength + 'です！')
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