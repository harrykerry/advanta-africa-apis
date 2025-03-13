<template><div><h1 id="credit-api" tabindex="-1"><a class="header-anchor" href="#credit-api"><span>CREDIT API</span></a></h1>
<p>The <strong>Reseller Credit API</strong> allows you to transfer SMS credits to your sub-accounts or clients.</p>
<h2 id="important-notes" tabindex="-1"><a class="header-anchor" href="#important-notes"><span>Important Notes</span></a></h2>
<ul>
<li>The <strong>apikey</strong> and <strong>partnerID</strong> must belong to your reseller account.</li>
<li>The <strong>childID</strong> can either be the client's <strong>username</strong> or <strong>partnerID</strong>.</li>
<li>The <strong>amount</strong> is in <strong>Kenyan Shillings</strong>, and the system will convert it into SMS units based on the configured SMS rate.</li>
<li>If no SMS rate is set, the system defaults to an SMS rate of <strong>1</strong>.</li>
<li>You will receive a response indicating the status of the transaction.</li>
<li>Once an account is credited, the transaction details will be recorded in the <strong>Credit History</strong> section, just like manual credit loading.</li>
</ul>
<h2 id="post-method" tabindex="-1"><a class="header-anchor" href="#post-method"><span>POST Method</span></a></h2>
<p><strong>Endpoint:</strong>
<code v-pre>https://{{url}}/api/services/credit</code></p>
<p><strong>Request Body:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"apikey"</span><span class="token operator">:</span> <span class="token string">"{{apikey}}"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"partnerID"</span><span class="token operator">:</span> <span class="token string">"{{partnerID}}"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"childID"</span><span class="token operator">:</span> <span class="token string">"{{childID}}"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token string">"{{amount}}"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


