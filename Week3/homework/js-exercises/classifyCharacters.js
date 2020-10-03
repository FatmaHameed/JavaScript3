// # STORY

// Abdulkareem is a 35 year old man, that lives in Riyadh. He has a wife and 3 children. As a day job he's a construction worker, that makes houses. He likes to eat dates and smoke water pipe.

// Abdulkareem has a horse, named Adel. The horse is 15 years old and has the color brown. Usually the horse eats grass or helps transport materials for Abdulkareem.

// And they lived happily ever after!

class Creature {
  constructor(name, age, work, favoriteFood) {
    this.name = name;
    this.age = age;
    this.work = work;
    this.favoriteFood = favoriteFood;
  }
}
class Person extends Creature {
  constructor(
    name,
    age,
    city,
    engaged,
    childrenNo,
    work,
    favoriteFood,
    habit,
  ) {
    super(name);
    super(age);
    this.city = city;
    this.engaged = engaged;
    this.childrenNo = childrenNo;
    super(work);
    super(favoriteFood);
    this.habit = habit;
  }

  hasSpouse() {
    if (!this.engaged || this.engaged == 'no') {
      return `${this.name} does not have spouse.`;
    }
    return `${this.name} has spouse.`;
  }
  hasChildren() {
    if (
      !this.childrenNo ||
      this.childrenNo === 'no' ||
      this.childrenNo <= 0 ||
      this.childrenNo === '0'
    ) {
      return `${this.name} does not have children.`}
      hasJob() {
        if (this.work) {
          return `${this.name} is working as ${this.work}.`;
        }
        return `${this.name} does not have job.`}
}
const Abdulkareem = new Person(
  'Abdulkareem',
  35,
  'Riyadh',
  'no',
  '0',
  'Constructor worker',
  'dates',
  'smoke water pipe',
);

// console.log(Abdulkareem);
// console.log(Abdulkareem.childrenNo);
// console.log(Abdulkareem.hasWife());
// console.log(Abdulkareem.hasJob());
// console.log(Abdulkareem.hasChildren());
// console.log(Abdulkareem.favoriteFood);
class animal extends Creature {
  constructor(name, age, color, favoriteFood, work) {
    super(name);
    super(age);
    this.color = color;
    super(work);
    super(favoriteFood);
  }
}
const horseAdel = new Animal(
  'Adel',
  15,
  'brown',
  'grass',
  'transport material',
);
console.log(horseAdel);
