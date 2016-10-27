---
layout: post
category: blog
tags: 
title: 'Abreviações em xHTML.'
excerpt: 'Entenda como utilizar e para que serve a tag abbr.'
postimage: false
comments: true
date: 2011-05-25 09:00:00
lastmod: 2011-05-25 09:00:00
---

Abreviação já se auto-explica o que é então vou ser rápido e explicar a diferença entre abreviações e acrônimos.

Para muitos, ou até para a maioria, usuários internet tudo é abreviação mas na realidade não é a verdade. Acrônimos são palavras formadas por letras ou sílabas iniciais de uma locução – _Ex.: CSS = Cascading Style Sheets_ – enquanto abreviação é uma forma curta da palavra excrita – _Ex.: Av. = Avenida_.

No xHTML, a utilização da tag abrr se dá na seguinte forma:

```html
<abbr></abbr>
```

Para cada `abbr` gerado, é altamente recomendável, no meu ponto de vista obrigatório, o uso da propriedade `title` ao qual, com ela, podemos visualizar o significado daquele abreviação ao passarmos o mouse por cima da palavra.

```html
<abbr title="Avenida">Av.</abbr>
```

Fazendo isso, estaremos ajudando a quem não tem o conhecimento de certas abreviações e faremos nossos sites mais acessíveis e de acordo com os padrões w3c.

## [update]

Uma ótima pedida é mudarmos o cursor do mouse, ao passarmos por cima do `abbr`, para o ícone de help (ajuda).

```css
abbr {cursor: help;}
```