<template><div><h1 id="smpp-configuration-documentation" tabindex="-1"><a class="header-anchor" href="#smpp-configuration-documentation"><span>SMPP Configuration Documentation</span></a></h1>
<p>The <strong>Advanta SMS SMPP API</strong> offers an <strong>SMPP SERVER connection</strong> using our standard authentication system and error codes.</p>
<p>We are <strong>SMPP v3.4 protocol compliant</strong> for standard SMS functionality. If you have any uncertainties, please contact <strong>tech@advantasms.com</strong>.</p>
<p>For a detailed understanding of SMPP 3.4, refer to:</p>
<ul>
<li><a href="http://www.smsforum.net" target="_blank" rel="noopener noreferrer">SMPP Forum</a></li>
<li><a href="http://www.smpp.org" target="_blank" rel="noopener noreferrer">SMPP Organization</a></li>
</ul>
<p>You can download the <strong>SMPP v3.4 specification</strong> from:</p>
<ul>
<li><a href="http://www.smpp.org/doc/public/index.html" target="_blank" rel="noopener noreferrer">SMPP v3.4 Documentation</a></li>
</ul>
<p>This guide provides instructions on setting up an <strong>SMPP Client connection</strong> with the Advanta SMS SMPP server.</p>
<h2 id="configuring-smpp-connection" tabindex="-1"><a class="header-anchor" href="#configuring-smpp-connection"><span>Configuring SMPP Connection</span></a></h2>
<p>You will receive the following credentials for your <strong>SMPP account</strong>:</p>
<h3 id="smpp-server-details" tabindex="-1"><a class="header-anchor" href="#smpp-server-details"><span>SMPP Server Details</span></a></h3>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Host</strong></td>
<td><code v-pre>54.149.178.158</code></td>
</tr>
<tr>
<td><strong>Port</strong></td>
<td><code v-pre>8056</code></td>
</tr>
<tr>
<td><strong>Username (system_id)</strong></td>
<td>Your provided username</td>
</tr>
<tr>
<td><strong>Password</strong></td>
<td>Your provided password</td>
</tr>
<tr>
<td><strong>Maximum Connection Instance</strong></td>
<td>Maximum allowed concurrent connections</td>
</tr>
<tr>
<td><strong>Bind Mode</strong></td>
<td><code v-pre>TRANSCEIVER</code></td>
</tr>
<tr>
<td><strong>Delivery Registration</strong></td>
<td>Success or Failure</td>
</tr>
<tr>
<td><strong>Data Coding</strong></td>
<td>Default</td>
</tr>
<tr>
<td><strong>Source Address (TON/NPI)</strong></td>
<td><code v-pre>ton=0; npi=0</code></td>
</tr>
<tr>
<td><strong>Destination Address (TON/NPI)</strong></td>
<td><code v-pre>ton=0; npi=0</code></td>
</tr>
</tbody>
</table>
<p>Ensure that your <strong>SMPP Client</strong> is correctly configured using the provided details. If you need further assistance, reach out to <strong>tech@advantasms.com</strong>.</p>
</div></template>


