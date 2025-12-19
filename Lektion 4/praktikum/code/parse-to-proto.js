function parseToProto(json, proto) {
  // JSON-String in Objekt parsen
  const obj = JSON.parse(json);

  // Prototyp setzen
  Object.setPrototypeOf(obj, proto);

  return obj;
}

/*
========================
Tests (auskommentiert)
========================

let proto = { category: "animal" };

let obj = parseToProto(
  '{"type":"cat","name":"Mimi","age":3}',
  proto
);

// Test: Eigene Eigenschaften
console.assert(obj.type === "cat", "type should be 'cat'");
console.assert(obj.name === "Mimi", "name should be 'Mimi'");
console.assert(obj.age === 3, "age should be 3");

// Test: Prototyp-Eigenschaft
console.assert(obj.category === "animal", "category should come from prototype");

// Test: Prototyp korrekt gesetzt
console.assert(Object.getPrototypeOf(obj) === proto, "prototype should be proto");

*/

module.exports = { parseToProto };
