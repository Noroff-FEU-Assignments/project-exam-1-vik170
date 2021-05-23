const url = "https://burgerblog.ebenech.no/wp-json/wp/v2/posts?per_page=12"
const blogListContainer = querySelector(".blog-list")
const moreButton = querySelector(".button")


async function getBlogs() {

        const response = await fetch(url);

        const json = await response.json();

        const list = json;

       
    blogListContainer.innerHTML = "";
    
        for (let i= 0; i < 9; i++ ) {
         
          blogListContainer.innerHTML += `<h2>${list[i].title.rendered}</h2>`;
        }
    }

    moreButton.onclick = () => {
        const url = "https://burgerblog.ebenech.no/wp-json/wp/v2/posts?per_page=12"
        const blogListContainer = querySelector(".blog-list")


        async function getBlogs() {

        const response = await fetch(url);

        const json = await response.json();

        const list = json;

       
    blogListContainer.innerHTML = "";
    
        
       
        for (let i= 0; i < list.length; i++ ) {
         
            blogListContainer.innerHTML += `<h2>${list[i].title.rendered}</h2>`;
          }
    }getBlogs()
}
 
getBlogs()
