# typescript-playground

## Note (Hungary)

### Basic Types

#### Boolean
Alap adatipus true es false ertekkel.

#### Number
Az osszes szam tipust tartalmazza: dec, hex stb...

#### String
Karakter lancok sorozata.
Beagyazott kifejezeseknel (`) es ${ expr }

#### Array
Ugyan az mint JavaScript-ben
```
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```

#### Tuple
Fix meretu(2) tomb. Egymas mellett 2 tipus is lehetseges. Ismerjuk a tipusokat.
```
let x: [string, number];
```

#### Enum
Hasznos foleg a numerikus kifejezeseknel.
```
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

Enum tagoknak a szamozasa nullaval kezdodik de manualisan allit hatunk rajta. vagy az osszes tagnak mas erteket adhatunk.
```
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
```
Sorszam alapjan is hivatkozhatunk a tagokra.

#### Any
Ha nem tudjuk a valtozo tipusat nagy segitseg lehet. Az any letiltja a tipus ellenorzest igy a fordito nem fog hibat dobni.
Az any-n megtudunk hivni metodusokat amig az Objecten nem.

#### Void 
Hasonlit az anyre de olyan metodusoknal hasznaljuk aminek nincs visszateresi erteke.
A void valtozohoz csak null erteket lehet megadni akkor ha --strictNullChecks nincs megadva

#### Never
Akkor hasznaljuk peldaul ha fuggveny kivetelt dob vagy soha nem ter vissza

#### Object
Az object tipus egy nem primitiv tipust kepvisel.