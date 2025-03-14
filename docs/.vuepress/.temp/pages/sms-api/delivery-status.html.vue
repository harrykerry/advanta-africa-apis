<template><div><h1 id="delivery-status-descriptions" tabindex="-1"><a class="header-anchor" href="#delivery-status-descriptions"><span>DELIVERY STATUS DESCRIPTIONS</span></a></h1>
<p>Here are the different delivery descriptions on the outbox:</p>
<h2 id="absentsubscriber" tabindex="-1"><a class="header-anchor" href="#absentsubscriber"><span><strong>AbsentSubscriber</strong></span></a></h2>
<p>These are invalid (do not exist) or inactive <strong>Safaricom numbers</strong>. The status is sent back from the <strong>MNO</strong> 18 to 24 hours after a message has been sent.</p>
<h2 id="deliveredtoterminal" tabindex="-1"><a class="header-anchor" href="#deliveredtoterminal"><span><strong>DeliveredToTerminal</strong></span></a></h2>
<p>These are messages that have been delivered to the specified phone numbers (<strong>Safaricom, Airtel, and Telkom numbers</strong>). The status is sent back from the <strong>MNO</strong> immediately after the message is delivered.</p>
<h2 id="deliveryimpossible" tabindex="-1"><a class="header-anchor" href="#deliveryimpossible"><span><strong>DeliveryImpossible</strong></span></a></h2>
<p>These are similar to <strong>AbsentSubscribers</strong>, but specific to numbers that are inactive or blocked. The status is sent back from the <strong>MNO</strong> in seconds or minutes.</p>
<h2 id="sendername-blacklisted" tabindex="-1"><a class="header-anchor" href="#sendername-blacklisted"><span><strong>SenderName Blacklisted</strong></span></a></h2>
<p>These are <strong>Safaricom numbers</strong> that have blacklisted a sender ID or blocked all promotional messages.</p>
<h2 id="senttonetwork" tabindex="-1"><a class="header-anchor" href="#senttonetwork"><span><strong>SentToNetwork</strong></span></a></h2>
<p>These are numbers that are either in a <strong>poor network coverage area</strong> or turned off. Also, messages might have been delivered, but the <strong>Mobile Network Operator</strong> failed to send back a delivery report.</p>
<h2 id="unknown" tabindex="-1"><a class="header-anchor" href="#unknown"><span><strong>Unknown</strong></span></a></h2>
<p>These are <strong>Airtel and Telkom numbers</strong> that are either unreachable, inactive, or invalid. <strong>Airtel and Telkom</strong> provide a blanket response of <code v-pre>&quot;Unknown&quot;</code> for such numbers.</p>
<h2 id="scheduled" tabindex="-1"><a class="header-anchor" href="#scheduled"><span><strong>Scheduled</strong></span></a></h2>
<p>These are messages either queued pending delivery or set to be delivered on a later date and time</p>
</div></template>


