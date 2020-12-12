/////////////// Show posts logic //////////////////

let posts = [
  {
    _id: 1,
    author: "Pera",
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
        dolores, dicta adipisci molestias harum corrupti assumenda a. Quis
        unde fuga consequatur laborum ex eveniet voluptates necessitatibus
        aliquid, exercitationem dignissimos veritatis!`,
    createdAt: new Date(),
    commentsNumber: 2,
    comments: [
      {
        author: "Zika",
        text: "Prvi komentar",
        createdAt: new Date(),
      },
      {
        author: "Laza",
        text: "Komentar broj dva",
        createdAt: new Date(),
      },
    ],
  },
  {
    _id: 2,
    author: "Mare",
    text: `Ovo je mnogo dobar post`,
    createdAt: new Date(),
    commentsNumber: 1,
    comments: [
      {
        author: "Pera",
        text: "Jeste!",
        createdAt: new Date(),
      },
    ],
  },
];

renderPosts(posts);

//
//
//
//
//
//
//
// Render functions

function renderPosts(posts) {
  const postsContainer = document.querySelector(".posts");
  let div;

  posts.forEach((post) => {
    div = createPostDiv(post);
    postsContainer.appendChild(div);
  });
}

function createPostDiv(post) {
  const { _id, author, text, createdAt, commentsNumber } = post;

  const div = document.createElement("div");
  div.className = "post";
  div.setAttribute("post-id", _id);

  div.innerHTML = `
    <div class="post-header">
      <div class="author"> ${author} </div>
      <div class="post-time">${createdAt}</div>
    </div>
    <div class="text">
      ${text}
    </div>
    <div class="post-footer">
      <p>${commentsNumber} komentara</p>
    </div>
  `;

  return div;
}

// Show input field

const boxShowInput = document.querySelector(".input-btn-box");
const boxInput = document.querySelector(".input-block");

const btnShowInput = document.getElementById("show-input-btn");

btnShowInput.addEventListener("click", () => {
  boxShowInput.style.display = "none";
  boxInput.style.display = "block";
});
