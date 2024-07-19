import { auth } from "@/app/_lib/auth";
import { NextRequest } from "next/server";
export const middleware = auth();

export async function get(req: NextRequest) {
  console.log("Geting...");
  console.log(req);
}

export const config = {
  matcher: ["/account"],
};
