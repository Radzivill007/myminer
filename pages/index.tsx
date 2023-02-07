import type { NextPage } from "next";
import MainBanner from "../components/blocks/MainBanner";
import Layout from "../components/Layout";
import Plus from "../components/blocks/Plus";
import Contact from "../components/blocks/Contact";
import Prices from "../components/blocks/Prices";
import Faq from "../components/blocks/Faq";
import Feedback from "../components/blocks/Feedback";

const Home: NextPage = () => {
  return (
    <Layout title="Ремонт асиков" description="Ремонт асиков" keywords={["ремонт асиков", "ремонт Т17"]}>
      <MainBanner
        title="Отремонтируем <br /> ваш Antminer"
        description={`Специализированный сервис 
            <br /> 
            по ремонту Antminer
            <br />
            ГАРАНТИЯ на работу <span>30 ДНЕЙ</span>`}
        img="/img/s19.png"
      />
      <Plus />
      <Prices />
      <Contact
        src={"/img/bg-contact-one.jpg"}
        title={"Почините кормильца🎉"}
        label={"важно"}
        desc={
          "Заполните простую форму. Наш специалист свяжется с вами и ответит на все вопросы."
        }
        orderText={0}
        orderForm={1}
      />
      <Feedback />
      <Faq />
      <Contact
        src={"/img/bg-contact-two.jpg"}
        title={"Консультация специалиста"}
        label={"помощь"}
        desc={
          "Ответим на все волнующие вас вопросы и предложим оптимальное решение."
        }
        orderText={1}
        orderForm={0}
      />
    </Layout>
  );
};

export default Home;
