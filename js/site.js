function Test () {
    // fetch('/PythonWithGitpage/py/site.py')
    fetch('js/site.py')
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function updateNavbarHeight() {
    const navbar = document.getElementById('mainNavbar');
    const navbarHeight = navbar.clientHeight;
    document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
}

$(document).ready(function () {
    // 設定 Navbar 高度變數 ==================================
    updateNavbarHeight();
    // 視窗解析度變更時，重新設定 Navbar 高度變數
    window.addEventListener('resize', updateNavbarHeight);
    // Fullpage.js 初始化 ===================================
    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        controlArrows: true,
        slidesNavigation: true,
        navigation: false,
        navigationPosition: "right",
        afterRender: function () {
            //// 自動向右滾動
            //setInterval(function () {
            //    fullpage_api.moveSlideRight();
            //}, 5000);
        },
        onLeave: function () {
            jQuery('.section [data-aos]').removeClass("aos-animate");
        },
        onSlideLeave: function () {
            jQuery('.slide [data-aos]').removeClass("aos-animate");
        },
        afterSlideLoad: function () {
            jQuery('.slide.active [data-aos]').addClass("aos-animate");
        },
        afterLoad: function () {
            jQuery('.section.active [data-aos]').addClass("aos-animate");
            //jQuery('.fp-table.active .aos-init').addClass('aos-animate');
        }
    });

    // 建立網頁使用語言 Cookie ===============================
    // 判斷是否為第一次建立網頁主題模式
    if ($.cookie('webLanguage') === undefined) {
        // 定義一個變數來存放 LightTheme, DarkTheme, AutoTheme
        let webLanguage = "TW";
        // 存入 Cookie 效期 365 天
        $.cookie('webLanguage', webLanguage, { expires: 365 });
    }
    // ======================================================
});