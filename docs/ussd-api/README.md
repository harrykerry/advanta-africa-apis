---
title: USSD GUIDE
---

# USSD GUIDE

The **USSD Guide** provides instructions for setting up an endpoint that we will configure on the client's USSD code. Clients must first acquire either a **dedicated** or **shared** USSD code from us before proceeding with the setup.


## Setting Up Your USSD Endpoint

Once you have a USSD code, you must provide us with a **callback URL** where we will forward incoming USSD requests. The callback URL should accept the following parameters:

| Parameter  | Description |
|------------|-------------|
| **MSISDN**  | Mobile number of the end user accessing the USSD service. |
| **SESSIONID** | A unique session ID maintained throughout a USSD session. |
| **USSDCODE** | The assigned USSD code (e.g., `*415#`). |
| **INPUT** | The user's latest input, which keeps appending to the initial input. (e.g., `*415*33*1#`) |

## Callback URL Format

Client system should accept requests in the format sample GET payload below (POST setups can be done on request):

`https://{{url}}?SESSIONID=$SESSIONID&USSDCODE=$USSDCODE&MSISDN=$MSISDN&INPUT=$INPUT`


## Sample USSD Flow
When a user dials the USSD code, the client’s system should respond appropriately based on the user input.

### Example 1: First Response
```text
CON Welcome to XXX services. Please select an option:
1. Register
2. Support
```

**CON** instructs the Mobile Operator to maintain the session.

### Example 2: User Selects Option 1 (Register)

```text
CON Please enter your name below:
```
### Example 3: User Selects Option 2 (Support)
```text
END Contact our support on the following numbers: 2547xxxxxxx, 25402xxxxx.
```
**END** instructs the Mobile Operator to terminate the session.

## Key Considerations
- **Always** prefix responses with `CON` to keep the session open.  
- Use `END` when no further interaction is needed.  
- Client must acquire a **dedicated** or **shared** USSD code before configuring their callback endpoint.  
- For **shared USSD codes**, the client must handle the **extension** as the **first user input** to differentiate services.  


