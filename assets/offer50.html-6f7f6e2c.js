import{_ as c,X as p,Y as l,$ as n,a2 as s,a0 as a,a1 as u,Z as i,E as t}from"./framework-71fc1c0e.js";const r={},k=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),s(" 题目链接")],-1),d={href:"https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/",target:"_blank",rel:"noopener noreferrer"},m=i('<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>在字符串 <code>s</code> 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 <code>s</code> 只包含小写字母。</p><h2 id="题目思路" tabindex="-1"><a class="header-anchor" href="#题目思路" aria-hidden="true">#</a> 题目思路</h2><p>使用<code>Map</code>来存储每个字符出现的次数，然后遍历<code>Map</code>，找到第一个出现次数为<code>1</code>的字符，返回即可</p>',4),b=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"firstUniqChar"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 1. 哈希表"),s(`
  `),n("span",{class:"token comment"},"// 2. 计算每个字符出现个数"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" map "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" s"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      map`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      map`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},"// 3. 遍历哈希表，找到第一个出现次数为1的字符"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"of"),s(" map"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("value "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(" key"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'" "'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function h(f,v){const e=t("ExternalLinkIcon"),o=t("CodeTabs");return p(),l("div",null,[k,n("p",null,[n("a",d,[s("第一个只出现一次的字符"),a(e)])]),m,a(o,{id:"18",data:[{title:"typescript"}],"tab-id":"code"},{tab0:u(({title:_,value:y,isActive:w})=>[b]),_:1})])}const g=c(r,[["render",h],["__file","offer50.html.vue"]]);export{g as default};
