---
title: SHORTCODE GUIDE
---

# SHORTCODE GUIDE

The **Shortcode Guide** provides instructions for setting up an endpoint that we will configure on the client's shortcode.  

::: info
Clients must first acquire a **dedicated** or **shared** shortcode from us before proceeding with the setup.
:::

## **Setting Up Your Endpoint**  
Once you have acquired a shortcode, you need to provide an endpoint that accepts **POST requests**. This endpoint should be able to handle the following parameters:  

| Parameter       | Description |
|----------------|-------------|
| **`shortcode`** | The assigned shortcode. |
| **`mobile`**    | The recipient's phone number. |
| **`message`**   | The message content. |
| **Additional Parameters** | If required, share any extra details such as authentication keys or specific request headers. |


### **Sample Payload**
Below is an example of the JSON payload that will be sent to your endpoint:

```json
{
  "shortcode": "12345",
  "mobile": "2547XXXXXXXX",
  "message": "Hello, this is a test message."
}
```

::: tip 
Ensure your endpoint is capable of handling and processing these requests efficiently. 
:::
