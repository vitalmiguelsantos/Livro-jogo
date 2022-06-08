var nome = prompt('Insira seu nome aqui:');

  const titulo = document.querySelector('.text');
  const imagem=document.querySelector('img');
  const option_1=document.querySelector('.button_1');
  const option_2=document.querySelector('.button_2');
  
  function way0() {
    titulo.innerHTML=`${nome}, nada encontrado... <br> Deseja continuar buscando?`;
imagem.setAttribute ("src","https://i.pinimg.com/originals/3c/2a/ad/3c2aad38e743710b31103fe2a410f734.gif");
option_1.innerHTML=`Mais uma vez system...`;
  }

  function way1() {
    titulo.innerHTML = `Olá ${nome}. `;
    imagem.setAttribute ("src", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8cab2d15-5f18-4fae-bcd5-7ac6d71bfda7/de305c5-820729d3-1bec-45a5-afa6-8d234d7869d3.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhjYWIyZDE1LTVmMTgtNGZhZS1iY2Q1LTdhYzZkNzFiZmRhN1wvZGUzMDVjNS04MjA3MjlkMy0xYmVjLTQ1YTUtYWZhNi04ZDIzNGQ3ODY5ZDMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cBn9rj-3-INERCxsCZ5Gbx4j1iMV5WxtujgAZSpYQTo");
    
  }

  function way2() {
    titulo.innerHTML = `Olá Mundo!`
  }