"use client";

import React from "react";
import styled from "styled-components";

interface NavButtonProps {
  text: string;
  onClick?: () => void;
}

export default function NavButton({ text, onClick }: NavButtonProps) {
  return (
    <>
      <Button onClick={onClick}>{text}</Button>
    </>
  );
}

const Button = styled.button`
  color: var(--main-font-color);
  margin: var(--main-margin-col-size-1);
  font-size: var(--main-font-size-16);
  font-weight: 600;
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
    color: #ff4848;
  }
  @media all and (max-width:767px) {
    font-size: 15px;
  }
`;
