import{_ as s,c as i,o as a,V as n}from"./chunks/framework.c8XZiJH6.js";const E=JSON.parse('{"title":"Semantic UI","description":"","frontmatter":{"editLink":true},"headers":[],"relativePath":"guide/frameworks/semantic-ui.md","filePath":"guide/frameworks/semantic-ui.md","lastUpdated":1688635410000}'),e={name:"guide/frameworks/semantic-ui.md"},t=n(`<h1 id="semantic-ui" tabindex="-1">Semantic UI <a class="header-anchor" href="#semantic-ui" aria-label="Permalink to &quot;Semantic UI&quot;">​</a></h1><p>To use Semantic UI as your UI framework, simply pass it to the configuration</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useGrid } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue-screen&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> grid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useGrid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;semanticUi&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> VueScreen </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue-screen&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(VueScreen, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;semanticUi&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Your grid object will contain the following properties:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  mobile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: boolean,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  tablet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: boolean,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  computer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: boolean,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  large</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: boolean,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  breakpoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: string </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // the current breakpoint</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The actual values of the properties depend on the screen size.</p></div>`,7),p=[t];function l(h,k,r,d,c,o){return a(),i("div",null,p)}const u=s(e,[["render",l]]);export{E as __pageData,u as default};
