---
title: DELIVERY REPORTS
---
# DELIVERY REPORTS

The **Delivery Reports (DLR)** API allows you to check the status of sent messages by retrieving their delivery reports using the **message ID**.

::: tip Tip
Instead of periodically fetching delivery reports, you can configure an endpoint on your account to receive delivery reports in real-time. This ensures that message statuses are automatically updated without the need for manual requests.See below
:::

::: tip Tip
Checkout code examples in send SMS
:::



## GET Method
**Endpoint:**

`https://{{url}}/api/services/getdlr`

**Parameters:**

| Parameter   | Description                      
|-------------|----------------------------------
| `apikey`    | Your valid API key             
| `partnerID` | Your Partner ID   
| `messageID` | Message ID returned when SMS was sent              

**Example Request (GET):**

`https://{{url}}/api/services/getdlr?apikey={{apikey}}&partnerID={{partnerID}}&messageID={{messageID}`

## POST Method
`https://{{url}}/api/services/getdlr`

**Request Body:**

```json
{
  "apikey": "{{apikey}}",
  "partnerID": "{{partnerID}}",
  "messageID": "{{messageID}}"  // The ID of the message to get the delivery report for
}
```

**Sample Success Response:**

```json
{
  "response-code":200,
  "message-id":"xxxxxxxxx",
  "response-description":"Success",
  "delivery-status":32,
  "delivery-description":"DeliveredToTerminal",
  "delivery-tat":"00:02:30",
  "delivery-networkid":1,
  "delivery-time":"2024-11-01 11:15:32"
  }
```

**Sample Error Response:**

```json
{
  "response-code":1009,
  "response-description":"No dlr"'
}
```

### **Steps to Configure Callback URL:**

1. Log into your **SMS account**.
2. Click on **Partners** in the left menu.
3. Select the **account** for which you want to configure the callback.
4. Toggle the **API** option.
5. Scroll down to **Callback URL**.
6. Enter your **callback URL** where the reports should be sent.
7. Click **Save** to apply the changes.

::: info
Once configured, delivery reports will be automatically posted to your specified Callback URL, eliminating the need for manual requests.
:::

### **Sample Callback Payload**  
When an SMS delivery report is available, we will send a request to your configured callback URL with the following payload:  

```json
{
  "description": "DeliveredToTerminal",
  "messageid": "1889191",
  "timeTaken": "22s", //The turn around time for message delivery
  "timestamp": "2025-09-12 10:16:10"
}


