const dados = [
    {
        titulo: "Como ganhar dinheiro com IA",
        descricao: "Para ganhar dinheiro com IA, você pode desenvolver aplicativos personalizados, utilizar algoritmos para otimizar investimentos, ou automatizar tarefas repetitivas. Ferramentas como o OpenAI GPT-4 para criação de conteúdo, DALL-E para design gráfico, e Hugging Face para aprendizado de máquina são exemplos práticos.",
        setor: "Negócios e Finanças",
        ferramentas: "Gemini, OpenAI GPT-4, DALL-E, Hugging Face",
        casosDeSucesso: "Empresas de tecnologia como OpenAI e startups que utilizam modelos de IA para serviços personalizados.",
        guiasPraticos: "https://www.youtube.com/watch?v=CX3DusyAOsw&ab_channel=WesleyFolly3.0",
        recursosEducacionais: "Coursera: Curso de IA para Negócios, Udacity: Nanodegree em IA",
        tags: "dinheiro, IA, negócios, investimentos, automação",
        link: "https://gemini.google.com/?hl=pt-PT"
    },
    {
        titulo: "Como posso otimizar minhas vendas?",
        descricao: "Para otimizar suas vendas usando IA, você pode implementar chatbots para atendimento ao cliente, usar algoritmos de recomendação para sugerir produtos relevantes e analisar dados de vendas para prever tendências.",
        setor: "Vendas e Marketing",
        ferramentas: "Drift, Salesforce Einstein, Algolia",
        casosDeSucesso: "Empresas como Amazon e Netflix que utilizam algoritmos de recomendação para aumentar vendas.",
        guiasPraticos: "https://www.salesforce.com/resources",
        recursosEducacionais: "HubSpot Academy: Curso de IA para Vendas, Google Analytics Academy",
        tags: "vendas, otimização, IA, chatbots, recomendações",
        link: "https://www.salesforce.com"
    },
    {
        titulo: "Como usar IA para análise de dados?",
        descricao: "Ferramentas de IA como Tableau e Power BI permitem visualizar e analisar grandes volumes de dados rapidamente, identificando tendências e insights que podem direcionar decisões estratégicas.",
        setor: "Análise de Dados",
        ferramentas: "Tableau, Power BI, Looker",
        casosDeSucesso: "Empresas como Uber e Spotify utilizam IA para análise de dados em grande escala.",
        guiasPraticos: "https://www.tableau.com/learn/training",
        recursosEducacionais: "Microsoft: Curso de Power BI",
        tags: "análise de dados, IA, visualização, insights",
        link: "https://www.tableau.com/"
    },
    {
        titulo: "Como começar um negócio baseado em IA?",
        descricao: "Identifique um problema que pode ser resolvido com IA, valide a ideia com pesquisas de mercado, e construa um MVP (Produto Mínimo Viável) usando plataformas como TensorFlow ou PyTorch para desenvolver o modelo de IA.",
        setor: "Empreendedorismo",
        ferramentas: "TensorFlow, PyTorch, Google Cloud AI",
        casosDeSucesso: "Startups que escalaram rapidamente utilizando modelos de IA inovadores.",
        guiasPraticos: "https://www.tensorflow.org/learn",
        recursosEducacionais: "Deep Learning AI: Curso de TensorFlow para Iniciantes",
        tags: "empreendedorismo, IA, startup, MVP, desenvolvimento",
        link: "https://www.tensorflow.org/"
    },
    {
        titulo: "Como posso aprender mais sobre IA?",
        descricao: "Comece com cursos introdutórios em plataformas como Coursera, edX ou Udemy. Para aprofundar, explore bootcamps específicos como o Deep Learning Specialization na Coursera ou o Nanodegree em IA da Udacity.",
        setor: "Educação",
        ferramentas: "Coursera, edX, Udemy",
        casosDeSucesso: "Alunos que se tornaram especialistas em IA após completarem cursos online.",
        guiasPraticos: "https://www.coursera.org/learn/deep-learning",
        recursosEducacionais: "Coursera: Deep Learning Specialization, Udacity: AI Nanodegree",
        tags: "educação, IA, aprendizado, cursos, especialização",
        link: "https://www.coursera.org/"
    },
    {
        titulo: "Como usar IA para melhorar campanhas de marketing?",
        descricao: "Ferramentas de IA do Google, como Google Ads e AutoML, podem ajudar a otimizar campanhas de marketing com segmentação inteligente e análise preditiva.",
        setor: "Marketing Digital",
        ferramentas: "Google Ads, AutoML, Google Analytics",
        casosDeSucesso: "Marcas que aumentaram a conversão de campanhas usando IA.",
        guiasPraticos: "https://ads.google.com/intl/pt-BR/home/resources/",
        recursosEducacionais: "Google Ads: Recursos e Treinamentos",
        tags: "marketing digital, campanhas, IA, Google Ads",
        link: "https://ads.google.com/intl/pt-BR/home/resources/"
    },
    {
        titulo: "Como criar um chatbot usando IA do Google?",
        descricao: "Com o Dialogflow do Google, você pode criar chatbots personalizados que entendem e respondem em linguagem natural. Esse curso cobre desde a configuração inicial até a implementação.",
        setor: "Atendimento ao Cliente e Chatbots",
        ferramentas: "Dialogflow, Google Cloud Functions",
        casosDeSucesso: "Empresas que melhoraram o atendimento ao cliente com chatbots criados usando Dialogflow.",
        guiasPraticos: "https://cloud.google.com/dialogflow/docs",
        recursosEducacionais: "Google Cloud: Documentação do Dialogflow",
        tags: "chatbot, IA, Dialogflow, Google Cloud, atendimento",
        link: "https://cloud.google.com/dialogflow/docs"
    },
    {
        titulo: "Como posso aprender Machine Learning com o Google?",
        descricao: "O Google oferece um curso gratuito de Machine Learning que cobre conceitos básicos e avançados, usando o TensorFlow e outras ferramentas da plataforma Google.",
        setor: "Educação em Machine Learning",
        ferramentas: "TensorFlow, Keras, Jupyter Notebooks",
        casosDeSucesso: "Alunos que desenvolveram projetos avançados após o curso, como modelos preditivos e de reconhecimento de imagens.",
        guiasPraticos: "https://developers.google.com/machine-learning/crash-course",
        recursosEducacionais: "Google AI: Machine Learning Crash Course",
        tags: "machine learning, aprendizado, Google, curso, TensorFlow",
        link: "https://developers.google.com/machine-learning/crash-course"
    },
    {
        titulo: "Quais são as melhores práticas para usar IA no Google Cloud?",
        descricao: "Descubra as melhores práticas para utilizar a IA no Google Cloud, desde a escolha dos modelos até a implementação e monitoramento.",
        setor: "Computação em Nuvem",
        ferramentas: "TensorFlow, AutoML, Google Cloud AI Platform",
        casosDeSucesso: "Startups que escalaram rapidamente utilizando a plataforma de IA do Google Cloud.",
        guiasPraticos: "https://cloud.google.com/architecture/best-practices-for-ml",
        recursosEducacionais: "Google Cloud: Arquitetura e Boas Práticas para Machine Learning",
        tags: "IA, Google Cloud, práticas recomendadas, arquitetura",
        link: "https://cloud.google.com/architecture/best-practices-for-ml"
    },
    {
        titulo: "Como otimizar processos de negócios usando AI da Google?",
        descricao: "A IA pode automatizar tarefas repetitivas e complexas nos processos de negócios. Ferramentas como o Google AI Hub oferecem modelos pré-treinados para diversas necessidades.",
        setor: "Automação de Processos de Negócios",
        ferramentas: "Google AI Hub, AutoML Tables",
        casosDeSucesso: "Empresas que reduziram custos operacionais com automação de processos usando IA.",
        guiasPraticos: "https://cloud.google.com/solutions/automated-data-science",
        recursosEducacionais: "Google Cloud: Soluções de Automação com IA",
        tags: "automação, processos de negócios, IA, Google Cloud",
        link: "https://cloud.google.com/solutions/automated-data-science"
    }
];
