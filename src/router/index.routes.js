import { pages } from "../controllers/index";

const content = document.getElementById("root");
const router = (route) => {
  content.innerHTML = "";

  switch (route) {
    case "":
    case "/":
    case "#/": {
      return content.appendChild(pages.home());
    }
    case "#/posts": {
      return content.appendChild(pages.posts());
    }
    default: {
      return content.appendChild(pages.notFound());
    }
  }
};

export { router };
