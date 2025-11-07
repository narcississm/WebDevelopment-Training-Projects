const postsContainer = document.getElementById("posts");

fetch('posts.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(post => {
            const postDiv = document.createElement("div");
            postDiv.classList.add("post");

            const postTitle = document.createElement("h2");
            postTitle.textContent = post.title;

            const postContent = document.createElement("p");
            postContent.textContent = post.content;

            postDiv.appendChild(postTitle);
            postDiv.appendChild(postContent);

            postsContainer.appendChild(postDiv);
        });
    })
    .catch(error => {
        postsContainer.textContent = "Blog yazıları yüklenemedi.";
        console.error("Hata:", error);
    });