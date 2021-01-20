// API endpoint inside a Next.js app - can be deployed as Serverless Functions (also known as Lambdas).

// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
  res.status(200).json({ text: 'Hi, I am here' })
}

/*
Save form input to db via API routes:

export default function handler(req, res) {
  const email = req.body.email
  // Then save email to your database, etc...
}

*/