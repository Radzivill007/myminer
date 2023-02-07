import React from "react";
import Image from "next/image";
import { Box, Button, Container, Typography } from "@mui/material";

const data = [
  {
    img: "/img/s19-mini.png",
    name: "T17",
    price: "7 500 ₽",
  },
  {
    img: "/img/s19-mini.png",
    name: "S17",
    price: "11 500 ₽",
  },
  {
    img: "/img/s19-mini.png",
    name: "S17+",
    price: "15 000 ₽",
  },
  {
    img: "/img/s19-mini.png",
    name: "T17E",
    price: "18 000 ₽",
  },
  {
    img: "/img/s19-mini.png",
    name: "T19 <span>и другие</span>",
    price: "30 000 ₽",
  },
];

const Prices = (props: any) => {
  return (
    <section className="prices">
      <Container maxWidth="lg">
        <Typography variant="h2" data-aos="fade-up">
          <div>
            <span>стоимость</span>
          </div>
          Цены на ремонт хешплат
        </Typography>
        <div className="inner">
          <div className="titles">
            <p data-aos="zoom-in">Antminer</p>
            <p data-aos="zoom-in">Стоимость</p>
          </div>
          {data.map((item, i) => {
            return (
              <div className="card" key={i} data-aos="fade-right" data-aos-delay={i+"00"}>
                <div>
                  <div className="img">
                    <Image
                      width={70}
                      height={70}
                      src={item.img}
                      alt={`quest-${i + 1}-image`}
                    />
                  </div>
                  <h3 dangerouslySetInnerHTML={{__html:item.name}}/>
                </div>
                <div>
                  <p>
                    <span>от</span>
                    {item.price}
                  </p>
                </div>
              </div>
            );
          })}
          <div className="btn" data-aos="fade-left">
            <Button variant="contained" className="btn-primary">
              Связаться
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Prices;
