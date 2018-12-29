//tip 
(function ($) {
    $.fn.tipsy = function (opts) {
        opts = $.extend({}, $.fn.tipsy.defaults, opts);
        var disint = 0;
        return this.each(function () {
            var tp = $(this);
            tp.hover(function () {
                clearTimeout(disint);
                var tip = $(".tipsy");
                if (tip.length < 1) {
                    $("body").append('<div class="tipsy"><div class="tipsy-inner"/></div>');
                    tip = $(".tipsy");
                    tip.hover(function () {
                        clearTimeout(disint)
                    }, function () {
                        tip.hide();
                    })
                }
                var data = '';
                if (opts.html == null) {
                    if (tp.attr('tipid') != 'undefined') {
                        data = $('#' + tp.attr('tipid')).html()
                    } else {
                        data = tp.attr('title')
                    }
                } else {
                    data = opts.html
                }
                tip.find('.tipsy-inner').html(data);
                tip.get(0).className = 'tipsy';
                var pos = $.extend({}, tp.offset(), {width: this.offsetWidth, height: this.offsetHeight});
                tip.css({top: 0, left: 0, visibility: 'hidden', display: 'block'});
                var actualWidth = tip[0].offsetWidth, actualHeight = tip[0].offsetHeight;
                var p = opts.gravity;
                var winw = $(document).scrollLeft() + $(document).width();
                if (pos.left + pos.width + actualWidth > winw) {
                    p = 'n'
                }

                if ($("#ext8_tip .scroll_begin ul li").length > 4) {
                    var dd = $("#tipsy-inner").children("div");
                    if (dd.attr("class") == "scroll_div") {
                        ScrollImgLeft();
                    }
                    ScrollImgLeft();
                }
                switch (p) {
                    case'n':
                        tip.css({top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}).addClass('tipsy-north');
                        break;
                    case's':
                        tip.css({top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}).addClass('tipsy-south');
                        break;
                    case'e':
                        tip.css({top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}).addClass('tipsy-east');
                        break;
                    case'w':
                        tip.css({top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}).addClass('tipsy-west');
                        break
                }
                if (tip.offset().top < 0) {
                    tip.css({top: 0})
                }
                tip.css({opacity: 0, display: 'block', visibility: 'visible'}).animate({opacity: 1})
            }, function () {
                disint = setTimeout(function () {
                    $(".tipsy").hide();
                }, 400)
            })
        })

    };
    $.fn.tipsy.elementOptions = function (ele, options) {
        return $.metadata ? $.extend({}, options, $(ele).metadata()) : options
    };
    $.fn.tipsy.defaults = {html: null, gravity: 'n'}
})(jQuery);
//倒计时
function down_time(evt, endfunc) {
    var ltime = parseInt($(evt).attr('title'));
    var intv = setInterval(function () {
        if ($(evt).length < 1) {
            clearInterval(intv);
        }
        ltime -= 1;
        remainTime = ltime;
        if (ltime > 0) {
            var remainDay, remainHour, remainMinute, remainSecond, timestr = '';
            remainDay = Math.floor(remainTime / 3600 / 24);
            remainTime = remainTime - (remainDay * 3600 * 24);
            remainHour = Math.floor(remainTime / 3600);
            remainTime = remainTime - (remainHour * 3600);
            remainMinute = Math.floor(remainTime / 60);
            remainTime = remainTime - (remainMinute * 60);
            remainSecond = remainTime;
            if (remainDay > 0) {
                timestr += remainDay + "天";
            }
            if (remainHour > 0) {
                timestr += remainHour + "小时";
            }
            if (remainMinute > 0) {
                timestr += remainMinute + "分";
            }
            timestr += remainSecond + "秒";
            $(evt).text(timestr);
        } else {
            clearInterval(intv);
            if (typeof (endfunc) == 'function') {
                endfunc();
            }
        }
    }, 1000);
}
//滚动
(function ($) {
    $.fn.silder = function (settings) {
        settings = jQuery.extend({
            speed: "normal",
            slideBy: 2,
            step: 1
        }, settings);
        return this.each(function () {
            $.fn.silder.run($(this), settings);
        });
    };
    $('.inKoubei').hover(function () {
        $(this).parent().next('.whatScore').slideDown('fast');
        $(this).parent().next('.whatScore').css('display', 'block');
    }, function () {
        $(this).parent().next('.whatScore').slideUp('fast');
    });
    $.fn.silder.run = function ($this, settings) {
        var ul = $("ul:eq(0)", $this);
        var li = ul.children();
        var $next = $(".next", $this);
        var $back = $(".back", $this);
        var liWidth = $(li[0]).outerWidth(true);
        ul.css("width", liWidth * li.length);
        if (li.length > settings.slideBy) {
            //var liWidth = $(li[0]).outerWidth(true);
            var animating = false;
            var nextmode = true;
            var backmode = false;
            // ul.css("width", liWidth * li.length);
            $next.addClass("nexton");
            var Next = $next.click(function () {
                if (!animating && nextmode) {
                    animating = true;
                    offsetLeft = parseInt(ul.css("left")) - (liWidth * settings.step);
                    if (offsetLeft + ul.width() > 0) {
                        $back.addClass("backon");
                        backmode = true;
                        ul.animate({left: offsetLeft}, settings.speed, function () {
                            if (parseInt(ul.css("left")) + ul.width() <= liWidth * settings.slideBy) {
                                $next.attr('class', 'next');
                                nextmode = false;
                            }
                            animating = false;
                        });
                    }
                }
                return false;
            });
            var Back = $back.click(function () {
                if (!animating && (typeof offsetLeft) != 'undefined' && backmode) {
                    animating = true;
                    offsetRight = parseInt(ul.css("left")) + (liWidth * settings.step);
                    if (offsetLeft + ul.width() <= ul.width()) {
                        $next.addClass('nexton');
                        nextmode = true;
                        ul.animate({left: offsetRight}, settings.speed, function () {
                            if (parseInt(ul.css("left")) == 0) {
                                $back.attr('class', 'back');
                                backmode = false;
                            }
                            animating = false;
                        });
                    }
                } else {
                    $back.attr('class', 'back');
                }
                return false;
            });
        } else {
            var nextmode = false;
            var backmode = false;
            $next.attr('class', 'next');
            $back.attr('class', 'back');
        }
    };
})(jQuery);
//短消息闪烁
function flashsms(evt) {
    var tm = 0;
    var intv = setInterval(function () {
        if (tm >= 6) {
            clearInterval(intv);
        } else {
            $(evt).toggleClass('yellowbg');
        }
        tm++;
    }, 500);
}
//小提示
function min_tip(evt) {
    var tip = $('#min_tip');
    if (tip.length < 1) {
        $('body').append('<div id="min_tip" class="mintips"></div>');
        tip = $('#min_tip');
    }
    $(evt).hover(function (emb) {
        var html = $(this).attr('title');
        if ($(this).attr('view') != 'undefined') {
            html = $($(this).attr('view')).html();
        }
        tip.html(html).css({left: emb.pageX + 10}).show();
        var tipb = tip.get(0);
        var cw = document.documentElement.clientWidth;
        var ol = tipb.offsetLeft + tip.width() + 40;
        $(this).mousemove(function (em) {
            var ml = em.pageX + 10;
            if (ol > cw) {
                ml = ml - (ol - cw);
            }
            tip.css({left: ml, top: em.pageY + 20});
        });
    }, function () {
        tip.hide();
    });
}
//居中显示
function center_box(obj) {
    var ww = document.documentElement.clientWidth;
    var wh = document.documentElement.clientHeight;
    var sh = window.screen.height
    var ph = $(obj).height();
    var pw = $(obj).width();
    $(obj).css({
        /*"top": (wh - ph) / 2 + $(document).scrollTop(),*/
        "top": sh / 2 ,
        "left": (ww - pw) / 2
    });
}
function rimg(evt, ww, hh) {
    var img = $(evt);
    var w = img.width();
    var h = img.height();
    var p = w / h;
    var sp = ww / hh;
    if (p > sp) {
        ww = (ww - w * (hh / h)) / 2;
        $(evt).height(hh).css({'margin-left': ww});
    } else {
        hh = (hh - h * (ww / w)) / 2;
        $(evt).width(ww).css({'margin-top': hh});
        ;
    }
    $(evt).fadeIn();
}
//延迟加载图片
function lazyload(options) {
    var opts = {
        evt: null,
        height: -200,
        src: 'src0'
    };
    opts = $.extend(opts, options || {});
    var page_top = function () {
        return document.documentElement.clientHeight + Math.max(document.documentElement.scrollTop, document.body.scrollTop) - opts.height;
    };
    var ajaxs = $(opts.evt).find(".lazy_ajax");
    var imgs = $(opts.evt).find("img[" + opts.src + "]");
    var lyload = function () {
        imgs.each(function () {
            var img = $(this);
            var src0 = $(this).attr(opts.src);
            if (src0) {
                if (img.offset().top <= page_top()) {
                    img.attr("src", src0).removeAttr(opts.src).show();
                }
            }
        });
        ajaxs.each(function () {
            var frm = $(this);
            if (frm.is(':visible') && frm.hasClass('lazy_ajax')) {
                if (frm.offset().top <= page_top()) {
                    $(function () {
                        frm.trigger('click').removeClass('lazy_ajax');
                    });
                }
            }
        });
    };
    lyload();
    $(window).bind("scroll", function () {
        lyload();
    });
}
/**
 * 对话框
 */
