const $buttonSum = document.querySelector(".sum") as HTMLButtonElement;
const $paragraphResult = document.querySelector(
  ".calculate__result"
) as HTMLParagraphElement;

$buttonSum.addEventListener("pointerdown", () => {
  const hours: number = selector(".hour").reduce(
    (previousValue: number, currentValue: number) => {
      let value = currentValue * 60 * 60;
      return value + previousValue;
    },
    0
  );
  const min: number = selector(".min").reduce(
    (previousValue: number, currentValue: number) => {
      let value = currentValue * 60;
      return value + previousValue;
    },
    0
  );
  const second: number = selector(".second").reduce(
    (previousValue: number, currentValue: number) =>
      previousValue + currentValue,
    0
  );
  let totalTimeValue = hours + min + second;

  $paragraphResult.textContent = `${Math.floor(totalTimeValue / 60 / 60)}:${
    convert(totalTimeValue, "min") > 10
      ? convert(totalTimeValue, "min")
      : "0" + convert(totalTimeValue, "min")
  }:${
    convert(totalTimeValue, "second") > 10
      ? convert(totalTimeValue, "second")
      : "0" + convert(totalTimeValue, "second")
  }`;
});

function convert(ing: number, type: "min" | "second") {
  // * Esta variable guardaremos los decimales de los min
  let valueString: string = "";
  // * La usaremos para asi poder calcular los valores
  let valueData: number;
  if (ing === 0) {
    return ing;
  }
  // ! Convertir los valores a minutos
  if (type === "min") {
    valueData = Math.floor(ing / 60);
    valueData = valueData / 60;
    valueString = `${valueData}`.includes(".")
      ? `${valueData}`.split(".")[1].slice(0, 2)
      : "0";
  }
  // ! Convertir los valores a segundos
  if (type === "second") {
    valueData = ing / 60;
    valueString = `${valueData}`.includes(".")
      ? `${ing / 60}`.split(".")[1].split("").slice(0, 2).join("")
      : "0";
  }
  // ! Lo que devuelve la función
  return valueString.length > 1
    ? Math.ceil((+valueString / 100) * 60)
    : Math.ceil((+valueString / 10) * 60);
}

function selector(value: string) {
  return Array.from(document.querySelectorAll(value)).map((elem: Element) => {
    let input = elem as HTMLInputElement;
    if (input.value) {
      return +input.value;
    }
    return 0;
  });
}
