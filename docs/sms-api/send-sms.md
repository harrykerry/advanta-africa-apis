---
title: SEND SMS
---
# SEND SMS

The **Send SMS** API allows you to send SMS messages to recipients using your assigned shortcode.  
It supports sending a message to a **single number** via GET and to **one or multiple numbers** via POST.  
For multiple numbers, provide them as a **comma-separated string** (maximum **1000 numbers** per request).

::: tip Tip
To schecule messages add `timeToSend` in the POST request with a valid date string that resolves to a Unix timestamp or the unix timestamp itself.For example "2019-09-01 18:00"
:::

## GET Method
**Endpoint:**

`https://{{url}}/api/services/sendsms`

**Parameters:**

| Parameter   | Description                      
|-------------|----------------------------------
| `apikey`    | Your valid API key             
| `partnerID` | Your Partner ID                
| `message`   | URL-encoded message (GSM7)     
| `shortcode` | Sender ID/Shortcode             
| `mobile`    | Recipient Mobile number  
|`timeToSend`  | Optional param 

**Example Request (GET):**

`https://{{url}}/api/services/sendsms?apikey={{apikey}}&partnerID={{partnerID}}&message={{message}}&shortcode={{shortcode}}&mobile={{mobile}}`

## POST Method
**Endpoint:**

`https://{{url}}/api/services/sendsms`


**Request Body:**

```json
{
  "apikey": "{{apikey}}",
  "partnerID": "{{partnerID}}",
  "message": "{{message}}",
  "shortcode": "{{shortcode}}",
  "mobile": "{{mobile}}"
}
```

**Sample Success Response:**

```json
{
  "responses":[
    {"response-code":200,
    "response-description":"Success",
    "mobile":xxxxxxxxxxxxx,
    "messageid":"xxxxxxxxxxx", //integer for this API
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


**Code Examples (GET Request)**  

::: code-tabs  
@tab PHP  
```php
<?php
$curl = curl_init();
curl_setopt_array($curl, [
    CURLOPT_URL => "https://{{url}}/api/services/sendsms?apikey={{apikey}}&partnerID={{partnerID}}&message={{message}}&shortcode={{shortcode}}&mobile={{mobile}}",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST => "GET"
]);
$response = curl_exec($curl);
curl_close($curl);
echo $response;
?>
```

@tab Node.js
```javascript
const axios = require('axios');
axios.get('https://{{url}}/api/services/sendsms', {
    params: {
        apikey: '{{apikey}}',
        partnerID: '{{partnerID}}',
        message: '{{message}}',
        shortcode: '{{shortcode}}',
        mobile: '{{mobile}}'
    }
}).then(response => console.log(response.data))
.catch(error => console.error(error));

```

@tab Python
```python
import requests
response = requests.get("https://{{url}}/api/services/sendsms", params={
    "apikey": "{{apikey}}",
    "partnerID": "{{partnerID}}",
    "message": "{{message}}",
    "shortcode": "{{shortcode}}",
    "mobile": "{{mobile}}"
})
print(response.text)

```
:::

**Code Examples (POST Request)**


::: code-tabs  
@tab PHP 
```php
<?php
$curl = curl_init();
curl_setopt_array($curl, [
    CURLOPT_URL => "https://{{url}}/api/services/sendsms",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode([
        "apikey" => "{{apikey}}",
        "partnerID" => "{{partnerID}}",
        "message" => "{{message}}",
        "shortcode" => "{{shortcode}}",
        "mobile" => "{{mobile}}"
    ]),
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
axios.post('https://{{url}}/api/services/sendsms', {
    apikey: '{{apikey}}',
    partnerID: '{{partnerID}}',
    message: '{{message}}',
    shortcode: '{{shortcode}}',
    mobile: '{{mobile}}'
}, {
    headers: { 'Content-Type': 'application/json' }
}).then(response => console.log(response.data))
.catch(error => console.error(error));
```
@tab Python
```python
import requests
url = "https://{{url}}/api/services/sendsms"
payload = {
    "apikey": "{{apikey}}",
    "partnerID": "{{partnerID}}",
    "message": "{{message}}",
    "shortcode": "{{shortcode}}",
    "mobile": "{{mobile}}"
}
response = requests.post(url, json=payload, headers={'Content-Type': 'application/json'})
print(response.text)
```
:::
