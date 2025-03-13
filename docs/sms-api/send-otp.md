---
title: SEND OTP SMS
---

# SEND OTP

This endpoint is used to send OTP (One-Time Password) to a recipient.

It can also be used to send transactional messages such as payment alerts.

::: caution
This endpoint is strictly for sending <strong>OTP and transactional messages</strong> only.  
 Any misuse, such as sending promotional or unsolicited messages, is a violation of policy and may result in access restrictions or penalties.
:::

## GET Method

**Endpoint:**

`https://{{url}}/api/services/sendotp`

**Parameters:**

| Parameter   | Description                    |
| ----------- | ------------------------------ |
| `apikey`    | Your valid API key             |
| `partnerID` | Your Partner ID                |
| `message`   | URL-encoded OTP message (GSM7) |
| `shortcode` | Sender ID/Shortcode            |
| `mobile`    | Recipient Mobile number        |

**Example Request (GET):**

`https://{{url}}/api/services/sendotp?apikey={{apikey}}&partnerID={{partnerID}}&message={{message}}&shortcode={{shortcode}}&mobile={{mobile}}`

## POST Method

**Endpoint:**

`https://{{url}}/api/services/sendotp`

**Request Body:**

```json
{
  "apikey": "{{apikey}}",
  "partnerID": "{{partnerID}}",
  "mobile": "{{mobile}}",
  "message": "{{message}}",
  "shortcode": "{{shortcode}}"
}
```

**Sample Success Response:**

```json
{
  "responses":[
    {"response-code":200,
    "response-description":"Success",
    "mobile":xxxxxxxxxxxxx,
    "messageid":"xxxxxxxxxxx", //string for this API
    "networkid":1
    }
    ]
}

```

**Sample Error Response:**

```json
{
  "response-code":1006,
  "response-description":"Invalid credentials"'
}
```
