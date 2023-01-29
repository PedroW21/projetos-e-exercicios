import React, { useEffect, useState } from "react";
import { Slider } from "./Slider/Slider";
import { Select } from "./Select";
import { CardInfo } from "./CardInfo/CardInfo";
import { Button } from "./Button";
import { verifyPasswordStrength } from "../core/verifyPasswordStrength";
import { generatePassword } from "../core/generatePassword";

const passwordType = {
  veryWeak: "muito fraco",
  weak: "fraco",
  medium: "medio",
  strong: "forte",
  empty: "",
};

const checkedInputs = new Set<string>();

export const Table = () => {
  const [passwordLength, setPasswordLength] = useState("0");
  const [passwordStrength, setPasswordStrength] = useState(passwordType.empty);
  const [qtdSelectedFields, setQtdSelectedFields] = useState(0);

  useEffect(() => {
    const passwordLengthNumber = parseInt(passwordLength);

    const resultPasswordStrength = verifyPasswordStrength(passwordLengthNumber, qtdSelectedFields);

    setPasswordStrength(passwordType[resultPasswordStrength]);
    
  }, [qtdSelectedFields, passwordLength]);

  const definePasswordStrong = (id: string) => {
    if (checkedInputs.has(id)) {
      checkedInputs.delete(id);
      setQtdSelectedFields(qtdSelectedFields - 1);
    } else {
      checkedInputs.add(id);
      setQtdSelectedFields(qtdSelectedFields + 1);
    }
  };

  return (
    <section
      className={`
            flex
            flex-col
            w-96
            mt-4
            px-4
            py-6
            text-whiteSmoked
            bg-darkerGray

            md:max-md:h-4/6
            sm:max-sm:w-6/12
            sm:max-sm:h-auto
            `}
    >
      <Slider
        passwordLength={passwordLength}
        setPasswordLength={setPasswordLength}
      />

      <section className="mt-3">
        <Select
          content="Incluir Letras Maiúsculas"
          id="upperCase"
          stateCheckbox={definePasswordStrong}
        />

        <Select
          content="Incluir Letras Minúsculas"
          id="lowerCase"
          stateCheckbox={definePasswordStrong}
        />

        <Select
          content="Incluir Números"
          id="numbers"
          stateCheckbox={definePasswordStrong}
        />

        <Select
          content="Incluir Simbolos e Caracteres Especiais"
          id="specialCharAndSymbols"
          stateCheckbox={definePasswordStrong}
        />
      </section>

      <CardInfo passwordStrength={passwordStrength} />

      <Button passwordLengthProps={passwordLength} inputProps={[...checkedInputs]}  generatePassword={generatePassword} />
    </section>
  );
};
