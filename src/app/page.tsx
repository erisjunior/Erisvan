import { Background } from "@/components/background";
import { Star } from "@/components/star";
import { kv } from "@vercel/kv";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import styles from "./page.module.css";

export default async function Home() {
  const stars = (await kv.get<number>("stars")) ?? 0;

  return (
    <main className={styles.main}>
      <div className={styles.glass}>
        <div>
          <p>Antonio</p>
          <p className={styles.highlight}>Erisvan</p>
          <p>Alves Junior</p>
        </div>
        <div className={styles.social}>
          <Link target="_blank" href="https://github.com/erisjunior">
            <FaGithub size="1.5em" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/antonioerisvan/"
          >
            <FaLinkedin size="1.5em" />
          </Link>
          <Link href="mailto:erisvan.junior.a@gmail.com?subject=Vamo bater um papo?">
            <FaPaperPlane size="1.5em" />
          </Link>
        </div>
        <div className={styles.star}>
          Dê uma estrela e ajude a encher esse céu
          <Star />
        </div>
      </div>
      <Background stars={stars} />
    </main>
  );
}
