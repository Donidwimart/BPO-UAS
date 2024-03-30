class Plant {
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
  
    grow() {
      console.log("The plant is growing.");
    }
  
    bloom() {
      console.log("The plant is blooming.");
    }
  }
  
  class Anggrek extends Plant {
    constructor(name, color, fragrance) {
      super(name, color);
      this.fragrance = fragrance;
    }
  
    bloom() {
      console.log("The anggrek is blooming with vibrant colors.");
    }
  
    emit_fragrance() {
      console.log("The anggrek emits a pleasant fragrance.");
    }
  }
  
  class Mawar extends Plant {
    constructor(name, color, thorns) {
      super(name, color);
      this.thorns = thorns;
    }
  
    bloom() {
      console.log("The mawar is blooming with beautiful petals.");
    }
  
    has_thorns() {
      if (this.thorns) {
        console.log("The mawar has thorns.");
      } else {
        console.log("The mawar does not have thorns.");
      }
    }
  }
  
  class Melati extends Plant {
    constructor(name, color, climber) {
      super(name, color);
      this.climber = climber;
    }
  
    bloom() {
      console.log("The melati is blooming with fragrant white flowers.");
    }
  
    is_climber() {
      if (this.climber) {
        console.log("The melati is a climber plant.");
      } else {
        console.log("The melati is not a climber plant.");
      }
    }
  }
  
  const readline = require("readline");
  
  // Fungsi untuk menampilkan menu
  function displayMenu() {
    console.log("=== Menu ===");
    console.log("1. Tampilkan informasi Anggrek Bulan");
    console.log("2. Tampilkan informasi Mawar Merah");
    console.log("3. Tampilkan informasi Melati Putih");
    console.log("0. Keluar");
  }
  
  // Fungsi untuk menampilkan informasi Anggrek Bulan
  function displayAnggrekInfo() {
    const anggrek = new Anggrek("Anggrek Bulan", "White", true);
    console.log("=== Informasi Anggrek Bulan ===");
    console.log("Nama: " + anggrek.name);
    console.log("Warna: " + anggrek.color);
    console.log("Fragrance: " + anggrek.fragrance);
    console.log("===============================");
  }
  
  // Fungsi untuk menampilkan informasi Mawar Merah
  function displayMawarInfo() {
    const mawar = new Mawar("Mawar Merah", "Red", true);
    console.log("=== Informasi Mawar Merah ===");
    console.log("Nama: " + mawar.name);
    console.log("Warna: " + mawar.color);
    console.log("Thorns: " + mawar.thorns);
    console.log("=============================");
  }
  
  // Fungsi untuk menampilkan informasi Melati Putih
  function displayMelatiInfo() {
    const melati = new Melati("Melati Putih", "White", false);
    console.log("=== Informasi Melati Putih ===");
    console.log("Nama: " + melati.name);
    console.log("Warna: " + melati.color);
    console.log("Climber: " + melati.climber);
    console.log("=============================");
  }
  
  // Fungsi untuk menjalankan menu
  function runMenu() {
    let choice = -1;
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    function askChoice() {
      displayMenu();
      rl.question("Masukkan pilihan (0-3): ", (answer) => {
        choice = parseInt(answer);
        switch (choice) {
          case 1:
            displayAnggrekInfo();
            askChoice();
            break;
          case 2:
            displayMawarInfo();
            askChoice();
            break;
          case 3:
            displayMelatiInfo();
            askChoice();
            break;
          case 0:
            console.log("Keluar.");
            rl.close();
            break;
          default:
            console.log("Pilihan tidak valid. Silakan coba lagi.");
            askChoice();
            break;
        }
      });
    }
  
    askChoice();
  }
  
  // Menjalankan menu
  runMenu();
  