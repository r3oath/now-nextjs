import Link from "next/link";
import Header from "@app/components/header";

function Index() {
  return (
    <main>
      <Header />
      <section>
        <Link href="/about">
          <a>Go to About Me {process.env.REDIS_TOKEN}</a>
        </Link>
      </section>
    </main>
  );
}

export default Index;
