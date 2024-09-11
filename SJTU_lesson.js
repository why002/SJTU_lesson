// ==UserScript==
// @name         SJTU_lesson
// @namespace    http://tampermonkey.net/
// @version      2024-09-11
// @description  try to take over the world!
// @author       why
// @match        https://i.sjtu.edu.cn/xsxk/*
// @icon         https://en.sjtu.edu.cn/favicon.ico
// @grant        none
// ==/UserScript==



(window.addEventListener("load",function () {
    'use strict';

    function button() { //添加进入选课社区选项
        let clj = document.querySelectorAll('.clj');
        for (var i = 0; i < clj.length; i++) {
            if (clj[i].parentNode.children[1] == undefined) {
                let div = document.createElement("div");
                var lessonOrigin = clj[i].textContent;
                var lesson = lessonOrigin.substring(lessonOrigin.lastIndexOf('-', lessonOrigin.lastIndexOf('-') - 1) + 1, lessonOrigin.lastIndexOf('-'));
                var href = "https://course.sjtu.plus/search?q=" + lesson;
                div.innerHTML = "<br><a href=" + href + " target=\"_blank\">进入选课社区</a>"
                clj[i].parentNode.append(div)
            }
        }
    }

    //顶部链接跳转后加按钮
    var str = new Array("tab_kklx_01", "tab_kklx_06", "tab_kklx_10", "tab_kklx_12")
    for (var i = 0; i < str.length; i++) {
        let a = document.getElementById(str[i]);
        a.addEventListener('click', () => {
            setTimeout(button,500);
        });
    }


    //点此查看更多加按钮
    let b = this.document.getElementById("more");
    b.addEventListener("click",()=>{
        this.setTimeout(button,500);
    });
    // Your code here...
}),false);