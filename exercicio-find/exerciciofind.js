const filmes = [
    {Nome: "Os Suspeitos", Ano: 1995},
    {Nome: "Silencio dos Inocentes", Ano: 1991},
    {Nome: "Reflexões de Um Liquidificador", Ano: 2010},
    {Nome: "Um Estranho no Ninho", Ano: 1975},
    {Nome: "2001: Uma Odisseia no Espaço", Ano: 1968},
    {Nome: "Oldboy", Ano: 2003},
    {Nome: "Amélie", Ano: 2001},
    {Nome: "Obssesão", Ano: 2026},
    {Nome: "Memorias de Um Assassino", Ano: 2003},
    {Nome: "12 Homens e Uma Setença", Ano: 1957},


];



//  for(i = 0; i < filmes.length; i++) {
//     let filme = filmes[i];
//      if (filme.Ano > 2000) {
//          console.log("Encontrei o filme com ano maior que 2000");
//          break;}
//  }







const depoisDeDoisMil = filmes.find(filmes => filmes.Ano > 2000);
console.log(depoisDeDoisMil);