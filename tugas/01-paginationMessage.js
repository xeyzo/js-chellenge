// Ketika pake API biasanya dapet response dari backend seperti ini untuk pagination
const data = {
    maxItems: 10,
    totalItems: 37,
    totalPages: 4,
    currentPages: 1
  };
  
  // Dari 4 data diatas, buatlah kopmutasi pagination nya
  // clue = semua data ada gunanya dalam komputasi
  const paginationMessage = data => ({
    // Tuliskan Kode disini
    maxItems : 17,
    totalItems : 37,
    totalPages : 4,
    currentPages : 3,

  });
    
   

  
  console.log(paginationMessage(data));
  // Menampilkan 21 - 37 dari 37
  
  console.log(
    paginationMessage({
      maxItems: 10,
      totalItems: 37,
      totalPages: 4,
      currentPages: 2
    })
  );
  // Menampilkan 11 - 20 dari 37
  
  console.log(
    paginationMessage({
      maxItems: 10,
      totalItems: 37,
      totalPages: 2,
      currentPages: 3
    })
  );
  // Menampilkan 21 - 37 dari 37
  
  console.log(
    paginationMessage({
      maxItems: 10,
      totalItems: 37,
      totalPages: 2,
      currentPages: 4
    })
  );
  // Menampilkan 31 - 37 dari 37