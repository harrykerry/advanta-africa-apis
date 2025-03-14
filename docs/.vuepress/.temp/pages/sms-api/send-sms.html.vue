<template><div><h1 id="send-sms" tabindex="-1"><a class="header-anchor" href="#send-sms"><span>SEND SMS</span></a></h1>
<p>The <strong>Send SMS</strong> API allows you to send SMS messages to recipients using your assigned shortcode.<br>
It supports sending a message to a <strong>single number</strong> via GET and to <strong>one or multiple numbers</strong> via POST.<br>
For multiple numbers, provide them as a <strong>comma-separated string</strong> (maximum <strong>1000 numbers</strong> per request).</p>
<div class="hint-container tip">
<p class="hint-container-title">Tip</p>
<p>To schecule messages add <code v-pre>timeToSend</code> in the POST request with a valid date string that resolves to a Unix timestamp or the unix timestamp itself.For example &quot;2019-09-01 18:00&quot;</p>
</div>
<h2 id="get-method" tabindex="-1"><a class="header-anchor" href="#get-method"><span>GET Method</span></a></h2>
<p><strong>Endpoint:</strong></p>
<p><code v-pre>https://{{url}}/api/services/sendsms</code></p>
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
<td>URL-encoded message (GSM7)</td>
</tr>
<tr>
<td><code v-pre>shortcode</code></td>
<td>Sender ID/Shortcode</td>
</tr>
<tr>
<td><code v-pre>mobile</code></td>
<td>Recipient Mobile number</td>
</tr>
<tr>
<td><code v-pre>timeToSend</code></td>
<td>Optional param</td>
</tr>
</tbody>
</table>
<p><strong>Example Request (GET):</strong></p>
<p><code v-pre>https://{{url}}/api/services/sendsms?apikey={{apikey}}&amp;partnerID={{partnerID}}&amp;message={{message}}&amp;shortcode={{shortcode}}&amp;mobile={{mobile}}</code></p>
<h2 id="post-method" tabindex="-1"><a class="header-anchor" href="#post-method"><span>POST Method</span></a></h2>
<p><strong>Endpoint:</strong></p>
<p><code v-pre>https://{{url}}/api/services/sendsms</code></p>
<p><strong>Request Body:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"apikey"</span><span class="token operator">:</span> <span class="token string">"{{apikey}}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"partnerID"</span><span class="token operator">:</span> <span class="token string">"{{partnerID}}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"{{message}}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"shortcode"</span><span class="token operator">:</span> <span class="token string">"{{shortcode}}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"mobile"</span><span class="token operator">:</span> <span class="token string">"{{mobile}}"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Sample Success Response:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"responses"</span><span class="token operator">:</span><span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token property">"response-code"</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"response-description"</span><span class="token operator">:</span><span class="token string">"Success"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"mobile"</span><span class="token operator">:</span>xxxxxxxxxxxxx<span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"messageid"</span><span class="token operator">:</span><span class="token string">"xxxxxxxxxxx"</span><span class="token punctuation">,</span> <span class="token comment">//integer for this API</span></span>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Code Examples (GET Request)</strong></p>
<CodeTabs id="115" :data='[{"id":"PHP"},{"id":"Node.js"},{"id":"Python"}]'>
<template #title0="{ value, isActive }">PHP</template>
<template #title1="{ value, isActive }">Node.js</template>
<template #title2="{ value, isActive }">Python</template>
<template #tab0="{ value, isActive }">
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php"><pre v-pre><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"><span class="token variable">$curl</span> <span class="token operator">=</span> <span class="token function">curl_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">curl_setopt_array</span><span class="token punctuation">(</span><span class="token variable">$curl</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token constant">CURLOPT_URL</span> <span class="token operator">=></span> <span class="token string double-quoted-string">"https://{{url}}/api/services/sendsms?apikey={{apikey}}&amp;partnerID={{partnerID}}&amp;message={{message}}&amp;shortcode={{shortcode}}&amp;mobile={{mobile}}"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token constant">CURLOPT_RETURNTRANSFER</span> <span class="token operator">=></span> <span class="token constant boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token constant">CURLOPT_CUSTOMREQUEST</span> <span class="token operator">=></span> <span class="token string double-quoted-string">"GET"</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$response</span> <span class="token operator">=</span> <span class="token function">curl_exec</span><span class="token punctuation">(</span><span class="token variable">$curl</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">curl_close</span><span class="token punctuation">(</span><span class="token variable">$curl</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">echo</span> <span class="token variable">$response</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token delimiter important">?></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> axios <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'axios'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'https://{{url}}/api/services/sendsms'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">apikey</span><span class="token operator">:</span> <span class="token string">'{{apikey}}'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">partnerID</span><span class="token operator">:</span> <span class="token string">'{{partnerID}}'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'{{message}}'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">shortcode</span><span class="token operator">:</span> <span class="token string">'{{shortcode}}'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">mobile</span><span class="token operator">:</span> <span class="token string">'{{mobile}}'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code><span class="line"><span class="token keyword">import</span> requests</span>
<span class="line">response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">"https://{{url}}/api/services/sendsms"</span><span class="token punctuation">,</span> params<span class="token operator">=</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">"apikey"</span><span class="token punctuation">:</span> <span class="token string">"{{apikey}}"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"partnerID"</span><span class="token punctuation">:</span> <span class="token string">"{{partnerID}}"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"message"</span><span class="token punctuation">:</span> <span class="token string">"{{message}}"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"shortcode"</span><span class="token punctuation">:</span> <span class="token string">"{{shortcode}}"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"mobile"</span><span class="token punctuation">:</span> <span class="token string">"{{mobile}}"</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>text<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p><strong>Code Examples (POST Request)</strong></p>
<CodeTabs id="129" :data='[{"id":"PHP"},{"id":"Node.js"},{"id":"Python"}]'>
<template #title0="{ value, isActive }">PHP</template>
<template #title1="{ value, isActive }">Node.js</template>
<template #title2="{ value, isActive }">Python</template>
<template #tab0="{ value, isActive }">
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php"><pre v-pre><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"><span class="token variable">$curl</span> <span class="token operator">=</span> <span class="token function">curl_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">curl_setopt_array</span><span class="token punctuation">(</span><span class="token variable">$curl</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token constant">CURLOPT_URL</span> <span class="token operator">=></span> <span class="token string double-quoted-string">"https://{{url}}/api/services/sendsms"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token constant">CURLOPT_RETURNTRANSFER</span> <span class="token operator">=></span> <span class="token constant boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token constant">CURLOPT_POST</span> <span class="token operator">=></span> <span class="token constant boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token constant">CURLOPT_POSTFIELDS</span> <span class="token operator">=></span> <span class="token function">json_encode</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">        <span class="token string double-quoted-string">"apikey"</span> <span class="token operator">=></span> <span class="token string double-quoted-string">"{{apikey}}"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string double-quoted-string">"partnerID"</span> <span class="token operator">=></span> <span class="token string double-quoted-string">"{{partnerID}}"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string double-quoted-string">"message"</span> <span class="token operator">=></span> <span class="token string double-quoted-string">"{{message}}"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string double-quoted-string">"shortcode"</span> <span class="token operator">=></span> <span class="token string double-quoted-string">"{{shortcode}}"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string double-quoted-string">"mobile"</span> <span class="token operator">=></span> <span class="token string double-quoted-string">"{{mobile}}"</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token constant">CURLOPT_HTTPHEADER</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'Content-Type: application/json'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$response</span> <span class="token operator">=</span> <span class="token function">curl_exec</span><span class="token punctuation">(</span><span class="token variable">$curl</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">curl_close</span><span class="token punctuation">(</span><span class="token variable">$curl</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">echo</span> <span class="token variable">$response</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token delimiter important">?></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> axios <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'axios'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'https://{{url}}/api/services/sendsms'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">apikey</span><span class="token operator">:</span> <span class="token string">'{{apikey}}'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">partnerID</span><span class="token operator">:</span> <span class="token string">'{{partnerID}}'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'{{message}}'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">shortcode</span><span class="token operator">:</span> <span class="token string">'{{shortcode}}'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">mobile</span><span class="token operator">:</span> <span class="token string">'{{mobile}}'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code><span class="line"><span class="token keyword">import</span> requests</span>
<span class="line">url <span class="token operator">=</span> <span class="token string">"https://{{url}}/api/services/sendsms"</span></span>
<span class="line">payload <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">"apikey"</span><span class="token punctuation">:</span> <span class="token string">"{{apikey}}"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"partnerID"</span><span class="token punctuation">:</span> <span class="token string">"{{partnerID}}"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"message"</span><span class="token punctuation">:</span> <span class="token string">"{{message}}"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"shortcode"</span><span class="token punctuation">:</span> <span class="token string">"{{shortcode}}"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"mobile"</span><span class="token punctuation">:</span> <span class="token string">"{{mobile}}"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">response <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span>url<span class="token punctuation">,</span> json<span class="token operator">=</span>payload<span class="token punctuation">,</span> headers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'Content-Type'</span><span class="token punctuation">:</span> <span class="token string">'application/json'</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>text<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
</div></template>


