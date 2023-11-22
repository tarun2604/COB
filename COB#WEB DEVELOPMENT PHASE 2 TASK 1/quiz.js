const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Rome", "Madrid"],
      answer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Saturn", "Neptune", "Jupiter", "Earth"],
      answer: "Jupiter"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
      answer: "Leonardo da Vinci"
    },
    {
        question: "Which famous painting by Vincent Van Gogh depicts a starry night sky?",
        options: ["The Starry Night", "The Night Cafe", "The Sunflow"],
        answer: "The Starry Night"
    },
    {
        question: "Which famous painting by Vincent Van Gogh depicts a star",
        options: ["Starry Night", "Self-Portrait with Bandaged Ear", "Wheat Field with Cypresses and Moon"],
        answer: "Starry Night"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const resultElement = document.getElementById('result');
  
  function loadQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    optionsElement.innerHTML = '';
  
    q.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.onclick = checkAnswer;
      optionsElement.appendChild(button);
    });
  }
  
  function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const correctAnswer = questions[currentQuestion].answer;
  
    if (selectedOption === correctAnswer) {
      score++;
      resultElement.textContent = 'Correct!';
    } else {
      resultElement.textContent = 'Incorrect!';
    }
  
    currentQuestion++;
    setTimeout(() => {
      if (currentQuestion < questions.length) {
        loadQuestion();
      } else {
        showResult();
      }
    }, 10);
  }
  
  function showResult() {
    questionElement.textContent = '';
    optionsElement.innerHTML = '';
    resultElement.textContent = `You scored ${score} out of ${questions.length}`;
  }
  
  loadQuestion();
  