---
title: SMS API
---
# Table of Contents

[[toc]]
# SMS API

The SMS API allows you to integrate SMS capabilities into your systems, enabling the automatic delivery of SMS for generating receipts, alerts, and other communications to your clients or customers.

### Required Credentials

To start using the API, you need the following credentials, which can be obtained from your SMS account:

- **API Key**  
  A unique key that authenticates your API requests.

- **Partner ID**  
  A unique ID assigned to your SMS account.

- **Shortcode**  
  The sender ID used for sending messages. This is the assigned sender ID for your account.

### Access API Credentials

1. Log into your SMS account.
2. Click on **Partners** on the left menu.
3. Select the account you want to access API Credentials for.
4. Toggle the API option.

### Retrieving API Credentials

1. Scroll down to access your **Partner ID**.
2. Scroll further down to enter your password and generate an **API Key**.
3. The API Key changes every time it is generated, so store it securely.

### Securing API Access

For additional security, you can restrict API calls to specific IP addresses:

1. Scroll down to the **Allowed IP Addresses** section.
2. Click **Start Editing**.
3. Enter the allowed IP addresses, separated by commas if multiple.
4. Click **Save** to apply the restrictions.

### Important Notes

- Ensure that your message follows the **GSM7 character encoding** standard for compatibility.
- The mobile number must be in a valid format (e.g., for Kenyan numbers: `254xxxxxxxx` or `07xxxxxxxx`).

Once you have these credentials, you can begin using the API to send messages, check delivery reports, and more.

[Get Started](send-sms.md)
