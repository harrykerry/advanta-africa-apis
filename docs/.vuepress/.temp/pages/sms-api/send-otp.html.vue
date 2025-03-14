<template><div><h1 id="send-otp" tabindex="-1"><a class="header-anchor" href="#send-otp"><span>SEND OTP</span></a></h1>
<p>This endpoint is used to send OTP (One-Time Password) to a recipient.</p>
<p>It can also be used to send transactional messages such as payment alerts.</p>
<div class="hint-container caution">
<p class="hint-container-title">Caution</p>
<p>This endpoint is strictly for sending <strong>OTP and transactional messages</strong> only.<br>
Any misuse, such as sending promotional or unsolicited messages, is a violation of policy and may result in access restrictions or penalties.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tip</p>
<p>Checkout code examples in send SMS</p>
</div>
<h2 id="get-method" tabindex="-1"><a class="header-anchor" href="#get-method"><span>GET Method</span></a></h2>
<p><strong>Endpoint:</strong></p>
<p><code v-pre>https://{{url}}/api/services/sendotp</code></p>
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
<tr>
<td><code v-pre>message</code></td>
<td>URL-encoded OTP message (GSM7)</td>
</tr>
<tr>
<td><code v-pre>shortcode</code></td>
<td>Sender ID/Shortcode</td>
</tr>
<tr>
<td><code v-pre>mobile</code></td>
<td>Recipient Mobile number</td>
</tr>
</tbody>
</table>
<p><strong>Example Request (GET):</strong></p>
<p><code v-pre>https://{{url}}/api/services/sendotp?apikey={{apikey}}&amp;partnerID={{partnerID}}&amp;message={{message}}&amp;shortcode={{shortcode}}&amp;mobile={{mobile}}</code></p>
<h2 id="post-method" tabindex="-1"><a class="header-anchor" href="#post-method"><span>POST Method</span></a></h2>
<p><strong>Endpoint:</strong></p>
<p><code v-pre>https://{{url}}/api/services/sendotp</code></p>
<p><strong>Request Body:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"apikey"</span><span class="token operator">:</span> <span class="token string">"{{apikey}}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"partnerID"</span><span class="token operator">:</span> <span class="token string">"{{partnerID}}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"mobile"</span><span class="token operator">:</span> <span class="token string">"{{mobile}}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"{{message}}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"shortcode"</span><span class="token operator">:</span> <span class="token string">"{{shortcode}}"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Sample Success Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"responses"</span><span class="token operator">:</span><span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token property">"response-code"</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"response-description"</span><span class="token operator">:</span><span class="token string">"Success"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"mobile"</span><span class="token operator">:</span>xxxxxxxxxxxxx<span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"messageid"</span><span class="token operator">:</span><span class="token string">"xxxxxxxxxxx"</span><span class="token punctuation">,</span> <span class="token comment">//string for this API</span></span>
<span class="line">    <span class="token property">"networkid"</span><span class="token operator">:</span><span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Sample Error Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"response-code"</span><span class="token operator">:</span><span class="token number">1006</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"response-description"</span><span class="token operator">:</span><span class="token string">"Invalid credentials"</span>'</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


