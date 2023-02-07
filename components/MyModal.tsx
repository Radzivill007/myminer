import React from "react"   
import { Button, Box, Modal, TextField } from "@mui/material"
import Form from "./Form"

export default function MyModal(props: any) {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Button
        variant="contained"
        className="btn-primary"
        onClick={() => setOpen(true)}
      >
        {props.children}
      </Button>
      <Modal
        className="modal"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box className="inner">
          <button className="close" onClick={()=>setOpen(false)} />
          <div className="rocket" />
          <h3>Заявка!</h3>
          <Form />
        </Box>
      </Modal>
    </>
  )
}
