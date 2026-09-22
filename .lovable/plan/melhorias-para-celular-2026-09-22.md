# Melhorias para celular

## Objetivo
Deixar textos, fotos e cards fáceis de visualizar em telas pequenas, preservando o visual atual no computador.

## Alterações
- Ajustar cabeçalho e menu para o nome não disputar espaço com o botão.
- Reduzir títulos longos no celular e melhorar quebras de linha e espaçamento.
- Mostrar as imagens dos cursos sem cortes no celular, com altura estável e fundo adequado para banners e logos.
- Ajustar a foto de perfil para um enquadramento consistente nas páginas inicial e Sobre.
- Transformar botões principais em largura confortável no celular e manter textos legíveis.
- Refinar grades, cards, rodapé e áreas de detalhes para não causar rolagem lateral.
- Validar as páginas inicial, cursos, detalhes e Sobre em viewport de celular.

## Detalhes técnicos
- Aplicar estilos responsivos com Tailwind nas páginas e componentes existentes.
- Manter `object-cover` em fotos e usar `object-contain` nos materiais dos cursos em telas pequenas.
- Garantir containers com `min-w-0`, palavras longas quebráveis e dimensões responsivas estáveis.
