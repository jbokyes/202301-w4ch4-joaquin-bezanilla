import { useState } from "react";

export type usePhoneStructure = ReturnType<typeof usePhone>;
export function usePhone() {
  let initialState: string = "";

  let [keyboard, setKeyboard] = useState(initialState);

  const handlerClickNumber = (number: string) => {
    setKeyboard(keyboard + number);
  };

  const handleClickDelete = () => {
    setKeyboard((keyboard = ""));
  };

  return { keyboard, handlerClickNumber, handleClickDelete };
}
