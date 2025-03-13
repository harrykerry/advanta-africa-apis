<template><div><h1 id="send-bulk" tabindex="-1"><a class="header-anchor" href="#send-bulk"><span>SEND BULK</span></a></h1>
<p>The <strong>Send Bulk</strong> API allows you to send up to <strong>1000 unique messages</strong> in a <strong>single request</strong>.<br>
Each message can have a different recipient, message content.</p>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p>The partnerID, apikey, and shortcode should be the same for all JSON objects within the smslist array. Any mismatch will default to using credentials in the first object.</p>
</div>
<h2 id="post-method" tabindex="-1"><a class="header-anchor" href="#post-method"><span>POST Method</span></a></h2>
<p><code v-pre>https://{{url}}/api/services/sendbulk</code></p>
<p><strong>Request Body:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"count"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">// The count of the SMS list</span></span>
<span class="line">    <span class="token property">"smslist"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"partnerID"</span><span class="token operator">:</span> <span class="token string">"{{partnerID}}"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"apikey"</span><span class="token operator">:</span> <span class="token string">"{{apikey}}"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"pass_type"</span><span class="token operator">:</span> <span class="token string">"plain"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"clientsmsid"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>clientsmsid1<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">//Your preferred dynamic identifier</span></span>
<span class="line">            <span class="token property">"mobile"</span><span class="token operator">:</span> <span class="token string">"{{mobile1}}"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"{{message1}}"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"shortcode"</span><span class="token operator">:</span> <span class="token string">"{{shortcode}}"</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"partnerID"</span><span class="token operator">:</span> <span class="token string">"{{partnerID}}"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"apikey"</span><span class="token operator">:</span> <span class="token string">"{{apikey}}"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"pass_type"</span><span class="token operator">:</span> <span class="token string">"plain"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"mobile"</span><span class="token operator">:</span> <span class="token string">"{{mobile2}}"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"clientsmsid"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>clientsmsid2<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"{{message2}}"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"shortcode"</span><span class="token operator">:</span> <span class="token string">"{{shortcode}}"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"pass_type"</span><span class="token operator">:</span> <span class="token string">"{{pass_type}}"</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Sample Success Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"responses"</span><span class="token operator">:</span></span>
<span class="line">    <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"response-code"</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"response-description"</span><span class="token operator">:</span><span class="token string">"Success"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"mobile"</span><span class="token operator">:</span><span class="token string">"xxxxxxxx"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"messageid"</span><span class="token operator">:</span><span class="token string">"xxxxxxxx"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"clientsmsid"</span><span class="token operator">:</span><span class="token number">1234</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"networkid"</span><span class="token operator">:</span><span class="token number">1</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"response-code"</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"response-description"</span><span class="token operator">:</span><span class="token string">"Success"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"mobile"</span><span class="token operator">:</span><span class="token string">"xxxxxxxx"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"messageid"</span><span class="token operator">:</span><span class="token string">"xxxxxxxx"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"clientsmsid"</span><span class="token operator">:</span><span class="token number">1234</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"networkid"</span><span class="token operator">:</span><span class="token number">1</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Sample Error Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"response-code"</span><span class="token operator">:</span><span class="token number">1006</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"response-description"</span><span class="token operator">:</span><span class="token string">"Invalid credentials"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


