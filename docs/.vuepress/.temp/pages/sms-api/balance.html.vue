<template><div><h1 id="sms-account-balance" tabindex="-1"><a class="header-anchor" href="#sms-account-balance"><span>SMS ACCOUNT BALANCE</span></a></h1>
<p>The <strong>SMS Account Balance</strong> API allows you to check the available balance in your SMS account. This ensures that you have sufficient credits before sending messages.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tip</p>
<p>Checkout code examples in send SMS</p>
</div>
<h2 id="get-method" tabindex="-1"><a class="header-anchor" href="#get-method"><span>GET Method</span></a></h2>
<p><strong>Endpoint:</strong></p>
<p><code v-pre>https://{{url}}/api/services/getbalance</code></p>
<p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>apikey</code></td>
<td>Your valid API key</td>
</tr>
<tr>
<td><code v-pre>partnerID</code></td>
<td>Your Partner ID</td>
</tr>
</tbody>
</table>
<p><strong>Example Request (GET):</strong></p>
<p><code v-pre>https://{{url}}/api/services/getbalance?apikey={{apikey}}&amp;partnerID={{partnerID}}</code></p>
<h2 id="post-method" tabindex="-1"><a class="header-anchor" href="#post-method"><span>POST Method</span></a></h2>
<p><code v-pre>https://{{url}}/api/services/getbalance</code></p>
<p><strong>Request Body:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"apikey"</span><span class="token operator">:</span> <span class="token string">"{{apikey}}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"partnerID"</span><span class="token operator">:</span> <span class="token string">"{{partnerID}}"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Sample Success Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"response-code"</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"credit"</span><span class="token operator">:</span><span class="token string">"545.00"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"partner-id"</span><span class="token operator">:</span><span class="token string">"xxxxx"</span></span>
<span class="line">  </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Sample Error Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"response-code"</span><span class="token operator">:</span><span class="token number">1006</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"response-description"</span><span class="token operator">:</span><span class="token string">"Invalid credentials"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


