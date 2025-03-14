<template><div><h1 id="ussd-guide" tabindex="-1"><a class="header-anchor" href="#ussd-guide"><span>USSD GUIDE</span></a></h1>
<p>The <strong>USSD Guide</strong> provides instructions for setting up an endpoint that we will configure on the client's USSD code.</p>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p>Clients must first acquire either a <strong>dedicated</strong> or <strong>shared</strong> USSD code from us before proceeding with the setup.</p>
</div>
<h2 id="setting-up-your-ussd-endpoint" tabindex="-1"><a class="header-anchor" href="#setting-up-your-ussd-endpoint"><span>Setting Up Your USSD Endpoint</span></a></h2>
<p>Once you have a USSD code, you must provide us with a <strong>callback URL</strong> where we will forward incoming USSD requests. The callback URL should accept the following parameters:</p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>MSISDN</strong></td>
<td>Mobile number of the end user accessing the USSD service.</td>
</tr>
<tr>
<td><strong>SESSIONID</strong></td>
<td>A unique session ID maintained throughout a USSD session.</td>
</tr>
<tr>
<td><strong>USSDCODE</strong></td>
<td>The assigned USSD code (e.g., <code v-pre>*415#</code>).</td>
</tr>
<tr>
<td><strong>INPUT</strong></td>
<td>The user's latest input, which keeps appending to the initial input. (e.g., <code v-pre>*415*33*1#</code>)</td>
</tr>
</tbody>
</table>
<h2 id="callback-url-format" tabindex="-1"><a class="header-anchor" href="#callback-url-format"><span>Callback URL Format</span></a></h2>
<p>Client system should accept requests in the format sample GET payload below (POST setups can be done on request):</p>
<p><code v-pre>https://{{url}}?SESSIONID=$SESSIONID&amp;USSDCODE=$USSDCODE&amp;MSISDN=$MSISDN&amp;INPUT=$INPUT</code></p>
<h2 id="sample-ussd-flow" tabindex="-1"><a class="header-anchor" href="#sample-ussd-flow"><span>Sample USSD Flow</span></a></h2>
<p>When a user dials the USSD code, the client’s system should respond appropriately based on the user input.</p>
<h3 id="example-1-first-response" tabindex="-1"><a class="header-anchor" href="#example-1-first-response"><span>Example 1: First Response</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">CON Welcome to XXX services. Please select an option:</span>
<span class="line">1. Register</span>
<span class="line">2. Support</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>CON</strong> instructs the Mobile Operator to maintain the session.</p>
<h3 id="example-2-user-selects-option-1-register" tabindex="-1"><a class="header-anchor" href="#example-2-user-selects-option-1-register"><span>Example 2: User Selects Option 1 (Register)</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">CON Please enter your name below:</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="example-3-user-selects-option-2-support" tabindex="-1"><a class="header-anchor" href="#example-3-user-selects-option-2-support"><span>Example 3: User Selects Option 2 (Support)</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">END Contact our support on the following numbers: 2547xxxxxxx, 25402xxxxx.</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>END</strong> instructs the Mobile Operator to terminate the session.</p>
<h2 id="key-considerations" tabindex="-1"><a class="header-anchor" href="#key-considerations"><span>Key Considerations</span></a></h2>
<ul>
<li><strong>Always</strong> prefix responses with <code v-pre>CON</code> to keep the session open.</li>
<li>Use <code v-pre>END</code> when no further interaction is needed.</li>
<li>Client must acquire a <strong>dedicated</strong> or <strong>shared</strong> USSD code before configuring their callback endpoint.</li>
<li>For <strong>shared USSD codes</strong>, the client must handle the <strong>extension</strong> as the <strong>first user input</strong> to differentiate services.</li>
</ul>
</div></template>


