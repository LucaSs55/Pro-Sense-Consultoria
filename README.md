# Pro Sense-Consultoria

## 📘 Descrição
O Pro-Sense-Consultoria é um conjunto de ferramentas e utilitários desenvolvido para apoiar empresas e consultores em suas atividades de planejamento financeiro, gestão de dados e geração de relatórios customizados.

Um conjunto de ferramentas e utilitários para análise financeira, geração de relatórios e indicadores de desempenho para consultorias e empresas.

## 🚀 Começando
Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte a seção **📦 Implantação** para saber como implantar o projeto.

## 📋 Pré-requisitos
Você vai precisar de:

- Python 3.8 ou superior
- Pip
- Git

Instale as dependências com:
```bash
pip install -r requirements.txt
```

## 🔧 Instalação

Clone o repositório:
```bash
git clone https://github.com/LucaSs55/Pro-Sense-Consultoria.git
cd Pro-Sense-Consultoria
```

Instale os pacotes:
```bash
pip install -r requirements.txt
```

Execute o sistema com um arquivo de entrada:
```bash
python src/main.py --input data/financas.csv --output relatorio.pdf
```

Esse comando vai gerar um relatório com indicadores e salvar no diretório `output/`.

## ⚙️ Executando os testes
Para rodar os testes automatizados, execute:

```bash
pytest
```

## 🔩 Analise os testes de ponta a ponta
Os testes validam as principais funcionalidades como leitura de dados, geração de relatórios e cálculo dos KPIs, garantindo que erros sejam identificados automaticamente.

Exemplo:
```bash
pytest tests/test_kpis.py
```

## ⌨️ E testes de estilo de codificação
Verifique o estilo do código com:

```bash
flake8 src/
```

Esses testes garantem que o código siga padrões de estilo e boas práticas.

## 📦 Implantação
Para implantar em produção, configure o ambiente com variáveis adequadas, certifique-se de que os dados estejam corretos e execute o script principal. Você pode agendar execuções automáticas com um cron job, por exemplo.

## 🛠️ Construído com
- Python - Linguagem principal
- Pandas - Manipulação de dados
- Matplotlib - Geração de gráficos
- PyTest - Framework de testes
- Flake8 - Validação de estilo

## 🖇️ Colaborando
Por favor, leia o arquivo `COLABORACAO.md` para detalhes sobre o nosso código de conduta e o processo para nos enviar pedidos de pull request.

Veja também a lista de [colaboradores](https://github.com/LucaSs55/Pro-Sense-Consultoria/graphs/contributors) que participaram deste projeto.

## 📄 Licença
Este projeto está sob a licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.
