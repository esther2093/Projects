  
  let output = document.querySelector("#newPost");
  
  function addPost(post) {
    while (output.firstChild) {
      output.removeChild(output.firstChild);
    }
    const template = document.getElementById("user-post-card-template").content.cloneNode(true);
    template.querySelector(".user-post-card-username").innerText = `Posted by: ${post.username}`;
    template.querySelector(".user-post-card-name").innerText = post.name;
    template.querySelector(".user-post-card-image").src = post.image;
    template.querySelector(".user-post-card-location").innerText = `Located: ${post.location}`;
    template.querySelector(".user-post-card-category").innerText = `${post.category}`;
    template.querySelector(".user-post-card-price").innerText = `Price: $${post.price}`;
    template.querySelector(".user-post-card-description").innerText = `Description: ${post.description}`;
    document.querySelector("#user-post-list").appendChild(template)
  };

  function filterDisplayPosts(username) {
    const filteredPosts = posts.filter(post => post.username === username);

    const postList = document.querySelector("#user-post-list");
    postList.innerHTML = "";

    filteredPosts.forEach(addPost);
}

function addNewPost(ev) {
  ev.preventDefault();
  const postUsername = document.getElementById("postUsername").value;
  const postName = document.getElementById("postName").value;
  const postImage = document.getElementById("postPic").value;
  const postLocation = document.getElementById("postLocation").value;
  const postCategory = document.getElementById("postCategory").value;
  const postPrice = document.getElementById("postPrice").value;
  const postDescription = document.getElementById("postDescription").value;

  console.log(postUsername)
  console.log (postName)
  console.log (postImage)
  console.log (postLocation)
  console.log (postCategory)
  console.log (postPrice)
  console.log (postDescription)
  const newPostObject = {
    id: posts.length + 1, 
  username: postUsername, 
  location: postLocation,
  name: postName,
  image: postImage,
  category: postCategory,
  price: postPrice,
  description: postDescription
  }
  posts.push(newPostObject);
  document.getElementById("postForm").reset()
  filterDisplayPosts("nowboarder1");
};

filterDisplayPosts("nowboarder1");
