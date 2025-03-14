---
title: SMS ACCOUNT BALANCE
---

# SMS ACCOUNT BALANCE

The **SMS Account Balance** API allows you to check the available balance in your SMS account. This ensures that you have sufficient credits before sending messages.

::: tip Tip
Checkout code examples in send SMS
:::



## GET Method
**Endpoint:**

`https://{{url}}/api/services/getbalance`

**Parameters:**

| Parameter   | Description                      
|-------------|----------------------------------
| `apikey`    | Your valid API key             
| `partnerID` | Your Partner ID                

**Example Request (GET):**

`https://{{url}}/api/services/getbalance?apikey={{apikey}}&partnerID={{partnerID}}`


## POST Method

`https://{{url}}/api/services/getbalance`

**Request Body:**

```json
{
  "apikey": "{{apikey}}",
  "partnerID": "{{partnerID}}"
}
```

**Sample Success Response:**

```json
{
  "response-code":200,
  "credit":"545.00",
  "partner-id":"xxxxx"
  
}

```

**Sample Error Response:**

```json
{
  "response-code":1006,
  "response-description":"Invalid credentials"
}
```


