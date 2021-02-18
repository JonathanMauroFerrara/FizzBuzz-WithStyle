export function n_control(n) {
  if (n % 3 == 0 && n % 5 == 0) {
    n = "FizzBuzz";
  } else if (n % 3 == 0) {
    n = "Fizz";
  } else if (n % 5 == 0) {
    n = "Buzz";
  } else return n;
  return n;
}
