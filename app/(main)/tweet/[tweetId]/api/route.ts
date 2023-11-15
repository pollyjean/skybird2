import client from "@/libs/server/client";
import { handleErrors } from "@/utils";

export async function DELETE(request: Request) {
  const {
    tweet: { id },
  } = await request.json();
  try {
    await client.tweet.delete({ where: { id } });
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error: unknown) {
    return handleErrors(error);
  }
}
