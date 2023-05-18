import { Background } from "@/components/background";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  PaperPlaneIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.glass}>
        <p>Erisvan</p>
        <div>
          <GitHubLogoIcon />
          <LinkedInLogoIcon />
          <PaperPlaneIcon />
          <StarIcon />
        </div>
      </div>
      <Background />
    </main>
  );
}
