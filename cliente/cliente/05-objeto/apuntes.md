# 🛠️ Apuntes: Objetos en JavaScript (lo básico)

## 1. ¿Qué son los objetos?
- En JavaScript los objetos sirven para **almacenar colecciones de datos** y **entidades más complejas**, organizadas como pares **clave:valor**.
- Las claves (keys) suelen ser **strings** (o símbolos), y los valores (values) pueden ser de cualquier tipo (primitivos, otros objetos, funciones, etc.).
- Se puede ver un objeto como un “armario de archivos”: cada valor está guardado bajo un “archivo” con nombre (la clave).

```js
let user = {
  name: "John",
  age: 30
};
```

---

## 2. Crear objetos
### 📦 Literal de objeto
```js
let user = {
  name: "John",
  age: 30
};
```
### 🏗️ Constructor `new Object()`
```js
let user = new Object();
```

---

## 3. Acceso, asignación y eliminación de propiedades
### 🔹 Notación de punto
```js
user.name;       // "John"
user.age = 31;   // modifica o agrega
delete user.age; // elimina la propiedad age
```
### 🔸 Notación de corchetes
```js
user["likes birds"] = true;
let key = "name";
console.log(user[key]);
```

---

## 4. Propiedades calculadas o dinámicas
```js
let fruit = "apple";
let bag = {
  [fruit]: 5,
  [fruit + "Count"]: 10
};
```

---

## 5. Atajo para valores de propiedad (shorthand)
```js
function makeUser(name, age) {
  return { name, age };
}
let user = makeUser("John", 30);
```

---

## 6. Claves permitidas y conversiones
- Las claves pueden ser strings o símbolos.
- Si usamos otro tipo, JavaScript lo convierte a string.
- Palabras reservadas son válidas como claves.
- `__proto__` tiene un comportamiento especial.

---

## 7. Verificar existencia de propiedades: `in`
```js
let obj = { test: undefined };
console.log(obj.test);      // undefined
console.log("test" in obj); // true
```

---

## 8. Recorrer propiedades: `for..in`
```js
for (let key in user) {
  console.log(key, user[key]);
}
```

---

## 9. Orden de las propiedades
- Claves numéricas → orden ascendente.
- Otras claves → orden de creación.

```js
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "UK",
  "1": "USA"
};
for (let code in codes) console.log(code);
// 1, 41, 44, 49
```

---

## 10. Resumen
- Los objetos almacenan datos en pares clave-valor.
- Acceso: punto o corchetes.
- Claves pueden ser dinámicas o abreviadas.
- `delete` elimina propiedades.
- `"key" in obj` comprueba existencia.
- `for..in` recorre claves.
- Claves numéricas se ordenan automáticamente.ss