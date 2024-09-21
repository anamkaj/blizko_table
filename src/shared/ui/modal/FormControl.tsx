"use client";

import { Box, Button, IconButton, Modal } from "@mui/material";
import React, { ReactNode, SVGProps, useState } from "react";

interface FormControlTemplateProps {
  children: ReactNode;
  button?: string;
  icon?: React.JSX.Element;
  active: () => void;
  state: boolean;
  title?: string;
}

export default function FormControlTemplate({
  children,
  button,
  icon,
  active,
  state,
  title,
}: FormControlTemplateProps) {
  const closeBtn = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
      ></path>
    </svg>
  );

  return (
    <>
      {/* {icon !== undefined ? (
        <IconButton onClick={active}>{icon}</IconButton>
      ) : (
        <Button variant="text" onClick={active}>
          {button}
        </Button>
      )} */}

      <Modal
        open={state}
        onClose={active}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4 rounded-xl w-auto h-auto outline-none">
          <IconButton onClick={active} className="float-right">
            {closeBtn}
          </IconButton>
          <h3>{title?.length !== 0 ? title : ""}</h3>
          {children}
        </Box>
      </Modal>
    </>
  );
}
