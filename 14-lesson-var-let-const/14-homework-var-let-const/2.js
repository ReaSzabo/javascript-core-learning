var begin = () => {
  for (var i = 0; i < 5; i++) {
    console.log(i)
  }
  // i is accessible outside the for loop
  console.log(i)
}

begin();