function alert_box(msg, fn) {
    var title = 'E宠商城提示信息。';
    s_load();
    easyloader.load('messager', function () {
        h_load();
        if (typeof (fn) == 'function') {
            $.messager.confirm(title, msg, fn);
        } else {
            $.messager.alert(title, msg);
        }
    });
}

function cart_box(msg){
    var title = 'E宠商城提示信息。';
    s_load();
    easyloader.load('messager', function () {
        h_load();
        $.extend($.messager.defaults,{
            ok : '去购物车',
            cancel : '取消'
        });
        $.messager.confirm(title, msg,function(a){
            if(a){
                window.open('http://www'+cookiedomain+'/cart');
            }
        });
    });
}
/**
 * 显示收起更多
 */
function tgmore(evt, shtxt, hdtxt) {
    var td = $(evt).parent();
    if ($(evt).attr('class') == 'unfold') {
        $(evt).attr('class', 'fold').text(hdtxt);
        td.prev().find("span").show();
    } else {
        $(evt).attr('class', 'unfold').text(shtxt);
        td.prev().find("span").hide();
    }
}
/**
 * 加载loading
 */
function s_load(msg, time) {
    var load = $('.ajax_load');
    load.css({opacity: 1});
    $('body').append(load);
    time = typeof (time) == 'undefined' ? 0 : time;
    if (typeof (msg) == 'undefined' || msg == '') {
        msg = '正在处理...';
        load.removeClass("csa-msg");
    } else {
        load.addClass("csa-msg");
    }
    load.html(msg);
    center_box('.ajax_load');
    load.show();
    if (time > 0) {
        setTimeout(function () {
            h_load(true);
        }, time);
    }
}
function h_load(fly) {
    if (!isset(fly)) {
        fly = false;
    }
    var load = $('.ajax_load');
    if (fly) {
        var mleft = load.offset().left - 400;
        load.animate({left: mleft, opacity: 0}, 'fast');
    } else {
        load.hide();
    }
}
/**
 * 购买数量检查
 */
function buynum_chk(evt, bnum) {
    bnum = bnum < 1 ? 1 : bnum;
    $(evt).val(bnum);
}
//特效化
function parse_checks(evt) {
    var html = isset(evt) ? evt + ' .cs-chks label' : '.cs-chks label';
    $(html).click(function () {
        $(this).prev("input").get(0).click();
    });
}
function parse_data(evt, loaded) {
    parse_checks(evt);
    if ($(evt + ' form').length > 0 && $(evt + ' form').attr('lang') != 'noparse') {
        var opts = typeof (loaded) == 'function' ? {loaded: loaded} : {};
        sform(evt + ' form', opts);
    }
}
function reserve_form() {
    alert_box('确定要兑换吗？', function (b) {
        if (b) {
            sform('#bookform', {
                issubmit: true,
                submit_succeed: function (data) {
                    alert(123);
                }
            });
        }
    });
}
/**
 * form方式提交
 */
function sform(evt, options) {
    var opts = {
        loaded: null,
        issubmit: false,
        formchk: null,
        submit_succeed: null
    };
    if (typeof (options) == 'object') {
        opts = $.extend(opts, options);
    }
    easyloader.load('form', function () {
        var tform = $(evt);
        var lkbtn = tform.find('.btns a.easyui-linkbutton');
        tform.form({
            onSubmit: function () {
                var mode = tform.form("validate");
                if (mode) {
                    if (lkbtn.length > 0) {
                        lkbtn.linkbutton("disable");
                    }
                    if (typeof (opts.formchk) == 'function' && !opts.formchk()) {
                        return false;
                    }
                    s_load();
                }
                return mode;
            },
            success: function (data) {
                if (lkbtn.length > 0) {
                    lkbtn.linkbutton("enable");
                }
                if (typeof (opts.loaded) == 'function') {
                    opts.loaded(data);
                } else {
                    if (data != "") {
                        if (data.indexOf(":") == -1) {
                            s_load(data);
                            setTimeout(function () {
                                var dialog = tform.parents(".cswindow");
                                if (dialog.length > 0) {
                                    dialog.dialog("destroy");
                                }
                                if (typeof (opts.submit_succeed) == 'function') {
                                    opts.submit_succeed(data);
                                }
                                h_load(true);
                            }, 2000);
                        } else {
                            if (data.indexOf('msg:') != -1) {
                                h_load();
                                data = data.substr(4);
                                alert_box(data);
                            } else if (data.indexOf('url:') != -1) {
                                data = data.substr(4);
                                var durl = data.split('|', 2);
                                s_load(durl[0]);
                                setTimeout(function () {
                                    location.href = durl[1].replace(/&amp;/g, '&');
                                }, 2000);
                            }
                        }
                    } else {
                        h_load();
                        alert_box(data);
                    }
                }
            }
        });
        if (opts.issubmit) {
            tform.submit();
        }
    });
}
/**
 * 创建一个DIV窗口
 */
