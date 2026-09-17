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

import courseFallback from "@/assets/hero.jpg";
import powerBiAsset from "@/assets/curso-power-bi.png.asset.json";
import firebaseGeminiAsset from "@/assets/curso-firebase-gemini.png.asset.json";
import awsAsset from "@/assets/curso-aws.png.asset.json";
import pythonAsset from "@/assets/curso-python.png.asset.json";
import cienciaDadosAsset from "@/assets/curso-ciencia-dados.png.asset.json";
import ai900Asset from "@/assets/curso-ai-900.png.asset.json";

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
      "Formação superior em tecnologia com 28 disciplinas, realizada na unidade SENAI de Lorena/SP.",
    fullDescription:
      "Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas, composto por 28 disciplinas na unidade de Lorena/SP. Entre os resultados acadêmicos, a disciplina Projeto de Software foi concluída no 1º semestre de 2023, com carga horária de 60 horas e média final 10.",
    image: courseFallback,
    imageAlt: "Foto do profissional associada à formação em Análise e Desenvolvimento de Sistemas",
    level: "Graduação tecnológica",
    duration: "60 horas",
    format: "Presencial",
    audience: "Desenvolvimento de sistemas",
    category: "Formação superior",
    featured: true,
    benefits: [
      "Formação superior em tecnologia",
      "Base para análise e desenvolvimento de sistemas",
      "Experiência acadêmica em projeto de software",
    ],
    syllabus: ["Projeto de Software — 1º semestre de 2023", "Carga horária da disciplina: 60h", "Média final: 10"],
    forWho: ["Formação realizada na unidade de Lorena/SP", "Curso composto por 28 disciplinas"],
    ctaLabel: "Ver formação",
    ctaHref: "",
    rating: 5,
    details: [
      { label: "Unidade", value: "Lorena/SP" },
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
    image: courseFallback,
    imageAlt: "Foto do profissional associada ao curso Fundamentos de Python",
    level: "Iniciante",
    duration: "30 horas",
    format: "Certificação SENAI",
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
    image: courseFallback,
    imageAlt: "Foto do profissional associada ao curso Microsoft Power BI",
    level: "Formação profissional",
    duration: "32 horas",
    format: "Certificação SENAI",
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
    image: courseFallback,
    imageAlt: "Foto do profissional associada ao curso de aplicativos com Google Firebase e Gemini",
    level: "Formação profissional",
    duration: "32 horas",
    format: "Certificação SENAI",
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
    image: courseFallback,
    imageAlt: "Foto do profissional associada ao curso AWS Cloud Practitioner Foundational",
    level: "Foundational",
    duration: "40 horas",
    format: "Certificação SENAI",
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
    image: courseFallback,
    imageAlt: "Foto do profissional associada ao curso de Ciência de Dados no Google Cloud",
    level: "Fundamentos",
    duration: "20 horas",
    format: "Certificação SENAI",
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
    image: courseFallback,
    imageAlt: "Foto do profissional associada ao curso Microsoft AI-900",
    level: "Fundamentos",
    duration: "40 horas",
    format: "Certificação SENAI",
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
];

export const featuredCourses = courses.filter((c) => c.featured);

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}

export const categories = Array.from(new Set(courses.map((c) => c.category)));
