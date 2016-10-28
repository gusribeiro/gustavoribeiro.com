---
layout: post
category: blog
tags: 
title: '10 erros mais comuns na hora de desenvolver um site.'
excerpt: '10 erros mais comuns na hora de desenvolver um site.'
postimage: false
comments: true
date: 2010-07-29 09:00:00
lastmod: 2010-07-29 09:00:00
---

Depois de anos trabalhando como desenvolvedor de front-end, lendo livros e estudando sobre os padrões W3C, resolvi postar aqui no blog uma lista dos 10 erros mais comuns na hora de desenvolver um site seguidos de dicas que incluem uma escrita válida, semântica e sem as conhecidas tags depreciadas.

Sem mais delongas, vamos a lista:

## 01: Elementos “bloco” (block) dentro de elementos “em linha” (inline).

Antes de mais nada, vamos entender o que significa elementos de bloco e em linha. Elementos em “bloco” são todas aquelas tags xhtml que, quando utilizadas, ocupam por padrão toda uma linha horizontal impossibilitando que outro elemento se posicione ao seu lado. Já os “em linha”, ocupam apenas o espaço necessário para a visualização de seu conteúdo, permitindo que outros elementos em linha se posicionem ao seu lado.

### Bloco (block):
- div;
- p;
- form etc.

### Em linha (inline):
- a;
- span;
- strong etc.

Agora que entendemos o funcionamento dessas tags, podemos chegar a conclusão que elementos block não podem ser inseridos dentro de elementos em linha.

```html
<!-- ERRADO -->
<a href="javascript:void(0)"><h1>nome_do_site</h1></a>

<!-- CORRETO -->
<h1><a href="javascript:void(0)">nome_do_site</a></h1>
```

## 02: Imagens sem o atributo ALT (texto alternativo).

O atributo `alt` é um de uso obrigatório para todas as imagens exibidas em seu site. Sua funcionalidade é de fornecer uma descrição da imagem quando a mesma não for carregada e também, e mais importante, para o uso em leitores de tela onde esse atributo será lido. Caso a imagem seja apenas de caráter decorativo, utilizar um alt vazio: `alt=” “`.

```html
<!-- ERRADO -->
<img src="minha_imagem.jpg" />

<!-- CORRETO -->
<img src="minha_image.jpg" alt="descrição_da_imagem" />
```

## 03: Não utilizar listas quando necessário.

Confeso que já perdi a conta de quantos sites eu já vi que não fazem o uso das listas quando necessário.

As tags de lista foram criadas para serem usadas, assim como todas as outras tags do xhtml. E para que servem as listas?

Menus de navegação, lista de links, passo-a-passo de uma receita de bolo, as famosas listas de objetivos no para o próximo ano etc, tudo isso deve ser escrito dentro das tags de lista.

Lista desordenada `ul`, ordenada `ol` ou de definição `dl`, todas elas devem ser utilizadas quando necessário e é claro, sem exceção.

```html
<!-- ERRADO -->
<p>
    Verde<br />
    Amarelo<br />
    Azul<br />
    Branco
</p>

<!-- CORRETO -->
<ul>
    <li>Verde</li>
    <li>Amarelo</li>
    <li>Azul</li>
    <li>Branco</li>
</ul>
```

## 04: Uso de `<b>` e `<i>` para negrito e itálico.

O desenvolvedor que até hoje não sabe que as tags `b` e `i` foram depreciadas do xhtml, por favor, precisa se atualizar rapidamente.

A muito tempo atrás, todas as tags com objetivos apenas visual foram eliminadas da nova especificação do xhtml e substituidas por tags de valor semântico como o `strong`, para a tag `b`, e o `em`, para o `i`. As funções de apresentação das antigas tags podem ser utilizadas via CSS utilizando _font-weight_ e/ou _font-style_.

```html
<!-- ERRADO -->
<b>Playstation 3</b> é melhor que o <i>Xbox 360</i>

<!-- CORRETO -->
<strong>Playstation 3</strong> é melhor que o <em>Xbox 360</em>
```

## 05: Uso excesivo de `br`.

Nesse ponto eu vou ser rápido e direto pois não tem muito o que explicar.

Utilize o `br` apenas para quebrar a linha. Para adicionar outro parágrafo, utilize o `p` pois ele foi feito para isso.

```html
<!-- ERRADO -->
<p>Lorem ipsum dolor sit amet,<br /><br />
consectetur adipisicing elit,<br /><br />
sed do eiusmod tempor incididunt</p>

<!-- CORRETO -->
<p>Lorem ipsum dolor sit amet,</p>
<p>consectetur adipisicing elit,</p>
<p>sed do eiusmod tempor incididunt</p>
```

## 06: Mau uso das tags `strike` e `s`.

Mais duas tags que foram depreciadas do xhtml. Sua utilização era feita apenas para adicionar um tachado – linha horizontal – sob a palavra/frase.

Hoje em dia, é correto e bem mais amigável a utilização de `del` e `ins`.

A seleção brasileiro `<del>venceu</del><ins>perdeu</ins>` a copa do mundo 2010

## 07: Uso de estilo in line.

Todo mundo já esta careca de saber que devemos separar o conteúdo da apresentação e é para isso que existe o arquivo .css!

```html
<a href="javascript:void(0)" style="text-decoration:none">link_externo</a>
```

## 08: Adicionar ou remover borda de imagens no xhtml.

Mais uma vez entramos no critério conteúdo/apresentação, e a apresentação é parte do CSS. Logo, semanticamente devemos utilizar do borde:0 em nosso arquivo de CSS para remoção de bordas.

```html
<img src="minha_imagem.jpg" border="0" alt="minha_imagem" />
```

## 09: Não utilizar as tags de título.

Eu costumo dizer para os que me perguntam a respeito que o xhtml é como se fosse um livro, por isso, devemos ter título, subtítulos e paragrafos.

Já viram algum livro sem título? São os títulos `h1`, `h2` etc, que vão compor a estrutura do seu documento xhtml.

```html
<h1>titulo</h1>
<h2>sub_titulo</h2>
...
<h6>sub_titulo_nivel_5</h6>
```

## 10: O indescritível uso do `blink` ou `marquee`.

Curto e grosso. Se você usa essas tags, se mata! 

```html
<marquee>clique aqui</marquee>
```