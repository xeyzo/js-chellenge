const absurd = text => {
    // tuliskan kode disini
    const data = text.split(" ");
    let arr,
        temp;
    for(let i = data.length - 1; i > 0; i-- ){
        arr = Math.floor(Math.random() * (i + 1))
        temp = data[i];
        data[i] = data[arr];
        data[arr] = temp
    }
    const dataReal = data.toString();
    const newStr = dataReal.replace(/,/g, ' ');
    const camelCase = newStr
                        .replace(/\s(.)/g, function(a) { 
                            return a.toUpperCase(); 
                        })
                        .replace(/^(.)/, function(b) { 
                            return b.toLowerCase(); 
                        });  
    console.log(camelCase)
};
  
  absurd("UT adalah universitas terbuka");

