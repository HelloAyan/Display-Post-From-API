

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
        <h3>User - </h3>
        <h4>Post Title - </h4>
        <p>Post Description - </p>
        `
        postSection.appendChild(postDiv);
    }
}