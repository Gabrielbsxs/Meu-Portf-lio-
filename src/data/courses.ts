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

import curso1 from "@/assets/curso-1.jpg";
import curso2 from "@/assets/curso-2.jpg";
import curso3 from "@/assets/curso-3.jpg";
import curso4 from "@/assets/curso-4.jpg";

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
  level: "Iniciante" | "Intermediário" | "Avançado";
  duration: string;
  format: "Online" | "Presencial" | "Híbrido";
  audience: string;
  category: string;
  featured: boolean;
  benefits: string[];
  syllabus: string[];
  forWho: string[];
  ctaLabel: string;
  ctaHref: string;
};

export const courses: Course[] = [
  {
    slug: "comunicacao-e-oratoria",
    title: "Comunicação e Oratória na Prática",
    shortDescription:
      "Desenvolva presença, clareza e confiança para falar em público em qualquer situação.",
    fullDescription:
      "Um percurso prático para quem quer se comunicar com naturalidade e segurança. Ao longo do curso você trabalha voz, corpo, estrutura de fala e controle do nervosismo, com exercícios aplicáveis desde a primeira aula. (Texto-modelo: substitua pela descrição real do seu curso.)",
    image: curso1,
    imageAlt: "Ilustração de uma pessoa falando em público diante de uma plateia",
    level: "Iniciante",
    duration: "8 semanas · 16 horas",
    format: "Online",
    audience: "Profissionais que precisam apresentar ideias com mais impacto",
    category: "Comunicação",
    featured: true,
    benefits: [
      "Mais segurança ao falar em reuniões e apresentações",
      "Estrutura clara para organizar qualquer discurso",
      "Técnicas de respiração e presença de palco",
      "Feedback individual nas atividades práticas",
    ],
    syllabus: [
      "Fundamentos da comunicação clara",
      "Voz, respiração e ritmo",
      "Linguagem corporal e presença",
      "Como estruturar uma apresentação memorável",
      "Lidando com o nervosismo e imprevistos",
    ],
    forWho: [
      "Quem trava na hora de falar em público",
      "Lideranças que precisam inspirar times",
      "Profissionais em transição de carreira",
    ],
    ctaLabel: "Quero me inscrever",
    ctaHref: "#contato",
  },
  {
    slug: "produtividade-e-organizacao",
    title: "Produtividade e Organização Pessoal",
    shortDescription:
      "Um método simples para organizar seu tempo, reduzir a sobrecarga e manter a constância.",
    fullDescription:
      "Mais do que listas de tarefas: um sistema sustentável para priorizar o que importa, proteger seu foco e criar rotinas que cabem na sua vida real. (Texto-modelo: substitua pela descrição real do seu curso.)",
    image: curso2,
    imageAlt: "Ilustração de agenda, relógio e lista de tarefas organizados",
    level: "Iniciante",
    duration: "6 semanas · 12 horas",
    format: "Online",
    audience: "Pessoas com muitas frentes e pouca previsibilidade no dia",
    category: "Produtividade",
    featured: true,
    benefits: [
      "Rotina mais leve e previsível",
      "Critérios claros para priorizar tarefas",
      "Menos dispersão e mais foco profundo",
      "Modelos e planilhas prontos para usar",
    ],
    syllabus: [
      "Diagnóstico da sua rotina atual",
      "Captura e organização de tarefas",
      "Priorização sem culpa",
      "Blocos de foco e gestão de energia",
      "Revisões semanais e constância",
    ],
    forWho: [
      "Quem vive apagando incêndios",
      "Autônomos e empreendedores",
      "Estudantes conciliando trabalho e estudo",
    ],
    ctaLabel: "Quero saber mais",
    ctaHref: "#contato",
  },
  {
    slug: "escrita-criativa-e-conteudo",
    title: "Escrita Criativa e Conteúdo",
    shortDescription:
      "Transforme ideias em textos que conectam, emocionam e geram resultado.",
    fullDescription:
      "Do branco da página ao texto publicado. Você aprende a encontrar sua voz, estruturar narrativas e produzir conteúdo com consistência para redes, newsletters e projetos autorais. (Texto-modelo: substitua pela descrição real do seu curso.)",
    image: curso3,
    imageAlt: "Ilustração de caderno aberto, caneta e xícara sobre a mesa",
    level: "Intermediário",
    duration: "10 semanas · 20 horas",
    format: "Híbrido",
    audience: "Criadores de conteúdo e profissionais de comunicação",
    category: "Escrita",
    featured: true,
    benefits: [
      "Uma voz autoral reconhecível",
      "Processo criativo sem bloqueios",
      "Estruturas narrativas que prendem a atenção",
      "Rotina de publicação sustentável",
    ],
    syllabus: [
      "Encontrando sua voz",
      "Estruturas narrativas essenciais",
      "Edição e revisão eficientes",
      "Conteúdo para redes e newsletters",
      "Publicação e consistência",
    ],
    forWho: [
      "Quem quer começar a escrever com regularidade",
      "Profissionais de marketing e comunicação",
      "Pessoas com um projeto autoral engavetado",
    ],
    ctaLabel: "Quero me inscrever",
    ctaHref: "#contato",
  },
  {
    slug: "lideranca-e-mentoria",
    title: "Liderança e Mentoria com Propósito",
    shortDescription:
      "Ferramentas humanas e práticas para liderar pessoas e desenvolver talentos.",
    fullDescription:
      "Um curso para quem lidera (ou vai liderar) e quer fazer isso com escuta, clareza e responsabilidade. Inclui conversas difíceis, feedback e desenvolvimento de time. (Texto-modelo: substitua pela descrição real do seu curso.)",
    image: curso4,
    imageAlt: "Ilustração de uma pessoa ajudando outra a subir degraus",
    level: "Avançado",
    duration: "12 semanas · 24 horas",
    format: "Online",
    audience: "Lideranças, gestores e mentores",
    category: "Liderança",
    featured: false,
    benefits: [
      "Confiança para conduzir conversas difíceis",
      "Modelo prático de feedback contínuo",
      "Times mais autônomos e engajados",
      "Clareza sobre seu estilo de liderança",
    ],
    syllabus: [
      "Autoconhecimento e estilo de liderança",
      "Escuta ativa e confiança",
      "Feedback que desenvolve",
      "Delegação e autonomia",
      "Mentoria na prática",
    ],
    forWho: [
      "Novas lideranças",
      "Gestores experientes buscando repertório",
      "Mentores e facilitadores",
    ],
    ctaLabel: "Quero saber mais",
    ctaHref: "#contato",
  },
];

export const featuredCourses = courses.filter((c) => c.featured);

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}

export const categories = Array.from(new Set(courses.map((c) => c.category)));
