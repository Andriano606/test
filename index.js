const weapons = [
  {
      name: "Excalibur",
      image: "excalibur.jpg",
      description: "A legendary sword of immense power.",
      details: "Forged in the ancient times, Excalibur is said to grant its wielder unrivaled strength and bravery."
  },
  {
      name: "Mjolnir",
      image: "mjolnir.jpg",
      description: "The hammer of Thor, the god of thunder.",
      details: "Only those who are worthy can lift Mjolnir and wield the power of Thor himself."
  },
  {
      name: "Longbow",
      image: "longbow.jpg",
      description: "A bow that can shoot arrows with incredible accuracy.",
      details: "Used by archers to strike enemies from a distance with deadly precision."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");

  weapons.forEach((weapon) => {
      const weaponDiv = document.createElement("div");
      weaponDiv.className = "weapon";

      const img = document.createElement("img");
      img.src = weapon.image;
      img.alt = weapon.name;

      const name = document.createElement("h3");
      name.textContent = weapon.name;

      const description = document.createElement("p");
      description.textContent = weapon.description;

      const button = document.createElement("button");
      button.className = "button";
      button.textContent = "Select Weapon";
      button.addEventListener("click", () => showModal(weapon));

      weaponDiv.appendChild(img);
      weaponDiv.appendChild(name);
      weaponDiv.appendChild(description);
      weaponDiv.appendChild(button);

      gallery.appendChild(weaponDiv);
  });

  const modal = document.getElementById("modal");
  const span = document.getElementsByClassName("close")[0];

  span.onclick = function() {
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
});

function showModal(weapon) {
  const modal = document.getElementById("modal");
  document.getElementById("modal-title").textContent = weapon.name;
  document.getElementById("modal-description").textContent = weapon.description;
  document.getElementById("modal-details").textContent = weapon.details;
  modal.style.display = "block";
}