function dialog(title, content, options) {

    s_load();

    easyloader.load('dialog', function () {
        h_load();
        if (typeof (options) == 'undefined') {
            options = {};
        }

        var id = options.id != null ? options.id : 'dialog_' + randstr(6);
        if ($('#' + id).length < 1) {
            $("body").append("<div id=\"" + id + "\" class=\"cswindow\"></div>");
        } else {
            $('#' + id).dialog('open');
        }

        var opts = {
            title: title,
            width: 600,
            cls: 'dialog-box',
            modal: true,
            resizable: false,
            closable: true,
            closed: true,
            onLoad: function () {
                parse_data('#' + id);
                h_load();
                if (typeof (opts.loaded) == 'function') {
                    opts.loaded();
                }
            },
            onClose: function () {
                $('#' + id).dialog('destroy');
            }
        };

        var dataarr = content.split(':', 2);


        switch (dataarr[0]) {
            case 'url':
                options.href = dataarr[1] + '&_hash=' + Math.random();
                break;
            case 'iframe':
                options.content = create_frame(dataarr[1]);
                break;
            case 'text':
                options.content = dataarr[1];
                break;
            case 'id':
                options.content = $(dataarr[1]).html();
                break;
        }
        ;
        opts = $.extend(opts, options);
        $('#' + id).dialog(opts).dialog('open');

        if (dataarr[0] == 'id') {
            if (typeof (opts.loaded) == 'function') {
                opts.loaded();
            }
        }
    });
}
//添加商品到收藏夹
function add_favors(gid) {
    s_load();
    var url = reurl("share/box.html?act=add_favors&inajax=1&gid=" + gid);
    $.get(url, {}, function (data) {
        if ('nl' === String(data)) {
            fm.loadfunc = function (data) {
                $("#divlogin").dialog('close');
                add_favors(gid);
            }
            show_login();
        } else {
            alert_box(data);
        }
    });
}

//预定E宠没有的商品
function nostockbook() {
    var gid = arguments[0] ? parseInt(arguments[0]) : 0;
    var type = arguments[1] ? arguments[1] : 0;
    dialog('预定E宠缺货/没有的商品', 'url:' + reurl('share/reserve/goods.html?do=book&inajax=1&gid=' + gid + '&type=' + type), {width: 600, height: 290});
}
/**
 * 发表咨询评价
 */
function pub_reply() {
    s_load();
    var gid = arguments[0] ? arguments[0] : 0;
    var tp = arguments[1] ? arguments[1] : 'ask';
    var asktype = arguments[2] ? arguments[2] : 0;
    var distinction = distinction ? distinction : 0;
    var title = '';
    switch (tp) {
        case 'reply':
            title = '发表评价';
            break;
        case 'ask':
            title = '发表咨询';
            break;
    }
    easyloader.load('dialog', function () {
        dialog(title, 'url:' + reurl('share/goods.html?do=' + tp + '&gid=' + gid + '&asktype=' + asktype + '&distinction=' + distinction + '&inajax=1'), {height: 350});
        h_load();
    });
}

/**
 * 投诉建议、商品纠错
 */
function pub_suggest() {
    var type = arguments[0] ? arguments[0] : 0;
    var gid = arguments[1] ? arguments[1] : 0;
    var title = '';
    var height = 0;
    switch (type) {
        case 0:
            title = '商品纠错';
            height = 350;
            break;
        case 1:
            title = '投诉建议';
            height = 280;
            break;
        case 3:
            title = '我的反馈';
            height = 350;
            break;
    }
    easyloader.load('dialog', function () {
        dialog(title, 'url:' + reurl('share/goods.html?do=suggest&type=' + type + '&gid=' + gid + '&inajax=1'), {height: height});
    });
}

/**
 * 提交评价
 */
function post_reply() {
    var a = true;
    $("textarea[name^=content]").each(function () {
        if ($(this).val() == '') {
            fm.alert_box('评价内容不能为空！');
            a = false;
            return false;
        }
    });
    if (a) {
        $("#reply_form").submit();
    }
}
function hovershow(evt) {
    evt.hover(function () {
        $(this).show();
    }, function () {
        $(this).hide();
    });
}
//购物车操作
var cartbox = null;
function cart_ctl(tp, options) {

    cart_exists = true;
    s_load();
    var opts = {
        action: 'updatecart',
        inajax: '1',
        pam: '',
        pam1: '',
        buynum: 1,
        buytype: '',
        tp: tp,
        show_cart: true,
        succeed_box: 0,
        hash: Math.random()
    };
    var msg = '';

    switch (tp) {
        case 'add':
            msg = '恭喜，已成功添加到购物车！';
            break;
        case 'del':
            msg = '指定商品已被移除！';
            break;
        case 'delSelect':
            msg = '选中的商品已被移除！';
            break;
        case 'clear':
            msg = '购物车已成功清除！';
            break;
    }
    ;
    opts = $.extend(opts, options);
    if (typeof (opts.loaded) == 'function') {
        var loaded = opts.loaded;
        delete opts['loaded'];
    }
    if (cartbox == null) {
        $("body").append('<div id="cartbox" class="cartview"><div class="tancbox"><div class="loadbox"><em></em></div></div></div>');
        cartbox = $("#cartbox");
        hovershow(cartbox);
    }
    $.get(reurl("share/ajax.html"), opts, function (data) {
        if (msg == '' || opts.succeed_box == 1) {
            h_load();
        } else {
            s_load(msg, 1500);
        }
        if (data.substr(0, 4) == 'msg:') {
            var dataDetail = data.substr(4);
            var dataArr = dataDetail.split(':');
            //提示代码
            var code = dataArr[0];
            //提示信息
            var detailMsg = dataArr[1];
            if (data.substr(4) == 'nologin') {
                show_login();
            }else if (code == 'Error') {
                cart_box(detailMsg);
            }else{
                fm.alert_box(data.substr(4));
            }
        } else {
            if (opts.buytype == 'advance'){//预购商品添加购物车后自动跳转到结算页面
                h_load();
                s_load('正在处理...',1500);
                location.href = reurl("cart/order.html");
            }
            if(data.indexOf('您还没有登录')>-1){
                $('#cartbox').addClass('nologin-w')
            }else{
                $('#cartbox').removeClass('nologin-w')
            }
            cartbox.find(".tancbox").html(data);
            var bnum = $("#cartgd_num").length > 0 ? $("#cartgd_num").attr("selectednum") : '0';
            $("[data-name='cart_num']").text(bnum);
            if (opts.show_cart) {
                $(".ebuycar").addClass('rela');
                posdiv($(".rtcont li.scart"), cartbox, 0, 0);
            }
            if ($("#succeed_box").length > 0) {
                dialog('', 'id:#succeed_box', {width: 612, height: 400, id: 'dialog_sd_box'});
            }
            var dp = $("#drop_prop");
            if (dp.length > 0) {
                $('body').append(dp.html());
                dp.remove();
                $(".box-mask").fadeIn(500);
                dropPropBox.center($(".new-alert"));
            }

            if (typeof (loaded) == 'function') {
                loaded();
            }
            if (typeof (_mjoy) != 'undefined') {
                _mjoy.push(['_andCart', options.gid]);//摸象统计
            }
        }
    });
}
//清空购物车
function clear_cart_box() {
    alert_box('真的要清空购物车吗？', function (b) {
        if (b) {
            cart_ctl('clear');
        }
    });
}
//添加到购物车
function add_gd(evt) {
    cart_ctl('add', {gid: $(evt).attr("gid"), buytype: '', buynum: '1', pam: '', pam1: '', show_cart: false, succeed_box: 1});
    //if(typeof  EpetSensors !='undefined'){
    //    EpetSensors.trackAddCart({
    //        uid:getMallUid(),
    //        platformType:isWapOrEpet(),
    //        cartAddFromway:'商品列表',
    //        goodsIds:$(evt).attr("gid"),
    //    });
    //}
}
function add_gongyi_org(gid) {
    dialog('捐助确认', 'url:' + reurl('share/goods.html?do=gongyi&gid=' + gid + '&f=glist'), {height: 370});
}
function open_send(gid, rgsid) {
    dialog('定期送计划', 'url:' + reurl('share/goods.html?do=dingqi&gid=' + gid + '&rgsid=' + rgsid), {width: 510, height: 455});
}

