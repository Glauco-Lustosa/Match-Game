//Global variables
let randomRound;
let valueA = 0;
let valueB = 0;
const score = { a: valueA, b: valueB };
init();

//Logica do button-start-game
document
  .querySelector(".button-start-game")
  .addEventListener("click", function() {
    document.querySelector(".button-submit").style.display = "block";
    document.querySelector(".button-next-round").style.display = "block";
    document.querySelector(".button-start-game").style.display = "none";
    document.querySelector(".button-next-round").style.position = "relative";
    document.querySelector(".button-next-round").style.left = "150px";
    document.querySelector(".button-submit").style.position = "relative";
    document.querySelector(".button-submit").style.left = "150px";

    randomRounds();
  });

// Logica do button-next-round
document
  .querySelector(".button-next-round")
  .addEventListener("click", function() {
    // randomiza um numero
    //1.Gera um round aleatorio
    //2. Mostra o round dentro da label

    randomRounds(randomRound);
    document.getElementById("button-submit").disabled = false;

    refresh();
  });

function refresh() {
  document.getElementById("input-0").value = "";
  document.getElementById("input-1").value = "";
}

// Logica do button-submit
document.querySelector(".button-submit").addEventListener("click", function() {
  //1. Compara o Input com o Random round
  //2. Mostra uma ponntuacao baseada nessa comparacao
  //3. Atualiza o Score

  if (
    document.getElementById("input-0").value == "" &&
    document.getElementById("input-0").value == ""
  ) {
    alert("Preencha o campo");
  } else {
    let firstInput = document.getElementById("input-0").value;
    let secondInput = document.getElementById("input-1").value;
    checker(firstInput, secondInput);
  }
});

// Função que inicia o game
function init() {
  roundScore = [0];
  document.querySelector(".button-start-game").style.position = "relative";
  document.querySelector(".button-start-game").style.left = "300px";
  document.querySelector(".button-submit").style.display = "none";
  document.querySelector(".button-next-round").style.display = "none";
  document.getElementById("input-0").value = "";
  document.getElementById("input-1").value = "";
  document.getElementById("score-0").textContent = "0";
}

function randomRounds(round) {
  randomRound = Math.floor(Math.random() * 10) + 1;

  console.log("%c Rounds Function", "color:Orange; font-weigth:bold;");
  if (randomRound === 1) {
    console.log("%c Rounds1", "color:red; font-weigth:bold;");

    document.getElementById("place-holder-1").textContent = "2³";
    document.getElementById("place-holder-2").textContent = "3²";
    document.getElementById("place-holder-3").textContent = "1¹";
  } else if (randomRound === 2) {
    console.log("%c Rounds2", "color:red; font-weigth:bold;");
    document.getElementById("place-holder-1").textContent = "(-2)²";
    document.getElementById("place-holder-2").textContent = "4¹";
    document.getElementById("place-holder-3").textContent = "1⁴";
  } else if (randomRound === 3) {
    console.log("%c Rounds3", "color:red; font-weigth:bold;");
    document.getElementById("place-holder-1").textContent = "(2²)³";
    document.getElementById("place-holder-2").textContent = "2⁴.2²";
    document.getElementById("place-holder-3").textContent = "(2³)²";
  } else if (randomRound === 4) {
    console.log("%c Rounds4", "color:red; font-weigth:bold;");
    document.getElementById("place-holder-1").textContent = "5³:5^-1";
    document.getElementById("place-holder-2").textContent = "5²";
    document.getElementById("place-holder-3").textContent = "25^-1";
  } else if (randomRound === 5) {
    console.log("%c Rounds5", "color:red; font-weigth:bold;");
    document.getElementById("place-holder-1").textContent = "(3.10²) + (4.10²)";
    document.getElementById("place-holder-2").textContent = "7.10²";
    document.getElementById("place-holder-3").textContent = "7.10⁴";
  } else if (randomRound === 6) {
    console.log("%c Rounds6", "color:red; font-weigth:bold;");
    document.getElementById("place-holder-1").textContent = "(6.10)² . (2.10)⁴";
    document.getElementById("place-holder-2").textContent = "12.10⁴";
    document.getElementById("place-holder-3").textContent = "(12.10⁵):10¹";
  } else if (randomRound === 7) {
    console.log("%c Rounds7", "color:red; font-weigth:bold;");
    document.getElementById("place-holder-1").textContent = "0,0000001";
    document.getElementById("place-holder-2").textContent = "10^-8";
    document.getElementById("place-holder-3").textContent = "1/10^9";
  } else if (randomRound === 8) {
    console.log("%c Rounds8", "color:red; font-weigth:bold;");
    document.getElementById("place-holder-1").textContent = "2.0,001";
    document.getElementById("place-holder-2").textContent = "0,002";
    document.getElementById("place-holder-3").textContent = "2.10^-3";
  } else if (randomRound === 9) {
    console.log("%c Rounds9", "color:red; font-weigth:bold;");
    document.getElementById("place-holder-1").textContent = "250 000";
    document.getElementById("place-holder-2").textContent = "0,25.10⁷ ";
    document.getElementById("place-holder-3").textContent = "25.10⁵";
  } else if (randomRound === 10) {
    console.log("%c Rounds10", "color:red; font-weigth:bold;");
    document.getElementById("place-holder-1").textContent = "100²:10³";
    document.getElementById("place-holder-2").textContent = "1/10^-1";
    document.getElementById("place-holder-3").textContent = "10^-2";
  } else {
    console.log("Not a Round !");
  }
}

