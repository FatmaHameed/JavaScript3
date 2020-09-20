// # STORY

// Abdulkareem is a 35 year old man, that lives in Riyadh. He has a wife and 3 children. As a day job he's a construction worker, that makes houses. He likes to eat dates and smoke water pipe.

// Abdulkareem has a horse, named Adel. The horse is 15 years old and has the color brown. Usually the horse eats grass or helps transport materials for Abdulkareem.

// And they lived happily ever after!
class Person {
  constructor(
    name,
    age,
    city,
    married,
    childrenNo,
    job,
    favoriteFood,
    smokeType,
  ) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.married = married;
    this.childrenNo = childrenNo;
    this.job = job;
    this._favoriteFood = favoriteFood;
    this._smokeType = smokeType;
  }

  hasWife() {
    if (!this.married || this.married == 'no') {
      return `${this.name} is not married.`;
    }
    return `${this.name} has wife.`;
  }

  hasChildren() {
    if (
      !this.childrenNo ||
      this.childrenNo === 'no' ||
      this.childrenNo <= 0 ||
      this.childrenNo === '0'
    ) {
      return `${this.name} does not have children.`;
    }

    return `${this.name} has ${this.childrenNo} children.`;
  }

  hasJob() {
    if (this.job) {
      return `${this.name} is working as ${this.job}.`;
    }
    return `${this.name} does not have job.`;
  }

  get favoriteFood() {
    return `${this.name} likes to eat ${this._favoriteFood}`;
  }
}
const Abdulkareem = new Person(
  'Abdulkareem',
  35,
  'Riyadh',
  'no',
  '0',
  'Constructor worker',
  'dates',
  'water pipe',
);

// console.log(Abdulkareem);
// console.log(Abdulkareem.childrenNo);
// console.log(Abdulkareem.hasWife());
// console.log(Abdulkareem.hasJob());
// console.log(Abdulkareem.hasChildren());
// console.log(Abdulkareem.favoriteFood);
class Horse {
  constructor(name, age, color, foodType, work) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.foodType = foodType;
    this.work = work;
  }
}
const Adel = new Horse('Adel', 15, 'brown', 'grass', 'transport material');
console.log(Adel);
