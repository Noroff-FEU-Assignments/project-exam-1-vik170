/*

API URL: https://burgerblog.ebenech.no/wp-json/wp/v2/
API docs: https://developer.wordpress.org/rest-api/

*/

const wpPost = "https://burgerblog.ebenech.no/wp-json/wp/v2/posts?_embed";

const postBlogContainer = querySelector(".blog");

async function getBlogPost() {
  try {
    const response = await fetch(wpPost);

    const json = await response.json();

    const posts = json;

    postBlogContainer.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {
     
      
      
    postBlogContainer.innerHTML += `
    <a href="blogdetails.html?id=${posts[i].id}" class="blog-card">
    <img src="${posts[i]._embedded['wp:featuredmedia'][0].source_url}"/>
    </a>`;
    //article
    console.log(posts[i])
  }
   
    } catch (error) {
   }
  }
getBlogPost();
