function Bootweek4(message, number) {
  let result = "";
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  for (let i = 0; i < message.length; i++) {
    let currentI = alphabet.indexOf(message[i]);
    let decodedMessage = currentI + number;
    result += alphabet[decodedMessage];
  }
  return result;
}

console.log(Bootweek4("ccc", 1));
