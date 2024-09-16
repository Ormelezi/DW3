const calculadora = (req, res) => (async () => {
    try {
        // Somando os valores
        const { num1, num2 } = req.body;
        const resultado = num1 + num2;

        // Enviando o resultado como resposta
        res.send(`A soma é: ${resultado}`);
    } catch (error) {
        // Lidar com erros, se houver
        res.status(500).send('Erro ao calcular a soma.');
    }
})();


module.exports = {
    calculadora,
}