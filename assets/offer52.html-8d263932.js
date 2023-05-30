import{_ as c,X as l,Y as i,$ as n,a2 as s,a0 as a,a1 as p,Z as u,E as e}from"./framework-71fc1c0e.js";const d={},r=n("h3",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),s(" 题目链接")],-1),k={href:"https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/",target:"_blank",rel:"noopener noreferrer"},h=n("h3",{id:"题目描述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目描述","aria-hidden":"true"},"#"),s(" 题目描述")],-1),m=n("p",null,"输入两个链表，找出它们的第一个公共节点。",-1),_=n("h3",{id:"题目思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目思路","aria-hidden":"true"},"#"),s(" 题目思路")],-1),b=u("<p>使用<code>hash</code> 遍历链表<code>A</code>，将节点存入<code>hash</code>表中<br> 然后遍历链表<code>B</code>，判断节点是否在<code>hash</code>表中<br> 如果在，则返回该节点<br> 否则返回<code>null</code></p>",1),v=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getIntersectionNode"),n("span",{class:"token punctuation"},"("),s(`
  headA`),n("span",{class:"token operator"},":"),s(" ListNode "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(`
  headB`),n("span",{class:"token operator"},":"),s(" ListNode "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" ListNode "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 设置hash表"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" hash "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// 遍历链表A"),s(`
  `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("headA"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    hash`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("headA"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    headA `),n("span",{class:"token operator"},"="),s(" headA"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},"// 遍历链表B"),s(`
  `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("headB"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("hash"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),s("headB"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(" headB"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    headB `),n("span",{class:"token operator"},"="),s(" headB"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("p",null,[s("注意:"),n("strong",null,[n("code",null,"set"),s("里面添加的一定是 listNode 类型的，不可以是"),n("code",null,"listNode.val"),s(",这样会导致问题")])],-1),w=n("p",null,[s("但是这种方法的时间复杂度为"),n("code",null,"O(n)"),s("，空间复杂度为"),n("code",null,"O(n)"),s("，不是最优解")],-1);function y(g,x){const t=e("ExternalLinkIcon"),o=e("CodeTabs");return l(),i("div",null,[r,n("p",null,[n("a",k,[s("两个链表的第一个公共节点"),a(t)])]),h,m,_,n("ol",null,[n("li",null,[b,a(o,{id:"20",data:[{title:"typescript"}],"tab-id":"code"},{tab0:p(({title:B,value:N,isActive:A})=>[v]),_:1})])]),f,w])}const C=c(d,[["render",y],["__file","offer52.html.vue"]]);export{C as default};
