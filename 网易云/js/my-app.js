// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true,
    modalCloseByOutside: true
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
    $$('.navdisplay').on('click',function () {
        var Display = $$('.popup-local').css('display');
        if(Display == 'block'){
            $$(".subnavbar").css("display","none");
        }else {
            $$(".subnavbar").css("display","block");
        }
    });
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
    myApp.popover('.popover-collect', '.ListMusic li:nth-child(5)');
});

$$('.AddList').on('click',function () {
    var modal_over ='<div class="Modal-Up"></div>';
    $$('body').append(modal_over);
    /*$$('.Modal-Up').css('display','block');*/
   var modal =  myApp.modal({
       title:'新建歌单',
       text:'<input class="Text" type="text" placeholder="请输入歌单标题">'+
       '0/40'+'<span><input class="Check" type="checkbox"><label>设置为隐私菜单</label></span>'+
       '<div class="ButtonGroup"><span class="Submit Btn">提交</span><span class="Close Btn">取消</span></div>'
       /*buttons:[{
           text:'提交'
       },{
           text:'取消'
       }]*/
   });
    var DisPlay = $$('.modal').css('block');
    if(DisPlay == 'block'){
        alert(1)
    }else {
        $$('.Text').focus();
    }
    $$('.Modal-Up').on('click',function () {
        $$('.modal').remove();
        $$(this).remove();
    });
    $$('.Submit').on('click',function () {
        var str = $$('.Text').val();
        var cont = 0;
        var Url = 'images/gorup1.png';
        var content = '<div class="Music_List">' +
            '<img src="'+Url+'" alt="music list 1">' +
            '<span class="groupname">' +
            '<span>'+str+'</span>' +
            '<span>'+cont+'首</span>' +
            '</span>' +
            '<div class="clear"></div></div>';
        $$('.popover-collect .content-block').append(content);
    });
    $$('.Btn').on('click',function () {
        $$('.modal').remove();
        $$('.Modal-Up').remove();
    });
}).on('touchstart',function () {
    $$(this).css('background','#e7e9e9')
}).on('touchend',function () {
    $$(this).css('background','#fff')
});

/* 打开搜索本地音乐页面 */
$$('.searchpage').on('click',function () {
    $$('.LocalSearch').css('display','block');
    $$('.left,.right,.localmusic').css('display','none');
});

$$('.LocalSearch span').on('click',function () {
    $$('.LocalSearch').css('display','none');
    $$('.left,.right,.localmusic,.subnavbar').css('display','block');
});

$$('.searchpage,.popup-local .close-popup').on('click',function () {
    $$(".subnavbar").css("display","none");
});

$$('.PlayList .grouppoint').on('click',function () {
    $$('.Closedetail').show();
   $$('.detail').animate({bottom:'0'},200);
});

$$('.Closedetail').on('click',function () {
    $$('.detail').animate({bottom:'-400'},500);
    $$('.Closedetail').hide();
});

/* 打开历史播放记录 */
$$('.MenuList').on('click',function () {
    $$('.historydisplay').show();
    $$('.History').animate({bottom:'0'},50);
});
$$('.historydisplay').on('click',function () {
    $$('.History').animate({bottom:'-400'},50);
    /*$$('.History').css('bottom','-400px');*/
    $$('.historydisplay').hide();
});
