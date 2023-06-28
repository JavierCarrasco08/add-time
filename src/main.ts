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
  console.log(totalTimeValue);
});

function sumTime() {}

function selector(value: string) {
  return Array.from(document.querySelectorAll(value)).map((elem: Element) => {
    let input = elem as HTMLInputElement;
    if (input.value) {
      return +input.value;
    }
    return 0;
  });
}
