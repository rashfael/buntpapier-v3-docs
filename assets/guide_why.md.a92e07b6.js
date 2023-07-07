import{_ as s,o as e,c as t,O as o}from"./chunks/framework.d262b09b.js";const m=JSON.parse('{"title":"Why buntpapier?","description":"","frontmatter":{},"headers":[],"relativePath":"guide/why.md","filePath":"guide/why.md"}'),a={name:"guide/why.md"},n=o(`<h1 id="why-buntpapier" tabindex="-1">Why buntpapier? <a class="header-anchor" href="#why-buntpapier" aria-label="Permalink to &quot;Why buntpapier?&quot;">​</a></h1><p>buntpapier takes a different approach to letting devs style its components — &quot;styling&quot; referring to changing any aspect of a components appearance or presentation.</p><p>The majority of vue component libraries offer styling based on props, for example looking like this:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-btn</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">indigo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">outlined</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">large</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Click Me!</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">v-btn</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>This might not seem like a big problem, but it sacrifices a lot of power &quot;classic&quot; styling in CSS offers.</p><ul><li>Applying styles to multiple components at once with selectors is not possible, you need to set props on each component separately</li><li>No cascade</li><li>You can&#39;t build macros without wrapping the library component in your own</li></ul><p>buntpapier was always built around a strong separation of concerns between template and style. In past versions, this was achieved by using the css preprocessor stylus. buntpapier v3 forgoes the use of stylus and bases styling completely on vanilla css custom properties.</p><p>buntpapier aims to provide an API that might become possible with vanilla CSS in a few years, now.</p><h2 id="css-custom-properties" tabindex="-1">CSS custom properties <a class="header-anchor" href="#css-custom-properties" aria-label="Permalink to &quot;CSS custom properties&quot;">​</a></h2><p>Using custom properties to influence presentation of components gives us all features of CSS for free. While they seem powerful at first, custom properties are (currently) quite limited. Even simple things like setting a color on a button are more complex than you might expect. This:</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">my-button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	--button-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> purple</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>not only sets the button background color, but also:</p><ul><li>derives hover and pressed state colors</li><li>picks a light or dark text label color for best contrast</li></ul><p>More complex properties like</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">my-button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	--button-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> huge</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>set multiple css properties like height, padding and font size.</p><p>Sadly, offering an API like this is currently not possible with CSS, but the csswg is working hard to add new features like <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-contrast" target="_blank" rel="noreferrer">color-contrast()</a>.</p><p>Until CSS add features to implement the buntpapier API natively, buntpapier relies on a few bits of javascript to make the magic happen.</p><h2 id="bring-your-own-class-system" tabindex="-1">Bring Your Own Class System <a class="header-anchor" href="#bring-your-own-class-system" aria-label="Permalink to &quot;Bring Your Own Class System&quot;">​</a></h2><p>buntpapier does not dictate how you use its custom properties. While I personally recommend using semantic classes for your components and styling them in SFCs, buntpapier does not stop you from creating a global <code>.btn-primary-huge</code> class and using it on multiple components.</p>`,20),l=[n];function p(r,i,c,u,y,h){return e(),t("div",null,l)}const g=s(a,[["render",p]]);export{m as __pageData,g as default};