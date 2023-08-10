class Food {
    isFine = true;
    calories;
    color;
    isHomemade = true;

    getCalories = function () {
        return this.calories;
    }

    setCalories = function (calories) {
        this.calories = calories;
    }
}

const food1 = new Food();
food1.setCalories(1000);
console.log(food1.calories)
console.log(food1.getCalories())