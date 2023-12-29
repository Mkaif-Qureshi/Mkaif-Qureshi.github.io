let prevScrollpos = window.pageYOffset || document.documentElement.scrollTop;
window.addEventListener("scroll", function() {
  let currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").classList.remove("hidden");
  } else {
    document.getElementById("navbar").classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
});


document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const modal = document.getElementById('myModal');
  const closeModal = document.querySelector('.close');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (form.checkValidity()) {
      modal.style.display = 'flex';
    }
  });

  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const board = document.querySelector('.board');
  const cells = document.querySelectorAll('[data-cell]');
  const statusDisplay = document.querySelector('.status');
  const restartBtn = document.querySelector('.restart-btn');

  let currentPlayer = 'X';
  let gameActive = true;
  let gameState = ['', '', '', '', '', '', '', '', ''];
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  function handleCellClick(clickedCell, clickedCellIndex) {
    if (gameState[clickedCellIndex] !== '' || !gameActive) return;

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    checkWin();
    checkDraw();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    if (gameActive && currentPlayer === 'O') {
      setTimeout(() => {
        computerMove();
      }, 400); // Delay for the computer's move for better visualization
    }
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
  }

  function computerMove() {
    let emptyCells = gameState.reduce((acc, cell, index) => {
      if (cell === '') acc.push(index);
      return acc;
    }, []);

    if (emptyCells.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const computerChoice = emptyCells[randomIndex];
      gameState[computerChoice] = currentPlayer;
      cells[computerChoice].textContent = currentPlayer;
      checkWin();
      checkDraw();
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
    }
  }

  function checkWin() {
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        gameActive = false;
        statusDisplay.textContent = `Player ${gameState[a]} wins!`;
        highlightWinCells(winConditions[i]);
        break;
      }
    }
  }

  function checkDraw() {
    if (!gameState.includes('') && gameActive) {
      gameActive = false;
      statusDisplay.textContent = 'It\'s a draw!';
    }
  }

  function highlightWinCells(winIndexes) {
    winIndexes.forEach(index => {
      cells[index].classList.add('win');
    });
  }

  function startGame() {
    currentPlayer = 'X';
    gameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
    cells.forEach(cell => {
      cell.textContent = '';
      cell.classList.remove('win');
    });
  }

  cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
      handleCellClick(cell, index);
    });
  });

  restartBtn.addEventListener('click', startGame);

  startGame(); // Start the game initially
});


