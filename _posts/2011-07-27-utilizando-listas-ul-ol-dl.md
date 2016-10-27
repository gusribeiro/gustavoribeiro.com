---
layout: post
category: blog
tags: 
title: 'Utilizando as listas: ul, ol e dl.'
excerpt: 'Saiba a forma correta de utilizar as listas (ul, ol e dl) no html.'
postimage: false
comments: true
date: 2011-07-27 09:00:00
lastmod: 2011-07-27 09:00:00
---

Estarei começando hoje uma série de, podemos dizer tutoriais, explicações sobre o uso de cada tag xHTML e CSS. Cada tópico terá uma nomeclatura bastante direta sobre o assunto abordado, então vamos ao que interessa realmente.

Para iniciar a sequencia dos tutoriais, resolvi falar sobre listas de ordenação e explicar um pouco mais sobre o uso e cada uma e o porque isso é importante na hora de se desenvolver um site dentro dos padrões w3c.

## Listas desordenadas: <ul>

As listas desordenadas são, comumente, as mais utilizadas por todos nós desenvolvedores quando resolvemos criar menus. E porque utilizamos as `ul` na criação de menus? Simples! Porque, semânticamente, os menus são itens correspondentes a uma lista sem ordenação não se encaixando em qualquer outra tag, semânticamente, a não ser a `ul`.

## Listas ordenadas: <ol>

Idêntica as `ul`, porém nela temos a obrigação de ordernarmos os itens, seja eles por ordem alfabética, numérica, crescente ou decrescente. Devemos utilizá-las quando queremos criar, por exemplo, um passo-a-passo, uma receita ou até mesmo uma lista de categorias do seu blog.

## Listas de definição: <dl>

As listas de definição são as menos utilizadas e pouco entendidas por muitos. Uma maneira bastante fácil e simples para o entendimento da `dl` é pensarmos em um glossário. Todo glossário possui termos e, cada termos, suas descrições. Para os termos utilizamos `dt` e para as descrições `dd`. Uma coisa muito importante na `dl` é que: nunca termos, em hipótese alguma, um termo repetido com descrições diferentes. Cada termo tem sua descrição única, caso contrário o mesmo não poderá ser um `dl`, e sim uma `ul` ou uma `ol`.

Em tempo, basta sabermos o nome de cada tag para qu possamos entender o seu uso.