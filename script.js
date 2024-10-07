
let posts = []; 
let loading = false; 


hent();

function hent() { 
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Error with the status: " + response.status);
        }
        return response.json();
    })
    .then((Data) => {
        posts = Data; 
        lasting();
    })
}

function lasting() {
    let content = document.getElementById("content");
    let i = 1;
    let limit = 9;

    for (post of posts) {
        if (i <= limit) { 
            const article = document.createElement("article");
            const title = document.createElement("h1");
            title.textContent = post.title;
            const body = document.createElement("p");
            body.textContent = post.body;
            article.appendChild(title);
            article.appendChild(body);
            article.setAttribute("class", "utsende");
            content.appendChild(article);
            posts.shift(); 
            i++;
        }
    }
    loading = false; 
}


window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 75 && !loading) {
        loading = true; 

        lasting();
    }
};