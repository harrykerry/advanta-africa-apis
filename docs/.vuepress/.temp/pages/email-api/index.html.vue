<template><div><h1 id="email-api" tabindex="-1"><a class="header-anchor" href="#email-api"><span>EMAIL API</span></a></h1>
<p>The <strong>Email API</strong> allows you to send emails using our API.</p>
<div class="hint-container info">
<p class="hint-container-title">info</p>
<p>To get started with the email service, kindly contact your accout manager. You will need to provide an email that will be configured first as a sender then assigned to your account</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tip</p>
<p>Checkout code examples in send SMS</p>
</div>
<h2 id="post-method" tabindex="-1"><a class="header-anchor" href="#post-method"><span>POST Method</span></a></h2>
<p><code v-pre>https://{{url}}/api/services/send-email</code></p>
<p><strong>Request Body:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"apikey"</span><span class="token operator">:</span> <span class="token string">"xxxxx"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"partnerID"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"from_address"</span><span class="token operator">:</span> <span class="token string">"test@email.com"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"to_address"</span><span class="token operator">:</span> <span class="token string">"testrecipient@email.com"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"subject"</span><span class="token operator">:</span> <span class="token string">"API test"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"body"</span><span class="token operator">:</span> <span class="token string">"This is a test email"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"pass_type"</span><span class="token operator">:</span> <span class="token string">"plain"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Sample Success Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"response-code"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"response-description"</span><span class="token operator">:</span> <span class="token string">"Success"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"recipient"</span><span class="token operator">:</span> <span class="token string">"testrecipient@email.com"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"messageid"</span><span class="token operator">:</span> <span class="token string">"xxxxxxxx"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"cost"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"reason"</span><span class="token operator">:</span> <span class="token string">"1 email sent successfully. Cost: 1 unit"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Sample Error Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"response-code"</span><span class="token operator">:</span><span class="token number">1006</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"response-description"</span><span class="token operator">:</span><span class="token string">"Invalid credentials"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


