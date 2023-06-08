const postsListContainer = document.querySelector(".posts__list-container");
// функция для рендера постов в список
function renderPost(item) {
  const post = document.createElement("button"); // создаем элемент
  post.className = "post"; // определяем класс элементу
  post.textContent = item.txt; // заполняем текст полученый из объекта
  post.id = item.id; // даем элементу идентификатор

  // ставим наш пост в список постов
  postsListContainer.appendChild(post);
}
// массив постов
let postsData = [
  { id: 1, txt: "elem 1" },
  { id: 2, txt: "elem 2" },
  { id: 3, txt: "elem 3" },
  { id: 4, txt: "elem 4" },
  { id: 5, txt: "elem 5" },
  { id: 6, txt: "elem 6" },
  { id: 7, txt: "elem 7" },
  { id: 8, txt: "elem 8" },
  { id: 9, txt: "elem 9" },
  { id: 10, txt: "elem 10" },
  { id: 11, txt: "elem 11" },
  { id: 12, txt: "elem 12" },
  { id: 13, txt: "elem 13" },
  { id: 14, txt: "elem 14" },
  { id: 15, txt: "elem 15" },
  { id: 16, txt: "elem 16" },
  { id: 17, txt: "elem 17" },
  { id: 18, txt: "elem 18" },
  { id: 19, txt: "elem 19" },
  { id: 20, txt: "elem 20" },
];
// рендерим все посты
postsData.forEach((item) => {
  renderPost(item);
});

let i = 1;

const posts = document.querySelectorAll(".post"); // массив элементов "post" из DOM
// Устанавливаем фокус по умолчанию на первый элемент
posts[0].focus({ preventScroll: false, focusVisible: true });
posts[0].classList.add("post-active");

// Слушатель события на клавиатуру
document.addEventListener("keydown", (event) => {
  // Кнопка вверх
  if (event.code === "ArrowUp") {
    posts.forEach((item, index) => {
      // Проверяем есть ли у элемента класс "post-active"
      if (item.classList.contains("post-active")) {
        item.classList.remove("post-active"); // удаляем у элемента активный класс
        if (index <= 1) {
          // проверяем если меньше 1 то первый элемент делаем активным
          posts[0].classList.add("post-active");
          posts[0].focus({ preventScroll: false, focusVisible: true });
        } else {
          // иначе предыдущий элемент делаем активным
          posts[index - 1].classList.add("post-active");
          posts[index - 1].focus({ preventScroll: false, focusVisible: true });
        }
      }
    });
    // Кнопка вниз
  } else if (event.code === "ArrowDown") {
    posts.forEach((item) => {
      // Проверяем есть ли у элемента класс "post-active"
      if (item.classList.contains("post-active")) {
        i = item.id; // ставим значение активново элемента в переменную
        if (i >= postsData.length) {
          // проверяем чтбы не превышал количество постов
          //  если превысит то мы переопределяем на последний элемент
          i = postsData.length;
        } else {
          // иначе следующий элемент делаем активным
          i++;
        }
      }
      // Проверяем индекс который мы определили выше с идентификатором элемента чтобы понять какому элементу ставить фокус
      if (item.id == `${i}`) {
        // ставим фокус
        item.className = item.className + " post-active";
        item.focus({ preventScroll: false, focusVisible: true });
      } else {
        item.classList.remove("post-active"); // у других убираем активный класс
      }
    });
  }
});
