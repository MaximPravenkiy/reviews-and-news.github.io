const leftBtn = document.querySelector('.left-btn'),
      rightBtn = document.querySelector('.right-btn'),
      feedback = document.querySelector('.feedback'),
      name = document.querySelector('.name');
let feedbackCounter = 0;
      
leftBtn.addEventListener('click', showPreviousFeedback);
rightBtn.addEventListener('click', showNextFeedback);

// Добавляем информацию о первом отзыве
feedback.insertAdjacentText('afterbegin', `${feedbacksJSON[0].text}`);
name.firstElementChild.insertAdjacentText('afterbegin', `${feedbacksJSON[0].name}`);
name.firstElementChild.nextElementSibling.innerHTML = document.documentElement.clientWidth >= 992 ? ", " : "<br>"; 
name.lastElementChild.insertAdjacentText('afterbegin', `${feedbacksJSON[0].instagram_username}`);

function showPreviousFeedback() {
    // Если самый первый отзыв уже показан - ничего не делаем
    if (feedbackCounter === 0) return;
    // Перед показом самого первого отзыва "отключаем" кнопку
    if (feedbackCounter === 1) {
        this.style.opacity = 0.4;
        this.style.cursor = "default";
    }

    feedbackCounter--;
    // Любой показ предыдущего отзыва "активирует" кнопку показа следующего отзыва
    rightBtn.style.opacity = 1;
    rightBtn.style.cursor = "pointer";

    // Добавляем информацию о предыдущем отзыве
    feedback.innerText = feedbacksJSON[feedbackCounter].text;
    name.firstElementChild.innerText = feedbacksJSON[feedbackCounter].name;
    name.lastElementChild.innerText = feedbacksJSON[feedbackCounter].instagram_username;
    // Поднимаем страницу в самое начало отзыва
    window.scrollTo(0, 0);
}

function showNextFeedback() {
    // Если последниий отзыв уже показан - ничего не делаем
    if (feedbackCounter === feedbacksJSON.length - 1) return;
    // Перед показом последнего отзыва "отключаем" кнопку
    if (feedbackCounter === feedbacksJSON.length - 2) {
        this.style.opacity = 0.4;
        this.style.cursor = "default";
    }

    feedbackCounter++;
    // Любой показ следующего отзыва "активирует" кнопку показа предыдущего отзыва
    leftBtn.style.opacity = 1;
    leftBtn.style.cursor = "pointer";

    // Добавляем информацию о следующем отзыве
    feedback.innerText = feedbacksJSON[feedbackCounter].text;
    name.firstElementChild.innerText = feedbacksJSON[feedbackCounter].name;
    name.lastElementChild.innerText = feedbacksJSON[feedbackCounter].instagram_username;
    // Поднимаем страницу в самое начало отзыва
    window.scrollTo(0, 0);
}


window.addEventListener("resize", function(event) {
    if (document.documentElement.clientWidth >= 992) {
        name.querySelector("span:nth-of-type(2)").innerHTML = ",";
    } else {
        name.querySelector("span:nth-of-type(2)").innerHTML = "<br>";
    }
}) 
