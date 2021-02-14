const readMore = document.querySelector(".read-more"),
      blockWithPosts = document.querySelector(".row:nth-of-type(3)"),
      blockReadMore = document.querySelector(".row:last-of-type");
let blogpostsCounter = 0;

// Добавлю ещё один пост для наглядности корректного отображения постов для случая, когда их число не кратно 3
blogpostsJSON.push({
        "title": "Instagram Reveals Explore Tab AI", 
        "url": "https://blog.combin.com/instagram-explore-ai-5c947d990dde", 
        "date": "2019-11-29"
    },
    // Можно добавить ещё один
    // {
    //         "title": "Instagram Reveals Explore Tab AI", 
    //         "url": "https://blog.combin.com/instagram-explore-ai-5c947d990dde", 
    //         "date": "2019-11-29"
    // },
)

readMore.addEventListener("click", showOtherPosts);

function showOtherPosts() {
    let i = blogpostsCounter; 
        scroll = blogpostsCounter + 4; // Помечаем каждый 4ый блок, к которому будем пролистывать страницу
    blogpostsCounter += 3; // Добавляем по 3 новых поста за 1 нажатие кнопки

    // Если при последнем нажатии на кнопку постов останется меньше, чем 3, то будем выводить уже не 3 поста, а только оставшееся количество постов и скрывать кнопку Read More
    if (blogpostsCounter >= blogpostsJSON.length) {
        blogpostsCounter = blogpostsJSON.length;
        blockReadMore.style.display = "none";
    }

    while (i < blogpostsCounter) {
        blockWithPosts.insertAdjacentHTML('beforeend', `
            <div class="col-xs-12 col-lg-4">
                <a href="${blogpostsJSON[i].url}" target="_blank">
                    <picture>
                        <source srcset="test_task_resources/static/image/desktop/img${(i % 3) + 1}.png 1x, test_task_resources/static/image/desktop/img${(i % 3) + 1}@2x.png 2x, test_task_resources/static/image/desktop/img${(i % 3) + 1}@3x.png 3x" media="(min-width: 992px)">
                        <source srcset="test_task_resources/static/image/mobile/img${(i % 3) + 1}.png 1x, test_task_resources/static/image/mobile/img${(i % 3) + 1}@2x.png 2x, test_task_resources/static/image/mobile/img${(i % 3) + 1}@3x.png 3x" media="(max-width: 991.99px)">
                        <img src="test_task_resources/static/image/mobile/img1.png"  alt="">
                    </picture>
                    <p>${blogpostsJSON[i].title}</p>
                </a>
            </div`);
        i++;
    }

    // Получаем первый вновь добавленный пост и пролистываем к нему страницу
    document.querySelector(`.col-xs-12.col-lg-4:nth-of-type(${scroll})`).scrollIntoView(true);
}