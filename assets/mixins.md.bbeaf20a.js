import{_ as s,c as a,o as n,e as l}from"./app.5dc2dcd3.js";const u=JSON.parse('{"title":"Stylus Mixins","description":"","frontmatter":{"title":"Stylus Mixins"},"headers":[{"level":2,"title":"colors","slug":"colors","link":"#colors","children":[]},{"level":2,"title":"card","slug":"card","link":"#card","children":[{"level":3,"title":"raised","slug":"raised","link":"#raised","children":[]}]},{"level":2,"title":"shadows","slug":"shadows","link":"#shadows","children":[]},{"level":2,"title":"separators","slug":"separators","link":"#separators","children":[]},{"level":2,"title":"table","slug":"table","link":"#table","children":[]}],"relativePath":"mixins.md"}'),e={name:"mixins.md"},p=l(`<h1 id="stylus-mixins" tabindex="-1">Stylus Mixins <a class="header-anchor" href="#stylus-mixins" aria-hidden="true">#</a></h1><h2 id="colors" tabindex="-1">colors <a class="header-anchor" href="#colors" aria-hidden="true">#</a></h2><p>buntpapier exposes material design color variables with the <code>$clr-</code> prefix:</p><div class="language-stylus"><button class="copy"></button><span class="lang">stylus</span><pre><code><span class="line"><span style="color:#A6ACCD;">$clr-blue</span></span>
<span class="line"><span style="color:#A6ACCD;">$clr-red-700</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$clr-success</span></span>
<span class="line"><span style="color:#A6ACCD;">$clr-warning</span></span>
<span class="line"><span style="color:#A6ACCD;">$clr-danger</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">#</span><span style="color:#89DDFF;"> for</span><span style="color:#A6ACCD;"> light backgrounds</span></span>
<span class="line"><span style="color:#A6ACCD;">$clr-primary-text-light</span></span>
<span class="line"><span style="color:#A6ACCD;">$clr-secondary-text-light</span></span>
<span class="line"><span style="color:#A6ACCD;">$clr-disabled-text-light</span></span>
<span class="line"><span style="color:#A6ACCD;">$clr-dividers-light</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">#</span><span style="color:#89DDFF;"> for</span><span style="color:#A6ACCD;"> dark backgrounds</span></span>
<span class="line"><span style="color:#A6ACCD;">$clr-primary-text-dark</span></span>
<span class="line"><span style="color:#A6ACCD;">$clr-secondary-text-dark</span></span>
<span class="line"><span style="color:#A6ACCD;">$clr-disabled-text-dark</span></span>
<span class="line"><span style="color:#A6ACCD;">$clr-dividers-dark</span></span>
<span class="line"></span></code></pre></div><p>all color names here: <a href="https://www.materialui.co/colors" target="_blank" rel="noreferrer">https://www.materialui.co/colors</a></p><h2 id="card" tabindex="-1">card <a class="header-anchor" href="#card" aria-hidden="true">#</a></h2><div class="mixin-card"> a card </div><div class="language-stylus"><button class="copy"></button><span class="lang">stylus</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">card-to-be</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">card</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div><h3 id="raised" tabindex="-1">raised <a class="header-anchor" href="#raised" aria-hidden="true">#</a></h3><div class="mixin-card-raised"> a card </div><div class="language-stylus"><button class="copy"></button><span class="lang">stylus</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">card-to-be-raised</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">card-raised</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div><h2 id="shadows" tabindex="-1">shadows <a class="header-anchor" href="#shadows" aria-hidden="true">#</a></h2><div class="mixin-shadow-bottom"> shadowing! </div><div class="language-stylus"><button class="copy"></button><span class="lang">stylus</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">shadow-on-top</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">parting-shadow-bottom</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">shadow-on-bottom</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">parting-shadow-top</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div><h2 id="separators" tabindex="-1">separators <a class="header-anchor" href="#separators" aria-hidden="true">#</a></h2><div class="mixin-separator"></div><div class="language-stylus"><button class="copy"></button><span class="lang">stylus</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">separator-on-top</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">border-top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">border-separator</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">separator-on-top-in-the-dark</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">border-top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">border-separator-dark</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div><h2 id="table" tabindex="-1">table <a class="header-anchor" href="#table" aria-hidden="true">#</a></h2><div class="language-stylus"><button class="copy"></button><span class="lang">stylus</span><pre><code><span class="line"><span style="color:#82AAFF;">table</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div>`,19),o=[p];function r(t,c,i,d,y,h){return n(),a("div",null,o)}const D=s(e,[["render",r]]);export{u as __pageData,D as default};
