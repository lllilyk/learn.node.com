export async function POST(request: Request) {
  const formData = await request.json();
  const email = formData.email;
  const password = formData.password;
  return Response.json({ email, password })
}