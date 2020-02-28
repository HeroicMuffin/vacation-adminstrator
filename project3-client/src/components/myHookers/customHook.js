import { useState } from "react";

export default function useCustomHook(initialState) {
  const [data, setData] = useState(initialState);

  const handleChange = event => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  return [data, handleChange];
}
