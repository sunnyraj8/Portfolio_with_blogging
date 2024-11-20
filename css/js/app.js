document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts-container');
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    let editIndex = null;

    // Display Posts
    function displayPosts() {
        postsContainer.innerHTML = '';
        posts.forEach((post, index) => {
            const postDiv = document.createElement('div');
            postDiv.className = 'post';
            postDiv.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <button onclick="editPost(${index})">Edit</button>
                <button onclick="deletePost(${index})">Delete</button>
            `;
            postsContainer.appendChild(postDiv);
        });
    }

    // Save New Post
    const form = document.getElementById('edit-model');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;
            posts.push({ title, content });
            localStorage.setItem('posts', JSON.stringify(posts));
            form.reset();

            // Redirect to homepage after saving the post
            alert("Post submitted successfully!");

            window.location.href = "index.html";
        });
    }

    // Edit Post
    const editModal = document.getElementById('edit-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const editForm = document.getElementById('edit-form');

    window.editPost = (index) => {
        editIndex = index;
        document.getElementById('edit-title').value = posts[index].title;
        document.getElementById('edit-content').value = posts[index].content;
        editModal.style.display = 'block';
        modalOverlay.style.display = 'block';
    };
    if (editForm) {
        editForm.addEventListener('submit', (e) => {
            e.preventDefault();
            posts[editIndex].title = document.getElementById('edit-title').value;
            posts[editIndex].content = document.getElementById('edit-content').value;
            localStorage.setItem('posts', JSON.stringify(posts));
            closeEditModal();
            displayPosts();
        });
    } else {
        console.error('Element with id "editForm" not found!');
    }

    function closeEditModal() {
        editModal.style.display = 'none';
        modalOverlay.style.display = 'none';
    }

    modalOverlay.addEventListener('click', closeEditModal);
 
    // Delete Post
    window.deletePost = (index) => {
        posts.splice(index, 1);
        localStorage.setItem('posts', JSON.stringify(posts));
        displayPosts();
    };

    displayPosts();
});