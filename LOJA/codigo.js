const chaveProdutos = 'PRODUTOS'; 
function cargaInicial() {
  var valores = [
    {
      url: 'data:image/jpeg;base64,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',
      titulo: 'Produto 1',
      descricao: 'Vestido elegante'
    },
    {
      url: 'https://www.dhresource.com/0x0/f2/albu/g7/M01/48/63/rBVaSVtcHHmAfp64AAHr5crcXpY491.jpg',
      titulo: 'Produto 2',
      descricao: 'Vestido moderno'
    },
    {
      url: 'https://www.divinocharme.com.br/produtos/vestido-casual-rosa-ref-5070/',
      titulo: 'Produto 3',
      descricao: 'Vestido casual'
    }
  ];
  valores = JSON.stringify(valores); 
  localStorage.setItem(chaveProdutos, valores); 
}

function mostraValores() {
  var valores = localStorage.getItem(chaveProdutos); 
  valores = JSON.parse(valores); 

  valores.forEach((valor) => { 
    const divCard = document.createElement('div'); 
    divCard.className = 'card col'; 
    divCard.setAttribute('style', 'width: 18rem');

    const divCardBody = document.createElement('div');
    divCardBody.className = 'card-body';

    const img = document.createElement('img');
    img.setAttribute('src', valor.url);
    img.setAttribute('style', 'max-height: 190px; width: fit-content; align-self: center;'); 
    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.innerHTML = valor.titulo; 

    const p = document.createElement('p');
    p.className = 'card-text';
    p.innerHTML = valor.descricao;

    divCard.appendChild(img); 
    divCard.appendChild(divCardBody);
    divCardBody.appendChild(h5);
    divCardBody.appendChild(p);

    const grid = document.getElementById('grid');
    grid.appendChild(divCard);
  });
}

cargaInicial() 
mostraValores() 