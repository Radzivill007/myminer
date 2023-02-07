import React from "react";
import Image from "next/image";
import { Grid, Box, Container, Button } from "@mui/material";
import Stars from "./Stars";
import Modal from "../MyModal"

const MainBanner = (props: any) => {
  return (
    <section className="bg-wrap">
      {/* <Stars/> */}
      <Container maxWidth="lg">
        <Grid container alignItems="center" justifyContent="center">
          <Grid item md={6} alignItems="center" justifyContent="center">
            <h1 dangerouslySetInnerHTML={{ __html: props.title }} />
            <p dangerouslySetInnerHTML={{ __html: props.description }} />
            <Box className="btn-wrap">
                <Modal>Связаться</Modal>
              {/* <Button variant="contained" className="btn-primary">
                Связаться
              </Button> */}
              <Button variant="contained" className="btn-second">
                +7 999 999 99 99
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            alignContent="center"
            justifyContent="center"
            textAlign="right"
            className="image"
            data-aos="fade-up"
          >
            <Image
              priority
              
              alt="Miner S19"
              src={props.img}
              width={774}
              height={580}
              quality={100}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default MainBanner;
