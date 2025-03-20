---
title: AIRTIME API
---

#  AIRTIME API

The **Airtime API** allows you to disburse airtime to your customer base.

## Authentication

To interact with the application, you will need to acquire an **APP_KEY** and **APP_TOKEN**.  

### Steps to Obtain API Credentials:

1. Log in to your **QuickSMS** account.
2. On the left-side menu, click on **Utility Apps**.
3. Create a new app or select an existing one.
4. Click on **Settings**.
5. Generate an **APP_TOKEN** and store it safely (it will only be displayed once).
6. Copy your **APP_KEY** and use it in your application.

**Important Notes:**
- The **APP_TOKEN** is displayed only once when generated. Keep it secure.
- Generating a new token will invalidate all existing ones immediately.
- Only generate a new token if your current one is lost or exposed.

### Required Headers

Every request to the API must include the following headers:

| Header         | Value                 |
|---------------|-----------------------|
| `Content-Type` | `application/json`    |
| `App-Key`      | `[YOUR_APP_KEY]`      |
| `App-Token`    | `[YOUR_APP_TOKEN]`    |

---

## POST Method

`https://{{url}}/api/v3/airtime/send`


**Request Body:**

```json
{
  "recipients": [
    {
      "recipient": "2547XXXXXX",
      "amount": 100
    },
    {
      "recipient": "2547XXXXXX",
      "amount": 100
    }
  ]
}
```

**Sample Success Response:**

```json
{
  "code": 200,
  "message": "Total:1 Success:1 Failed:0",
  "results": [
    {
      "recipient": "2547XXXXXXXX",
      "amount": 100,
      "code": 201,
      "discount": 0.4,
      "message": "queued for disbursal",
      "request_id": 10990
    },
    {
      "recipient": "2547XXXXXXXX",
      "amount": 100,
      "code": 201,
      "discount": 0.4,
      "message": "queued for disbursal",
      "request_id": 10991
    }
  ]
}
```

## Key Considerations
- You can have from one up to 1,000 recipients per request 
- Maximum amount is KES 10,000
- Minimum amount is KES 10

**Code Examples (POST Request)**
::: code-tabs

@tab PHP
```php

<?php
$payload = json_encode([
    "recipients" => [
        [
            "recipient" => "2547XXXXXX",
            "amount" => 100
        ],
        [
            "recipient" => "2547XXXXXX",
            "amount" => 100
        ]
    ]
]);

$curl = curl_init();
curl_setopt_array($curl, [
    CURLOPT_URL => "https://{{url}}/api/endpoint",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_HTTPHEADER => ["Content-Type: application/json"]
]);

$response = curl_exec($curl);
curl_close($curl);
echo $response;
?>
```
@tab Node.js
```javascript
const axios = require('axios');

const data = {
    recipients: [
        { recipient: "2547XXXXXX", amount: 100 },
        { recipient: "2547XXXXXX", amount: 100 }
    ]
};

axios.post("https://{{url}}/api/endpoint", data, {
    headers: { "Content-Type": "application/json" }
})
.then(response => console.log(response.data))
.catch(error => console.error(error));

```

@tab Python
```python
import requests

url = "https://{{url}}/api/endpoint"
headers = {"Content-Type": "application/json"}
payload = {
    "recipients": [
        {"recipient": "2547XXXXXX", "amount": 100},
        {"recipient": "2547XXXXXX", "amount": 100}
    ]
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())

```