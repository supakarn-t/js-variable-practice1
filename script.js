var var_out = "var out";
let let_out = "let out";
const const_out = "const out";

// Block Scope

{
  var var_block = "var block";
  let let_block = "let block";
  const const_block = "const block";

  console.log(var_out);
  console.log(let_out);
  console.log(const_out);

  console.log(var_block);
  console.log(let_block);
  console.log(const_block);
}

// Function Scope
function my_stock(name) {
  var var_func = name;
  let let_func = name;
  const const_func = name;

  console.log(var_out);
  console.log(let_out);
  console.log(const_out);

  console.log(var_block);
  //   console.log(let_block);
  //   console.log(const_block);

  console.log(var_func);
  console.log(let_func);
  console.log(const_func);
}

my_stock("func");

console.log(var_out);
console.log(let_out);
console.log(const_out);

console.log(var_block);
// console.log(let_block);
// console.log(const_block);

console.log(var_func);
// console.log(let_func);
// console.log(const_func);
