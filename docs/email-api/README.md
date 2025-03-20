---
title: EMAIL API
---

# EMAIL API

The **Email API** allows you to send emails using our API.

::: info info
To get started with the email service, kindly contact your accout manager. You will need to provide an email that will be configured first as a sender then assigned to your account
:::

::: tip Tip
Checkout code examples in send SMS
:::


## POST Method

`https://{{url}}/api/services/send-email`

**Request Body:**

```json
{
    "apikey": "xxxxx",
    "partnerID": "xxxx",
    "from_address": "test@email.com",
    "to_address": "testrecipient@email.com",
    "subject": "API test",
    "body": "This is a test email",
    "pass_type": "plain"
}

```

**Sample Success Response:**
```json
{
    "response-code": 200,
    "response-description": "Success",
    "recipient": "testrecipient@email.com",
    "messageid": "xxxxxxxx",
    "cost": 1,
    "reason": "1 email sent successfully. Cost: 1 unit"
}

```

**Sample Error Response:**

```json
{
  "response-code":1006,
  "response-description":"Invalid credentials"
}
```


