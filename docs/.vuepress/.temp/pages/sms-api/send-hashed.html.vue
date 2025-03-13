<template><div><h1 id="sms-to-hashed-safaricom-numbers" tabindex="-1"><a class="header-anchor" href="#sms-to-hashed-safaricom-numbers"><span>SMS  TO HASHED SAFARICOM NUMBERS</span></a></h1>
<p>This endpoint is used to send messages to Safaricom hashed numbers.Make sure the hashed values start with 254 before hashing</p>
<div class="hint-container caution">
<p class="hint-container-title">Caution</p>
<p>This endpoint is strictly for sending transactional messages only.We do not allow promotional content on hashed numbers.The hashing mechanism was introduced to ensure compliance with regulatory requirements.</p>
<p>Any misuse of this endpoint for promotional messaging will result in strict measures, including potential suspension or blacklisting.Ensure all messages sent comply with guidelines.</p>
</div>
<h2 id="post-method" tabindex="-1"><a class="header-anchor" href="#post-method"><span>POST Method</span></a></h2>
<p><strong>Endpoint:</strong></p>
<p><code v-pre>https://{{url}}/api/services/sendotp</code></p>
<p><strong>Request Body:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"apikey"</span><span class="token operator">:</span> <span class="token string">"{{apikey}}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"partnerID"</span><span class="token operator">:</span> <span class="token string">"{{partnerID}}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"mobile"</span><span class="token operator">:</span> <span class="token string">"{{mobile}}"</span><span class="token punctuation">,</span> <span class="token comment">//hashed msisdn</span></span>
<span class="line">  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"{{message}}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"shortcode"</span><span class="token operator">:</span> <span class="token string">"{{shortcode}}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"hashed"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Sample Success Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"responses"</span><span class="token operator">:</span><span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token property">"response-code"</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"response-description"</span><span class="token operator">:</span><span class="token string">"Success"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"mobile"</span><span class="token operator">:</span><span class="token string">"xxxxxxxxxxxxx"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"messageid"</span><span class="token operator">:</span><span class="token string">"xxxxxxxxxxxxx"</span><span class="token punctuation">,</span> <span class="token comment">//string for this api</span></span>
<span class="line">    <span class="token property">"networkid"</span><span class="token operator">:</span><span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Sample Error Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"response-code"</span><span class="token operator">:</span><span class="token number">1006</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"response-description"</span><span class="token operator">:</span><span class="token string">"Invalid credentials"</span>'</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


