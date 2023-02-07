import React from "react";
import Image from "next/image";
import { Grid, Box, Container} from "@mui/material";
import Form from "../Form"



const Contact = (props: any) => {
  return (
    <section className="contact" data-aos="fade-up">
      <Image
        // placeholder="blur"
        // blurDataURL="base64"
        layout="fill"
        className="contact-img"
        src={props.src}
        alt="contact"
        objectFit="cover"
        quality={100}
      />
      <Container maxWidth="lg" className="contact-container">
        <Grid container flexDirection="row" alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={6} className="text-banner" order={{sm: 0, md: props.orderText}}>
            <span className="label" data-aos="fade-up" data-aos-delay="100">{props.label}</span>
            <h2 data-aos="fade-up" data-aos-delay="200">{props.title}</h2>
            <p data-aos="fade-up" data-aos-delay="300">{props.desc}</p>
          </Grid>
          <Grid item xs={12} md={6} order={{ sm: 1, md: props.orderForm }}>
            <Box className="form-wrap">
              <Form />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;
