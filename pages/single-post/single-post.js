/////////// Show post logic //////////

let post = {
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
};

renderPost(post);
renderComments(post);

// Render functions

function renderPost(post) {
  const { _id, author, text, createdAt } = post;

  const html = `
      <div class="post-id"> #${_id}</div>
      <div class="post-header">
          <div class="author"> ${author} </div>
          <div class="post-time">${createdAt}</div>
      </div>
      <div class="text">
          ${text}
      </div>
      `;

  const postDiv = document.querySelector(".post");

  postDiv.innerHTML = html;
}

function renderComments(post) {
  const comments = post.comments;
  const commentsContainer = document.querySelector(".comments");
  let div;

  comments.forEach((comment) => {
    div = createCommentDiv(comment);
    commentsContainer.appendChild(div);
  });
}

function createCommentDiv(comment) {
  const { author, text, createdAt } = comment;
  const div = document.createElement("div");
  div.className = "comment";

  div.innerHTML = `
    <div class="comment-header">
        <div class="comment-author"> ${author} </div>
        <div class="post-time">${createdAt}</div>
    </div>
    <div class="comment-text">
       ${text}
    </div>
    `;

  return div;
}

///////// Open comment section ////////////

const btnOpenCommentSection = document.querySelector("#comment-section-btn");
btnOpenCommentSection.addEventListener("click", () => {
  const commentSection = document.querySelector(".footer");
  commentSection.classList.remove("hidden");
});

const btnDontComment = document.querySelector("#dont-comment-btn");
btnDontComment.addEventListener("click", () => {
  const commentSection = document.querySelector(".footer");
  commentSection.classList.add("hidden");
});