function sp_buy(buytype, gid, evt) {
    switch (buytype) {
        case 'withbuy':
            var pam1 = $(evt).attr('wtid');
            var wtype = $(evt).attr('wtype');
            var pam = '';
            if (wtype == 'sendgoods') {
                $.get(reurl("share/goods.html"), {'do': 'SendGoods', type: 'checkgoods', inajax: '1', wtid: pam1, gid: gid}, function (data) {
                    if (data.status == '1') {
                        dialog('选择赠品', 'url:' + reurl('share/goods.html?do=SendGoods&wtid=' + pam1 + '&gid=' + gid), {width: 510, height: 250, id: 'sendgoods_box'});
                    } else {
                        if (data.attr.gidsall) {
                            pam = data.attr.gidsall;
                        }
                        cart_ctl('add', {gid: gid, buytype: 'withbuy', buynum: '1', pam: pam, pam1: pam1, show_cart: false, succeed_box: 1});
                    }
                }, 'json');
            } else {
                cart_ctl('add', {gid: gid, buytype: 'withbuy', buynum: '1', pam: '', pam1: pam1, show_cart: false, succeed_box: 1});
            }
            break;
    }
}
function subSendgoods(gid, wtid) {
    var pam = $("#cart_pam").val();
    $("#sendgoods_box").dialog('close');
    cart_ctl('add', {gid: gid, buytype: 'withbuy', buynum: '1', pam: pam, pam1: wtid, show_cart: false, succeed_box: 1});
}
function add_cart_gongyi(gid) {
    var pam1 = $('[name="orgs"]:checked').val();
    if (app == 'cart') {
        cart_ctl('add', {gid: gid, buytype: 'gongyi', buynum: '1', pam: '', pam1: pam1, show_cart: false, loaded: function () {
            setTimeout(function () {
                $('html, body').animate({scrollTop: 0}, "fast", "swing", function () {
                    location.reload();
                });
            }, 1200);
        }});
    } else {
        cart_ctl('add', {gid: gid, buytype: 'gongyi', buynum: '1', pam: '', pam1: pam1, show_cart: false, succeed_box: 1});
    }
}

function tg_slider(zindex) {
    $(".zscontent,#smap").css({'z-index': zindex});
    var evts = $('#wrap,.cloud-zoom,.mousetrap');
    if (zindex == 1) {
        evts.css({'position': 'relative'});
        $('.mousetrap').css({'position': 'absolute'});
    } else {
        evts.css({'position': 'static'});
    }
}
//显示登录框
function show_login(url) {
    url = isset(url) ? url : window.location.href;
    url = encodeURIComponent(url);
    window.location.href = 'https://passport.epet.com/login.html?referer='+url;
    // dialog('必须登录才能继续操作', 'url:' + reurl('share/box.html?act=login&inajax=1&referer=' + url), {id: 'divlogin', width: 790, height: 300});
}

