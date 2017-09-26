// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

mainView.router.load({
    reload:"true"
});

//  Swiper
var mySwiper = myApp.swiper('.swiper-container',{
    pagination:'.swiper-pagination'
});

myApp.onPageInit('wyy',function () {
    var mySwiper = myApp.swiper('.swiper-container',{
        pagination:'.swiper-pagination'
    });
    $$(".buttons-row .button").on("click",function () {
        $$(".buttons-row .button").removeClass("active");
        $$(this).addClass("active");
    });
    $$(".center a").on("click",function () {
        $$(".center a span").removeClass("active");
        $$(this).children("span").addClass("active");
    });

    $$('.open-popup').on('click',function () {
        var pop = $$('.popup').css('display');
        if( pop == 'none'){
            $$('.searchbar-input .searchbox').on('keyup',function () {
                var str = $$('.searchbar-input .searchbox').val();
                if(str != ''){
                    $$('.searchResult').css("display",'block');
                }else{
                    $$('.searchResult').css("display",'none');
                }
            });
            $$('.searchbar-clear').on('click',function () {
                $$('.searchResult').css("display",'none');
            })
        }
    });
});
myApp.onPageInit('myMusic',function () {
    $$('.Toggle').on('click',function () {
        var List = $$('.MusicLIST').css('display');
        if(List == 'block'){
            $$('.MusicLIST').hide();
            $$('.rotate img').css('transform','rotate(-90deg)')
        }else{
            $$('.MusicLIST').show();
            $$('.rotate img').css('transform','rotate(0deg)')
        }
    });
    /*$$('.grouppoint').on('click',function () {

    })*/
});
myApp.onPageInit('recommend',function () {
    var mySwiper = myApp.swiper('.swiper-container',{
        pagination:'.swiper-pagination'
    });
});

myApp.onPageInit('myMusic',function () {
   $$(".subnavbar").css("display","none");
});
myApp.onPageInit('friends',function () {
    $$(".subnavbar").css("display","none");
});
mainView.router.load({
    url:'wyy.html',
    animatePages: false
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}

$$(".buttons-row .button").on("click",function () {
    $$(".buttons-row .button").removeClass("active");
    $$(this).addClass("active");
});

$$(".center a").on("click",function () {
    $$(".center a span").removeClass("active");
    $$(this).children("span").addClass("active");
});
//  点击删除历史搜索列表
$$('.delete').on('click',function () {
   $$(this).parent().parent().remove();
});
//  点击删除历史播放列表
$$('.del').on('click',function () {
    $$(this).parent().remove();
});

$$('.collect').on('click',function () {
    myApp.popover('.popover-collect', this);
});





