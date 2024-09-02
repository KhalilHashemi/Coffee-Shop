import {
  selectBackgroundImage,
  selectFirstImage,
  selectSecondImage,
} from "../constants/mainPics";
import styles from "./Content.module.css";
import { useLocation } from "react-router-dom";
function Content(content) {
  const { title1, p1, title2, p2, title3, p3 } = content.content;
  const { pathname } = useLocation();

  const selectedFirstImage = selectFirstImage(pathname);
  const selectedSecondImage = selectSecondImage(pathname);
  const selectedBackgroundImage = selectBackgroundImage(pathname);
  return (
    <>
      <div className={styles.story}>
        <div>
          <h4>{title1}</h4>
          <p>{p1}</p>
        </div>
        <img src={selectedFirstImage} alt="Coffee" />
      </div>
      <div
        className={styles.place}
        style={{
          backgroundImage: `url("${selectedBackgroundImage}")`,
        }}
      >
        <div className={styles.overlay}>
          <div>
            <h4>{title2}</h4>
            <p>{p2}</p>
          </div>
        </div>
      </div>
      <div className={styles.ourcaffe}>
        <div>
          <h4>{title3}</h4>
          <p>{p3}</p>
        </div>
        <img src={selectedSecondImage} alt="Coffee" />
      </div>
    </>
  );
}

export default Content;
