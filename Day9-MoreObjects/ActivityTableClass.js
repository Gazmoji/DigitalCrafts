class table {
  constructor(height, color, material) {
    this.height = height;
    this.color = color;
    this.material = material;
  }
}

let hardWoodtable = new Table(5, "Black", "Darkwood");
console.log(hardWoodtable.material);