//清仓购物车
function clear_buy(gid, cwid) {
    var opts = {
        gid: gid,
        buynum: 1,
        buytype: 'clear_ware',
        show_cart: false,
        succeed_box: 1,
        pam: cwid
    };
    cart_ctl('add', opts);
}
//寄存购物车
function save_cart() {
    s_load();
    $.get(reurl('share/box.html'), {act: 'save_cart', inajax: '1'}, function (data) {
        if (data == 'not_login') {
            fm.loadfunc = function (data) {
                $("#divlogin").dialog('close');
                save_cart();
            }
            show_login();
        } else {
            s_load(data, 1500);
        }
    });
}
//去除购物车
function out_cart(iscart, gids) {
    s_load();
    $.get(reurl('share/box.html'), {act: 'out_cart', inajax: '1', 'gids': gids}, function (data) {
        if (data == 'not_login') {
            fm.alert_box("必须先登录才能继续操作！");
        } else {
            s_load(data);
            setTimeout(function () {
                if (iscart) {
                    cart_ctl('update');
                    h_load(true);
                } else {
                    location.reload();
                }
            }, 1500);
        }
    });
}
//动作
function doajax(url, loaded) {
    s_load();
    $.post(reurl(url), {}, function (data) {
        if (data == 'not_login') {
            show_login(function (data) {
                if (data == 'succeed') {
                    $("#divlogin").dialog('close');
                    doajax(url);
                } else {
                    alert_box(data);
                }
            });
        } else if (data.substr(0, 4) == 'msg:') {
            fm.alert_box(data.substr(4));
        } else {
            s_load(data);
            setTimeout(function () {
                h_load(true);
                if (typeof (loaded) == 'function') {
                    loaded();
                }
            }, 1500);
        }
    });
}
//加关注
function add_links(uid) {
    doajax('share/ajax.html?action=add_links&inajax=1&uid=' + uid);
}
//加收藏
function add_favor(sURL, sTitle)
{
    try
    {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e)
    {
        try
        {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e)
        {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}
/**
 * 首页图片轮换
 */
function AutoScroll(obj, h) {
    $(obj).find("ul:first").animate({
        marginTop: "-" + h + "px"
    }, 500, function () {
        $(this).css({marginTop: "0px"}).find("li:first").appendTo(this);
    });
}
function ScrollStart(obj, h, time) {
    var tjid = setInterval('AutoScroll("' + obj + '","' + h + '")', time);
    $(obj).hover(function () {
        clearInterval(tjid);
    }, function () {
        tjid = setInterval('AutoScroll("' + obj + '","' + h + '")', time);
    });
}
function posdiv(src, tar, leftadd, topadd) {
    var sTop = $(window).scrollTop();
    var topv = src.offset().top + topadd - sTop;
    var dotv = topv + tar.height() - $(window).height() - $(window).scrollTop();
    if (dotv > 0) {
        topv -= dotv;
    }
    tar.css({right: 35+'px',left: 'inherit', top: topv, position: 'fixed'}).fadeIn('fast');
}
//加密传输
function passcode(evt, tp) {
    $(evt).each(function () {
        var txt = $(this);
        if (txt.val() != '') {
            if (tp == 'encode') {
                var formhash = $("input[name='formhash']").eq(0);
                if (formhash.length == 0) {
                    alert('formhash not exists.');
                    return;
                }
                txt.attr('vals', txt.val()).val($.cscode(txt.val(), formhash.val()));
            } else {
                txt.val(txt.attr('vals'));
            }
        }
    });
}
//init-----------------------------------------
easyloader.locale = 'zh_CN';
parse_checks();
lazyload({evt: 'body'});
setTimeout(function () {
    if ($("#pms em").text() != '0') {
        flashsms('#pms');
    }
}, 2000);
//导航滚动
ScrollStart(".Ec_ry", 25, 3000);
//搜索提示
function goResult(element) {
    var attrName = element.attr("data-type");
    element.addClass('hov');
    if(typeof attrName !='undefined'){
        $('.result-float .search-float[id="' + attrName + '"]').siblings().addClass("hide").end().removeClass("hide");
    }else{
        $('.result-float .search-float').addClass("hide");
    }
};
/*隐藏结果提示层*/
function hideResult(){
    $('.sch_list').hide();
    $('.result-float .search-float').addClass("hide");
};
/**/
$(".search-result").hover(function(){
    $(this).find(".sch_list li").hover(function(){
        $('.sch_list li.hov').removeClass("hov");
        var attrName = $(this).attr("data-type");
        $(this).addClass('hov');
        searchRsult.changeKeyword();
        if(typeof attrName !='undefined'){
            $('.result-float .search-float[id="' + attrName + '"]').siblings().addClass("hide").end().removeClass("hide");
        }else{
            $('.result-float .search-float').addClass("hide");
        }
        //goResult($(this));
    })
},function(){
    var attrName = $(this).find(".sch_list li").attr("data-type");
    if(typeof attrName !='undefined'){
        $('.result-float .search-float').addClass("hide");
        $('.sch_list li.hov').removeClass("hov");
    };
});


var searchUseAssociate = 0; //定义是否按建议内容搜索
var searchUseHot = 0; //定义是否按热门词语搜索
/*键盘操作处理*/
var keywordVal = $("input[name='keyword']").val();
$("input[name='keyword']").keyup(function (event) {
    event = event || window.event;
    var k = event.keyCode;
    var txt = $(this);
    //向上
    if (k == 38) {
        if ($('.sch_list li.hov').length < 1) {
            $('.sch_list li:last').addClass("hov");
        } else {
            var prv = $('.sch_list li.hov').removeClass("hov").prev();
            if (prv.length > 0) {
                prv.addClass("hov");
                goResult(prv);
            } else {
                $('.sch_list li:last').addClass("hov");
            }
        }
        searchRsult.changeKeyword();
        //向下
    } else if (k == 40) {
        if ($('.sch_list li.hov').length < 1) {
            $('.sch_list li:first').addClass("hov");
            var nxt = $('.sch_list li.hov').removeClass("hov");
            goResult(nxt);
        } else {
            var nxt = $('.sch_list li.hov').removeClass("hov").next();
            if (nxt.length > 0) {
                nxt.addClass("hov");
                goResult(nxt);
            } else {
                $('.sch_list li:first').addClass("hov");
            }
        }
        searchRsult.changeKeyword();
        //获取数据
    } else if (k != 13 && k != 39 && k != 37) {
        var val = txt.val();
        keywordVal=val;
        var get_data = 0;
        if (val.length > 0) {
            clearTimeout(get_data);
            get_data = setTimeout(function () {
                if(app != 'cart/main'){/*购物车不用搜索建议*/
                    var pettypes = (typeof(petType)!="undefined") ? petType:"";
                    $.getJSON(reurl('share/suggest.html'), {inajax: '1', kw: val, pet_type:pettypes}, function (data) {
                        $(".result-float").html('');
                        listr = '';
                        branddiv='',categorydiv = '',column='';
                        var len = data.length;
                        for (var i = 0; i < len; i++) {
                            if(data[i].data!=''){
                                if(data[i].type!=2){
                                    listr += ' <li class="where-search nocopy" data-link="'+data[i].type+'"  data-type="'+data[i].typeid+'"><p>在<em class="cred ml5 mr5">'+data[i].type_name+'</em>中搜索<i class="arrow-ico"></i></p></li>';
                                }else{
                                    listr += '<li class="copyval" data-link="'+data[i].type+'" data-type="'+data[i].typeid+'"><p>' + data[i].words + '<i class="arrow-ico"></i></p></li>';
                                }
                            }else{
                                listr += '<li class="clickable copyval" data-link="'+data[i].type+'"><p>' + data[i].words + '</p></li>';
                            };
                            if(data[i].type==1 && data[i]!=''){
                                branddiv = searchRsult.brand(data[i]);
                                $('.result-float').append(branddiv).show();
                            } else if(data[i].type==2 && data[i]!=''){
                                categorydiv = searchRsult.cateGory(data[i]);
                                $('.result-float').append(categorydiv).show();
                            } else {
                                column = searchRsult.column(data[i]);
                                $('.result-float').append(column).show();
                            };
                        }
                        if (listr != '') {
                            $('.sch_list').html(listr).show();
                            $(".search-float").css("min-height",$("ul.sch_list").height()-41);/*41是padding值和边框值*/
                            //$(".result-float").html(branddiv).show();
                            //$('.result-float').html(categorydiv).show();
                            tg_slider(-1);
                            $('.sch_list li').css('cursor', 'pointer');
                            $('.sch_list li.copyval').click(function () {
                                txt.val($(this).find('p').text());
                                hideResult();
                                tg_slider(1);
                                /*埋点*/
                                searchUseAssociate = 1;
                                searchUseHot = 0;
                                keywordVal = $(this).find('p').text();
                                $('#schform').submit();
                                trackSearch()
                            });
                        } else {
                            hideResult();
                            tg_slider(1);
                        }
                    });
                }
            }, 200);
        } else {
            hideResult();
            tg_slider(1);
        }
    }
}).blur(function () {
    if ($(this).val() == '' && $(this).attr('lang') != '') {
        $(this).addClass('c999');
        $(this).val($(this).attr('lang'));
    }else{
        searchUseAssociate = 0;
        searchUseHot = 0;
    }
    setTimeout(function () {
        hideResult();
        tg_slider(1);
    }, 1500);
});
/*搜索建议浮块*/
var searchRsult ={
    changeKeyword:function () {
        /* var txt = $("input[name='keyword']");
         var type= $(".sch_list li.hov").attr("data-link");
         if(type==2 || type==0){
         txt.val($('.sch_list li.hov.copyval p').text());
         }else{
         txt.val(keywordVal);
         };*/
        /*鼠标悬浮搜索结果栏时输入框显示输入的关键字*/
        var txt = $("input[name='keyword']");
        txt.val(keywordVal);
    },
    brand:function(data){/*品牌馆*/
        var data = data ?data:{};
        var html = '';
        if(!searchRsult.isEmpty(data.data) && typeof(data.data) !="undefined"){
            var gobrand = data.data.link != '' ? data.data.link : 'javascript:;';
            html += '<div class="brand-float search-float bgwhite hide" id="' + data.data.id + '">';
            html += '<div class="clearfix">';
            html += '<div class="fl brandlogo ftc">';
            html += '<img src="' + data.data.photo + '">';
            html += '</div>';
            html += '<div class="fr brandintro">';
            html += '<div class="ft14 c333 rowhidden mb5">' + data.data.title + '</div>';
            html += '<div class="ft12 c999 rowhidden">区域：<span class="c333">' + data.data.extendData.baidname + '</span></div>';
            html += '<div class="ft12 c999 rowhidden">产地：<span class="c333">' + data.data.extendData.bpidname + '</span></div>';
            /*html +='<div class="ft12 c999 rowhidden">类型：<span class="c333">主粮</span></div>';*/
            html += '</div>';
            html += '</div>';
            html += '<div class="c999 ft12 brand-sug mt20">';
            html += data.data.desc;
            html += '</div>';
            html += '<div class="go-href ftc ft14 mt20"><a href="' + gobrand + '" class="db"><span>前往' + data.data.linkName + '<i class="arrow-ico redico"></i></span></a></div>';
            html += '</div>';
        };
        return html;
    },
    column:function (data) {/*栏目页*/
        var data = data ?data:{};
        var html ='';
        if(!searchRsult.isEmpty(data.data) && typeof(data.data) !="undefined"){
            var gohref=data.data.link!=''?data.data.link:'javascript:;';
            html +='<div class="columncon search-float bgwhite hide" id="'+data.data.id+'">';
            html +='<div class="column-img"><img src="'+data.data.photo+'"></div>';
            html +='<div class="ft14 c333 rowoverflow mt5">'+data.data.title+'</div>';
            html +='<div class="c999 ft12 brand-sug mt20">'+data.data.desc+'</div>';
            html +='<div class="go-href ftc ft14 mt20"><a href="'+gohref+'" class="db"><span>前往'+data.data.linkName+'<i class="arrow-ico redico"></i></span></a></div>';
            html +='</div>';
        };
        return html;
    },
    cateGory:function (data) {/*类目*/
        var data = data ?data:{};
        var html = '';
        if(!searchRsult.isEmpty(data.data) && typeof(data.data) !="undefined"){
            html += '<div class="goodstype search-float bgwhite hide" id="' + data.typeid + '">';
            html += '<h1 class="c333 ft14 ftc bold">' + data.words + '</h1>';
            html += '<ul class="clearfix smalltype mt">';
            var cateli = data.data[data.typeid];
            for (key in cateli) {
                html += ' <li class="fl" ><span class="db ftc textover pointer">' + cateli[key].attr_name + '</span></li>';
                /*data-id='+cateli[key].attrid+'*/
            };
            html += '</ul>';
            html += '</div>';
        }
        return html;
    },
    isEmpty:function(obj){
        var type;
        if(obj == null){
            return true;
        };
        type=Object.prototype.toString.call(obj).slice(8,-1);
        switch(type){
            case 'string':
                return !$.trim(obj);
            case 'Array':
                return !obj.length;
            case 'Object':
                return $.isEmptyObject(obj);
            default:
                return false;
        }
    }
};
/*搜索埋点*/
$('.search-form button').click(function(){
    trackSearch()
});
/*热词搜索*/
$('.search .keywords a').click(function(){
    keywordVal = $(this).html();
    searchUseHot = 1;
    searchUseAssociate = 0;
    trackSearch();
});

/*发送搜索埋点事件*/
function trackSearch(){
    var searchData = {
        platform:'epet',
        searchKeywords : keywordVal,
        searchUseHistory : 0,
        searchUseHot : searchUseHot,
        searchUseAssociate:searchUseAssociate
     };
     EpetSensors.trackSearch(searchData);
}

var shcart = 0;
/*搜索建议关键词点击*/
$(".smalltype li").live('click',function () {
    /*var attrid = $(this).attr("data-id");*/
    var attr_name= $(this).text();
    var keyword = $(this).parent().parent().find("h1").text();
    attrClick(/*attrid,*/keyword+' '+attr_name);
});
function attrClick(/*attrid,*/keyword) {
    searchUseAssociate = 1;
    searchUseHot = 0;
    keywordVal = keyword;
    trackSearch();
    // $("input[name='attrid']").val(attrid+'|and');/*类目点击attrid参数先不传*/
    $("input[name='keyword']").val(keyword);
    $('#schform').submit();
}
$(".cartbtn").hover(function () {
    var tdiv = $(this);
    tdiv.addClass("rela");
    tg_slider(-1);
    shcart = setTimeout(function () {
        if (cartbox == null) {
            cart_ctl('update');
        }
        posdiv(tdiv, cartbox, tdiv.width(), 34);
        cartbox.css({position: 'absolute'});
    }, 200);
}, function () {
    $(this).removeClass("rela");
    tg_slider(1);
    cartbox.hide();
    clearTimeout(shcart);
});
$(".dropmn").hover(function () {
    tg_slider(-1);
    $(this).addClass("rela").find("a.mns").addClass("hov");
    $(this).find(".dpmenus").show();
}, function () {
    tg_slider(1);
    $(this).removeClass("rela").find("a.mns").removeClass("hov");
    $(this).find(".dpmenus").hide();
});
$('.mobileApp').hover(function(){
    $('.code-img').removeClass('hide');
},function(){
    $('.code-img').addClass('hide');
})
/**
 * 所有商品分类1
 */
var maintt= $(".maincates-title");
maintt.find("span").hover(function(){
    var num = $(this).index(),
        color = maintt.find(".hov").css("background-color");
    if (num == 0) {
        $(".dogType li").removeClass();
        $(".catels").hide();
    }
    $(this).addClass("hov").css({"background-color": color, "border-color": color}).siblings().removeClass("hov").css({"background-color": "#fff", "border-color": "#e1e1e1"});
    $(".catelist>div").eq(num).show().siblings().hide();
    $(".cate-action").hide();
});
var timehandle = null;
var mcate = $("#catefm");
/*商品分类*/
function navCategory(){
    tg_slider(-1);
    if ($(".catels").length == 0) {
        $.get(reurl('share/run.html?act=allcates&pet_type=' + petType), {inajax: 1}, function (data) {
            mcate.prepend(data);
            if (app == 'main' || app == 'main_new') {
                $(".maincates").hover(function(){
                    catelistHover();
                },function(){
                    tg_slider(1);
                    $(".catelist li.hov").removeClass("hov");
                    $(".catels").hide();
                    $(".cate-action").hide();
                })
            }else{
                catelistHover();
            }
        });
    };
    if (app != 'main' || app != 'main_new') {
        timehandle = setTimeout(function(){
            $(".maincates").addClass("mchov");
            mcate.show();
        }, 200);
    }
};
/*移上分类显示对应的子分类*/
function catelistHover(){
    $(".catelist li").mouseover(function () {/*商品分类一级*/
        $(this).find(".menuIcoMain").stop(false, false).animate({"padding-left": 10}, 100);
        $(".catels").show();/*分类右侧*/
        $(this).siblings().removeClass("hov").end().addClass("hov");/*一级选中*/
        $(".cate-action").hide();/*正在进行的活动*/
        $(".mincate,.minads").hide();
        // var idsarr = $(this).attr('lang').split(',');
        // var len = idsarr.length;
        // for (var i = 0; i < len; i++) {
        //     $(".ct_" + idsarr[i]).show();
        // }
        var langlength = "";
        langlength = $(this).find("a").length;
        var langs = [];
        for(var j = 0;j<langlength;j++){
            langs.push($(this).find("a").eq(j).attr("lang"))
        }
        for(var i = 0;i<langlength;i++){
            $(".ct_" + langs[i]).show();
        }
        $(".dogType").show();
    });
    $(".catelist li").mouseout(function () {
        $(this).find(".menuIcoMain").stop(false, false).animate({"padding-left": 0}, 100);
    });
}
/*首页和子页分别具体操作*/
if (app == 'main' || app == 'main_new') {
    navCategory();
}else{
    $(".maincates").hover(function(){
        navCategory();
    }, function(){
        tg_slider(1);
        clearTimeout(timehandle);
        $(this).removeClass("mchov");
        mcate.hide();
    });
};
$('.pet-cate dd').hover(function () {
    $(this).addClass('hov').siblings().removeClass('hov');
});
//正在进行的活动
$(".pet-active").hover(function () {
    $(".catelist li.hov").removeClass("hov");
    $(".cate-action").show();
    $(".catels").hide();
    if ($('.action-slider').length == 0) {
        getActivitys(1);
    } else {
        $('.action-slider').show();
    }
});
$(".startact").hover(function () {
    $("#catefm").addClass("pet-border");
}, function () {
    $("#catefm").removeClass("pet-border");
});

//正在进行中的活动翻页
function getActivitys(page) {
    var timestamp = Date.parse(new Date());
    $.get(reurl('share/run.html?act=startActivitys&'+timestamp), {inajax: 1, page: page}, function (data) {
        if (Math.ceil(startActNum / 4) <= page) {
            s_load('已经是最后一页了哦', 1000);
        }
        $('.cate-action').html(data);
    });
}
//列表菜单效果
$("#selorder").hover(function () {
    $(this).toggleClass("rela").find("p").toggle();
});
$("#selorder p").click(function () {
    $(this).parent().toggleClass("rela");
    $(this).toggle();
});

//列表菜单效果
$("#selorder_pet").hover(function () {
    $(this).toggleClass("rela").find("p").toggle();
});
$("#selorder_pet p").click(function () {
    $(this).parent().toggleClass("rela");
    $(this).toggle();
});

//用户下拉菜单
$(".dropmn").hover(function () {
    $(this).find(".boxsha").show();
}, function () {
    $(this).find(".boxsha").hide();
});
//联动菜单
if ($(".multi-menu").length > 0) {
    $(".multi-menu a").click(function () {
        var mu = $(this).parent();
        var idx = mu.find("a").index($(this));
        var sdiv = mu.next(".multi-content").find("> div").hide().eq(idx);
        sdiv.show();
        lazyload({evt: sdiv.get(0)});
        mu.find("a").removeClass("hov");
        $(this).addClass("hov");
        $("#usewx,.WXBarCodeContainer").html('').hide();
    });
}


//购买数量控制
if ($(".chgnum").length > 0) {
    $(".chgnum").click(function () {
        var binput = $(this).parent().find(".buynum");
        var bnum = parseInt(binput.val());
        if (this.className.indexOf("add-buynum") != -1) {
            bnum++;
        } else {
            bnum--;
        }
        buynum_chk(binput.get(0), bnum);
    });
    $(".buynum").keyup(function () {
        this.value = this.value.match(/^[\d]+$/) == null ? 1 : this.value;
        var bnum = parseInt(this.value);
        buynum_chk(this, bnum);
    })
}
//收藏我
$(".addf").hover(function () {
    $(this).addClass("addfhov");
    $(".addtype").show();
}, function () {
    $(this).removeClass("addfhov");
    $(".addtype").hide();
});
//返回顶部
var btdiv = $(".rt-top");

$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        btdiv.css({'visibility': 'visible'});
    } else {
        btdiv.css({'visibility': 'hidden'});
    }
    if (cartbox != null && cartbox.is(":visible")) {
        posdiv($(".rtcont li.scart"), cartbox, 0, 0);
    }
});
//当点击跳转链接后，回到页面顶部位置
btdiv.click(function () {
    $('body,html').animate({scrollTop: 0}, 'normal');
    return false;
});
if ($(".initrun").length > 0) {
    $(".initrun").each(function () {
        eval($(this).attr('lang'));
    });
}
var viewbox = null;
var bagbox = $(".bagBox");

