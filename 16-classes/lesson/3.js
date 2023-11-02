class Food {
    isFine = null;
    calories = null;
    color = null;
    isHomemade = null;

    getCalories = function () {
        return this.calories;
    }

    setCalories = function (number) {
        this.calories = number;
    }
}

var food1 = new Food();
food1.setCalories(1000);
console.log(food1.calories);
console.log(food1.getCalories());