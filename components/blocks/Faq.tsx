import React from "react";
import Image from "next/image";
import { Box, Container, Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";

const data = [
  {
    img: "/img/faq/1.png",
    asq: "Как происходит оплата?",
    answer: "Оплата производится по факту выполненых работ",
  },
  {
    img: "/img/faq/2.png",
    asq: "Как я могу узнать какой чип вы заменили?",
    answer: "По запросу можем отправлять видео/фото очет",
  },
  {
    img: "/img/faq/3.png",
    asq: "Какие модели майнеров вы ремонтируете?",
    answer: "Весь модельный ряд antminer",
  },
  {
    img: "/img/faq/4.png",
    asq: "Может ли асик повредиться при транспортировке ТК?",
    answer: "Мы исключили этот момент путем качественной упаковки",
  },
  {
    img: "/img/faq/5.png",
    asq: "Могу ли я использовать не оригинальные прошивки?",
    answer: "Нет, мы даем гарантию на работу только на оригинальной прошивке",
  }
]

const Faq = (props: any) => {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel:string) => (event:any, isExpanded:boolean) => {
    setExpanded(isExpanded ? panel : '');
  };

  return (
    <section className="faq">
      <Container maxWidth="lg">
        <Typography variant="h2" data-aos="fade-up">
          <div>
            <span>
              ответы
            </span>
            <span>
              вопросы
            </span>
          </div>          
          Ответы на часто задаваемые вопросы
        </Typography>
        {
          data.map((item,i)=>{
            return (
              <Box sx={{marginBottom: "18px"}} key={i} data-aos="fade-up" data-aos-delay={i+"00"}>
                <Accordion className="myaccordion" expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
                  <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
                    <div className="quest">
                      <Image
                        width={40}
                        height={40}
                        src={item.img}
                        alt={`quest-${i+1}-image`}
                      />
                      <Typography >{item.asq}</Typography>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="answer">
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            )
          })
        }
      </Container>
    </section>
  );
};

export default Faq;
