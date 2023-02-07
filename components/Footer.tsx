import React from "react";
import { Box, Grid, Link, Container } from "@mui/material";
import Message from "../public/message.svg";
import Location from "../public/location.svg";
import Image from "next/image";

const Footer = (props: any) => {
  return (
    <footer className="footer">
      <Container>
        <Box>
          <Grid container justifyContent="space-between" px={{ sm : 9, md: 0}}>
            <Grid item xs={7} sm={7} md={3} pb={{ xs: 2, sm: 3}}>
              <Box style={{ marginBottom: "8px" }}>
                <Image
                  alt="Logo"
                  src="/img/logo.png"
                  width={150}
                  height={32}
                  quality={100}
                />
              </Box>
              <ul>
                <li className="with-svg">
                  <Location />
                  Россия, Екатеринбург
                </li>
                <li className="with-svg">
                  <Message />
                  <Link>Связаться</Link>
                </li>
                <li>
                  made by <a>leadboat</a>
                </li>
                <li>© 2021 MyMiner</li>
              </ul>
            </Grid>
            <Grid item xs={5} sm={5} md={3} pb={{ xs: 2, sm: 3}}>
              <h3>Antminer</h3>
              <ul>
                <li>
                  <Link>Antminer S19 Pro</Link>
                </li>
                <li>
                  <Link>Antminer T19</Link>
                </li>
                <li>
                  <Link>Antminer T17E</Link>
                </li>
                <li>
                  <Link>Antminer T17</Link>
                </li>
                <li>
                  <Link>Другие</Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={7} sm={7} md={3}>
              <h3>КАРТА САЙТА</h3>
              <ul>
                <li>
                  <Link>Главная</Link>
                </li>
                <li>
                  <Link>Услуги</Link>
                </li>
                <li>
                  <Link>Отзывы</Link>
                </li>
                <li>
                  <Link>Контакты</Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={5} sm={5} md={3}>
              <h3>БУДЬ В КУРСЕ!</h3>
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">YouTube</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
