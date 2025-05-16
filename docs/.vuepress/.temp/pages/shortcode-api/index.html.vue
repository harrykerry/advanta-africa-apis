<template><div><h1 id="shortcode-guide" tabindex="-1"><a class="header-anchor" href="#shortcode-guide"><span>SHORTCODE GUIDE</span></a></h1>
<p>The <strong>Shortcode Guide</strong> provides instructions for setting up an endpoint that we will configure on the client's shortcode.</p>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p>Clients must first acquire a <strong>dedicated</strong> or <strong>shared</strong> shortcode from us before proceeding with the setup. Shared shortcodes will always be configured using keywords.</p>
</div>
<h2 id="setting-up-your-endpoint" tabindex="-1"><a class="header-anchor" href="#setting-up-your-endpoint"><span><strong>Setting Up Your Endpoint</strong></span></a></h2>
<p>Once you have acquired a shortcode, you need to provide an endpoint that accepts either <strong>GET</strong> or <strong>POST</strong> requests. This endpoint should be able to handle the following parameters:</p>
<p><strong>Non-interactive Shortcode</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong><code v-pre>shortcode</code></strong></td>
<td>The assigned shortcode.</td>
</tr>
<tr>
<td><strong><code v-pre>mobile</code></strong></td>
<td>The recipient's phone number.</td>
</tr>
<tr>
<td><strong><code v-pre>message</code></strong></td>
<td>The message content.</td>
</tr>
<tr>
<td><strong><code v-pre>Custom</code></strong></td>
<td>If required, share any extra details such as authentication keys or specific request headers.</td>
</tr>
</tbody>
</table>
<p><strong>Interactive Shortcode</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong><code v-pre>shortcode</code></strong></td>
<td>The assigned shortcode.</td>
</tr>
<tr>
<td><strong><code v-pre>msisdn</code></strong></td>
<td>The recipient's phone number.</td>
</tr>
<tr>
<td><strong><code v-pre>partnerId</code></strong></td>
<td>The message content.</td>
</tr>
<tr>
<td><strong><code v-pre>Custom</code></strong></td>
<td>If required, share any extra details such as authentication keys or specific request headers.</td>
</tr>
</tbody>
</table>
<h3 id="sample-payload" tabindex="-1"><a class="header-anchor" href="#sample-payload"><span><strong>Sample Payload</strong></span></a></h3>
<p><strong>GET:</strong></p>
<p><strong>Non-Interactive Shortcode</strong></p>
<p><code v-pre>https://{{yourCallBack}}?shortcode=12345&amp;mobile=2547XXXXXXXX&amp;message=JOIN</code></p>
<p><strong>Interactive Shortcode</strong></p>
<p><code v-pre>https://{{yourCallBack}}?shortcode=12345&amp;msisdn=2547XXXXXXXX&amp;message=JOIN&amp;partnerId=XYZ123</code></p>
<p><strong>POST:</strong></p>
<p>Below is an example of the JSON payload that will be sent to your endpoint:</p>
<p><strong>Non-Interactive Shortcode</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"shortcode"</span><span class="token operator">:</span> <span class="token string">"12345"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"mobile"</span><span class="token operator">:</span> <span class="token string">"2547XXXXXXXX"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Hello, this is a test message."</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Interactive Shortcode</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"shortcode"</span><span class="token operator">:</span> <span class="token string">"12345"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"msisdn"</span><span class="token operator">:</span> <span class="token string">"2547XXXXXXXX"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Hello, this is a test message."</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"partnerId"</span><span class="token operator">:</span> <span class="token string">"1001"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Ensure your endpoint is capable of handling and processing these requests efficiently. Our timeout is 15 seconds, after which the request is considered failed if no response is received.</p>
<p>Your endpoint can return an auto-response, which we will send to the user automatically via your SMS account. Alternatively, you can trigger the response yourself using the SMS API after receiving the inbound message.</p>
<p>If you choose the auto-response option (Option 1), please inform us so we can enable it on our side.</p>
</div>
</div></template>


