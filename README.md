```markdown
<h1 align="center">
Desafio Full Cycle - Nginx como Proxy Reverso
</h1>

## 💻 Desafio

Neste desafio, você irá aplicar os conceitos de utilização do Nginx como proxy reverso. A ideia central é que, ao acessar o Nginx, ele fará uma chamada para nossa aplicação Node.js. Essa aplicação, por sua vez, adicionará um registro em nosso banco de dados MySQL, cadastrando um nome na tabela people.

O retorno da aplicação Node.js para o Nginx deverá ser:

```html
<h1>Full Cycle Rocks!</h1>
<ul>
  <!-- Lista de nomes cadastrada no banco de dados -->
  <li>Nome 1</li>
  <li>Nome 2</li>
  <!-- ... -->
</ul>
```

### Execução

1. Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.
2. Clone este repositório.
3. Navegue até o diretório do projeto.
4. Execute o seguinte comando:

```bash
docker-compose up -d
```

Após a execução do comando, tudo deverá estar funcionando e disponível na porta `8080`.

### Tecnologias Utilizadas

- Node.js
- MySQL
- Nginx
- Docker

---

<h1 align="center">
Full Cycle Rocks!!
</h1>
```

Este README foi ajustado conforme as instruções do novo desafio, adicionando detalhes sobre a utilização do Nginx como proxy reverso, a execução do Docker Compose e as tecnologias utilizadas no projeto.