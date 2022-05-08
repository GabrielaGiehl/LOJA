const chaveProdutos = 'PRODUTOS'; 
function cargaInicial() {
  var valores = [
    {
      url: 'https://i.pinimg.com/736x/bf/6d/a3/bf6da3e2c247b8ee377ba55575be48f5.jpg',
      titulo: 'Produto 1',
      descricao: 'Vestido elegante'
    },
    {
      url: 'https://www.dhresource.com/0x0/f2/albu/g7/M01/48/63/rBVaSVtcHHmAfp64AAHr5crcXpY491.jpg',
      titulo: 'Produto 2',
      descricao: 'Vestido moderno'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcr6mFEVJinbA0Mm4KnG-DNWHSOE9-baxNrmS4d5rNYZkpOCkZfV6fHF-Zzr4nYAiXXv0&usqp=CAU',
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

  const grid = document.getElementById('grid');
  grid.innerHTML = '';

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

function cadastrar() {
  var titulo = document.getElementById('titulo').value;
  var descricao = document.getElementById('descricao').value;
  var url = document.getElementById('url').value;

  const produto = {
    titulo,
    descricao,
    url,
  }

  var valores = localStorage.getItem(chaveProdutos); 
  valores = JSON.parse(valores); 

  if (!valores) {
    valores = [];
  }

  valores.push(produto);

  valores = JSON.stringify(valores);
 
  localStorage.setItem(chaveProdutos, valores);
  location.href="index.html"
}

//cargaInicial() 
//mostraValores() 