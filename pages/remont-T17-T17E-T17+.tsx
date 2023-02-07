import type { NextPage } from "next";
import MainBanner from "../components/blocks/MainBanner";
import Layout from "../components/Layout";
import Box from "@mui/material/Box";
import Plus from "../components/blocks/Plus";
import Contact from "../components/blocks/Contact";
import Prices from "../components/blocks/Prices";
import Faq from "../components/blocks/Faq";
import Stars from "../components/blocks/Stars";
import Feedback from "../components/blocks/Feedback";

const T17: NextPage = () => {
  return (
    <Layout title="Ремонт T17" description="Ремонт T17">
      <Box>
        <MainBanner
          title="Отремонтируем <br /> ваш Antminer Т17/T17E/T17+"
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
      </Box>
    </Layout>
  );
};

export default T17;
