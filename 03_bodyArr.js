const data = [
  'Search | Fee Quote',
  'Search | Small Claims Court',
  'Search | Certified Product',
  
  
];

const body = data.map((id) => ({
  name: id,
  // id: id,
  // acdAutoAnswer: false,
}));

console.log(body);
