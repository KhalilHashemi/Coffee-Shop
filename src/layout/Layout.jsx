import { Link } from "react-router-dom";
import { navbarItems } from "../constants/navbar";
import {
  BsTwitter,
  BsTelegram,
  BsInstagram,
  BsFacebook,
  BsHeartFill,
} from "react-icons/bs";
import styles from "../styles/Layout.module.css";
function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul>
            {navbarItems.map((item) => (
              <li key={item.id}>
                <Link to={`${item.path}`}> {item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <img src="../../public/images/Background-1.jpg" alt="" />
        <div>
          <p>قهوه های ما چه طعمی هستند؟</p>
          <p>فقط کافیه یک بار امتحانش کنی، عاشقش میشی!</p>
        </div>
      </header>
      {children}
      <footer className={styles.footer}>
        <div>
          <span>
            <p>عضویت در خبرنامه</p>
            <input type="email" placeholder="لطفا ایمیل خود را وارد کنید..." />
            <button>ارسال</button>
          </span>
          <span>
            <p>شبکه های اجتماعی</p>
            <Link to="">
              {" "}
              <BsTwitter color="#55acee" />
            </Link>
            <Link to="">
              {" "}
              <BsFacebook color="#3b5999" />
            </Link>
            <Link to="">
              {" "}
              <BsInstagram color="#e4405f" />
            </Link>
            <Link to="">
              {" "}
              <BsTelegram color="#0088cc" />
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
    </>
  );
}

export default Layout;
