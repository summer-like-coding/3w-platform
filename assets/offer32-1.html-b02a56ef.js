import{_ as c,X as l,Y as u,$ as n,a2 as s,a0 as a,a1 as p,E as t}from"./framework-71fc1c0e.js";const i={},r=n("h3",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),s(" 题目链接")],-1),k={href:"https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/",target:"_blank",rel:"noopener noreferrer"},d=n("h3",{id:"题目描述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目描述","aria-hidden":"true"},"#"),s(" 题目描述")],-1),m=n("p",null,"从上到下打印出二叉树的每个节点，同层节点从左至右打印。",-1),b=n("h3",{id:"题目思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目思路","aria-hidden":"true"},"#"),s(" 题目思路")],-1),h=n("p",null,[s("其实就是一道层序遍历的题目，使用队列来实现即可。 我们使用队列来存储每一层的节点，然后遍历队列，将每一层的节点的值存储到数组中即可。 "),n("strong",null,"注意什么时候将队列里面的数据去掉")],-1),v=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"levelOrder"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token operator"},":"),s(" TreeNode "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 1. 创建一个数组，里面存放结果"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" res"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// 2. 创建一个队列，里面存放TreeNode类型"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" deque"),n("span",{class:"token operator"},":"),s(" TreeNode"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// 3. 如果根节点不为空，就把根节点放入队列中"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    deque`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},"// 4. 当队列不为空的时候，就一直循环"),s(`
  `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("deque"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 5. 取出队列的第一个元素"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" cur "),n("span",{class:"token operator"},"="),s(" deque"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"shift"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// 6. 把当前元素的值放入结果数组中"),s(`
    res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("cur"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// 7. 如果当前元素的左右子树不为空，就把左子树放入队列中"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("cur"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      deque`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("cur"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("cur"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      deque`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("cur"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},"// 8. 返回结果数组"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function _(f,y){const e=t("ExternalLinkIcon"),o=t("CodeTabs");return l(),u("div",null,[r,n("p",null,[n("a",k,[s("从上到下打印二叉树"),a(e)])]),d,m,b,h,a(o,{id:"18",data:[{title:"typescript"}],"tab-id":"code"},{tab0:p(({title:w,value:x,isActive:g})=>[v]),_:1})])}const N=c(i,[["render",_],["__file","offer32-1.html.vue"]]);export{N as default};
