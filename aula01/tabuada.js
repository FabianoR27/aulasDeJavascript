for (let i = 0; i <= 10; i++) {
    if (i % 2 != 0) {
        continue;
    }
    for (let j = 1; j <= 10; j++) {
        let resultado = i * j;
        console.log(i + "x" + j + "=" + resultado)
    }

    console.log("------------------------------------------------------")
}