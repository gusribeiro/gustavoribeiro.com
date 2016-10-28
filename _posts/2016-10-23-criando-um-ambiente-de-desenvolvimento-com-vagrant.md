---
layout: post
category: blog
tags: 
title: 'Criando um ambiente de desenvolvimento com Vagrant.'
excerpt: 'Aprenda a configurar um ambiente de desenvolvimento utilizando o Vagrant e o VirtualBox.'
postimage: true
comments: true
date: 2016-10-23 21:00:00
lastmod: 2016-10-23 21:00:00
---

Alguns desenvolvedores já conhecem o [Vagrant][vagrant] e os benefícios de que eles nos traz para o desenvolvimento em geral, como:

- diminuir o tempo de configuração dos ambientes
- ambientes leves e portáteis
- ambiente idêntico para todos da equipe (versões, configurações, dependências)
- e muito mais

Para começarmos, precisamos instalar o [Vagrant][vagrant_dl] e o [VirtualBox][virtualbox_dl] (gratuito e disponível para a maioria das plataformas).

## Configurando nosso primeiro ambiente

Para vocês terem ideia do quão simples é montar um ambiente no Vagrant, bastam duas linhas e pronto! Já temos nosso ambiente rodando.\\
No Mac OS X e no Windows, o comando `vagrant` é adicionado automaticamente em seu `PATH`. Nos demais sistemas operacionais precisaremos adicionar `/opt/vagrant/bin` ao seu `PATH`.

```sh
$ vagrant init
```


Sempre que iniciamos um novo ambiente com o comando `vagrant init`, é criado um arquivo de configuração, chamado `Vagrantfile`, no diretório raiz do projeto e é usado para configurar e definir todo o comportamento de nossa máquina virtual.

Não precisamos entender todas essas configurações agora, por isso iremos apagar tudo e deixar apenas as linhas abaixo

```ruby
Vagrant.configure(2) do |config|
    # ...
end
```

O `2`, na primeira linha, representa a versão de configuração do objeto `config` que será usada.

> Atualmente existem apenas duas versões: `1` e `2`. A versão `1` são configurações utilizadas no Vagrant 1.0.x e a versão `2` para 1.1+ até 2.0.x.

Continuando com nosso arquivo de configuração, vamos dizer ao vagrant qual sistema operacional queremos instalar e que sincronize toda a pasta do projeto com uma pasta em nosso ambiente local. No exemplo, quero fazer o sync do projeto que está em `/home/vagrant` com a minha pasta em `/Users/gustavo/www`.

```ruby
Vagrant.configure(2) do |config|
    config.vm.box = "ubuntu/trusty64"
    config.vm.synced_folder "/Users/gustavo/www", "/home/vagrant"
 end
```

> Nesse exemplo estou utilizando uma máquina com o Ubuntu 14.04 LTS.\\
> O sistema a ser instalado vai da preferência de cada um. Você pode ver uma lista das boxes disponíveis publicamente em [https://atlas.hashicorp.com/boxes/search](https://atlas.hashicorp.com/boxes/search).

Configurações feitas! Agora precisamos subir o ambiente.\\
Para isso, vamos voltar ao terminal e digitar o comando abaixo:

```sh
$ vagrant up
```

Pronto! Temos nosso ambiente funcionando e sem muito trabalho. :)

Agora podemos instalar o que for necessário em nosso ambiente (php, mysql etc), acessando por SSH, utilizando os comandos habituais do linux.

```sh
$ vagrant ssh
```



### Fique atento!

> Se você tem o costume de versionar seus projetos, o `Vagrantfile` é um arquivo que deve ser versionado.\\
> Dessa forma, qualquer pessoa que trabalhe nesse mesmo projeto pode se beneficiar do ambiente sem perder tempo configurando uma nova máquina virtual.

[vagrant]: http://vagrantup.com
[vagrant_dl]: https://www.vagrantup.com/downloads.html
[virtualbox_dl]: https://www.virtualbox.org/wiki/Downloads