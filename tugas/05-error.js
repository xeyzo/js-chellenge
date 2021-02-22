const isError = () => {
    // kode dalem sini jangan di ubah
    throw new Error("ini error");
  };

  try {
      console.log("berhasil")
  } catch (error) {
      console.log(isError())
  }