---
title: SEND BULK SMS
---

# SEND BULK
The **Send Bulk** API allows you to send up to **1000 unique messages** in a **single request**.  
Each message can have a different recipient, message content.  

::: info
The partnerID, apikey, and shortcode should be the same for all JSON objects within the smslist array. Any mismatch will default to using credentials in the first object. 
:::




## POST Method
`https://{{url}}/api/services/sendbulk`


**Request Body:**

```json
{
    "count": {{count}},// The count of the SMS list
    "smslist": [
        {
            "partnerID": "{{partnerID}}",
            "apikey": "{{apikey}}",
            "pass_type": "plain",
            "clientsmsid": {{clientsmsid1}},//Your preferred dynamic identifier
            "mobile": "{{mobile1}}",
            "message": "{{message1}}",
            "shortcode": "{{shortcode}}"
        },
        {
            "partnerID": "{{partnerID}}",
            "apikey": "{{apikey}}",
            "pass_type": "plain",
            "mobile": "{{mobile2}}",
            "clientsmsid": {{clientsmsid2}},
            "message": "{{message2}}",
            "shortcode": "{{shortcode}}",
            "pass_type": "{{pass_type}}"
        }
    ]
}
```


**Sample Success Response:**

```json
{
    "responses":
    [
        {
            "response-code":200,
            "response-description":"Success",
            "mobile":"xxxxxxxx",
            "messageid":"xxxxxxxx",
            "clientsmsid":1234,
            "networkid":1
            },
            {
                "response-code":200,
                "response-description":"Success",
                "mobile":"xxxxxxxx",
                "messageid":"xxxxxxxx",
                "clientsmsid":1234,
                "networkid":1
            }
    ]
}
```


**Sample Error Response:**

```json
{
    "response-code":1006,
    "response-description":"Invalid credentials"
}
```

**Code Examples (POST Request)**

::: code-tabs
@tab PHP

```php
<?php
$payload = json_encode([
    "count" => {{count}},
    "smslist" => [
        [
            "partnerID" => "{{partnerID}}",
            "apikey" => "{{apikey}}",
            "pass_type" => "plain",
            "clientsmsid" => {{clientsmsid1}},
            "mobile" => "{{mobile1}}",
            "message" => "{{message1}}",
            "shortcode" => "{{shortcode}}"
        ],
        [
            "partnerID" => "{{partnerID}}",
            "apikey" => "{{apikey}}",
            "pass_type" => "plain",
            "mobile" => "{{mobile2}}",
            "clientsmsid" => {{clientsmsid2}},
            "message" => "{{message2}}",
            "shortcode" => "{{shortcode}}",
            "pass_type" => "{{pass_type}}"
        ]
    ]
]);

$curl = curl_init();
curl_setopt_array($curl, [
    CURLOPT_URL => "https://{{url}}/api/services/sendbulk",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_HTTPHEADER => ['Content-Type: application/json']
]);
$response = curl_exec($curl);
curl_close($curl);
echo $response;
?>
```

@tab Node.js
```javascript
const axios = require('axios');

const payload = {
    count: {{count}},
    smslist: [
        {
            partnerID: "{{partnerID}}",
            apikey: "{{apikey}}",
            pass_type: "plain",
            clientsmsid: {{clientsmsid1}},
            mobile: "{{mobile1}}",
            message: "{{message1}}",
            shortcode: "{{shortcode}}"
        },
        {
            partnerID: "{{partnerID}}",
            apikey: "{{apikey}}",
            pass_type: "plain",
            mobile: "{{mobile2}}",
            clientsmsid: {{clientsmsid2}},
            message: "{{message2}}",
            shortcode: "{{shortcode}}",
            pass_type: "{{pass_type}}"
        }
    ]
};

axios.post('https://{{url}}/api/services/sendbulk', payload, {
    headers: { 'Content-Type': 'application/json' }
})
.then(response => console.log(response.data))
.catch(error => console.error(error));
```
@tab Python
```python
import requests

url = "https://{{url}}/api/services/sendbulk"
payload = {
    "count": {{count}},
    "smslist": [
        {
            "partnerID": "{{partnerID}}",
            "apikey": "{{apikey}}",
            "pass_type": "plain",
            "clientsmsid": {{clientsmsid1}},
            "mobile": "{{mobile1}}",
            "message": "{{message1}}",
            "shortcode": "{{shortcode}}"
        },
        {
            "partnerID": "{{partnerID}}",
            "apikey": "{{apikey}}",
            "pass_type": "plain",
            "mobile": "{{mobile2}}",
            "clientsmsid": {{clientsmsid2}},
            "message": "{{message2}}",
            "shortcode": "{{shortcode}}",
            "pass_type": "{{pass_type}}"
        }
    ]
}

headers = {"Content-Type": "application/json"}
response = requests.post(url, json=payload, headers=headers)
print(response.text)
```

:::