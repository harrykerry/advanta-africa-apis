---
title: SHORTCODE GUIDE
---

# SHORTCODE GUIDE

The **Shortcode Guide** provides instructions for setting up an endpoint that we will configure on the client's shortcode.

::: info
Clients must first acquire a **dedicated** or **shared** shortcode from us before proceeding with the setup. Shared shortcodes will always be configured using keywords.
:::

## **Setting Up Your Endpoint**

Once you have acquired a shortcode, you need to provide an endpoint that accepts either **GET** or **POST** requests. This endpoint should be able to handle the following parameters:

**Non-interactive Shortcode**

| Parameter       | Description                                                                                   |
| --------------- | --------------------------------------------------------------------------------------------- |
| **`shortcode`** | The assigned shortcode.                                                                       |
| **`mobile`**    | The recipient's phone number.                                                                 |
| **`message`**   | The message content.                                                                          |
| **`Custom`**    | If required, share any extra details such as authentication keys or specific request headers. |

**Interactive Shortcode**

| Parameter       | Description                                                                                   |
| --------------- | --------------------------------------------------------------------------------------------- |
| **`shortcode`** | The assigned shortcode.                                                                       |
| **`msisdn`**    | The recipient's phone number.                                                                 |
| **`message`** | The message content.                                                                          |
| **`partnerId`** | The SMS Account Id .                                                                          |
| **`Custom`**    | If required, share any extra details such as authentication keys or specific request headers. |

### **Sample Payload**

**GET:**

**Non-Interactive Shortcode**

`https://{{yourCallBack}}?shortcode=12345&mobile=2547XXXXXXXX&message=JOIN`

**Interactive Shortcode**

`https://{{yourCallBack}}?shortcode=12345&msisdn=2547XXXXXXXX&message=JOIN&partnerId=XYZ123`

**POST:**

Below is an example of the JSON payload that will be sent to your endpoint:

**Non-Interactive Shortcode**

```json
{
  "shortcode": "12345",
  "mobile": "2547XXXXXXXX",
  "message": "Hello, this is a test message."
}
```

**Interactive Shortcode**

```json
{
  "shortcode": "12345",
  "msisdn": "2547XXXXXXXX",
  "message": "Hello, this is a test message.",
  "partnerId": "1001"
}
```

::: tip
Ensure your endpoint is capable of handling and processing these requests efficiently. Our timeout is 15 seconds, after which the request is considered failed if no response is received.

Your endpoint can return an auto-response, which we will send to the user automatically via your SMS account. Alternatively, you can trigger the response yourself using the SMS API after receiving the inbound message.

If you choose the auto-response option (Option 1), please inform us so we can enable it on our side.
:::