$(".rtcont li.rtl").live({
    "mouseenter": function () {
        var tdiv = $(this);
        if (tdiv.hasClass("bagLi")) {
            if (bagbox.length < 1) {
                //tdiv.prepend('<div class="bagBox"><div class="loadx">加载中...</div></div>');
                tdiv.prepend('<div class="bagBox"></div>');
                bagbox = $(".bagBox");
                bagbox.load(reurl('share/prop.html?do=ShowMyBag&inajax=1'));
                hovershow(bagbox);
            }
            bagbox.show();
        } else if (tdiv.hasClass("scart")) {
            if (cartbox == null) {
                cart_ctl('update', {show_cart: false});
            }
            posdiv(tdiv, cartbox, 0, 0);
        } else if (tdiv.hasClass("sview")) {
            if (viewbox == null) {
                $("body").append('<div id="viewbox"></div>');
                viewbox = $("#viewbox");
                viewbox.load(reurl('share/goods.html?do=viewer&inajax=1'));
                hovershow(viewbox);
            }else{
                viewbox = $("#viewbox");
                viewbox.load(reurl('share/goods.html?do=viewer&inajax=1'));
                hovershow(viewbox);
            }
            posdiv(tdiv, viewbox, 0, -200);
        }else if(tdiv.hasClass("consolutBox")){
            var consoultH =$(this).find(".my-consoult").height();
            $(this).find(".my-consoult").css("top",($(window).height()-consoultH)/2);
            $(this).find(".my-consoult").show();//客服

        } else {
            $(this).addClass("hov");
            $(this).find("label").show().stop(true, true).animate({opacity: 1, right: 35});

        }
    },
    "mouseleave": function () {
        if ($(this).hasClass("bagLi")) {
            bagbox.hide();
        } else if ($(this).hasClass("scart")) {
            cartbox.hide();
        } else if ($(this).hasClass("sview")) {
            viewbox.hide();
        } else if($(this).hasClass("consolutBox")){
            $(this).find(".my-consoult").hide();//客服
        } else {
            $(this).find("label").stop(true, true).animate({opacity: 0, right: 53}, function () {
                $(this).hide().removeClass("hov");
            });
        }
    }
})
//全站咨询
$('.rt-ask').click(function () {
    pub_reply('0', 'ask');
});

