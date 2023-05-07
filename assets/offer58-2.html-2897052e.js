import{_ as r,X as u,Y as k,$ as n,a2 as s,a0 as a,a1 as e,Z as d,E as o}from"./framework-71fc1c0e.js";const b={},h=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),s(" 题目链接")],-1),m={href:"https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/",target:"_blank",rel:"noopener noreferrer"},v=d(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>题目写了一大串，重要的一句：<strong>把字符串前面的若干个字符转移到字符串的尾部</strong>。</p><h2 id="题目示例" tabindex="-1"><a class="header-anchor" href="#题目示例" aria-hidden="true">#</a> 题目示例</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>输入: s <span class="token operator">=</span> <span class="token string">&quot;abcdefg&quot;</span>, k <span class="token operator">=</span> <span class="token number">2</span>
输出: <span class="token string">&quot;cdefgab&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>输入: s <span class="token operator">=</span> <span class="token string">&quot;lrloseumgh&quot;</span>, k <span class="token operator">=</span> <span class="token number">6</span>
输出: <span class="token string">&quot;umghlrlose&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="题目思路" tabindex="-1"><a class="header-anchor" href="#题目思路" aria-hidden="true">#</a> 题目思路</h2>`,6),f=n("p",null,"先裁剪出需要旋转到后面的数组，然后拼接",-1),g=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"reverseLeftWords"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(" n"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 第一种直接就是剪切n个，然后拼接到后面"),s(`
    `),n("span",{class:"token comment"},"// 1 <= k < s.length <= 10000"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" arr "),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"split"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" backArr "),n("span",{class:"token operator"},"="),s(" arr"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token punctuation"},")"),s(`    
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),s("backArr"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"..."),s("arr"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("p",null,"使用遍历，一个一个去旋转",-1),x=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"reverseLeftWords"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(" n"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" arr "),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"split"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" n"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" value "),n("span",{class:"token operator"},"="),s(" arr"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"shift"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" arr"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function y(w,q){const c=o("ExternalLinkIcon"),t=o("CodeTabs");return u(),k("div",null,[h,n("p",null,[n("a",m,[s("左旋转字符串"),a(c)])]),v,n("ol",null,[n("li",null,[f,a(t,{id:"25",data:[{title:"typescript"}],"tab-id":"code"},{tab0:e(({title:l,value:i,isActive:p})=>[g]),_:1})]),n("li",null,[_,a(t,{id:"56",data:[{title:"typescript"}],"tab-id":"code"},{tab0:e(({title:l,value:i,isActive:p})=>[x]),_:1})])])])}const C=r(b,[["render",y],["__file","offer58-2.html.vue"]]);export{C as default};