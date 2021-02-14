let feedbacksJSON;

(async function getFeedBackJson() {
    let response = await fetch('https://maximpravenkiy.github.io/reviews-and-news.github.io/test_task_resources/feedback_data.json');
    feedbacksJSON = await response.json();

    let script = document.createElement('script');
    script.src = 'feedback/feedbackHandler.js';
    script.defer = true;
    document.head.append(script);
})();
