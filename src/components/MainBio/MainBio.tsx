import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faTelegram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import styles from './MainBio.module.css';

const MainBio = () => {
  return (
    <div className={styles.main}>
      {/* Responsive image */}
      <div className={styles.profileImg}>
        <Image
          src="/images/krishna.jpeg"
          alt="Krishna"
          width={200}
          height={200}
        />
      </div>
      <h1>{"Hi, I'm Krishnanand"} 👋🏻</h1>

      <p className={styles.bio}>
        {`Greetings! I'm a software engineer with a passion for web3 and innovative technologies. Currently at Edge & Node, I work on The Graph — a blockchain indexing protocol. I excel in debugging, problem-solving, and possess diverse skills in programming languages like Rust, Golang, Dart and Typescript and frameworks like React, Vue and Flutter. But what truly sets me apart is my insatiable thirst for learning. Always eager to expand my knowledge, I embrace new programming languages and creative problem-solving approaches. Let's create revolutionary solutions together!`}{' '}
      </p>

      <div className={styles.links}>
        <a
          href="https://github.com/incrypto32"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://linkedin.com/in/incrypto32"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          href="https://twitter.com/incrypto32"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://t.me/incrypto32"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTelegram} />
        </a>
      </div>
    </div>
  );
};

export default MainBio;
