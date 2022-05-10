import { useRouter } from "next/router";
import Link from "next/link";

const LouisCoffee = () => {
  const router = useRouter();

  return (
    <div>
      Louis Coffee Page {router.query.id}
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <Link href="louis-store/dynamic">
        <a>Go to page dynamic</a>
      </Link>
    </div>
  );
};

export default LouisCoffee;
