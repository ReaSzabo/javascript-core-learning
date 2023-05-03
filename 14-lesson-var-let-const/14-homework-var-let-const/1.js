function begin() {
  for (let i = 0; i < 5; i++) {
    console.log(i)
  }
  // i is not defined and will return an error
  console.log(i)
}

begin()