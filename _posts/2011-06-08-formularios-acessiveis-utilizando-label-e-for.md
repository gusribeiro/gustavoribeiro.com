---
layout: post
category: blog
tags: 
title: 'Formulários acessíveis utilizando “Label” e o atributo “For”.'
excerpt: 'Aprenda a criar formulários acessíveis utilizando as tags label e for.'
postimage: false
comments: true
date: 2011-06-08 09:00:00
lastmod: 2011-06-08 09:00:00
---

Quem nunca ficou irado ao ter que preencher um formulário e só conseguir clicar em cima da bolinha – radio button – de cada opção para fazer sua escolha? Sim, isso realmente irrita. Para isso que existe o atributo `for` para os nossos form label. Ok, o que seria esse tal de `for`.

Quando criamos um formulário temos que ficar atentos a, no mínimo, três tags fundamentais para a marcação correta do form, são elas: `form`, `label` e a nossa famosa `input`.

- `form` indicará o início e fim do nosso formulário;
- `label` irá conter todo o respectivo texto de cada campo do formulário;
- `input` nosso formulário em si (campo texto, radio buttons etc).

```html
<form action="/">
    <p>
        <label for="txtNome">Nome</label>
        <input type="text" id="txtNome" />
    </p>
    <p>
        <label for="txtEmail">Nome</label>
        <input type="text" id="txtEmail" />
    </p>
    <p>
        <input type="submit" value="Enviar" />
    </p>
</form>
```

Reparem que, para cada `label`, temos um for e, para cada `input`, temos uma id, ambas com o mesmo valor. Cada `id` representa uma identificação para cada campo do formulário enquanto cada `for` representa uma ligação do label com o campo.

Pronto! Já temos todas as ligações feitas, agora é só clicar no texto para que, automaticamente, o campo texto seja selecionado. O mesmo acontece com os demais objetos de um formulário (radio button, checkboxes etc).