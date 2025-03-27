// what will be logged? - Bence 31 éves. Sanyika 11 éves és a kedvenc tárgya: matek

class Person {
    age = null;
    name = null;
    logInfo = function () {
        console.log(this.name + " " + this.age + " éves.")
    }
}

class Student extends Person {
    favoriteSubject = null;
    logInfo = function () {
        console.log(this.name + " " + this.age + " éves és a kedvenc tárgya: " + this.favoriteSubject);
    }
}

const person = new Person();
person.age = 31;
person.name = "Bence";
person.logInfo();

const student = new Student();
student.age = 11;
student.name = "Sanyika";
student.favoriteSubject = "matek";
student.logInfo();
