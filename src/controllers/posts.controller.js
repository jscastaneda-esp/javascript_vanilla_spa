import views from "../views/posts.html";

const getPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts");
};

export default () => {
  const divElement = document.createElement("div");
  divElement.classList.add("container");
  divElement.innerHTML = views;

  const totalElement = divElement.querySelector("#total");
  const postsElement = divElement.querySelector("#posts");

  getPosts()
    .then((response) => {
      return response.json();
    })
    .then((posts) => {
      totalElement.innerHTML = posts.length;
      posts.forEach(post => {
        postsElement.innerHTML += `
          <li class="list-group-item border-primary bg-dark text-white">
            <h5>${post.title}</h5>
            <p>${post.body}</p>
          </li>
        `
      });
    });

  return divElement;
};
