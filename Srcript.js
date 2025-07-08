    const words = [
      "CREATE TABLE", "DROP TABLE", "INSERT", "SELECT", "DELETE", "UPDATE", 
      "PRIMARY KEY", "UNIQUE", "FOREIGN KEY", "CHECK", "DEFAULT", 
      "ALTER DATABASE", "DROP DATABASE", "GRANT", "REVOKE", 
      "ON DELETE CASCADE", "ON DELETE SET NULL", "ON DELETE NO ACTION", 
      "ON DELETE SET DEFAULT", "ON UPDATE CASCADE"
    ];

    let testWords = [];
    let currentIndex = 0;
    let score = 0;

    const wordBox = document.getElementById("word-box");
    const inputBox = document.getElementById("input-box");
    const scoreDisplay = document.getElementById("score");
    const restartBtn = document.getElementById("restart-btn");

    function shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    }

    function startTest() {
      testWords = shuffle([...words]).slice(0, 10);
      currentIndex = 0;
      score = 0;
      scoreDisplay.textContent = score;
      inputBox.value = "";
      inputBox.disabled = false;
      restartBtn.classList.add("hidden");
      showWord();
    }

    function showWord() {
      wordBox.textContent = testWords[currentIndex];
    }

    inputBox.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        const typed = inputBox.value.trim();
        if (typed === testWords[currentIndex]) {
          score++;
          scoreDisplay.textContent = score;
        }
        currentIndex++;
        inputBox.value = "";
        if (currentIndex < testWords.length) {
          showWord();
        } else {
          wordBox.textContent = "Finished!";
          inputBox.disabled = true;
          restartBtn.classList.remove("hidden");
        }
      }
    });

    restartBtn.addEventListener("click", startTest);

    startTest(); // Start on load