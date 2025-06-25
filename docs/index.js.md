# Stripe Payment Intent API

This is a simple express server that integrates with the Stripe API to create a payment intent. A payment intent represents an attempt to collect payment from a customer. 

## Key Components

- `stripe`: This is the Stripe client that is used to interact with the Stripe API. It is initialized with the secret key and the API version.

- `app`: This is the express application.

- `PUBLISHABLE_KEY` and `SECRET_KEY`: These are the Stripe API keys. 

- `/create-payment-intent` endpoint: This is a POST endpoint that creates a new payment intent.

## Endpoint

### POST `/create-payment-intent`

This endpoint creates a new payment intent with a fixed amount of 1099 (in the lowest denomination of the currency) and a currency of USD. It expects no inputs.

On success, it returns a JSON object with the client secret of the payment intent. If there is an error, it returns a JSON object with an error message.

## Sample Usage

Start the server:

```bash
node server.js
```

Send a POST request to the `/create-payment-intent` endpoint:

```bash
curl -X POST http://localhost:3000/create-payment-intent
```

The response will be a JSON object with the client secret of the payment intent:

```json
{
  "clientSecret": "pi_1J2F8AHufeZ5adWV8izxQn6U_secret_J2F8AHufeZ5adWV"
}
```

If there is an error, the response will be a JSON object with an error message:

```json
{
  "error": "Your error message here"
}
```