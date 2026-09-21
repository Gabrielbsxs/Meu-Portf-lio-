/**
 * ======================================================================
 * EDITE AQUI: dados dos cursos
 * ----------------------------------------------------------------------
 * - `image`: por enquanto usa imagens de exemplo importadas de src/assets.
 *   Para usar uma imagem do Google Drive, troque o valor por uma string
 *   com o link direto, por exemplo:
 *     image: driveImage("1AbCdEfGhIjKlMnOpQrStUvWxYz")
 *   onde o texto entre aspas é o ID do arquivo no Drive (a parte que fica
 *   entre /d/ e /view no link compartilhado). Lembre-se de deixar o arquivo
 *   como "qualquer pessoa com o link pode ver".
 * - Todos os textos abaixo são modelos: substitua pelos seus.
 * ======================================================================
 */

import powerBiAsset from "@/assets/curso-power-bi.png.asset.json";
import firebaseGeminiAsset from "@/assets/curso-firebase-gemini.png.asset.json";
import awsAsset from "@/assets/curso-aws.png.asset.json";
import pythonAsset from "@/assets/curso-python.png.asset.json";
import cienciaDadosAsset from "@/assets/curso-ciencia-dados.png.asset.json";
import ai900Asset from "@/assets/curso-ai-900.png.asset.json";
import mysqlAsset from "@/assets/curso-mysql.png.asset.json";
import gitGithubAsset from "@/assets/curso-git-github.png.asset.json";
import segurancaInfoAsset from "@/assets/curso-seguranca-info.png.asset.json";
import basesNumericasAsset from "@/assets/curso-bases-numericas.png.asset.json";
import iaCursoemvideoAsset from "@/assets/curso-ia-cursoemvideo.png.asset.json";
import html5Asset from "@/assets/curso-html5.png.asset.json";
import anhangueraLogoAsset from "@/assets/logo-anhanguera.png.asset.json";

