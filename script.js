function calcular() {
    let entrada = document.getElementById("dados").value;

    if (!entrada) {
        alert("Digite os dados!");
        return;
    }

    let numeros = entrada.split(",").map(n => parseFloat(n.trim()));

    let n = numeros.length;

    // Média
    let soma = numeros.reduce((acc, val) => acc + val, 0);
    let media = soma / n;

    // Mediana
    numeros.sort((a, b) => a - b);
    let mediana;
    if (n % 2 === 0) {
        mediana = (numeros[n/2 - 1] + numeros[n/2]) / 2;
    } else {
        mediana = numeros[Math.floor(n/2)];
    }

    // Variância amostral
    let somaQuadrados = numeros.reduce((acc, val) => {
        return acc + Math.pow(val - media, 2);
    }, 0);

    let variancia = somaQuadrados / (n - 1);

    // Desvio padrão
    let desvio = Math.sqrt(variancia);

    // Coeficiente de variação
    let cv = (desvio / media) * 100;

    // Classificação
    let classificacao = cv <= 30 ? "Homogêneo" : "Heterogêneo";

    // Resultado
    document.getElementById("resultado").innerHTML = `
        <strong>Média:</strong> ${media.toFixed(2)} <br>
        <strong>Mediana:</strong> ${mediana.toFixed(2)} <br>
        <strong>Variância:</strong> ${variancia.toFixed(2)} <br>
        <strong>Desvio Padrão:</strong> ${desvio.toFixed(2)} <br>
        <strong>Coeficiente de Variação:</strong> ${cv.toFixed(2)}% <br>
        <strong>Classificação:</strong> ${classificacao}
    `;
}