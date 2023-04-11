// implicit returns require no need for writing 'return' or curly brackets, used for single statements

//task
const searchengines = [
  { target: "https://google.com", name: "Google" },
  { target: "https://bing.com", name: "Bing" },
];
// let links = "";
searchengines.forEach((link) => {
  links.push(`<a href="${link.target}">${link.name}</a>`);
});

//solution
const links = searchengines.map((link) => `<a href="${link.target}">${link.name}</a>`).join("");
