// Script to add doors and cats and dogs
class Webpage {

	constructor(doors) {
		this.doors = doors;
		this.turns = 0;
		this.init();
	}

	init() {
		this.addDoors();
		this.addAnimals();
		this.addListeners();
	}

	addDoors() {
		const container = document.querySelector(".main");
	
		for (let i = 0; i < this.doors; i++) {
			const doorContainer = document.createElement("div");
			doorContainer.classList.add("img-container");

			const door = document.createElement('img');
			door.classList.add("door");
			door.src = "./assets/door.png";

			doorContainer.appendChild(door);
			container.appendChild(doorContainer);
		}
	}

	addAnimals() {

		const imgContainers = document.querySelectorAll(".img-container");
		const numDoors = imgContainers.length;
		const dogIndex = Math.floor(Math.random() * numDoors);

		for (let i = 0; i < numDoors; i++) {
		
			const container = imgContainers[i];
			const img = document.createElement("img");
			img.classList.add("animal");

			if (i === dogIndex) {
				img.src = "./assets/dog.jpg";
				container.setAttribute("hasDog", "");
			} else {
				img.src = "./assets/cat.jpg";
			}
			container.appendChild(img);
		}
	}

	handleWin() {
		setTimeout(()=> window.alert(`You won in ${this.turns} turn${this.turns > 1 ? "s":""}!`), 500);
	}

	handleClick(e) {
		const container = e.currentTarget;
		const door = container.querySelector(".door");
		if (door) {
			this.turns++;
			container.removeChild(door);
			if (container.hasAttribute("hasDog")) {
				this.handleWin();
			}
		}
	}

	addListeners() {
		const imgContainers = document.querySelectorAll(".img-container");
		imgContainers.forEach(container => container.addEventListener("click",e => this.handleClick(e)));
	}
}

page = new Webpage(3);
