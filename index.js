let a = document.getElementById("user-storage");

const retrieveEntry = () => {
  let ent = localStorage.getItem("user-entries");
  if (ent) {
    ent = JSON.parse(ent);
  } else {
    ent = [];
  }
  return ent;
};
let UE = retrieveEntry();

const displayEntry = () => {
  const ent = retrieveEntry();

  const tabEnt = ent
    .map((entry) => {
      const nameCell = `<td style="border:1px solid black">${entry.b}</td>`;
      const emailCell = `<td style="border:1px solid black">${entry.c}</td>`;
      const passwordCell = `<td style="border:1px solid black">${entry.d}</td>`;
      const dobCell = `<td style="border:1px solid black">${entry.e}</td>`;
      const acceptTermsCell = `<td style="border:1px solid black">${entry.f}</td>`;

      const row = (
        `<tr>
          ${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell}
        </tr>`
      );
      return row;
    })
    .join("\n");

  const table = (
    `<table align="center" style="border-collapse: collapse; border:1px solid black">
     <tr>
        <th style="border:1px solid black">Name</th>
        <th style="border:1px solid black">Email</th>
        <th style="border:1px solid black">Password</th>
        <th style="border:1px solid black">Dob</th>
        <th style="border:1px solid black">AcceptTerms</th>
      </tr>
      ${tabEnt}
    </table>`
  );

  let det = document.getElementById("user-entries");
  det.innerHTML = table;
};
const form = (event) => {
  event.preventDefault();
  const b = document.getElementById("name").value;
  const c = document.getElementById("email").value;
  const d = document.getElementById("password").value;
  const e = document.getElementById("dob").value;
  const f = document.getElementById("acceptTerms").checked;
  const currentDate = new Date();
  const birthDate = new Date(e);
  const age = currentDate.getFullYear() - birthDate.getFullYear();

  if (age < 18 || age > 55) {
    alert("You must be between 18 and 55 years old to register.");
    return; 
  }
  const entry = {
    b,
    c,
    d,
    e,
    f,
  };
  UE.push(entry);
  localStorage.setItem("user-entries", JSON.stringify(UE));
  displayEntry();
};

a.addEventListener("submit", form);
displayEntry();
