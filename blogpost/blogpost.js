let blogpostsJSON;

(async function getFeedBackJson() {
    let response = await fetch('https://maximpravenkiy.github.io/reviews-and-news.github.io/test_task_resources/blog_posts.json');
    blogpostsJSON = await response.json();
    blogpostsJSON.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

    let script = document.createElement('script');
    script.src = 'blogpost/blogpostHandler.js';
    script.defer = true;
    document.head.append(script);
})();
