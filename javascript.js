function goTo(screenId) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');

  const buttons = document.querySelectorAll('.navbar button');
  buttons.forEach(btn => btn.classList.remove('active'));

  const activeBtn = document.querySelector(`.navbar button[onclick="goTo('${screenId}')"]`);
  if (activeBtn) activeBtn.classList.add('active');
}

function toggleLesson(id, card) {
  const content = document.getElementById(id);

  if (content.classList.contains("active")) {
    // closing → measure height, then force 0
    content.style.maxHeight = content.scrollHeight + "px"; 
    setTimeout(() => {
      content.style.maxHeight = "0";
    }, 1);

    content.classList.remove("active");
    card.classList.remove("open");
  } else {
    // opening → set to real height
    content.style.maxHeight = content.scrollHeight + "px";

    content.classList.add("active");
    card.classList.add("open");
  }
}