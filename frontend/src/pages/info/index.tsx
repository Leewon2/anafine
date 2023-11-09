import { motion, useScroll } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Header from "components/Organisms/Header";
import ShapeImage from "components/atoms/ShapeImage";

const InfoPage: NextPage = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className={styles.container}>
      <Head>
        <title>SSAFY A403 자율프로젝트</title>
        <meta name="description" content="SSAFY A403 자율프로젝트" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <motion.div
        className={"progress-bar"}
        style={{ scaleX: scrollYProgress }}
      />
      <main className={styles.main}>
        <section className={"info-section1"}>
          <div className={"info-content"}>
            <div className={"bubble right"}>급여와 비급여가 무었인가요?</div>
            <ShapeImage
              shape={"square"}
              src={"/infoPic/man.png"}
              alt={"남자"}
              width={300}
              height={300}
            />
          </div>
          <div className={"info-content"}>
            <ShapeImage
              shape={"square"}
              src={"/infoPic/pic2.png"}
              alt={"설명2"}
              width={350}
              height={300}
            />
            <ShapeImage
              shape={"square"}
              src={"/infoPic/pic3.png"}
              alt={"설명3"}
              width={350}
              height={300}
            />
            <ShapeImage
              shape={"square"}
              src={"/infoPic/pic5.png"}
              alt={"설명5"}
              width={350}
              height={300}
            />
          </div>
        </section>

        <section className={"info-section2"}>
          <div className={"info-content"}>
            <div className={"bubble right"}>
              그럼 제가 내야하는 병원비는 어떻게 되나요?
            </div>
            <ShapeImage
              shape={"square"}
              src={"/infoPic/man.png"}
              alt={"남자"}
              width={300}
              height={300}
            />
          </div>
          <div className={"info-content"}>
            <ShapeImage
              shape={"square"}
              src={"/infoPic/pic6.png"}
              alt={"설명6"}
              width={350}
              height={300}
            />
            <ShapeImage
              shape={"square"}
              src={"/infoPic/pic7.png"}
              alt={"설명7"}
              width={350}
              height={300}
            />
          </div>
        </section>

        <section className={"info-section1"}>
          <div className={"info-content"}>
            <div className={"bubble right"}>
              비급여 항목은 병원마다 가격 차이가 있는데 쉽게 알 수 있는 방법이
              없을까요?
            </div>
            <ShapeImage
              shape={"square"}
              src={"/infoPic/man.png"}
              alt={"남자"}
              width={300}
              height={300}
            />
          </div>
          <div className={"info-content"}>
            <ShapeImage
              shape={"square"}
              src={"/infoPic/advocate.png"}
              alt={"여자"}
              width={300}
              height={300}
            />
            <div>
              <div className={"bubble left"}>
                "아나파잉" 서비스를 통해 쉽게 비급여에 관한 병원 및 기타 정보를
                얻을 수 있어요!
              </div>
              <div className={"bubble left"}>
                비급여 항목은 병원 자체적으로 진료비를 정하기 때문에 금액 차이가
                크게 발생하게 됩니다!
              </div>
            </div>
          </div>
          <ShapeImage
            shape={"square"}
            src={"/infoPic/pic8.png"}
            alt={"설명8"}
            width={350}
            height={300}
          />
        </section>
      </main>
    </div>
  );
};

export default InfoPage;
