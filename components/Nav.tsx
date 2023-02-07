import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";
const data = [
  {
    text: "Главная",
    link: "/",
  },
  {
    text: "Услуги",
    link: "#uslugi",
    drop: [
      {
        text: "Ремонт Т17 T17E T17+",
        link: "/remont-T17-T17E-T17+",
      },
      {
        text: "Ремонт S17/S17PRO/S17+ ",
        link: "/remont-S17-S17PRO-S17+",
      },
      {
        text: "Ремонт T19",
        link: "/remont-T19",
      },
      {
        text: "Ремонт S19/S19PRO/S19J",
        link: "/remont-S19-S19PRO-S19J",
      },
    ],
  },
  {
    text: "Цены",
    link: "#prices",
  },
  {
    text: "Отзывы",
    link: "#feedback",
  },
  {
    text: "Контакты",
    link: "/contacts",
  },
];

const Nav = (props: any) => {
  const small =
    typeof window !== `undefined`
      ? window.matchMedia("(max-width:960px)").matches
      : null;
  const [tog, setTog] = React.useState(false);
  const [menuIndex, setMenuIndex] = React.useState(-1);
  return (
    <nav>
      <Container>
        <div className="inner">
          <div className="left">
            <div className="logo" data-aos="fade-right">
              <Link href="/">
                <Image
                  priority
                  width={150}
                  height={32}
                  src={`/img/logo.png`}
                  alt={`logo`}
                />
              </Link>
            </div>
            <div className={tog ? "menu open" : "menu"} data-aos="fade-left">
              {data.map((item, index) => {
                if (Array.isArray(item.drop)) {
                  return (
                    <a
                      key={`dropdown-menu-${index}`}
                      onClick={() =>
                        small && setMenuIndex(menuIndex === index ? -1 : index)
                      }
                      onMouseEnter={() => !small && setMenuIndex(index)}
                      onMouseLeave={() => !small && setMenuIndex(-1)}
                    >
                      <p className={menuIndex === index ? "" : `menu-drp`}>
                        {item.text}
                      </p>
                      <div
                        className={
                          menuIndex === index ? `dropdown show` : `dropdown`
                        }
                      >
                        {item.drop.map((drpdwnItem, i) => {
                          return (
                            <div key={i}>
                              <Link href={`${drpdwnItem.link}`}>
                                {drpdwnItem.text}
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </a>
                  );
                } else {
                  return (
                    <Link key={`menu-${index}`} href={item.link}>
                      {item.text}
                    </Link>
                  );
                }
              })}
            </div>
          </div>
          <div className="right">
            <div className="btn" data-aos="fade-left">
              <Button variant="contained" className="btn-primary">
                Оставить заявку
              </Button>
            </div>
          </div>
          <div
            className={tog ? "toggler open" : "toggler"}
            onClick={() => setTog(!tog)}
          >
            <span />
          </div>
        </div>
      </Container>
    </nav>
  );
};
export default Nav;
