
let posts = [];

function fetchPosts() {
  fetch("http://localhost:3000/antisnowcial")
    .then((response) => response.json())
    .then((data) => {
      let posts = data; 
    })
    .catch((error) => console.error("Unable to fetch data:", error));
};

fetchPosts();
console.log(posts);

function addPost(post) {
  const template = document.getElementById("post-card-template").content.cloneNode(true);
  template.querySelector(".post-card-name").innerText = post.name;
  template.querySelector(".post-card-username").innerText = `Posted by: ${post.username}`;
  template.querySelector(".post-card-image").src = post.image;
  template.querySelector(".post-card-location").innerText = `Located: ${post.location[0]}, ${post.location[1]}`;
  template.querySelector(".post-card-category").innerText = `${post.category[1]}, ${post.category[0]}`;
  template.querySelector(".post-card-price").innerText = `Price: $${post.price}`;
  template.querySelector(".post-card-description").innerText = `Description: ${post.description}`;
  document.querySelector("#post-list").appendChild(template);
}

if ("content" in document.createElement("template")) {
  for (let loopPost of posts) {
    console.log(loopPost);
    addPost(loopPost);
  }
}

function filterDisplayPosts(selectedCategory) {
  const filteredPosts = selectedCategory
    ? posts.filter((post) =>
        post.category.includes(selectedCategory.toLowerCase())
      )
    : posts;

  const postList = document.querySelector("#post-list");
  postList.innerHTML = "";

  filteredPosts.forEach(addPost);
}

function searchDisplayPosts(searchWord) {
  try {
    const searchedPosts = searchWord
      ? posts.filter(
          (post) =>
            post.name.toLowerCase().includes(searchWord) || //or
            post.description.toLowerCase().includes(searchWord) ||
            post.username.toLowerCase().includes(searchWord) ||
            post.category.some((category) =>
              category.toLowerCase().includes(searchWord)
            )
        )
      : posts;

    const postList = document.querySelector("#post-list");
    postList.innerHTML = "";

    if (searchedPosts.length === 0) {
      const noResultsMessage = document.createElement("p");
      noResultsMessage.textContent = "No results found";
      postList.appendChild(noResultsMessage);
    } else {
      searchedPosts.forEach(addPost);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

document.getElementById("searchButton")
.addEventListener("click", function (event) { 
    event.preventDefault();
    const searchInput = document.getElementById("searchInput");
    const searchWords = searchInput.value.trim().toLowerCase();
    searchDisplayPosts(searchWords);
  });
