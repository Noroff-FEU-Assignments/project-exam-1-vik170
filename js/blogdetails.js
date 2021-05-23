const blogContainer = querySelector(".blog-details")
const getQueryString = document.location.search;
const params = new URLSearchParams(getQueryString);
const id = params.get("id");
const url = "https://burgerblog.ebenech.no/wp-json/wp/v2/posts?id=" + id;

console.log(url);

async function getBlogPost() {
    try {
        const response = await fetch(url);

        const post = await response.json();

        

        blogContainer.innerHTML = "";


        blogContainer.innerHTML += `<h1>${post[0].title.rendered}</h1>`;
    const blogTitle = post[0].title.rendered;
        titleUpdater("Burger Blog | " + blogTitle);
      
    } catch (error) {
        baseContainer.innerHTML = errorMsg("API error")
    }
}


getBlogPost()
