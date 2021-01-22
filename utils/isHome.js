import { useRouter } from "next/router";

export default function isHome() {
  return useRouter().pathname == "/" ? true : false;
}
