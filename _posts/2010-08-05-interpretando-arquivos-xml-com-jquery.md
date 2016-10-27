---
layout: post
category: blog
tags: 
title: 'Interpretando arquivos XML com jQuery.'
excerpt: 'Interpretando arquivos XML com jQuery'
postimage: false
comments: true
date: 2010-08-05 09:00:00
lastmod: 2016-10-27 09:00:00
---

A alguns dias atrás estive a procura de soluções simples e práticas para se ler as informações de um arquivo xml a partir do jQuery. Sabendo da dificuldade de se achar conteúdos relevantes em nossa lingua nativa para os que não entendem lhufas de inglês, resolvi escrever esse artigo em prol de facilitar o entendimento de todos, então chega de conversa e vamos ao que interessa.

Para início de conversa, nada do que eu escrever abaixo irá funcionar se você, caro usuário, não importar a biblioteca do jQuery em seu código e a melhor maneira para se fazer é pela API do Google.

```html
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
```

Feito o passo acima, vamos agora para o xml.

Iremos criar um xml bem simples para que possamos entender o seu funcionamento. Se você não esta familiarizado com xml, veja um artigo sobre as regras de syntax de um xml.

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<sites>
    <site>
        <nome>Site do fulano</nome>
        <url>http://sitedofulano.com.br</url>
    </site>
    <site>
        <nome>Site do ciclano</nome>
        <url>http://sitedociclano.com.br</url>
    </site>
</sites>
```

Agora que já importamos a biblioteca do jQuery em nossa página e temos conhecimento do xml gerado, podemos iniciar as instruções em jQuery.

Primeiro passo é iniciar o jQuery

```js
$(function() {

});
```

A partir de agora é onde tudo faz sentido, iniciaremos a requisição ajax do jQuery para ler o arquivo xml. A requisição em ajax possui 4 parâmetro: type, url, dataType e success, sendo o mais importante deles o parâmetro success onde iremos ‘setar’ uma função para receber os dados do xml.

```js
$.ajax({
    type: 'GET',
    url: 'sites.xml',
    dataType: 'xml',
    success: function(xml) {

    }
});
```

A diversão começa aqui! Agora que já estamos acessando o arquivo xml, é preciso encontrar os dados gravados nele e fazer alguma coisa. Começamos pela leitura dos dados retornados e usando o método find para obter todos os nós que correspondem ao texto que fornecemos (neste caso, ‘site’), e depois usar a função de loop para localizar os nós.

```js
$(xml).find('site').each(function() {

});
```

Tudo o que resta é fazer com que os dados a partir desse seja impresso na página, para isso utilizaremos a função find para encontrar e obter o texto dos nós. Para o exemplo, irei simplificar retornando apenas os dados do usuário e do conteúdo do twit.

```js
var nome = $(xml).find('nome').text();
var url = $(xml).find('url').text();
$('<p></p>').html(nome+'<br />'+url).appendTo('#wrap');
```

Pronto! Nosso código final, completo, deve ser algo como o abaixo:

```js
$(function() {
    $.ajax({
        type: 'GET',
        url: 'sites.xml',
        dataType: 'xml',
        success: function(xml) {
            $(xml).find('site').each(function() {
                var nome = $(xml).find('nome').text();
                var url = $(xml).find('url').text();
                $('<p></p>').html(nome+'<br />'+url).appendTo('#wrap');
            });
        }
    });
});
```