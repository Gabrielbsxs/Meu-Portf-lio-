import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CourseCarousel } from "@/components/course-carousel";
import { featuredCourses } from "@/data/courses";
import { profile } from "@/data/profile";

const title = `${profile.name} — Cursos e certificações em tecnologia`;
const description =
  "Conheça formações e certificações em programação, dados, cloud e inteligência artificial.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-accent-soft blur-3xl" />
          <div className="mx-auto grid max-w-6xl items-center gap-9 px-4 py-10 sm:px-5 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:py-24">
            <div className="min-w-0">
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-primary">
                <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
                {profile.role}
              </p>
              <h1 className="mt-5 break-words text-3xl font-semibold leading-tight text-foreground sm:mt-6 sm:text-5xl lg:text-6xl">
                {profile.name}
                <span className="mt-3 block text-muted-foreground">{profile.tagline}</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
                {profile.intro}
              </p>

              <div className="mt-7 grid gap-3 sm:mt-9 sm:flex sm:flex-wrap">
                <Link
                  to="/cursos"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-center text-sm font-semibold text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  Conheça meus cursos
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/sobre"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/25 bg-card px-7 py-3.5 text-center text-sm font-semibold text-primary transition-colors hover:bg-secondary"
                >
                  Sobre mim
                </Link>
              </div>
            </div>

            <div className="relative">
              {/* EDITE AQUI: troque a foto em src/data/profile.ts */}
              <img
                src={profile.photo}
                alt={profile.photoAlt}
                width={1280}
                height={1280}
                className="mx-auto aspect-[4/5] max-h-[34rem] w-full max-w-md rounded-2xl object-cover shadow-lift sm:rounded-[2rem]"
              />
            </div>
          </div>
        </section>

        {/* CURSOS EM DESTAQUE */}
        <section aria-labelledby="cursos-destaque" className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-12 lg:py-16">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Cursos em destaque</p>
            <h2 id="cursos-destaque" className="mt-3 text-2xl font-semibold leading-tight text-foreground sm:text-4xl">
              Escolha o próximo passo da sua evolução
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Formações em programação, dados, computação em nuvem e inteligência artificial.
            </p>
          </div>

          <CourseCarousel courses={featuredCourses} />

          <div className="mt-12 flex justify-center">
            <Link
              to="/cursos"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-center text-base font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Conheça outros cursos
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* SOBRE MIM (resumo) */}
        <section aria-labelledby="sobre-resumo" className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-12 lg:py-20">
          <div className="surface-card grid gap-8 overflow-hidden p-5 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10 lg:p-12">
            <img
              src={profile.photo}
              alt={profile.photoAlt}
              loading="lazy"
              width={1280}
              height={1280}
              className="mx-auto aspect-[4/5] max-h-[34rem] w-full max-w-md rounded-xl object-cover sm:rounded-2xl"
            />
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Sobre mim</p>
              <h2 id="sobre-resumo" className="mt-3 text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
                Prazer, sou {profile.name}
              </h2>
              {profile.bio.map((p) => (
                <p key={p} className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              <ul className="mt-6 flex flex-wrap gap-2">
                {profile.specialties.map((s) => (
                  <li
                    key={s}
                    className="rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <Link
                to="/sobre"
                className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                Conhecer minha história
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
