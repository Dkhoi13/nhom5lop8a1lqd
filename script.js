(() => {
  "use strict";

  const planets = window.formulaPlanets || [];

  const state = {
    planetIndex: 0,
    questionIndex: 0,
    lives: 10,
    score: 0,
    streak: 0,
    correct: 0,
    wrong: 0,
    completedPlanets: 0,
    soundOn: localStorage.getItem("nhom5lop8a1lqd-sound") !== "off",
    locked: false,
    pendingPlanetAdvance: false,
    gameOver: false,
    toastTimer: null,
  };

  const $ = (id) => document.getElementById(id);

  const elements = {
    startScreen: $("start-screen"),
    gameScreen: $("game-screen"),
    resultScreen: $("result-screen"),
    startButton: $("start-button"),
    howToPlayButton: $("how-to-play-button"),
    modalStartButton: $("modal-start-button"),
    closeInstructionsButton: $("close-instructions-button"),
    instructionsModal: $("instructions-modal"),
    playAgainButton: $("play-again-button"),
    reviewButton: $("review-button"),
    soundToggle: $("sound-toggle"),
    soundIcon: $("sound-icon"),
    lifeCount: $("life-count"),
    scoreCount: $("score-count"),
    streakCount: $("streak-count"),
    planetProgress: $("planet-progress"),
    planetList: $("planet-list"),
    planetNumberLabel: $("planet-number-label"),
    planetNameLabel: $("planet-name-label"),
    currentPlanet: $("current-planet"),
    questionKind: $("question-kind"),
    questionCounter: $("question-counter"),
    questionProgressBar: $("question-progress-bar"),
    questionText: $("question-text"),
    answerOptions: $("answer-options"),
    shortAnswerForm: $("short-answer-form"),
    shortAnswerInput: $("short-answer-input"),
    shortAnswerSubmit: $("short-answer-submit"),
    feedbackPanel: $("feedback-panel"),
    feedbackIcon: $("feedback-icon"),
    feedbackTitle: $("feedback-title"),
    feedbackMessage: $("feedback-message"),
    nextQuestionButton: $("next-question-button"),
    stageFeedback: $("stage-feedback"),
    gameAlien: $("game-alien"),
    heroAlien: $("hero-alien"),
    resultAlien: $("result-alien"),
    resultMessage: $("result-message"),
    resultPlanetCount: $("result-planet-count"),
    resultScore: $("result-score"),
    resultCorrect: $("result-correct"),
    resultLives: $("result-lives"),
    toast: $("toast"),
  };

  const alienLabels = {
    blocking: "Người ngoài hành tinh đang chặn đường",
    asking: "Người ngoài hành tinh đang đặt câu hỏi",
    correct: "Người ngoài hành tinh chúc mừng câu trả lời đúng",
    wrong: "Người ngoài hành tinh phản ứng với câu trả lời sai",
    portal: "Người ngoài hành tinh mở cổng sang hành tinh mới",
    gameover: "Người ngoài hành tinh tiếc nuối vì người chơi hết mạng",
    victory: "Người ngoài hành tinh chúc mừng chiến thắng",
  };

  const questionTypeLabels = {
    "multiple-choice": "TRẮC NGHIỆM",
    "true-false": "ĐÚNG / SAI",
    "short-answer": "TRẢ LỜI NGẮN",
  };

  class SoundEngine {
    constructor() {
      this.context = null;
    }

    unlock() {
      if (!this.context) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        this.context = new AudioContext();
      }
      if (this.context.state === "suspended") this.context.resume();
    }

    tone(frequency, duration = 0.12, type = "sine", volume = 0.035, delay = 0) {
      if (!state.soundOn) return;
      this.unlock();
      if (!this.context) return;

      const now = this.context.currentTime + delay;
      const oscillator = this.context.createOscillator();
      const gain = this.context.createGain();
      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, now);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(volume, now + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
      oscillator.connect(gain);
      gain.connect(this.context.destination);
      oscillator.start(now);
      oscillator.stop(now + duration + 0.02);
    }

    play(name) {
      if (!state.soundOn) return;
      const patterns = {
        click: [[420, 0.06, "sine", 0.022]],
        start: [[330, 0.1, "sine", 0.028], [495, 0.13, "sine", 0.03, 0.08], [660, 0.2, "sine", 0.025, 0.17]],
        question: [[520, 0.08, "triangle", 0.022], [650, 0.14, "triangle", 0.022, 0.09]],
        correct: [[523, 0.1, "sine", 0.035], [659, 0.1, "sine", 0.035, 0.08], [784, 0.2, "sine", 0.04, 0.16]],
        wrong: [[180, 0.18, "sawtooth", 0.025], [120, 0.18, "square", 0.018, 0.08]],
        portal: [[392, 0.1, "sine", 0.025], [523, 0.1, "sine", 0.025, 0.08], [784, 0.28, "triangle", 0.03, 0.16]],
        victory: [[523, 0.12, "sine", 0.03], [659, 0.12, "sine", 0.03, 0.1], [784, 0.12, "sine", 0.03, 0.2], [1046, 0.32, "sine", 0.04, 0.3]],
      };
      (patterns[name] || patterns.click).forEach((tone) => this.tone(...tone));
    }
  }

  const sound = new SoundEngine();

  function init() {
    if (!planets.length) {
      showToast("Chưa tìm thấy ngân hàng câu hỏi.");
      return;
    }

    bindEvents();
    updateSoundButton();
    setAlienState(elements.heroAlien, "blocking");
    setAlienState(elements.gameAlien, "blocking");
    setAlienState(elements.resultAlien, "victory");
    initParticles();
  }

  function bindEvents() {
    elements.startButton.addEventListener("click", startGame);
    elements.modalStartButton.addEventListener("click", () => {
      closeInstructions();
      startGame();
    });
    elements.howToPlayButton.addEventListener("click", openInstructions);
    elements.closeInstructionsButton.addEventListener("click", closeInstructions);
    elements.instructionsModal.addEventListener("click", (event) => {
      if (event.target === elements.instructionsModal) closeInstructions();
    });
    elements.playAgainButton.addEventListener("click", startGame);
    elements.reviewButton.addEventListener("click", () => {
      showToast("Hãy nhớ đủ 7 công thức trước khi quay lại chinh phục!", 3000);
      sound.play("click");
    });
    elements.soundToggle.addEventListener("click", toggleSound);
    elements.nextQuestionButton.addEventListener("click", advanceAfterFeedback);
    elements.shortAnswerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      evaluateAnswer(elements.shortAnswerInput.value);
    });
  }

  function startGame() {
    sound.unlock();
    sound.play("start");
    state.planetIndex = 0;
    state.questionIndex = 0;
    state.lives = 10;
    state.score = 0;
    state.streak = 0;
    state.correct = 0;
    state.wrong = 0;
    state.completedPlanets = 0;
    state.locked = false;
    state.pendingPlanetAdvance = false;
    state.gameOver = false;

    showScreen("game");
    renderPlanet();
    renderQuestion();
    setAlienState(elements.gameAlien, "asking");
    showToast("Nhiệm vụ bắt đầu! Hãy vượt qua hành tinh đầu tiên.", 2600);
  }

  function showScreen(screenName) {
    elements.startScreen.hidden = screenName !== "start";
    elements.gameScreen.hidden = screenName !== "game";
    elements.resultScreen.hidden = screenName !== "result";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openInstructions() {
    elements.instructionsModal.hidden = false;
    sound.play("click");
  }

  function closeInstructions() {
    elements.instructionsModal.hidden = true;
  }

  function renderPlanet() {
    const planet = planets[state.planetIndex];
    if (!planet) return;

    elements.planetNumberLabel.textContent = `HÀNH TINH ${planet.number}`;
    elements.planetNameLabel.textContent = planet.name;
    elements.planetProgress.textContent = `${state.planetIndex + 1} / ${planets.length}`;
    elements.currentPlanet.dataset.planet = planet.id;

    [...elements.planetList.querySelectorAll(".planet-node")].forEach((node, index) => {
      node.classList.toggle("is-active", index === state.planetIndex);
      node.classList.toggle("is-completed", index < state.completedPlanets);
      node.classList.toggle("is-locked", index > state.planetIndex);
      node.disabled = index > state.planetIndex;
    });
  }

  function renderQuestion() {
    const planet = planets[state.planetIndex];
    const question = planet.questions[state.questionIndex];
    if (!question) return;

    state.locked = false;
    state.pendingPlanetAdvance = false;
    elements.questionKind.textContent = questionTypeLabels[question.type] || "CÂU HỎI";
    elements.questionCounter.textContent = `Câu ${state.questionIndex + 1} / ${planet.questions.length}`;
    elements.questionProgressBar.style.width = `${((state.questionIndex + 1) / planet.questions.length) * 100}%`;
    elements.questionText.innerHTML = question.prompt;
    elements.feedbackPanel.hidden = true;
    elements.feedbackPanel.className = "feedback-panel";
    elements.nextQuestionButton.hidden = true;
    elements.stageFeedback.textContent = "";
    elements.answerOptions.innerHTML = "";
    elements.shortAnswerInput.value = "";
    elements.shortAnswerInput.disabled = false;
    elements.shortAnswerSubmit.disabled = false;
    elements.answerOptions.hidden = question.type === "short-answer";
    elements.shortAnswerForm.hidden = question.type !== "short-answer";
    setAlienState(elements.gameAlien, "asking");

    if (question.type !== "short-answer") {
      question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer-option";
        button.dataset.answer = option.id;
        button.innerHTML = `
          <span class="answer-option__letter">${String.fromCharCode(65 + index)}</span>
          <span class="answer-option__text">${option.text}</span>
        `;
        button.addEventListener("click", () => evaluateAnswer(option.id));
        elements.answerOptions.appendChild(button);
      });
    }
  }

  function evaluateAnswer(answer) {
    if (state.locked) return;
    const question = planets[state.planetIndex].questions[state.questionIndex];
    const isCorrect = question.type === "short-answer"
      ? isShortAnswerCorrect(answer, question.acceptedAnswers || [])
      : String(answer) === String(question.answer);

    state.locked = true;
    lockAnswerArea();

    if (isCorrect) {
      handleCorrect(question);
    } else {
      handleWrong(question);
    }
  }

  function handleCorrect(question) {
    state.correct += 1;
    state.streak += 1;
    state.score += 100 + Math.min(50, (state.streak - 1) * 10);
    state.questionIndex += 1;
    updateHUD();
    showFeedback(true, question);
    setAlienState(elements.gameAlien, "correct");
    elements.stageFeedback.textContent = state.streak >= 3 ? `🔥 Combo x${state.streak}!` : "✨ Chính xác!";
    sound.play("correct");
    celebrateCorrect();

    const finishedPlanet = state.questionIndex >= planets[state.planetIndex].questions.length;
    if (finishedPlanet) {
      state.completedPlanets = state.planetIndex + 1;
      state.pendingPlanetAdvance = true;
      updateHUD();
      renderPlanet();
      elements.nextQuestionButton.textContent = state.planetIndex === planets.length - 1
        ? "Hoàn thành hành trình →"
        : "Sang hành tinh tiếp theo →";
    } else {
      elements.nextQuestionButton.textContent = "Câu tiếp theo →";
    }
    elements.nextQuestionButton.hidden = false;
  }

  function handleWrong(question) {
    state.wrong += 1;
    state.lives = Math.max(0, state.lives - 1);
    state.streak = 0;
    updateHUD();
    showFeedback(false, question);
    setAlienState(elements.gameAlien, "wrong");
    elements.stageFeedback.textContent = state.lives > 0 ? "💥 Bị ném bom! Hãy thử lại." : "💥 Hết mạng!";
    sound.play("wrong");

    if (state.lives === 0) {
      state.gameOver = true;
      elements.nextQuestionButton.textContent = "Xem tổng kết";
    } else {
      elements.nextQuestionButton.textContent = "Thử lại câu này →";
    }
    elements.nextQuestionButton.hidden = false;
  }

  function advanceAfterFeedback() {
    sound.play("click");

    if (state.gameOver) {
      finishGame();
      return;
    }

    if (state.pendingPlanetAdvance) {
      if (state.planetIndex >= planets.length - 1) {
        sound.play("victory");
        finishGame(true);
        return;
      }
      state.planetIndex += 1;
      state.questionIndex = 0;
      state.pendingPlanetAdvance = false;
      renderPlanet();
      renderQuestion();
      setAlienState(elements.gameAlien, "portal");
      sound.play("portal");
      showToast(`Đã đến ${planets[state.planetIndex].name}!`, 2400);
      return;
    }

    renderQuestion();
    setAlienState(elements.gameAlien, "asking");
  }

  function finishGame(completedAll = false) {
    state.completedPlanets = completedAll ? planets.length : Math.min(state.completedPlanets, planets.length);
    updateResult(completedAll);
    setAlienState(elements.resultAlien, completedAll ? "victory" : "gameover");
    showScreen("result");
    saveLastResult();
  }

  function updateResult(completedAll) {
    elements.resultPlanetCount.textContent = state.completedPlanets;
    elements.resultScore.textContent = state.score;
    elements.resultCorrect.textContent = state.correct;
    elements.resultLives.textContent = state.lives;

    if (completedAll) {
      elements.resultMessage.textContent = "Tuyệt vời! Bạn đã chinh phục toàn bộ 7 hành tinh và ghi nhớ 7 hằng đẳng thức.";
    } else if (state.lives === 0) {
      elements.resultMessage.textContent = `Bạn đã đi được ${state.completedPlanets}/7 hành tinh. Hãy ôn lại công thức rồi thử lại nhé!`;
    } else {
      elements.resultMessage.textContent = `Bạn đã hoàn thành ${state.completedPlanets}/7 hành tinh trong chuyến du hành này.`;
    }
  }

  function showFeedback(isCorrect, question) {
    elements.feedbackPanel.hidden = false;
    elements.feedbackPanel.className = `feedback-panel ${isCorrect ? "is-correct" : "is-wrong"}`;
    elements.feedbackIcon.textContent = isCorrect ? "✓" : "!";
    elements.feedbackTitle.textContent = isCorrect ? "Chính xác!" : "Chưa đúng!";

    const correctAnswer = getCorrectAnswerText(question);
    elements.feedbackMessage.innerHTML = isCorrect
      ? question.explanation
      : `${question.explanation}<br><strong>Đáp án cần nhớ:</strong> ${correctAnswer}`;
  }

  function getCorrectAnswerText(question) {
    if (question.type === "short-answer") return question.answerDisplay || question.acceptedAnswers?.[0] || "";
    return question.options?.find((option) => option.id === question.answer)?.text || question.answer;
  }

  function isShortAnswerCorrect(value, acceptedAnswers) {
    const normalizedValue = normalizeAnswer(value);
    return acceptedAnswers.some((answer) => normalizeAnswer(answer) === normalizedValue);
  }

  function normalizeAnswer(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/²/g, "2")
      .replace(/³/g, "3")
      .replace(/\s+/g, "")
      .replace(/[()]/g, "");
  }

  function lockAnswerArea() {
    elements.answerOptions.querySelectorAll(".answer-option").forEach((button) => {
      button.disabled = true;
      button.classList.add("is-disabled");
    });
    elements.shortAnswerInput.disabled = true;
    elements.shortAnswerSubmit.disabled = true;
  }

  function updateHUD() {
    elements.lifeCount.textContent = state.lives;
    elements.scoreCount.textContent = state.score;
    elements.streakCount.textContent = state.streak;
    elements.planetProgress.textContent = `${state.planetIndex + 1} / ${planets.length}`;
  }

  function setAlienState(element, stateName) {
    if (!element) return;
    element.dataset.alienState = stateName;
    element.classList.remove(...Object.keys(alienLabels).map((name) => `alien-state--${name}`));
    element.classList.add(`alien-state--${stateName}`);
    element.setAttribute("aria-label", alienLabels[stateName] || "Người ngoài hành tinh");
  }

  function toggleSound() {
    state.soundOn = !state.soundOn;
    localStorage.setItem("nhom5lop8a1lqd-sound", state.soundOn ? "on" : "off");
    updateSoundButton();
    if (state.soundOn) sound.play("click");
  }

  function updateSoundButton() {
    elements.soundIcon.textContent = state.soundOn ? "🔊" : "🔇";
    elements.soundToggle.setAttribute("aria-pressed", String(state.soundOn));
    elements.soundToggle.setAttribute("title", state.soundOn ? "Tắt âm thanh" : "Bật âm thanh");
  }

  function celebrateCorrect() {
    if (typeof window.confetti !== "function") return;
    window.confetti({
      particleCount: 28,
      spread: 55,
      startVelocity: 22,
      origin: { y: 0.68 },
      colors: ["#61f4db", "#52edff", "#967cff", "#ffe17c"],
      disableForReducedMotion: true,
    });
  }

  function initParticles() {
    if (!window.tsParticles || !$("tsparticles")) return;
    window.tsParticles.load("tsparticles", {
      fullScreen: { enable: false },
      particles: {
        number: { value: 42, density: { enable: true, area: 1100 } },
        color: { value: ["#52edff", "#967cff", "#ffffff"] },
        opacity: { value: { min: 0.12, max: 0.5 } },
        size: { value: { min: 0.6, max: 2.1 } },
        move: { enable: true, speed: 0.18, direction: "none", outModes: { default: "out" } },
        links: { enable: false },
      },
      interactivity: {
        detectsOn: "window",
        events: { onHover: { enable: true, mode: "repulse" }, resize: true },
        modes: { repulse: { distance: 90, duration: 0.4 } },
      },
      detectRetina: true,
    });
  }

  function showToast(message, duration = 2200) {
    clearTimeout(state.toastTimer);
    elements.toast.textContent = message;
    elements.toast.classList.add("is-visible");
    state.toastTimer = window.setTimeout(() => elements.toast.classList.remove("is-visible"), duration);
  }

  function saveLastResult() {
    localStorage.setItem(
      "nhom5lop8a1lqd-last-result",
      JSON.stringify({
        planets: state.completedPlanets,
        score: state.score,
        correct: state.correct,
        wrong: state.wrong,
        lives: state.lives,
        completedAt: new Date().toISOString(),
      })
    );
  }

  document.addEventListener("DOMContentLoaded", init);
})();
