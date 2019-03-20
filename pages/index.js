import Link from "next/link";
import Header from "../components/header";
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

function Index() {
  return (
    <main>
      <Header />
      <section>
        <Link href="/about">
          <a>Go to About Me {publicRuntimeConfig.redisToken}</a>
        </Link>
      </section>
    </main>
  );
}

export default Index;
