// Initialize your app
var myApp = new Framework7({
    pushState: true,
    popupCloseByOutside: true,
    modalCloseByOutside: true
});

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
//  wyy页面初始化
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

    $$('.list-block-search ul li').on('click',function () {
       var SearchList = $$(this).find('.item-title').html();
       $$('.searchbar-init').find('input').val(SearchList);
        $$('.searchResult').css("display",'none');
    });
    /*$$('.page-content').on('scroll',function () {
        alert('');
        console.log($$(this).scrollTop())
    });*/
});
//  myMusic页面初始化执行
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
    $$('.navdisplay').on('click',function () {
        var Display = $$('.popup-local').css('display');
        if(Display == 'block'){
            $$(".subnavbar").css("display","none");
        }else {
            $$(".subnavbar").css("display","none");
            $$(".popup-local .subnavbar").css("display","block");
        }
    });
});
myApp.onPageInit('myMusic',function () {
    $$(".subnavbar").css("display","none");
});
//  myMusicNav页面初始化执行
myApp.onPageInit('myMusicNav',function () {
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
    $$('.navdisplay').on('click',function () {
        var Display = $$('.popup-local').css('display');
        if(Display == 'block'){
            $$(".subnavbar").css("display","none");
        }else {
            $$(".subnavbar").css("display","none");
            $$(".popup-local .subnavbar").css("display","block");
        }
    });
});
//  recommend页面初始化执行
myApp.onPageInit('recommend',function () {
    var mySwiper = myApp.swiper('.swiper-container',{
        pagination:'.swiper-pagination'
    });
});
//  friends 页面初始化执行
myApp.onPageInit('friends',function () {
    $$(".subnavbar").css("display","none");
    //  下拉刷新页面
        /* 随意编造的内容 */
    var Url = ['res1','res2','res3'];
        /* 下拉刷新页面 */
    var ptrContent = $$('.pull-to-refresh-content');
        /* 添加'refresh'监听器 */
    ptrContent.on('refresh', function (e) {
        /* 模拟2s的加载过程 */
        setTimeout(function () {
            /* 随机图片 */
            var picURL = 'images/' + Url[Math.floor(Math.random() * Url.length)];
            /* 列表元素的HTML字符串 */
            var itemHTML = '<img src="' + picURL + '.png" width="44"/>';
            /* 前插新列表元素 */
            ptrContent.find('.Fimg').prepend(itemHTML);
            /* 加载完毕需要重置 */
            myApp.pullToRefreshDone();
        }, 2000);
    });
//    回到顶部
    $$('.page-content').on('scroll',function () {
        var H = $$(this).scrollTop();
        if( H > 1000){
            $$('.GoTop').css('bottom','60px').transition(1000);
        }else {
            $$('.GoTop').css('bottom','0').transition(1000);
        }
    });
    $$('.GoTop').on('click',function () {
       $$('.page-content').scrollTop(0,1000);
    });
});
//  SearchLocal页面初始化执行
myApp.onPageInit('SearchLocal',function () {
    /* 打开搜索本地音乐页面 */
    $$('.searchpage').on('click',function () {
        $$('.LocalSearch').css('display','block');
        $$('.left,.right,.localmusic').css('display','none');
    });

    $$('.LocalSearch span').on('click',function () {
        $$('.LocalSearch').css('display','none');
        $$('.localmusic,.subnavbar').css('display','block');
        $$('.left,.right').css('display','flex');
    });
    $$('.searchpage,.popup-local .close-popup').on('click',function () {
        $$(".subnavbar").css("display","none");
    });
//  给搜索框添加清空输入功能
    /* 内容为空消失 */
    $$('.search-box input').on('focus',function () {
        var str = $$('.search-box input').val();
        if(str == ''){
            $$('.search-box a').css('display','none');
        }else{
            $$('.search-box a').css('display','block');
        }
    });
    /* 不为空出现 */
    $$('.search-box input').on('keyup',function () {
        var str = $$('.search-box input').val();
        if(str == ''){
            $$('.search-box a').css('display','none');
        }else{
            $$('.search-box a').css('display','block');
        }
    });
    /* 点击删除 */
    $$('.search-box a').on('click',function () {
        $$(this).prev().val('').focus();
    });
/* 点击改变二级菜单选中时的样式 */
    $$(".buttons-row .button").on("click",function () {
        $$(".buttons-row .button").removeClass("active");
        $$(this).addClass("active");
    });

    /* 动态加载本地音乐列表 */
    $$.ajax({
        url:'music.json',
        dataType:'json',
        method:'get',
        success:function (data) {
            $$.each(data,function (index) {
                var Music = data[index].Title;
                var Name = data[index].Name;
                var EP = data[index].EP;
                var str = '<li><div class="textspan">' +
                    '<span class="group">'+ Music +'</span>' +
                    '<span class="count">'+ Name +' - '+ EP +'</span>' +
                    '</div>' +
                    '<span class="grouppoint open-popup" data-popup=".popup-detail">' +
                    '<span class="point"></span>' +
                    '<span class="point"></span>' +
                    '<span class="point"></span>' +
                    '</span>' +
                    '<div class="clear"></div></li>';
                $$('.PlayList').append(str);
            });
        }
    });
    /* 详情页面文字 */
    $$(document).on('click','.grouppoint',function () {
        var Name = $$(this).prev().children('.group').html();
        $$('.popup-detail .setlist ul li').eq(0).html("歌曲： "+Name);
    })
});
//  radioStation页面初始化执行
myApp.onPageInit('radioStation',function () {
    /*   无限滚动   */
    var loading = false;  // 加载flag
    var lastIndex = $$('.infinimg li').length;  // 上次加载的序号
    var maxItems = 15;  // 最多可加载的条目
    var itemsPerLoad = 4;  // 每次加载添加多少条目
    // 注册'infinite'事件处理函数
    $$('.infinite-scroll').on('infinite', function () {
        // 如果正在加载，则退出
        if (loading) return;
        // 设置flag
        loading = true;
        // 模拟1s的加载过程
        setTimeout(function () {
            loading = false;  // 重置加载flag
            if (lastIndex >= maxItems) {
                myApp.detachInfiniteScroll($$('.infinite-scroll'));   // 加载完毕，则注销无限加载事件，以防不必要的加载
                $$('.infinite-scroll-preloader').remove();   // 删除加载提示符
                return;
            }
            if(maxItems - lastIndex < itemsPerLoad){
                itemsPerLoad = maxItems - lastIndex;
            }
            var html = '';   // 生成新条目的HTML
            for (var i = lastIndex + 1; i <= lastIndex + itemsPerLoad; i++) {
                var STr = 'images/infin'+ i +'.png';
                html += '<li class=""><div class=""><div class=""><img data-src="' + STr + '" class=" lazy lazy-fadeIn" src="' + STr + '"></div></div></li>';
            }
            $$('.list-block ul').append(html);   // 添加新条目
            lastIndex = $$('.infinimg li').length;   // 更新最后加载的序号
        }, 1000);
    });
});
//  shopping页面初始化执行
myApp.onPageInit('shopping',function () {
    $$('.buttons-row .tab-link').on('click',function () {
        var Dis = $$('.shop').css('display');
        if(Dis == 'none'){
            $$('.navbar-fixed .toolbar').css('display','block');
        }else {
            $$('.navbar-fixed .toolbar').css('display','none');
        }
    })
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

/* 播放音乐动画 */
var Deg = 0;
function play() {
    Deg++;
    $$('.Playmusic img').css({transform:'rotate('+ Deg +'deg)'});
}
var Rotate = '';
var target = false;
$$('.PlayMusic').on('click',function () {
    if(target == false){
        $$('.playdirection img').css({transform:'rotate(35deg)',transformOrigin:"0 0"});
        Rotate = setInterval('play()',10);
        target = true;
    }else{
        clearInterval(Rotate);
        $$('.playdirection img').css({transform:'rotate(0deg)',transformOrigin:"0 0"});
        target = false;
    }
});