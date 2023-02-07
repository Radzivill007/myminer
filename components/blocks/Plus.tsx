import React from "react";
import Image from "next/image";
import { Grid, Box, Container, Button, Paper, Typography } from "@mui/material";
import PlusOne from "../../public/plus-1.svg";
import PlusSecond from "../../public/plus-2.svg";
import PlusThird from "../../public/plus-3.svg";
import PlusFour from "../../public/plus-4.svg";

const Plus = (props: any) => {
  return (
    <section className="plus">
      <Container maxWidth="lg">
        {/* <span>преимущества</span>
        <h2>Почему выбирают нас?</h2> */}
        <Typography variant="h2" data-aos="fade-up">
          <div>
            <span>преимущества</span>
          </div>
          Почему выбирают нас?
        </Typography>
        <Box className="container">
          <Grid container flexDirection="row" justifyContent="center" data-aos="fade-up" data-aos-delay="100">
            <Grid item className="paper" md={3} sm={6}>
              <Box className="box">
                <div className="circle">
                  <PlusOne />
                </div>
                <p>По всему миру</p>
                <p>Работаем по всему земному шару</p>
              </Box>
            </Grid>
            <Grid item className="paper" md={3} sm={6} data-aos="fade-up" data-aos-delay="200">
              <Box className="box">
                <div className="circle">
                  <PlusSecond />
                </div>
                <p>Гарантия</p>
                <p>30 дней на выполненные нами работы</p>
              </Box>
            </Grid>
            <Grid item className="paper" md={3} sm={6} data-aos="fade-up" data-aos-delay="300">
              <Box className="box">
                <div className="circle">
                  <PlusThird />
                </div>
                <p>Консультация</p>
                <p>Бесплатная консультация по любым вопросам</p>
              </Box>
            </Grid>
            <Grid item className="paper" md={3} sm={6} data-aos="fade-up" data-aos-delay="400">
              <Box className="box">
                <div className="circle">
                  <PlusFour />
                </div>
                <p>Быстрый ремонт</p>
                <p>Ремонт в короткие сроки, +50% к стоимости</p>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Plus;
