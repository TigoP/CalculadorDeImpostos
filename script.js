function calcularImpostos() {

  var quantidade = parseFloat(document.getElementById("quantidade").value);
  var valorUnitario = parseFloat(document.getElementById("valorUnitario").value);
  var subtotal = quantidade * valorUnitario;

  var estadoSelecionado = document.getElementById("estado").value;
  var impostoICMS;

  if (estadoSelecionado === "Amapá" || estadoSelecionado === "Maranhão" || estadoSelecionado === "Piauí" || estadoSelecionado === "Rio de Janeiro" || estadoSelecionado === "Rondônia" || estadoSelecionado === "Tocantins") {
    impostoICMS = subtotal * 0.20;
  } else if (estadoSelecionado === "Alagoas" || estadoSelecionado === "Bahia" || estadoSelecionado === "Pará" || estadoSelecionado === "Paraná") {
    impostoICMS = subtotal * 0.19;
  } else if (estadoSelecionado === "Amapá" || estadoSelecionado === "Ceará" || estadoSelecionado === "Distrito Federal" || estadoSelecionado === "Minas Gerais" || estadoSelecionado === "Paraíba" || estadoSelecionado === "Pernambuco" || estadoSelecionado === "São Paulo") {
    impostoICMS = subtotal * 0.18;
  } else if (estadoSelecionado === "Espírito Santo" || estadoSelecionado === "Goiás" || estadoSelecionado === "Mato Grosso" || estadoSelecionado === "Mato Grosso do Sul" || estadoSelecionado === "Rio Grande do Sul" || estadoSelecionado === "Roraima" || estadoSelecionado === "Santa Catarina") {
    impostoICMS = subtotal * 0.17;
  } else {
    impostoICMS = subtotal * 0.17; // Imposto padrão do Estado atual
  }
  
  var impostoIPI = subtotal * 0.15;
  var impostoPIS = subtotal * 0.0065;
  var impostoCOFINS = subtotal * 0.03;
  var totalComImposto = subtotal + impostoIPI;


  document.getElementById("totalComImposto").value = totalComImposto.toLocaleString ('pt-BR', {style: 'currency', currency: 'BRL'});
  document.getElementById("impostoICMS").value = impostoICMS.toLocaleString ('pt-BR', {style: 'currency', currency: 'BRL'});
  document.getElementById("impostoIPI").value = impostoIPI.toLocaleString ('pt-BR', {style: 'currency', currency: 'BRL'});
  document.getElementById("impostoPIS").value = impostoPIS.toLocaleString ('pt-BR', {style: 'currency', currency: 'BRL'});
  document.getElementById("impostoCOFINS").value = impostoCOFINS.toLocaleString ('pt-BR', {style: 'currency', currency: 'BRL'})
  document.getElementById("Subtotal").value = subtotal.toLocaleString ('pt-BR', {style: 'currency', currency: 'BRL'});
}

function preencherSeletorEstados() {
  var estados = ["", "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];

  var selectEstado = document.getElementById("estado");

  for (var i = 0; i < estados.length; i++) {
    var option = document.createElement("option");
    option.value = estados[i];
    option.text = estados[i];
    selectEstado.appendChild(option);
  }
}
// Chame a função preencherSeletorEstados() no início do seu script para preencher o seletor quando a página carregar
preencherSeletorEstados();

  
















/*
  /*var Subtotal = document.getElementById("quantidade").value * document.getElementById("valorUnitario").value;
  var impostoICMS = Subtotal * 0.17;
  var impostoIPI = Subtotal * 0.15;
  var totalComImposto = Subtotal + impostoIPI;



var qtd = document.getElementById("quantidade").value
  var vlUni = document.getElementById("valorUnitario").value;
  var subt = qtd * vlUni;

    isso é um objeto preenchido com as variáveis que você definiu nas entradas
  var impostos = {
    valorUni: vlUni,
    quantidade: qtd,
    subtotal: qtd * subt,
    icms: (subt * 0.17).toLocaleString ('pt-BR', {style: 'currency', currency: 'BRL'}),
    ipi: (subt * 0.15).toLocaleString ('pt-BR', {style: 'currency', currency: 'BRL'}),
    totalComImpostos: (subt + (subt * 0.17) + (subt *0.15)).toLocaleString ('pt-BR', {style: 'currency', currency: 'BRL'})
  }
  console.log(impostos);

  

  document.getElementById("Subtotal").value = impostos.subtotal;
  document.getElementById("impostoICMS").value = impostos.icms;
  document.getElementById("impostoIPI").value = impostos.ipi;
  document.getElementById("totalComImposto").value = impostos.totalComImpostos;
  









  ISTO RETIREI DO HTML COMO TESTE
  
  <!--<option value=""></option>
  <option value="AC">Acre</option>
  <option value="AL">Alagoas</option>
  <option value="">Alagoas</option>
  <option value="AP">Amapá</option>
  <option value="AM">Amazonas</option>
  <option value="BA">Bahia</option>
  <option value="CE">Ceará</option>
  <option value="ES">Espírito Santo</option>
  <option value="GO">Goiás</option>
  <option value="MA">Maranhão</option>
  <option value="MT">Mato Grosso</option>
  <option value="MS">Mato Grosso do Sul</option>
  <option value="MG">Minas Gerais</option>
  <option value="PA">Pará</option>
  <option value="PB">Paraíba</option>
  <option value="PR">Paraná</option>
  <option value="PE">Pernambuco</option>
  <option value="PI">Piauí</option>
  <option value="RJ">Rio de Janeiro</option>
  <option value="RN">Rio Grande do Norte</option>
  <option value="RS">Rio Grande do Sul</option>
  <option value="RO">Rondônia</option>
  <option value="RR">Roraima</option>
  <option value="SC">Santa Catarina</option>
  <option value="SP">São Paulo</option>
  <option value="SE">Sergipe</option>
  <option value="TO">Tocantins</option>
  <option value="DF">Distrito Federal</option>-->
    
*/
