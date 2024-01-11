import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const email = formData.email;
    const password = formData.password;

    const user = await prisma.tb_user.create({
      data: {
        email,
        password,
      },
    });

    return new Response(JSON.stringify(user), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('로그인 처리 중 오류:', error);
    return new Response('내부 서버 오류', { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}