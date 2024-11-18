let ages: number[] = [100, 101]

type Student = {
    name: string,
    age: number,
    isStudent: boolean
}

const student1: Student = {
  name: "Joe",
  age: 42,
  isStudent: true,
};

const student2: Student = {
  name: "Jill",
  age: 66,
  isStudent: false,
};

const students: Student[] = [student1, student2];

Array<Student>