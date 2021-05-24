let postContainer = document.querySelector(".abs_array");

function addPostArray(posts = []) {
    for (let post of posts) {
        const postEl = document.createElement('div');
        postEl.classList.add('first');
        postEl.id = post.id;
        let date = new Date(post.createdAt);
        let hashtags = "";
        post.hashtags.forEach((str) => (hashtags += "#" + String(str) + " "));
        postEl.innerHTML =
            `         
           <img class="abs1" src="${post.photoLink}" alt="whip">
           <div class="username">
           <span><b>${post.author}</b></span>
           <span><b>${post.description}</b></span>
           <span><i>${post.origin}</i></span>
           <span><i>${hashtags}</i></span>
           <input type="image" class="edit" src="./assets/images/pen-removebg-preview.png"  alt="Кнопка «input»">
<!--           <input type="image" class="edit" src="./assets/images/comment-removebg-preview.png"  alt="Кнопка «input»">-->
           <input type="image" class="edit" src="./assets/images/delete-removebg-preview.png"  alt="Кнопка «input»">

           </div>
           <i>${date.toLocaleString()}</i>`;
        postContainer.append(postEl);
    }
}

function redrawFilterPostFeed() {
    while (postContainer.firstChild) {
        postContainer.removeChild(postContainer.firstChild);
    }
}