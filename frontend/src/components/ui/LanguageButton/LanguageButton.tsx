"use client";

import FormControlLabel from "@mui/material/FormControlLabel";
import { LanguageSwitch } from "../..";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useEffect, useState } from "react";

export const LanguageButton = () => {
  const [isUa, setIsUa] = useState(true);
  const getCookie = (name: string) => {
    const value = `; ${document?.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) {
      const result = parts.pop()?.split(";").shift();
      return result;
    }
  };

  useEffect(() => {
    const defaultLocale = getCookie("locale");
    setIsUa(defaultLocale !== "en");
  }, []);

  const router = useRouter();
  const handleChangeLanguage = (
    event: SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    setIsUa(checked);
    const newLocale = checked ? "uk" : "en";
    document.cookie = `locale=${newLocale}`;
    router.refresh();
  };

  return (
    <>
      {/* for only 2 languages */}
      <FormControlLabel
        control={<LanguageSwitch sx={{ m: 1 }} checked={isUa} />}
        label=""
        onChange={handleChangeLanguage}
      />

      {/* for more than 2 languages */}
      {/* <TranslateIcon className="text-white" /> */}
    </>
  );
};
