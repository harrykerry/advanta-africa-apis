<template><div><h1 id="delivery-reports" tabindex="-1"><a class="header-anchor" href="#delivery-reports"><span>DELIVERY REPORTS</span></a></h1>
<p>The <strong>Delivery Reports (DLR)</strong> API allows you to check the status of sent messages by retrieving their delivery reports using the <strong>message ID</strong>.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tip</p>
<p>Instead of periodically fetching delivery reports, you can configure an endpoint on your account to receive delivery reports in real-time. This ensures that message statuses are automatically updated without the need for manual requests.See below</p>
</div>
<h2 id="get-method" tabindex="-1"><a class="header-anchor" href="#get-method"><span>GET Method</span></a></h2>
<p><strong>Endpoint:</strong></p>
<p><code v-pre>https://{{url}}/api/services/getdlr</code></p>
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
<td><code v-pre>messageID</code></td>
<td>Message ID returned when SMS was sent</td>
</tr>
</tbody>
</table>
<p><strong>Example Request (GET):</strong></p>
<p><code v-pre>https://{{url}}/api/services/getdlr?apikey={{apikey}}&amp;partnerID={{partnerID}}&amp;messageID={{messageID}</code></p>
<h2 id="post-method" tabindex="-1"><a class="header-anchor" href="#post-method"><span>POST Method</span></a></h2>
<p><code v-pre>https://{{url}}/api/services/getdlr</code></p>
<p><strong>Request Body:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"apikey"</span><span class="token operator">:</span> <span class="token string">"{{apikey}}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"partnerID"</span><span class="token operator">:</span> <span class="token string">"{{partnerID}}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"messageID"</span><span class="token operator">:</span> <span class="token string">"{{messageID}}"</span>  <span class="token comment">// The ID of the message to get the delivery report for</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Sample Success Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"response-code"</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"message-id"</span><span class="token operator">:</span><span class="token string">"xxxxxxxxx"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"response-description"</span><span class="token operator">:</span><span class="token string">"Success"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"delivery-status"</span><span class="token operator">:</span><span class="token number">32</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"delivery-description"</span><span class="token operator">:</span><span class="token string">"DeliveredToTerminal"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"delivery-tat"</span><span class="token operator">:</span><span class="token string">"00:02:30"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"delivery-networkid"</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"delivery-time"</span><span class="token operator">:</span><span class="token string">"2024-11-01 11:15:32"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Sample Error Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"response-code"</span><span class="token operator">:</span><span class="token number">1009</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"response-description"</span><span class="token operator">:</span><span class="token string">"No dlr"</span>'</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="steps-to-configure-callback-url" tabindex="-1"><a class="header-anchor" href="#steps-to-configure-callback-url"><span><strong>Steps to Configure Callback URL:</strong></span></a></h3>
<ol>
<li>Log into your <strong>SMS account</strong>.</li>
<li>Click on <strong>Partners</strong> in the left menu.</li>
<li>Select the <strong>account</strong> for which you want to configure the callback.</li>
<li>Toggle the <strong>API</strong> option.</li>
<li>Scroll down to <strong>Callback URL</strong>.</li>
<li>Enter your <strong>callback URL</strong> where the reports should be sent.</li>
<li>Click <strong>Save</strong> to apply the changes.</li>
</ol>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p>Once configured, delivery reports will be automatically posted to your specified Callback URL, eliminating the need for manual requests.</p>
</div>
</div></template>


