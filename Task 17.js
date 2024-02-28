let discussionThreads = [];

function loadDiscussionThreads() {
    const discussionThreadsSection = document.getElementById("discussionThreads");
    discussionThreadsSection.innerHTML = "";

    discussionThreads.forEach(thread => {
        const threadElement = document.createElement("div");
        threadElement.innerHTML = `<h3>${thread.title}</h3><p>${thread.content}</p>`;
        discussionThreadsSection.appendChild(threadElement);
    });
}

function submitPost() {
    const postContent = document.getElementById("postContent").value;

    if (postContent.trim() !== "") {
        const newPost = { title: `Thread ${discussionThreads.length + 1}`, content: postContent };
        discussionThreads.push(newPost);

        document.getElementById("postContent").value = "";

        loadDiscussionThreads();
    }
}

function toggleFormVisibility() {
    const postForm = document.getElementById("postForm");
    postForm.style.display = postForm.style.display === "none" ? "block" : "none";
}

document.getElementById("newThreadBtn").addEventListener("click", toggleFormVisibility);

// Initial load of discussion threads
loadDiscussionThreads();
