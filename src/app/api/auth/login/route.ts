export async function POST(email: string, password: string) {
    const res = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    });
  
    const data = await res.json();
  
    return Response.json(data);
  }