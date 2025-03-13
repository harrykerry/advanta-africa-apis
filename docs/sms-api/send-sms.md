---
title: SEND SMS
---
# SEND SMS

The **Send SMS** API allows you to send SMS messages to recipients using your assigned shortcode.  
It supports sending a message to a **single number** via GET and to **one or multiple numbers** via POST.  
For multiple numbers, provide them as a **comma-separated string** (maximum **1000 numbers** per request).



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

