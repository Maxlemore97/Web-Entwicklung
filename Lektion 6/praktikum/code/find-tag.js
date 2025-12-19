// function findTag(input: string): string | undefined {
//   const len = input.length;
//
//   for (let i = 0; i < len; i++) {
//     // Start eines möglichen Tags
//     if (input[i] === "<") {
//       let tag = "";
//       let valid = true;
//
//       for (let j = i + 1; j < len; j++) {
//         const char = input[j];
//
//         // Ungültig, wenn Leerzeichen im Tag
//         if (char === " ") {
//           valid = false;
//           break;
//         }
//
//         // Ende des Tags
//         if (char === ">") {
//           return valid && tag.length > 0 ? tag : undefined;
//         }
//
//         // Verschachteltes < → neues Tag beginnt
//         if (char === "<") {
//           break;
//         }
//
//         tag += char;
//       }
//     }
//   }
//
//   return undefined;
// }

/*
JavaScript-Code
*/

function findTag(input) {
  const len = input.length;

  for (let i = 0; i < len; i++) {
    if (input[i] === "<") {
      let tag = "";
      let valid = true;

      for (let j = i + 1; j < len; j++) {
        const char = input[j];

        if (char === " ") {
          valid = false;
          break;
        }

        if (char === ">") {
          return valid && tag.length > 0 ? tag : undefined;
        }

        if (char === "<") {
          break;
        }

        tag += char;
      }
    }
  }

  return undefined;
}

module.exports = { findTag };
