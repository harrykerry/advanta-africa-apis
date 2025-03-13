<template><div><h1 id="airtime-api" tabindex="-1"><a class="header-anchor" href="#airtime-api"><span>AIRTIME API</span></a></h1>
<p>The <strong>Airtime API</strong> allows you to disburse airtime to your customer base.</p>
<h2 id="authentication" tabindex="-1"><a class="header-anchor" href="#authentication"><span>Authentication</span></a></h2>
<p>To interact with the application, you will need to acquire an <strong>APP_KEY</strong> and <strong>APP_TOKEN</strong>.</p>
<h3 id="steps-to-obtain-api-credentials" tabindex="-1"><a class="header-anchor" href="#steps-to-obtain-api-credentials"><span>Steps to Obtain API Credentials:</span></a></h3>
<ol>
<li>Log in to your <strong>QuickSMS</strong> account.</li>
<li>On the left-side menu, click on <strong>API Apps</strong>.</li>
<li>Create a new app or select an existing one.</li>
<li>Click on <strong>Settings</strong>.</li>
<li>Generate an <strong>APP_TOKEN</strong> and store it safely (it will only be displayed once).</li>
<li>Copy your <strong>APP_KEY</strong> and use it in your application.</li>
</ol>
<p><strong>Important Notes:</strong></p>
<ul>
<li>The <strong>APP_TOKEN</strong> is displayed only once when generated. Keep it secure.</li>
<li>Generating a new token will invalidate all existing ones immediately.</li>
<li>Only generate a new token if your current one is lost or exposed.</li>
</ul>
<h3 id="required-headers" tabindex="-1"><a class="header-anchor" href="#required-headers"><span>Required Headers</span></a></h3>
<p>Every request to the API must include the following headers:</p>
<table>
<thead>
<tr>
<th>Header</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>Content-Type</code></td>
<td><code v-pre>application/json</code></td>
</tr>
<tr>
<td><code v-pre>App-Key</code></td>
<td><code v-pre>[YOUR_APP_KEY]</code></td>
</tr>
<tr>
<td><code v-pre>App-Token</code></td>
<td><code v-pre>[YOUR_APP_TOKEN]</code></td>
</tr>
</tbody>
</table>
<hr>
<h2 id="post-method" tabindex="-1"><a class="header-anchor" href="#post-method"><span>POST Method</span></a></h2>
<p><code v-pre>https://{{url}}/api/v3/airtime/send</code></p>
<p><strong>Request Body:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"recipients"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"recipient"</span><span class="token operator">:</span> <span class="token string">"2547XXXXXX"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">100</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"recipient"</span><span class="token operator">:</span> <span class="token string">"2547XXXXXX"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">100</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Sample Success Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Total:1 Success:1 Failed:0"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"results"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"recipient"</span><span class="token operator">:</span> <span class="token string">"2547XXXXXXXX"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">201</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">0.4</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"queued for disbursal"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"request_id"</span><span class="token operator">:</span> <span class="token number">10990</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"recipient"</span><span class="token operator">:</span> <span class="token string">"2547XXXXXXXX"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">201</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"discount"</span><span class="token operator">:</span> <span class="token number">0.4</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"queued for disbursal"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"request_id"</span><span class="token operator">:</span> <span class="token number">10991</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="key-considerations" tabindex="-1"><a class="header-anchor" href="#key-considerations"><span>Key Considerations</span></a></h2>
<ul>
<li>You can have from one up to 1,000 recipients per request</li>
<li>Maximum amount is KES 10,000</li>
<li>Minimum amount is KES 10</li>
</ul>
</div></template>


