import { Link } from "react-router-dom";
import {
  BsTwitter,
  BsTelegram,
  BsInstagram,
  BsFacebook,
  BsHeartFill,
} from "react-icons/bs";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <span>
          <p>عضویت در خبرنامه</p>
          <input type="email" placeholder="لطفا ایمیل خود را وارد کنید..." />
          <button>ارسال</button>
        </span>
        <span>
          <p>شبکه های اجتماعی</p>
          <Link to="https://twitter.com/">
            <BsTwitter />
          </Link>
          <Link to="https://www.facebook.com/">
            <BsFacebook />
          </Link>
          <Link to="https://www.instagram.com/">
            <BsInstagram />
          </Link>
          <Link to="https://telegram.org/">
            <BsTelegram />
          </Link>
        </span>
      </div>
      <div>
        <p>
          ساخته شده با
          <BsHeartFill color="red" />
          توسط
          <Link to="https://github.com/KhalilHashemi" target="_blank">
            Khalil
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
