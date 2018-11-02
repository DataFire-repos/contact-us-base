# Contact Us Backend

This project creates a backend for a "Contact Us" form. It uses a Gmail account to send you an e-mail on behalf of someone else, e.g. a visitor to your site.

[Run this project on DataFire.io](https://app.datafire.io/projects?baseRepo=https:%2F%2Fgithub.com%2FDataFire-repos%2Fcontact-us-base)

## Running on DataFire.io
Go to the **Accounts** tab, and add a new Gmail account. Be sure to select the following scopes:
* https://www.googleapis.com/auth/gmail.readonly
* https://www.googleapis.com/auth/gmail.send

Then deploy your project to `prod`.

## Running Manually

To run this project manually:

```bash
git clone https://github.com/DataFire-repos/contact-us-base
cd contact-us-base
npm install
datafire authenticate google_gmail
datafire serve
```

## Using the API

There is one URL for this API - `POST /contact`. It accepts both urlencoded and JSON content.

If you're running your project on DataFire.io, replace `http://localhost:3000` with your project's host, e.g. `https://project-name.prod.with-datafire.io`.

### HTML form
```html
<form action="http://localhost:3000/contact" method="post">
  <input type="text" name="emailAddress">
  <textarea name="message"></textarea>
</form>
```

### cURL
```bash
curl -X POST "http://localhost:3000/contact" \
  -d 'message=hi&emailAddress=me@example.com'
```

```bash
curl -X POST "http://localhost:3000/contact" \
  -d '{"message": "hi!", "emailAddress": "me@example.com"}'
  -H 'Content-Type: application/json'
```
