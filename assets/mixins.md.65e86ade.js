import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.26ee681c.js";const u=JSON.parse('{"title":"Stylus Mixins","description":"","frontmatter":{"title":"Stylus Mixins"},"headers":[],"relativePath":"mixins.md","filePath":"mixins.md"}'),p={name:"mixins.md"},e=l(`<h1 id="stylus-mixins" tabindex="-1">Stylus Mixins <a class="header-anchor" href="#stylus-mixins" aria-label="Permalink to &quot;Stylus Mixins&quot;">​</a></h1><h2 id="colors" tabindex="-1">colors <a class="header-anchor" href="#colors" aria-label="Permalink to &quot;colors&quot;">​</a></h2><p>buntpapier exposes material design color variables with the <code>$clr-</code> prefix:</p><div class="language-stylus vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">stylus</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FFAB70;">$clr-blue</span></span>
<span class="line"><span style="color:#FFAB70;">$clr-red-700</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">$clr-success</span></span>
<span class="line"><span style="color:#FFAB70;">$clr-warning</span></span>
<span class="line"><span style="color:#FFAB70;">$clr-danger</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;"> for</span><span style="color:#E1E4E8;"> light backgrounds</span></span>
<span class="line"><span style="color:#FFAB70;">$clr-primary-text-light</span></span>
<span class="line"><span style="color:#FFAB70;">$clr-secondary-text-light</span></span>
<span class="line"><span style="color:#FFAB70;">$clr-disabled-text-light</span></span>
<span class="line"><span style="color:#FFAB70;">$clr-dividers-light</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;"> for</span><span style="color:#E1E4E8;"> dark backgrounds</span></span>
<span class="line"><span style="color:#FFAB70;">$clr-primary-text-dark</span></span>
<span class="line"><span style="color:#FFAB70;">$clr-secondary-text-dark</span></span>
<span class="line"><span style="color:#FFAB70;">$clr-disabled-text-dark</span></span>
<span class="line"><span style="color:#FFAB70;">$clr-dividers-dark</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#E36209;">$clr-blue</span></span>
<span class="line"><span style="color:#E36209;">$clr-red-700</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E36209;">$clr-success</span></span>
<span class="line"><span style="color:#E36209;">$clr-warning</span></span>
<span class="line"><span style="color:#E36209;">$clr-danger</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;"> for</span><span style="color:#24292E;"> light backgrounds</span></span>
<span class="line"><span style="color:#E36209;">$clr-primary-text-light</span></span>
<span class="line"><span style="color:#E36209;">$clr-secondary-text-light</span></span>
<span class="line"><span style="color:#E36209;">$clr-disabled-text-light</span></span>
<span class="line"><span style="color:#E36209;">$clr-dividers-light</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;"> for</span><span style="color:#24292E;"> dark backgrounds</span></span>
<span class="line"><span style="color:#E36209;">$clr-primary-text-dark</span></span>
<span class="line"><span style="color:#E36209;">$clr-secondary-text-dark</span></span>
<span class="line"><span style="color:#E36209;">$clr-disabled-text-dark</span></span>
<span class="line"><span style="color:#E36209;">$clr-dividers-dark</span></span></code></pre></div><p>all color names here: <a href="https://www.materialui.co/colors" target="_blank" rel="noreferrer">https://www.materialui.co/colors</a></p><h2 id="card" tabindex="-1">card <a class="header-anchor" href="#card" aria-label="Permalink to &quot;card&quot;">​</a></h2><div class="mixin-card"> a card </div><div class="language-stylus vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">stylus</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">.card-to-be</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">card</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">.card-to-be</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">card</span><span style="color:#24292E;">()</span></span></code></pre></div><h3 id="raised" tabindex="-1">raised <a class="header-anchor" href="#raised" aria-label="Permalink to &quot;raised&quot;">​</a></h3><div class="mixin-card-raised"> a card </div><div class="language-stylus vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">stylus</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">.card-to-be-raised</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">card-raised</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">.card-to-be-raised</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">card-raised</span><span style="color:#24292E;">()</span></span></code></pre></div><h2 id="shadows" tabindex="-1">shadows <a class="header-anchor" href="#shadows" aria-label="Permalink to &quot;shadows&quot;">​</a></h2><div class="mixin-shadow-bottom"> shadowing! </div><div class="language-stylus vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">stylus</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">.shadow-on-top</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">parting-shadow-bottom</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">.shadow-on-bottom</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">parting-shadow-top</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">.shadow-on-top</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">parting-shadow-bottom</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6F42C1;">.shadow-on-bottom</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">parting-shadow-top</span><span style="color:#24292E;">()</span></span></code></pre></div><h2 id="separators" tabindex="-1">separators <a class="header-anchor" href="#separators" aria-label="Permalink to &quot;separators&quot;">​</a></h2><div class="mixin-separator"></div><div class="language-stylus vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">stylus</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">.separator-on-top</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">border-top</span><span style="color:#E1E4E8;">: </span><span style="color:#B392F0;">border-separator</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">.separator-on-top-in-the-dark</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">border-top</span><span style="color:#E1E4E8;">: </span><span style="color:#B392F0;">border-separator-dark</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">.separator-on-top</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">border-top</span><span style="color:#24292E;">: </span><span style="color:#6F42C1;">border-separator</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6F42C1;">.separator-on-top-in-the-dark</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">border-top</span><span style="color:#24292E;">: </span><span style="color:#6F42C1;">border-separator-dark</span><span style="color:#24292E;">()</span></span></code></pre></div><h2 id="table" tabindex="-1">table <a class="header-anchor" href="#table" aria-label="Permalink to &quot;table&quot;">​</a></h2><div class="language-stylus vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">stylus</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">table</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">table</span><span style="color:#24292E;">()</span></span></code></pre></div>`,19),o=[e];function t(r,c,i,d,y,h){return a(),n("div",null,o)}const b=s(p,[["render",t]]);export{u as __pageData,b as default};
