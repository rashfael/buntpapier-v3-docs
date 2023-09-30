import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.26ee681c.js";const F=JSON.parse('{"title":"Installation","description":"","frontmatter":{},"headers":[],"relativePath":"installation.md","filePath":"installation.md"}'),p={name:"installation.md"},o=l(`<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install buntpapier</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm install buntpapier</span></span></code></pre></div><h2 id="add-to-build-chain" tabindex="-1">Add to build chain <a class="header-anchor" href="#add-to-build-chain" aria-label="Permalink to &quot;Add to build chain&quot;">​</a></h2><p>Buntpapier needs to be compiled with babel, pug, stylus and used with stylus.</p><p>Example vue-cli config</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	transpileDependencies: [</span><span style="color:#9ECBFF;">&#39;buntpapier&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">	configureWebpack: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">			rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">				{</span></span>
<span class="line"><span style="color:#E1E4E8;">					test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">pug</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">					loader: </span><span style="color:#9ECBFF;">&#39;pug-plain-loader&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">				}</span></span>
<span class="line"><span style="color:#E1E4E8;">			]</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">	css: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		loaderOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">			stylus: {</span></span>
<span class="line"><span style="color:#E1E4E8;">				use: [</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;buntpapier/stylus&#39;</span><span style="color:#E1E4E8;">)()]</span></span>
<span class="line"><span style="color:#E1E4E8;">			}</span></span>
<span class="line"><span style="color:#E1E4E8;">		}</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	transpileDependencies: [</span><span style="color:#032F62;">&#39;buntpapier&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">	configureWebpack: {</span></span>
<span class="line"><span style="color:#24292E;">		module: {</span></span>
<span class="line"><span style="color:#24292E;">			rules: [</span></span>
<span class="line"><span style="color:#24292E;">				{</span></span>
<span class="line"><span style="color:#24292E;">					test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">pug</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">					loader: </span><span style="color:#032F62;">&#39;pug-plain-loader&#39;</span></span>
<span class="line"><span style="color:#24292E;">				}</span></span>
<span class="line"><span style="color:#24292E;">			]</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">	css: {</span></span>
<span class="line"><span style="color:#24292E;">		loaderOptions: {</span></span>
<span class="line"><span style="color:#24292E;">			stylus: {</span></span>
<span class="line"><span style="color:#24292E;">				use: [</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;buntpapier/stylus&#39;</span><span style="color:#24292E;">)()]</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Also buntpapier needs at least <code>@babel/plugin-proposal-optional-chaining</code>.</p><p>For example via a babel.config.js:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	presets: [</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&#39;@vue/app&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">	],</span></span>
<span class="line"><span style="color:#E1E4E8;">	plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">		[</span><span style="color:#9ECBFF;">&quot;@babel/plugin-proposal-optional-chaining&quot;</span><span style="color:#E1E4E8;">, { </span><span style="color:#9ECBFF;">&quot;loose&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">		[</span><span style="color:#9ECBFF;">&quot;@babel/plugin-proposal-nullish-coalescing-operator&quot;</span><span style="color:#E1E4E8;">, { </span><span style="color:#9ECBFF;">&quot;loose&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> }]</span></span>
<span class="line"><span style="color:#E1E4E8;">	]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	presets: [</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&#39;@vue/app&#39;</span></span>
<span class="line"><span style="color:#24292E;">	],</span></span>
<span class="line"><span style="color:#24292E;">	plugins: [</span></span>
<span class="line"><span style="color:#24292E;">		[</span><span style="color:#032F62;">&quot;@babel/plugin-proposal-optional-chaining&quot;</span><span style="color:#24292E;">, { </span><span style="color:#032F62;">&quot;loose&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">		[</span><span style="color:#032F62;">&quot;@babel/plugin-proposal-nullish-coalescing-operator&quot;</span><span style="color:#24292E;">, { </span><span style="color:#032F62;">&quot;loose&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> }]</span></span>
<span class="line"><span style="color:#24292E;">	]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="load-buntpapier-into-vue" tabindex="-1">Load buntpapier into vue <a class="header-anchor" href="#load-buntpapier-into-vue" aria-label="Permalink to &quot;Load buntpapier into vue&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Buntpapier </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;buntpapier&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Vuelidate </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vuelidate&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// if you want validation</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@mdi/font/css/materialdesignicons.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(Buntpapier)</span></span>
<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(Vuelidate)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Buntpapier </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;buntpapier&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Vuelidate </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vuelidate&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// if you want validation</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@mdi/font/css/materialdesignicons.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Vue.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(Buntpapier)</span></span>
<span class="line"><span style="color:#24292E;">Vue.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(Vuelidate)</span></span></code></pre></div><h2 id="load-buntpapier-into-your-projects-stylus-style" tabindex="-1">Load buntpapier into your projects stylus style <a class="header-anchor" href="#load-buntpapier-into-your-projects-stylus-style" aria-label="Permalink to &quot;Load buntpapier into your projects stylus style&quot;">​</a></h2><p>Example main.styl (only needed once)</p><div class="language-stylus vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">stylus</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FFAB70;">$clr-primary</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">$clr-green</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">variables</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">normalize-css</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">base</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">typography</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">components</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">scrollbars</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#E36209;">$clr-primary</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">$clr-green</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">variables</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6F42C1;">normalize-css</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6F42C1;">base</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6F42C1;">typography</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6F42C1;">components</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6F42C1;">scrollbars</span><span style="color:#24292E;">()</span></span></code></pre></div>`,14),e=[o];function t(c,r,i,E,y,u){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{F as __pageData,h as default};
