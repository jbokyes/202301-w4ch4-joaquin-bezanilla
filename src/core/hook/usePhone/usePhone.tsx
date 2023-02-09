import { useState } from "react";

export type usePhoneStructure = ReturnType<typeof usePhone>;
export function usePhone() {
  let initialState: string = "";

  const [keyboard, setKeyboard] = useState(initialState);

  const handleClickNumber = (number: string) => {
    setKeyboard(keyboard + number);
  };

  return { keyboard, handleClickNumber };
}
