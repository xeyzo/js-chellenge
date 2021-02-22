const kerja = new Promise(
    (resolve, reject)=>{
        resolve("Minums Dulsssss");
        reject(new Error("Lanjut macul anda boke"))
    }
)

kerja.then((benar) => {console.log(benar)})
     .catch((error) => {console.log(error)})