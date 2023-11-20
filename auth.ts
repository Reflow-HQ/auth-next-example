import "server-only";
import { ReflowAuth } from "@reflowhq/auth-next";

export default function getAuth(): ReflowAuth {
  return new ReflowAuth({
    // storeID: 123456,
    // secret: "REPLACE_ME_WITH_A_32_CHAR_SECRET",
  });
}
