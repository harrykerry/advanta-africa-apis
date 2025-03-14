---
title: RESELLER CREDIT API
---

# RESELLER CREDIT API

::: important
You must be a reseller registered under Advanta Africa to use this API.
:::



The **Reseller Credit API** allows you to transfer SMS credits to your sub-accounts or clients. You can use this in a payment integration to automate account top ups. 

## Important Notes

- The **apikey** and **partnerID** must belong to your reseller account.
- The **childID** is the client's **username**.
- The **amount** is in **Kenyan Shillings**, and the system will convert it into SMS units based on the configured SMS rate.
- If no SMS rate is set, the system defaults to an SMS rate of **1**.
- You will receive a response indicating the status of the transaction.
- Once an account is credited, the transaction details will be recorded in the **Credit History** section, just like manual credit loading.

## POST Method

**Endpoint:**
`https://{{url}}/api/services/credit`

**Request Body:**

```json
{
  "apikey": "{{apikey}}",
  "partnerID": "{{partnerID}}",
  "childID": "{{childID}}",
  "amount": "{{amount}}"
}
```

**Sample Success Response:**

```json
{
  "response-code": 200,
  "response-description": "Partner ID xxxx has been credited with 5 units",
  "prev-balance": "524.00",
  "sms-units": "5",
  "new-balance": "529.00"
}
```

**Sample Error Response:**

```json
{
  "response-code": 1005,
  "response-description": "The child acount is invalid. Kindly verify the details"
}
```

**Code Examples (POST Request)**
::: code-tabs

@tab PHP
```php
$ch = curl_init("https://{{url}}/api/endpoint");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    "apikey" => "{{apikey}}",
    "partnerID" => "{{partnerID}}",
    "childID" => "{{childID}}",
    "amount" => "{{amount}}"
]));

$response = curl_exec($ch);
curl_close($ch);
echo $response;
```
@tab Node.js
```javascript
const axios = require('axios');

const data = {
    apikey: "{{apikey}}",
    partnerID: "{{partnerID}}",
    childID: "{{childID}}",
    amount: "{{amount}}"
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
    "apikey": "{{apikey}}",
    "partnerID": "{{partnerID}}",
    "childID": "{{childID}}",
    "amount": "{{amount}}"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())
```

