function scriptOfSample(char, scripts) {
  // Unicode-Codepoint des Zeichens
  const codePoint = char.codePointAt(0);

  // Durch alle Schriftsysteme iterieren
  for (const script of scripts) {
    for (const range of script.ranges) {
      const [from, to] = range;

      // Bereich ist inklusiv/exklusiv: [from, to)
      if (codePoint >= from && codePoint < to) {
        return script.name;
      }
    }
  }

  // Kein Schriftsystem gefunden
  return "unknown";
}

module.exports = { scriptOfSample };