/** Converte um ID de arquivo do Google Drive em URL de imagem exibível. */
export function driveImage(fileId: string) {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`;
}

export type Course = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  imageAlt: string;
  level: string;
  duration: string;
  format: string;
  audience: string;
  category: string;
  featured: boolean;
  benefits: string[];
  syllabus: string[];
  forWho: string[];
  ctaLabel: string;
  ctaHref: string;
  rating: number;
  details?: { label: string; value: string }[];
};

export const courses: Course[] = [
  {
    slug: "analise-e-desenvolvimento-de-sistemas",
    title: "Superior de Tecnologia em Análise e Desenvolvimento de Sistemas",
    shortDescription:
      "Formação superior (EAD) em tecnologia com 28 disciplinas, realizada pela Anhanguera.",
    fullDescription:
      "Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas, na modalidade EAD, composto por 28 disciplinas pela Anhanguera. Entre os resultados acadêmicos, a disciplina Projeto de Software foi concluída no 1º semestre de 2023, com carga horária de 60 horas e média final 10.",
    image: anhangueraLogoAsset.url,
    imageAlt: "Logo da Anhanguera — instituição da formação em Análise e Desenvolvimento de Sistemas",
    level: "Graduação tecnológica",
    duration: "60 horas",
    format: "EAD",
    audience: "Desenvolvimento de sistemas",
    category: "Formação superior",
    featured: true,
    benefits: [
      "Formação superior em tecnologia",
      "Base para análise e desenvolvimento de sistemas",
      "Experiência acadêmica em projeto de software",
    ],
    syllabus: ["Projeto de Software — 1º semestre de 2023", "Carga horária da disciplina: 60h", "Média final: 10"],
    forWho: ["Formação realizada na modalidade EAD pela Anhanguera", "Curso composto por 28 disciplinas"],
    ctaLabel: "Ver formação",
    ctaHref: "",
    rating: 5,
    details: [
      { label: "Instituição", value: "Anhanguera (EAD)" },
      { label: "Disciplina em destaque", value: "Projeto de Software" },
      { label: "Semestre", value: "1º semestre/2023" },
      { label: "Média final", value: "10" },
    ],
  },
  {
    slug: "fundamentos-de-python",
    title: "Fundamentos de Python",
    shortDescription:
      "Desenvolvimento de programas com fundamentos de Python, resolução de problemas e boas práticas.",
    fullDescription:
      "Desenvolver programas de computador utilizando os fundamentos da linguagem Python por meio da resolução de problemas rotineiros, seguindo boas práticas, procedimentos e normas.",
    image: pythonAsset.url,
    imageAlt: "Banner do curso Fundamentos de Python",
    level: "Iniciante",
    duration: "30 horas",
    format: "Presencial",
    audience: "Programação com Python",
    category: "Programação",
    featured: true,
    benefits: ["Organização", "Atenção aos detalhes", "Raciocínio lógico"],
    syllabus: [
      "Linguagens compiladas e interpretadas",
      "Preparação do ambiente de desenvolvimento Python",
      "Tipos de variáveis e principais funções padrão",
      "Expressões lógicas, estruturas condicionais e de repetição",
      "Modularização por meio de funções",
    ],
    forWho: ["Formação profissional em fundamentos de programação", "Pessoas que desejam iniciar em Python"],
    ctaLabel: "Ver certificado",
    ctaHref: "https://www.sp.senai.br/consulta-certificado?qrcode=30125273563/15530673",
    rating: 5,
  },
  {
    slug: "microsoft-power-bi",
    title: "Microsoft Power BI",
    shortDescription:
      "Criação de indicadores e visualizações para apoiar decisões com dados de forma eficaz.",
    fullDescription:
      "Criar indicadores, coletar, analisar e visualizar dados de maneira eficaz para auxiliar na tomada de decisões nas organizações, seguindo boas práticas, procedimentos e normas.",
    image: powerBiAsset.url,
    imageAlt: "Banner do curso Microsoft Power BI",
    level: "Formação profissional",
    duration: "32 horas",
    format: "Presencial",
    audience: "Análise e visualização de dados",
    category: "Dados",
    featured: true,
    benefits: ["Autogestão", "Pensamento analítico", "Inteligência emocional", "Autonomia"],
    syllabus: [
      "Preparação de fontes de dados variadas",
      "Extração, transformação e limpeza de dados",
      "Criação de modelos de dados",
      "Representações visuais dos dados",
      "Implantação de ativos",
    ],
    forWho: ["Profissionais que trabalham com indicadores", "Pessoas interessadas em decisões orientadas por dados"],
    ctaLabel: "Ver certificado",
    ctaHref: "https://www.sp.senai.br/consulta-certificado?qrcode=30126179611/15562275",
    rating: 5,
  },
  {
    slug: "firebase-gemini",
    title: "Firebase + Gemini — Criação de Aplicativos com Google Firebase e Gemini",
    shortDescription:
      "Criação e publicação de aplicativos com Firebase, Firestore, autenticação e apoio do Gemini.",
    fullDescription:
      "Desenvolvimento de protótipos de aplicativos integrados ao Firebase, com persistência no Firestore, autenticação e publicação no Hosting. O Gemini apoia o desenvolvimento de código, com entregas versionadas em Git e aplicação de segurança, privacidade, LGPD e IA responsável.",
    image: firebaseGeminiAsset.url,
    imageAlt: "Banner do curso de aplicativos com Google Firebase e Gemini",
    level: "Formação profissional",
    duration: "32 horas",
    format: "Presencial",
    audience: "Desenvolvimento de aplicativos com IA",
    category: "Desenvolvimento e IA",
    featured: true,
    benefits: ["Prototipação com inteligência artificial", "Versionamento com Git", "Segurança e privacidade", "IA responsável"],
    syllabus: [
      "Gemini na produção de código e elaboração de prompts",
      "Fundamentos de programação e prototipação com IA",
      "Configuração de projeto e persistência no Firestore",
      "Autenticação com controle de acesso por UID",
      "Publicação do front-end no Firebase Hosting",
      "Segurança, privacidade, LGPD e IA responsável",
    ],
    forWho: ["Desenvolvedores de aplicações web", "Pessoas interessadas em Firebase e IA generativa"],
    ctaLabel: "Ver certificado",
    ctaHref: "https://www.sp.senai.br/consulta-certificado?qrcode=30126184246/15875777",
    rating: 5,
  },
  {
    slug: "aws-cloud-practitioner-foundational",
    title: "Implantação de Serviços em Nuvem — AWS Cloud Practitioner Foundational",
    shortDescription: "Implementação e gerenciamento de serviços na nuvem AWS seguindo normas técnicas de qualidade.",
    fullDescription: "Implementar e gerenciar serviços utilizando plataformas em nuvem da empresa AWS, seguindo procedimentos e normas técnicas de qualidade.",
    image: awsAsset.url,
    imageAlt: "Banner do curso AWS Cloud Practitioner Foundational",
    level: "Foundational",
    duration: "40 horas",
    format: "Presencial",
    audience: "Computação em nuvem AWS",
    category: "Cloud",
    featured: true,
    benefits: ["Raciocínio lógico", "Atenção aos detalhes", "Visão integrada de serviços em nuvem"],
    syllabus: ["Redes de microcomputadores e serviços em nuvem", "Máquinas virtuais, web servers e armazenamento", "Segurança e integração de serviços", "Modelos de contratação", "Monitoramento e reconfiguração de serviços"],
    forWho: ["Profissionais de infraestrutura e desenvolvimento", "Pessoas que desejam iniciar em computação AWS"],
    ctaLabel: "Ver certificado",
    ctaHref: "https://www.sp.senai.br/consulta-certificado?qrcode=30126179612/15562292",
    rating: 5,
  },
  {
    slug: "ciencia-de-dados-google-cloud",
    title: "Fundamentos de Ciência de Dados — Google Cloud",
    shortDescription: "Uso de serviços Google Cloud para extrair conhecimento e insights a partir de dados.",
    fullDescription: "Implementar serviços de ciência de dados em nuvem, utilizando métodos, processos, algoritmos e sistemas na extração de conhecimento e insights a partir de dados públicos e privados.",
    image: cienciaDadosAsset.url,
    imageAlt: "Banner do curso Fundamentos de Ciência de Dados — Google Cloud",
    level: "Fundamentos",
    duration: "20 horas",
    format: "Presencial",
    audience: "Ciência e análise de dados em nuvem",
    category: "Dados e Cloud",
    featured: true,
    benefits: ["Raciocínio analítico e lógico", "Atenção aos detalhes", "Experiência com ferramentas no-code"],
    syllabus: ["Serviços de análise de dados na Google Cloud", "Aplicações no-code com AppSheet", "Análise de dados com Looker", "Publicação de ambientes na Google Cloud"],
    forWho: ["Pessoas interessadas em ciência de dados", "Profissionais que desejam trabalhar com Google Cloud"],
    ctaLabel: "Ver certificado",
    ctaHref: "https://www.sp.senai.br/consulta-certificado?qrcode=30125273564/15530681",
    rating: 5,
  },
  {
    slug: "inteligencia-artificial-microsoft-ai-900",
    title: "Implantação de Serviços de Inteligência Artificial em Nuvem — Microsoft AI-900",
    shortDescription: "Implementação de serviços cognitivos de inteligência artificial em plataformas de nuvem.",
    fullDescription: "Implementar serviços cognitivos de inteligência artificial utilizando as principais tecnologias da área disponíveis nos serviços de nuvem.",
    image: ai900Asset.url,
    imageAlt: "Banner do curso Implantação de Serviços de Inteligência Artificial em Nuvem — Microsoft AI-900",
    level: "Fundamentos",
    duration: "40 horas",
    format: "Presencial",
    audience: "Inteligência artificial em nuvem",
    category: "Inteligência Artificial",
    featured: true,
    benefits: ["Visão computacional", "Processamento de linguagem natural", "Machine Learning", "IA de conversação"],
    syllabus: ["Usos comuns da IA em plataformas de nuvem", "Modelos de Machine Learning", "Serviços cognitivos de visão computacional", "Processamento de linguagem natural", "Inteligência artificial de conversação"],
    forWho: ["Profissionais que desejam iniciar em inteligência artificial", "Pessoas interessadas nos serviços de IA da Microsoft"],
    ctaLabel: "Ver certificado",
    ctaHref: "https://www.sp.senai.br/consulta-certificado?qrcode=30125273276/15507413",
    rating: 5,
  },
  {
    slug: "mysql-curso-em-video",
    title: "MySQL",
    shortDescription:
      "Domine o gerenciamento de bancos de dados com MySQL, do básico às consultas avançadas.",
    fullDescription:
      "Curso completo de MySQL do Curso em Vídeo, abordando modelagem de bancos de dados, comandos SQL, consultas com JOIN, funções agregadas, procedures e boas práticas no gerenciamento de dados.",
    image: mysqlAsset.url,
    imageAlt: "Card do curso de MySQL do Curso em Vídeo",
    level: "Iniciante",
    duration: "40 horas",
    format: "Online",
    audience: "Bancos de dados e SQL",
    category: "Banco de Dados",
    featured: true,
    benefits: ["Modelagem de dados relacional", "Consultas SQL", "Gerenciamento de bancos de dados"],
    syllabus: [
      "Introdução a bancos de dados",
      "Comandos SQL (DDL, DML e DQL)",
      "Modelagem relacional e chaves",
      "Consultas com INNER JOIN",
      "Funções agregadas e agrupamento",
      "Procedures e triggers",
    ],
    forWho: ["Pessoas que desejam iniciar em bancos de dados", "Desenvolvedores que precisam de SQL"],
    ctaLabel: "Ver detalhes",
    ctaHref: "",
    rating: 5,
  },
  {
    slug: "git-e-github-curso-em-video",
    title: "Git e GitHub",
    shortDescription:
      "Domine o controle de versões e colabore como um profissional em projetos de software.",
    fullDescription:
      "Curso de Git e GitHub do Curso em Vídeo, ensinando controle de versões, criação de repositórios, branches, merge, resolução de conflitos e colaboração no GitHub.",
    image: gitGithubAsset.url,
    imageAlt: "Card do curso de Git e GitHub do Curso em Vídeo",
    level: "Iniciante",
    duration: "20 horas",
    format: "Online",
    audience: "Controle de versões e colaboração",
    category: "Ferramentas",
    featured: true,
    benefits: ["Controle de versões", "Colaboração em equipe", "Boas práticas com Git"],
    syllabus: [
      "Versionamento de código",
      "Repositórios locais e remotos",
      "Branches e merge",
      "Resolução de conflitos",
      "Colaboração no GitHub",
      "Pull requests e code review",
    ],
    forWho: ["Desenvolvedores iniciantes", "Pessoas que querem aprender controle de versão"],
    ctaLabel: "Ver detalhes",
    ctaHref: "",
    rating: 5,
  },
  {
    slug: "seguranca-da-informacao-curso-em-video",
    title: "Segurança da Informação",
    shortDescription:
      "Fundamentos de segurança da informação para proteger dados, sistemas e redes.",
    fullDescription:
      "Curso de Segurança da Informação do Curso em Vídeo, abordando princípios de segurança, ameaças digitais, criptografia, gestão de riscos e boas práticas para proteção de dados e sistemas.",
    image: segurancaInfoAsset.url,
    imageAlt: "Card do curso de Segurança da Informação do Curso em Vídeo",
    level: "Fundamentos",
    duration: "20 horas",
    format: "Online",
    audience: "Segurança da informação",
    category: "Segurança",
    featured: true,
    benefits: ["Conscientização sobre ameaças", "Princípios de criptografia", "Boas práticas de segurança"],
    syllabus: [
      "Princípios da segurança da informação",
      "Ameaças e vulnerabilidades",
      "Criptografia e senhas",
      "Segurança em redes",
      "Gestão de riscos",
      "Boas práticas e LGPD",
    ],
    forWho: ["Pessoas interessadas em segurança digital", "Profissionais de TI que querem se proteger"],
    ctaLabel: "Ver detalhes",
    ctaHref: "",
    rating: 5,
  },
  {
    slug: "bases-numericas-curso-em-video",
    title: "Bases Numéricas",
    shortDescription:
      "Entenda como os computadores pensam e dominam o mundo digital com bases numéricas.",
    fullDescription:
      "Curso de Bases Numéricas do Curso em Vídeo, ensinando sistemas de numeração — decimal, binário, octal e hexadecimal — e como os computadores representam e manipulam dados internamente.",
    image: basesNumericasAsset.url,
    imageAlt: "Card do curso de Bases Numéricas do Curso em Vídeo",
    level: "Iniciante",
    duration: "20 horas",
    format: "Online",
    audience: "Fundamentos da computação",
    category: "Fundamentos",
    featured: true,
    benefits: ["Compreensão de sistemas numéricos", "Conversão entre bases", "Base lógica para programação"],
    syllabus: [
      "Sistema decimal",
      "Sistema binário",
      "Sistema octal",
      "Sistema hexadecimal",
      "Conversão entre bases",
      "Operações aritméticas em binário",
    ],
    forWho: ["Iniciantes em computação", "Pessoas que querem entender como computadores processam dados"],
    ctaLabel: "Ver detalhes",
    ctaHref: "",
    rating: 5,
  },
  {
    slug: "inteligencia-artificial-curso-em-video",
    title: "Inteligência Artificial",
    shortDescription:
      "Introdução à inteligência artificial, do conceito às aplicações práticas no dia a dia.",
    fullDescription:
      "Curso grátis de Inteligência Artificial do Curso em Vídeo, criado para qualquer pessoa que deseja entender o que é IA, como funciona, suas principais aplicações e o impacto na sociedade.",
    image: iaCursoemvideoAsset.url,
    imageAlt: "Card do curso de Inteligência Artificial do Curso em Vídeo",
    level: "Fundamentos",
    duration: "20 horas",
    format: "Online",
    audience: "Inteligência artificial para iniciantes",
    category: "Inteligência Artificial",
    featured: true,
    benefits: ["Compreensão de IA", "Aplicações práticas", "Base para estudos avançados"],
    syllabus: [
      "O que é inteligência artificial",
      "História e evolução da IA",
      "Machine Learning e Deep Learning",
      "Aplicações de IA no dia a dia",
      "IA responsável e ética",
    ],
    forWho: ["Pessoas que desejam iniciar em IA", "Qualquer pessoa curiosa sobre inteligência artificial"],
    ctaLabel: "Ver detalhes",
    ctaHref: "",
    rating: 5,
  },
  {
    slug: "html5-curso-em-video",
    title: "HTML5",
    shortDescription:
      "Aprenda a criar sites do zero com HTML5, a linguagem de marcação da web.",
    fullDescription:
      "Curso de HTML5 do Curso em Vídeo, ensinando a estrutura de páginas web, semântica HTML5, formulários, multimídia e as boas práticas para criar sites acessíveis e responsivos do zero.",
    image: html5Asset.url,
    imageAlt: "Card do curso de HTML5 do Curso em Vídeo",
    level: "Iniciante",
    duration: "40 horas",
    format: "Online",
    audience: "Desenvolvimento web",
    category: "Desenvolvimento Web",
    featured: true,
    benefits: ["Estrutura de páginas web", "Semântica HTML5", "Base para desenvolvimento front-end"],
    syllabus: [
      "Estrutura básica de um documento HTML",
      "Tags de texto, links e imagens",
      "Tabelas e listas",
      "Formulários e validação",
      "Multimídia (áudio, vídeo e canvas)",
      "Semântica e acessibilidade em HTML5",
    ],
    forWho: ["Pessoas que querem criar sites", "Iniciantes em desenvolvimento web"],
    ctaLabel: "Ver detalhes",
    ctaHref: "",
    rating: 5,
  },
];

export const featuredCourses = courses.filter((c) => c.featured);

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}

export const categories = Array.from(new Set(courses.map((c) => c.category)));
