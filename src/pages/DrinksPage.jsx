import Content from "../components/Content";
const content = {
  title1: "انواع نوشیدنی",
  p1: "اگه قهوه خور نیستی یا هوس یه چیز دیگه ای کردی اینو بدون که ما میتونیم برات فراهمش کنیم. اینجا ما انواع نوشیدنی هارو داریم. از نوشینی های گرم گرفته تا نوشیدنی های سرد.",
  title2: "نوشیدنی فصل",
  p2: "برای هر فصلی نوشیدنی های مخصوص خودشو آماده می کنیم. اگه هوا گرمه، یه نوشیدنی خنک میچسبه. اگرم هوا سرده که یه نوشیدنی گرم رو مهمون ما باش.",
  title3: "انواع چایی و دمنوش",
  p3: "ما چایی های مختلفی رو اینجا آماده کردیم و کنارشون دمنوش های فراوونی هم داریم. فقط کافیه به ما بگی که کدومشونو میخوای.",
};
function DrinksPage() {
  return (
    <>
      <Content content={content} />
    </>
  );
}

export default DrinksPage;