$(".close-code").click(function () {
    $(this).hide();
    $(".epet-app-ico").addClass("epet-app-ico-close")
});
$(".epet-app-ico-close").live("click", function (event) {
    event.preventDefault();
    $(this).removeClass("epet-app-ico-close");
    $(".close-code").show();
});

//页面底部温馨提示
if($('.bottomTips').length > 0){
    var tipShowIntervalTime = 400000;
    setTimeout(function(){
        $('.marquee-box').show();
    },tipShowIntervalTime);
}
$(".marquee-close").click(function(){
    $(this).parents(".marquee-box").remove();
});

//宠物信息
var petviewdiv = 0;
var petviewhide = 0;
$(".petview").live({
    mouseenter:
        function ()
        {
            var div = $(this);
            var uid = div.attr("uid");
            var pid = "pet_" + uid;
            var pcenter = $("#" + pid);
            var pos;
            petviewdiv = setTimeout(function () {
                if (pcenter.length == 0) {
                    $("body").append("<div id=\"" + pid + "\" class=\"pcenter boxsha loadbox\"><em></em></div>");
                    pcenter = $("#" + pid);
                    pcenter.hover(function () {
                        clearTimeout(petviewhide);
                        $(this).show();
                    }, function () {
                        $(this).hide();
                    });
                }
                pos = divcenter(div, pcenter);
                pcenter.show().css({left: pos.left, top: pos.top});
                if (pcenter.hasClass("loadbox")) {
                    pcenter.load(reurl('share/pet.html?do=pcenter&inajax=1&uid=' + div.attr("uid")), {}, function (data) {
                        pcenter.removeClass("loadbox");
                        pos = divcenter(div, pcenter);
                        pcenter.css({left: pos.left, top: pos.top});
                    });
                }
            }, 300);
        },
    mouseleave:
        function ()
        {
            clearTimeout(petviewdiv);
            var uid = $(this).attr("uid");
            petviewhide = setTimeout(function () {
                $("#pet_" + uid).hide();
            }, 300);
        }
});
/*顶部消息*/
$(".header_topri .newxx-hover").live({
    mouseenter:function () {
        var obj = $(this);
        if (obj.find(".newxx-li").length === 0) {
            getnewlist();
        }else{
            obj.find(".newxx-tc").show();
        }
    },
    mouseleave:function(){
        $(this).find(".newxx-tc").hide();
    }
});
/*删除顶部消息*/
function delnewxx(pmid){
    if(!pmid){
        alert_box("删除失败");
    }
    var msg = '您确定删除此站内信吗？';
    alert_box(msg,function(b){
        if(b){
            $.get(reurl('share/run.html?act=delnewxx&pmid='+pmid), {inajax: 1}, function (data) {
                var pmsnum = parseInt($("#pms em").text())-1;
                $("#pms em").text(pmsnum);
                if(pmsnum == 0){
                    $(".header_topri .newxx").removeClass("newxx-hover").find('i').removeClass("yxx");
                }
                s_load(data,1000);
                $("#pms_"+pmid).remove();
            });
        }
    });
}
function getnewlist(){
    $.get(reurl('share/run.html?act=getnewxx'), {inajax: 1}, function (data) {
        $(".header_topri .newxx-tip").after(data);
        $(".newxx-tc").show();
    });
}
function divcenter(div, pcenter, judgeH) {
    var res = {left: 0, top: 0};
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var objHeight = pcenter.outerHeight();
    var objWidth = pcenter.outerWidth();
    var objWidth2 = div.outerWidth();
    var objHeight2 = div.outerHeight();
    var offset_left = div.offset().left;
    var offset_top = div.offset().top;
    var allWidth = windowWidth - offset_left - objWidth;
    var allHeight = windowHeight + scrollTop - offset_top - objHeight2 - objHeight;/*计算下边的高度是否够放弹出框*/
    if (allWidth >= 0) {
        res.left = offset_left;
    } else {
        res.left = offset_left - objWidth + objWidth2;
    }
    res.top = offset_top + objHeight2;
    if (judgeH && allHeight < 0) {
        res.top = offset_top - objHeight;
    }
    return res;
}

