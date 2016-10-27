---
layout: post
category: blog
tags: 
title: 'Criando formulários acessíveis.'
excerpt: 'Aprenda a criar formulários acessíveis.'
postimage: false
comments: true
date: 2011-06-01 09:00:00
lastmod: 2011-06-01 09:00:00
---

Falar sobre formulários acessíveis se tornou meio difícil por ser um assunto que cada um poderá interpretar de uma maneira diferente. Alguns dizem que o correto é criarmos o formulário utilizando listas desordenadas `ul`, outros já falam que o correto seria utilizarmos parágrafos `p`. Utilizar `p` ou `ul`? Escolha um e seja feliz. 

Para que um formulário seja realmente acessível, precisamos estar cientes da existência de algumas tags básicas e para que elas servem. Vamos a elas:

- `form` cria uma área para a entrada de dados podendo conter campos de texto, checkboxes, radio-buttons etc.
- `fieldset` utilizado para agrupar elementos no formulário. ex: dados pessoais, dados profissionais etc.
- `legend` define um nome para cada fieldset criado.
- `label` define um _label_ para um determinado controle.
- `input`, `checkbox` e `radiobutton` elementos de um form.

Conhecida as principais tags, vamos a criação do formulário. Primeiro criaremos a área válida do form:

```html
<form action="/">
    aqui iremos montar nosso form
</form>
```

Dentro da área criada pela tag `form`, iremos dividir as informações em Dados Pessoais e Dados Profissionais utilizando as tags `fieldset` e `legend` para então adicionarmos os campos a serems preenchidos:

```html
<fieldset>
    <legend>Dados Pessoais</legend>
    <p><label for="txtNome">Nome <input type="text" id="txtNome" value="" /></label></p>
    <p><label for="txtEmail">Email <input type="text" id="txtEmail" value="" /></label></p>
</fieldset>
<fieldset>
    <legend>Dados Pessoais</legend>
    <p><label for="txtNome">Nome <input type="text" id="txtNome" value="" /></label></p>
    <p><label for="txtEmail">Email <input type="text" id="txtEmail" value="" /></label></p>
</fieldset>
```

Para finalizar, um botão para o envio dessas informações:

```html
<p><input type="submit" value="Enviar" /></p>
```