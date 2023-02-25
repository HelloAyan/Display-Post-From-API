

function displayComments() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayCommentsDetails(data))
}

function displayCommentsDetails(posts) {
    const postSection = document.getElementById('postContainer');
    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
        <div class='postBodyContainer'>
            <div><span class='bold-text'> User ID: </span> ${post.userId}</div>
            <div> <span class='bold-text '>Post Title - </span> ${post.title} </div>
            <div> <span class= 'bold-text '> Description - </span> ${post.body} </div>
        </div>
        `
        postSection.appendChild(postDiv);
    }
}

function clearData() {
    const postSection = document.getElementById('postContainer');
    postSection.innerHTML = '';
}