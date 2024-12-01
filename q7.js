//? 7. Write a function to:
// todo1: find every item with more than 6 characters
// todo2: then check, if all of them have less than 10 characters return true, otherwise return false

const array = ["hello Jo", "fish", "birmingham", "periodic table", "phone","aaaaaaaaaaaaaaaa"];
//!  Answer:

function itemMore6(params) {
  let arrays = params.filter((i) => i.length > 6);
  if (arrays.length > 10) {
    return false;
  } else {
    return true;
  }


}

console.log(itemMore6(array));