//设置滚动条
function set_multi_menu(obj) {
    var ofc = obj.offset().top;
    var sh = $(window).scrollTop();
    if (sh > 0 && sh > ofc) {
        $(window).scrollTop(ofc);
    }
}
//设置菜单定位
function menu_scroll(obj, callback, rollback) {
    ofc = obj.offset().top;
    $(window).bind("scroll", function () {
        var t = $(window).scrollTop();
        if (t >= ofc) {
            obj.addClass('fixed');
            callback();
        } else {
            obj.removeClass('fixed');
            rollback();
        }
    });

}
//投诉建议小提示
function show_more_tip(evt) {
    var msg = $('#msg_tip').html();
    if ($(evt).val() == 4) {
        if (msg.indexOf('<br') == -1) {
            $('#msg_tip').append('<br />E宠如果让您不满我们会马上处理并回复，您的好建议如果被采纳会有奖励哦');
        }
    } else {
        var length = msg.indexOf('<br');
        if (length != -1) {
            $('#msg_tip').html(msg.substring(0, length));
        }
    }
}
//列表菜单浮动
function fixbar(obj, cls, cb, rb) {
    var fixh = $(obj).offset().top;
    $(window).scroll(function () {
        if (fixh - $(document).scrollTop() < 0) {
            $(obj).addClass(cls);
            cb();
        } else {
            $(obj).removeClass(cls);
            rb();
        }
    });
}

//right bar
function rtchange() {
    var rth = $(window).height() - 450;
    var toph = 130, rtup = 330;
    if (rth < rtup) {
        toph = 130 - (rtup - rth);
        if (toph < 30) {
            toph = 30;
        }
        rth = rtup;
    }
    $(".rtcont-up").height(472);
    $("#rtbar").stop(true, true).animate({right: 0, top: 0, opacity: 1}, 'slow');
    $(".rtcont-up").animate({top: toph}, 'slow');

    if($(window).height()<=580){
        $(".rtcont-dn").hide();
    }else{
        $(".rtcont-dn").show();
    }
}
$(function () {
    rtchange();
});
$(window).resize(function () {
    rtchange();
});
if (app == 'goodslist' || app == 'goods/list') {
    $('.headerTop').removeClass('fixed');
    $(".fix_height").remove();
    $('.header').css({'padding-top': '10px'});
    fixbar('#gdmenu', 'fixed shadow',function(){},function(){});
    $(".seemo").click(function () {
        $(this).toggleClass('seemo-hov').parent().toggleClass('fil-ht');
    });
}
