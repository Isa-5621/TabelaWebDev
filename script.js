const dados = [
  { produto: "Tilápia", categoria: "Água doce", quantidade: 30, preco: 28 },
  { produto: "Salmão", categoria: "Água salgada", quantidade: 20, preco: 65 },
  { produto: "Sardinha", categoria: "Água salgada", quantidade: 45, preco: 18 },
  { produto: "Pintado", categoria: "Água doce", quantidade: 15, preco: 42 }
];

const tabel = document.getElementById('corpoTabela')

for (let produt of dados){
    const data = document.createElement('tr')

    data.innerHTML = `
    <td>${produt.produto}</td>
    <td>${produt.categoria}</td>
    <td>${produt.quantidade}</td>
    <td class="preco">${produt.preco.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `
    tabel.appendChild(data)
}