function scoreCopy(src) {
  return Object.assign({}, src);
}

function checker(input1, input2) {
  scoreCopy();

  const newScore = scoreCopy(score);

  if (randomRound === 1) {
    if (input1 === "<" && input2 === "<") {
      console.log("%c Adiciona 5", "color:Purple; font-weigth:bold;");
      score.a = score.a + 5;
      document.getElementById("score-0").innerHTML = score.a + score.b;
      console.table(score);
      document.getElementById("button-submit").disabled = true;
    } else if (input1 === "<" || input2 === "<") {
      console.log("%c Adiciona 2", "color:Purple; font-weigth:bold;");
      score.b = score.b + 2;
      console.table(score);
      document.getElementById("score-0").innerHTML = score.b + score.a;
      document.getElementById("button-submit").disabled = true;
    }
  } else if (randomRound === 2) {
    if (input1 === "=" && input2 === ">") {
      console.log("%c Adiciona 5", "color:Purple; font-weigth:bold;");
      score.a = score.a + 5;
      document.getElementById("score-0").innerHTML = score.a + score.b;
      console.table(score);
      document.getElementById("button-submit").disabled = true;
    } else if (input1 === "=" || input2 === ">") {
      console.log("%c Adiciona 2", "color:Purple; font-weigth:bold;");
      score.b = score.b + 2;
      console.table(score);
      document.getElementById("score-0").innerHTML = score.b + score.a;
      document.getElementById("button-submit").disabled = true;
    }
  } else if (randomRound === 3) {
    if (input1 === "=" && input2 === "=") {
      console.log("%c Adiciona 5", "color:Purple; font-weigth:bold;");
      score.a = score.a + 5;
      document.getElementById("score-0").innerHTML = score.a + score.b;
      console.table(score);
      document.getElementById("button-submit").disabled = true;
    } else if (input1 === "=" || input2 === "=") {
      console.log("%c Adiciona 2", "color:Purple; font-weigth:bold;");
      score.b = score.b + 2;
      console.table(score);
      document.getElementById("score-0").innerHTML = score.b + score.a;
      document.getElementById("button-submit").disabled = true;
    }
  } else if (randomRound === 4) {
    if (input1 === ">" && input2 === ">") {
      console.log("%c Adiciona 5", "color:Purple; font-weigth:bold;");
      score.a = score.a + 5;
      document.getElementById("score-0").innerHTML = score.a + score.b;
      console.table(score);
      document.getElementById("button-submit").disabled = true;
    } else if (input1 === ">" || input2 === ">") {
      console.log("%c Adiciona 2", "color:Purple; font-weigth:bold;");
      score.b = score.b + 2;
      console.table(score);
      document.getElementById("score-0").innerHTML = score.b + score.a;
      document.getElementById("button-submit").disabled = true;
    }
  } else if (randomRound === 5) {
    if (input1 === "=" && input2 === "<") {
      console.log("%c Adiciona 5", "color:Purple; font-weigth:bold;");
      score.a = score.a + 5;
      document.getElementById("score-0").innerHTML = score.a + score.b;
      console.table(score);
      document.getElementById("button-submit").disabled = true;
    } else if (input1 === "=" || input2 === "<") {
      console.log("%c Adiciona 2", "color:Purple; font-weigth:bold;");
      score.b = score.b + 2;
      console.table(score);
      document.getElementById("score-0").innerHTML = score.b + score.a;
      document.getElementById("button-submit").disabled = true;
    }
  } else if (randomRound === 6) {
    if (input1 === ">" && input2 === "=") {
      console.log("%c Adiciona 5", "color:Purple; font-weigth:bold;");
      score.a = score.a + 5;
      document.getElementById("score-0").innerHTML = score.a + score.b;
      console.table(score);
      document.getElementById("button-submit").disabled = true;
    } else if (input1 === ">" || input2 === "=") {
      console.log("%c Adiciona 2", "color:Purple; font-weigth:bold;");
      score.b = score.b + 2;
      console.table(score);
      document.getElementById("score-0").innerHTML = score.b + score.a;
      document.getElementById("button-submit").disabled = true;
    }
  } else if (randomRound === 7) {
    if (input1 === ">" && input2 === ">") {
      console.log("%c Adiciona 5", "color:Purple; font-weigth:bold;");
      score.a = score.a + 5;
      document.getElementById("score-0").innerHTML = score.a + score.b;
      console.table(score);
      document.getElementById("button-submit").disabled = true;
    } else if (input1 === ">" || input2 === ">") {
      console.log("%c Adiciona 2", "color:Purple; font-weigth:bold;");
      score.b = score.b + 2;
      console.table(score);
      document.getElementById("score-0").innerHTML = score.b + score.a;
      document.getElementById("button-submit").disabled = true;
    }
  } else if (randomRound === 8) {
    if (input1 === "=" && input2 === "=") {
      console.log("%c Adiciona 5", "color:Purple; font-weigth:bold;");
      score.a = score.a + 5;
      document.getElementById("score-0").innerHTML = score.a + score.b;
      console.table(score);
      document.getElementById("button-submit").disabled = true;
    } else if (input1 === "=" || input2 === "=") {
      console.log("%c Adiciona 2", "color:Purple; font-weigth:bold;");
      score.b = score.b + 2;
      console.table(score);
      document.getElementById("score-0").innerHTML = score.b + score.a;
      document.getElementById("button-submit").disabled = true;
    }
  } else if (randomRound === 9) {
    if (input1 === "<" && input2 === "=") {
      console.log("%c Adiciona 5", "color:Purple; font-weigth:bold;");
      score.a = score.a + 5;
      document.getElementById("score-0").innerHTML = score.a + score.b;
      console.table(score);
      document.getElementById("button-submit").disabled = true;
    } else if (input1 === "<" || input2 === "=") {
      console.log("%c Adiciona 2", "color:Purple; font-weigth:bold;");
      score.b = score.b + 2;
      console.table(score);
      document.getElementById("score-0").innerHTML = score.b + score.a;
      document.getElementById("button-submit").disabled = true;
    }
  } else if (randomRound === 10) {
    if (input1 === "=" && input2 === ">") {
      console.log("%c Adiciona 5", "color:Purple; font-weigth:bold;");
      score.a = score.a + 5;
      document.getElementById("score-0").innerHTML = score.a + score.b;
      console.table(score);
      document.getElementById("button-submit").disabled = true;
    } else if (input1 === "=" || input2 === ">") {
      console.log("%c Adiciona 2", "color:Purple; font-weigth:bold;");
      score.b = score.b + 2;
      console.table(score);
      document.getElementById("score-0").innerHTML = score.b + score.a;
      document.getElementById("button-submit").disabled = true;
    }
  }
}
