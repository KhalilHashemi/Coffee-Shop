import { Link, useLocation } from "react-router-dom";
import { navbarItems } from "../constants/navbar";
import { selectClass, selectStyle } from "../constants/header";
import styles from "./Header.module.css";
function Header() {
  const { pathname } = useLocation();

  const selectedClass = selectClass(pathname);
  const selectedStyle = selectStyle(pathname);
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
        {pathname === "/" ? (
          <img src="../../public/images/Background-1.jpg" />
        ) : pathname === "/cakes" ? (
          <img src="../../public/images/Chocolate Cupcakes 4.2 landscape-2097.webp" />
        ) : pathname === "/coffees" ? (
          <img src="../../public/images/coffee-801781_1280.jpg" />
        ) : pathname === "/drinks" ? (
          <img src="../../public/images/types-of-coffee.jpg" />
        ) : pathname === "/about-us" ? (
          <img src="../../public/images/northern-grounds-coffee-shop-ely.jpg" />
        ) : null}
        <div className={selectedClass} style={selectedStyle}>
          {pathname === "/" ? (
            <>
              <p>تا حالا به کافه ما سر زدی ؟</p>
              <p>فقط کافیه یک بار امتحانش کنی، عاشقش میشی!</p>
            </>
          ) : pathname === "/cakes" ? (
            <>
              <p>تا حالا طعم کیک های ما رو چشیدی؟</p>
              <p>فقط کافیه یک بار امتحانش کنی، عاشقش میشی!</p>
            </>
          ) : pathname === "/coffees" ? (
            <>
              <p>می دونی قهوه های ما چه طعمی هستند؟</p>
              <p>فقط کافیه یک بار امتحانش کنی، عاشقش میشی!</p>
            </>
          ) : pathname === "/drinks" ? (
            <>
              <p>اینجا ما برای هر حال و هوایی نوشیدنی داریم</p>
              <p>فقط کافیه یک بار امتحانش کنی، عاشقش میشی!</p>
            </>
          ) : pathname === "/about-us" ? (
            <>
              <p>اگه می خوای بیشتر راجب ما بدونی یکم برو پایین تر</p>
              <p>فقط کافیه یک بار امتحانش کنی، عاشقش میشی!</p>
            </>
          ) : null}
        </div>
      </header>
    </>
  );
}

export default Header;
