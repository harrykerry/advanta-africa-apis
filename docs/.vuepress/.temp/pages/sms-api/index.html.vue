<template><div><h1 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents"><span>Table of Contents</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#required-credentials">Required Credentials</router-link></li><li><router-link to="#access-api-credentials">Access API Credentials</router-link></li><li><router-link to="#retrieving-api-credentials">Retrieving API Credentials</router-link></li><li><router-link to="#securing-api-access">Securing API Access</router-link></li><li><router-link to="#important-notes">Important Notes</router-link></li></ul></nav>
<h1 id="sms-api" tabindex="-1"><a class="header-anchor" href="#sms-api"><span>SMS API</span></a></h1>
<p>The SMS API allows you to integrate SMS capabilities into your systems, enabling the automatic delivery of SMS for generating receipts, alerts, and other communications to your clients or customers.</p>
<h3 id="required-credentials" tabindex="-1"><a class="header-anchor" href="#required-credentials"><span>Required Credentials</span></a></h3>
<p>To start using the API, you need the following credentials, which can be obtained from your SMS account:</p>
<ul>
<li>
<p><strong>API Key</strong><br>
A unique key that authenticates your API requests.</p>
</li>
<li>
<p><strong>Partner ID</strong><br>
A unique ID assigned to your SMS account.</p>
</li>
<li>
<p><strong>Shortcode</strong><br>
The sender ID used for sending messages. This is the assigned sender ID for your account.</p>
</li>
</ul>
<h3 id="access-api-credentials" tabindex="-1"><a class="header-anchor" href="#access-api-credentials"><span>Access API Credentials</span></a></h3>
<ol>
<li>Log into your SMS account.</li>
<li>Click on <strong>Partners</strong> on the left menu.</li>
<li>Select the account you want to access API Credentials for.</li>
<li>Toggle the API option.</li>
</ol>
<h3 id="retrieving-api-credentials" tabindex="-1"><a class="header-anchor" href="#retrieving-api-credentials"><span>Retrieving API Credentials</span></a></h3>
<ol>
<li>Scroll down to access your <strong>Partner ID</strong>.</li>
<li>Scroll further down to enter your password and generate an <strong>API Key</strong>.</li>
<li>The API Key changes every time it is generated, so store it securely.</li>
</ol>
<h3 id="securing-api-access" tabindex="-1"><a class="header-anchor" href="#securing-api-access"><span>Securing API Access</span></a></h3>
<p>For additional security, you can restrict API calls to specific IP addresses:</p>
<ol>
<li>Scroll down to the <strong>Allowed IP Addresses</strong> section.</li>
<li>Click <strong>Start Editing</strong>.</li>
<li>Enter the allowed IP addresses, separated by commas if multiple.</li>
<li>Click <strong>Save</strong> to apply the restrictions.</li>
</ol>
<h3 id="important-notes" tabindex="-1"><a class="header-anchor" href="#important-notes"><span>Important Notes</span></a></h3>
<ul>
<li>Ensure that your message follows the <strong>GSM7 character encoding</strong> standard for compatibility.</li>
<li>The mobile number must be in a valid format (e.g., for Kenyan numbers: <code v-pre>254xxxxxxxx</code> or <code v-pre>07xxxxxxxx</code>).</li>
</ul>
<p>Once you have these credentials, you can begin using the API to send messages, check delivery reports, and more.</p>
<p><RouteLink to="/sms-api/send-sms.html">Get Started</RouteLink></p>
</div></template>


