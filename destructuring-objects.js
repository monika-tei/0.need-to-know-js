/* this function receives an object with stuff it does not need
make it easier for the next developer by destructuring out the 
parts we need 
Then clean up the function by removing "person.x". */

// function personCard(person) {
//   return `<div class="person">
//           <h2>${person.name}</h2>
//           <ul>
//               <li><a href="tel:+${person.phone}">Call</a></li>
//               <li><a href="mailto:${person.email}">E-mail</a></li>
//           </ul>
//       </div>`;
// }

//solution:

function personCard({ name, phone, email }) {
  return `<div class="person">
      <h2>${name}</h2>
      <ul>
          <li><a href="tel:+${phone}">Call</a></li>
          <li><a href="mailto:${email}">E-mail</a></li>
      </ul>
  </div>`;
}

const myPerson = {
  name: "Clark Kent",
  marriage: null,
  glasses: true,
  phone: 911,
  street: "secret",
  email: "clark@dailyplanet.com",
};
personCard(myPerson);
