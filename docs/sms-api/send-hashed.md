---
title: SAFARICOM HASHED SMS
---
# SMS  TO HASHED SAFARICOM NUMBERS

This endpoint is used to send messages to Safaricom hashed numbers.Make sure the hashed values start with 254 before hashing

::: caution
This endpoint is strictly for sending transactional messages only.We do not allow promotional content on hashed numbers.The hashing mechanism was introduced to ensure compliance with regulatory requirements.  

Any misuse of this endpoint for promotional messaging will result in strict measures, including potential suspension or blacklisting.Ensure all messages sent comply with guidelines.
:::

::: tip Tip
Checkout code examples in send SMS
:::



## POST Method

**Endpoint:**

`https://{{url}}/api/services/sendotp`

**Request Body:**

```json
{
  "apikey": "{{apikey}}",
  "partnerID": "{{partnerID}}",
  "mobile": "{{mobile}}", //hashed msisdn
  "message": "{{message}}",
  "shortcode": "{{shortcode}}",
  "hashed": true
}

```


**Sample Success Response:**

```json
{
  "responses":[
    {"response-code":200,
    "response-description":"Success",
    "mobile":"xxxxxxxxxxxxx",
    "messageid":"xxxxxxxxxxxxx", //string for this api
    "networkid":1
    }]
}
```

**Sample Error Response:**

```json
{
  "response-code":1006,
  "response-description":"Invalid credentials"'
}
```
