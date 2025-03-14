---
title: Delivery Status Descriptions
---

# DELIVERY STATUS DESCRIPTIONS  

Here are the different delivery descriptions on the outbox:

## **AbsentSubscriber**  
These are invalid (do not exist) or inactive **Safaricom numbers**. The status is sent back from the **MNO** 18 to 24 hours after a message has been sent.

## **DeliveredToTerminal**  
These are messages that have been delivered to the specified phone numbers (**Safaricom, Airtel, and Telkom numbers**). The status is sent back from the **MNO** immediately after the message is delivered.

## **DeliveryImpossible**  
These are similar to **AbsentSubscribers**, but specific to numbers that are inactive or blocked. The status is sent back from the **MNO** in seconds or minutes.

## **SenderName Blacklisted**  
These are **Safaricom numbers** that have blacklisted a sender ID or blocked all promotional messages.

## **SentToNetwork**  
These are numbers that are either in a **poor network coverage area** or turned off. Also, messages might have been delivered, but the **Mobile Network Operator** failed to send back a delivery report.

## **Unknown**  
These are **Airtel and Telkom numbers** that are either unreachable, inactive, or invalid. **Airtel and Telkom** provide a blanket response of `"Unknown"` for such numbers.

## **Scheduled**  
These are messages either queued pending delivery or set to be delivered on a later date and time

