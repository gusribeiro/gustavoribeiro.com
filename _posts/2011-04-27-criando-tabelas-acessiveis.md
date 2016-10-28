2016-10-27 09:00:00---
layout: post
category: blog
tags: 
title: 'Criando tabelas acessíveis.'
excerpt: 'Tabelas acessíves. Para que e quando utilizá-las'
postimage: false
comments: true
date: 2011-04-27 09:00:00
lastmod: 2011-04-27 09:00:00
---

Nosso assunto de hoje, dando sequencia ao tutorial xhtml, será sobre tabelas. Vamos falar um pouco sobre tabelas e como tornar nossa tabela acessível.

Muita gente tem horror a tabelas quando o assunto é _tableless_, dizem que tabela não deve mais ser utilizadas etc, mas poucos sabem que tabelas devem sim ser utilizadas, porém, com o seu real objetivo que é de mostrar, apenas, dados tabulares e não para criação de layouts.

Para se montar uma tabela em html – xhtml, devemos conhecer suas tags e para que cada uma delas servem.

## Conheça as tags:

- `table` delimitador de uma tabela. é com ele que iremos indicar aonde começa e termina nossa tabela. é dentro dela que iremos adicionar título, cabeçalho, rodapé, células e linhas;
- `caption` inserida imediatamente após a <table>, define um título para a tabela correspondente;
- `thead` agrupa linhas de uma tabela definindo o cabeçalho. inserida sempre após a tag `caption`;
- `tfoot` agrupa linhas de uma tabela definindo o rodapé. inserida sempre após a tag `thead`;
- `tbody` também agrupa linhas de uma tabela, porém, define seu conteúdo. inserida sempre após a tag `tfoot`;
- `tr` cria uma linha na tabela;
- `td` cria uma coluna na tabela;
- `th` define uma coluna de cabeçalho na tabela.

Vejamos como fica nossa tabela implementada com as tags acima:

```html
<table>
    <caption>Criando Tabelas Acessíveis</caption>
    <thead>
        <tr>
            <th>Nome</th>
            <th>Site</th>
        </tr>
    </thead>
    <tfoot>
        <tr>
            <td>Nome</td>
            <td>Site</td>
        </tr>
    </tfoot>
    <tbody>
        <tr>
            <td>Fulano 01</td>
            <td>Site do Fulano 01</td>
        </tr>
        <tr>
            <td>Fulano 02</td>
            <td>Site do Fulano 02</td>
        </tr>
        <tr>
            <td>Fulano 03</td>
            <td>Site do Fulano 03</td>
        </tr>
    </tbody>
</table>
```

Dessa forma, teremos uma tabela acessível a todos, principalmente quando for utilizado um leitor de tela – jaws por exemplo – e sem sermos confundidos de que coluna vem o dado lido.

Não esqueça de deixar o seu comentário dizendo o que achou desse tutorial. 