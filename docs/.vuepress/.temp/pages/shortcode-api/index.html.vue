<template><div><h1 id="shortcode-guide" tabindex="-1"><a class="header-anchor" href="#shortcode-guide"><span>SHORTCODE GUIDE</span></a></h1>
<p>The <strong>Shortcode Guide</strong> provides instructions for setting up an endpoint that we will configure on the client's shortcode.</p>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p>Clients must first acquire a <strong>dedicated</strong> or <strong>shared</strong> shortcode from us before proceeding with the setup.</p>
</div>
<h2 id="setting-up-your-endpoint" tabindex="-1"><a class="header-anchor" href="#setting-up-your-endpoint"><span><strong>Setting Up Your Endpoint</strong></span></a></h2>
<p>Once you have acquired a shortcode, you need to provide an endpoint that accepts <strong>POST requests</strong>. This endpoint should be able to handle the following parameters:</p>
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
<td><strong>Additional Parameters</strong></td>
<td>If required, share any extra details such as authentication keys or specific request headers.</td>
</tr>
</tbody>
</table>
<h3 id="sample-payload" tabindex="-1"><a class="header-anchor" href="#sample-payload"><span><strong>Sample Payload</strong></span></a></h3>
<p>Below is an example of the JSON payload that will be sent to your endpoint:</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"shortcode"</span><span class="token operator">:</span> <span class="token string">"12345"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"mobile"</span><span class="token operator">:</span> <span class="token string">"2547XXXXXXXX"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Hello, this is a test message."</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Ensure your endpoint is capable of handling and processing these requests efficiently.</p>
</div>
</div></template>


