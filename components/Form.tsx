import React from "react";
import Link from "next/link"
import { Button } from "@mui/material";
import InputMask from "react-input-mask";


const handleClick = (event: any) => {
  event.preventDefault();
  console.log(event.target[0])
  const name = event.target[0];
  const tel = event.target[1];
  const mail = event.target[2];
  const mailMask =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (name.value.length < 2) {
    name.classList.add("formError");
    setTimeout(() => name.classList.remove("formError"), 2000);
  }
  if (tel.value.replace(/\D/g, "").length < 11) {
    tel.classList.add("formError");
    setTimeout(() => tel.classList.remove("formError"), 2000);
  }
  if (!mailMask.test(mail.value)) {
    mail.classList.add("formError");
    setTimeout(() => mail.classList.remove("formError"), 2000);
  }
};

export default function Form(props: any) {
  return (
    <form className="form" onSubmit={handleClick}>
      <label>Имя</label>
      <input type="text" />
      <label>Телефон</label>
      <InputMask mask="+7 (999) 999-99-99" maskChar="" type="tel" />
      <label>Почта</label>
      <input type="mail" />
      <p>Нажимая на кнопку, я принимаю <Link href="/policy">соглашение</Link> на обработку персональных данных.</p>
      <Button type="submit" className="btn-primary">
        Связаться
      </Button>
    </form>
  );
}
