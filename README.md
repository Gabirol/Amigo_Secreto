# 🚀 Desafios alura - Projeto 04: Amigo Secreto

Este projeto permite adicionar nomes a uma lista, exibir essa lista na tela e realizar um sorteio formando duplas aleatórias.
> Foi desenvolvido com foco em lógica JavaScript e manipulação do DOM.

---

## 📋 Índice

- [Sobre o projeto](#-sobre-o-projeto)
- [Preview](#%EF%B8%8F-preview)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Funcionalidades](#%EF%B8%8Ffuncionalidades)
- [Como executar o projeto](#-como-executar-o-projeto)
- [Estrutura de pastas](#-estrutura-de-pastas)
- [Aprendizados](#-aprendizados)
- [Autor](#%E2%80%8D-autor)

---


## 📖 Sobre o projeto

O usuário pode:

- Inserir nomes de amigos em uma lista
- Exibir todos os nomes adicionados
- Sortear as duplas de maneira pseudoaleatória
- Reiniciar a lista e começar novamente

Ao final, é exibida uma lista com pares no formato:
```
João ➜ Ana  
Pedro ➜ (sem par)
```

Caso o número de participantes seja ímpar.

---

## 🖼️ Preview

![Preview](https://github.com/user-attachments/assets/0356f2a3-b4a3-4420-8aa8-60747dd68a1e)

---


## 🛠 Tecnologias utilizadas

- **HTML5** — Estrutura e elementos da página  
- **CSS3** — Estilização visual e responsividade  
- **JavaScript (ES6+)** — Lógica do sorteio + manipulação do DOM

---

## ⚙️ Funcionalidades

🔹 Adicionar nome
  - Captura o texto do input
  - Valida se está vazio ou repetido
  - Armazena no array listaNomes

🔹 Exibir lista
  - Mostra os nomes na tela separados por “ - ”

🔹 Sortear
  - Embaralha os nomes usando Math.random()
  - Agrupa em duplas
  - Exibe o resultado formatado

🔹 Reiniciar
  - Limpa os arrays e o conteúdo visual
---

## 🧭 Como executar o projeto

### 🔹 Localmente.

1. Clone este repositório:
   ```bash
   git clone https://git@github.com:Gabirol/Amigo_Secreto.git


## 🗂 Estrutura de Pastas

Este projeto contém desafios práticos desenvolvidos durante o curso de JavaScript.  
Abaixo está a organização das pastas e arquivos.

├── assets/ # Imagens, icones e simbulos.

│ ├── imagem-presente

│ └── preview.gif 

│

├── js/ # Scripts JavaScript do projeto

│ ├── app.js 

│ 

│

├── index.html # Estrutura principal da interface (HTML)

└── style.css # Estilização visual do projeto (CSS)


---

## 💡 Aprendizados

- Manipulação do DOM (getElementById, innerHTML)
- Arrays (inserção, limpeza, cópia e embaralhamento)
- Uso de condicionais para validação
- Funções modulares e reutilizáveis
- Formatação de texto em tela
- Lógica para parear elementos em uma lista

> Este projeto me ajudou a entender como funciona o `Math.random()` e a usar melhor os arrays.

---

## 👨‍💻 Autor

**Gabriel Alves**

**📧 galves.ag2003@gmail.com**

**🔗 [LinkedIn](www.linkedin.com/in/gabriel-alves-gonçalves-28220a205)
• [GitHub](https://github.com/Gabirol)**


