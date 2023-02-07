import React from "react";
import Image from "next/image";
import { Grid, Box, Container, Typography } from "@mui/material";
import StarFull from "../../public/star-full.svg"
import StarHalf from "../../public/star-half.svg"
import StarZero from "../../public/star-zero.svg"
const Feedback = (props: any) => {
  

  return (
    <section className="feedback">
      <Container maxWidth="lg">
        <Grid container flexDirection="row" columnSpacing={3}>
          <Grid item md={4} order={{ xs: 4, md: 1 }} data-aos="fade-up">
            <div className="review">
                <div className="rating">
                    <StarFull />
                    <StarFull />
                    <StarFull />
                    <StarHalf />
                    <StarZero />
                </div>
                <div className="text">
                    Excellent Service! Very fast and replied to my email almost within the 24 hours range, got my miners after 7 months but that's understandable. :)
                </div>
                <div className="user">
                    <img src="https://blackmine.su/images/reviews/user1.png" />
                    <div className="desc">
                        <div>
                            Zyzz
                        </div>
                        <div>
                            8 hours ago
                        </div>
                    </div>
                </div>
            </div>
          </Grid>
          <Grid item md={4} order={{ xs: 1, md: 2 }}>
            <div className="review-title">
                <Typography variant="h2" data-aos="fade-up">
                    <div><span>отзывы</span><span>авито</span></div>Честные отзывы от клиентов
                </Typography>
            </div>
          </Grid>
          <Grid item md={4} order={{ xs: 5, md: 3 }} data-aos="fade-up">
            <div className="review">
                <div className="rating">
                    <StarFull />
                    <StarFull />
                    <StarFull />
                    <StarFull />
                    <StarFull />
                </div>
                <div className="text">
                    Excellent Service! Very fast and replied to my email almost within the 24 hours range, got my miners after 7 months but that's understandable. :)
                </div>
                <div className="user">
                    <img src="https://blackmine.su/images/reviews/user1.png" />
                    <div className="desc">
                        <div>
                            Zyzz
                        </div>
                        <div>
                            8 hours ago
                        </div>
                    </div>
                </div>
            </div>
          </Grid>
          <Grid item md={4} order={{ xs: 2, md: 4 }} data-aos="fade-up">
            <div className="review-info">
                <div className="stat">
                    4.85<span>/5</span>
                </div>
                <div className="rating">
                    <StarFull />
                    <StarFull />
                    <StarFull />
                    <StarFull />
                    <StarHalf />
                </div>
                <div className="count">
                    385 отзывов
                </div>
            </div>
          </Grid>
          <Grid item md={4} order={{ xs: 6, md: 5 }} data-aos="fade-up">
            <div className="review">
                <div className="rating">
                    <StarFull />
                    <StarFull />
                    <StarFull />
                    <StarFull />
                    <StarFull />
                </div>
                <div className="text">
                    Excellent Service! Very fast and replied to my email almost within the 24 hours range, got my miners after 7 months but that's understandable. :)
                </div>
                <div className="user">
                    <img src="https://blackmine.su/images/reviews/user1.png" />
                    <div className="desc">
                        <div>
                            Zyzz
                        </div>
                        <div>
                            8 hours ago
                        </div>
                    </div>
                </div>
            </div>
          </Grid>
          <Grid item md={4} order={{ xs: 3, md: 6 }} data-aos="fade-right">
            <div className="review-view">
                <div className="text">
                    Хотите увидеть все отзывы<span>с Авито?</span>
                </div>
                <div className="btn">
                    <a href="" target="_blank">Посмотреть все</a>
                </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Feedback;
