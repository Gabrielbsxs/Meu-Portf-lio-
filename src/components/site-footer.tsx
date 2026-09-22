import { Link } from "@tanstack/react-router";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer id="contato" className="mt-16 border-t border-border/70 bg-secondary/50 sm:mt-24">
      <div className="mx-auto grid max-w-6xl gap-9 px-4 py-10 sm:grid-cols-2 sm:px-5 sm:py-14 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <p className="font-display text-xl font-semibold text-primary">{profile.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {profile.tagline}
          </p>
        </div>

        <nav aria-label="Links rápidos">
          <h2 className="text-sm font-semibold text-foreground">Links rápidos</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-primary">
                Início
              </Link>
            </li>
            <li>
              <Link to="/cursos" className="hover:text-primary">
                Todos os cursos
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="hover:text-primary">
                Sobre mim
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Contato</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={`mailto:${profile.email}`} className="break-all hover:text-primary">
                {profile.email}
              </a>
            </li>
            <li>{profile.phone}</li>
          </ul>
          <ul className="mt-4 flex flex-wrap gap-3 text-sm">
            {profile.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-muted-foreground transition-colors hover:text-primary"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70 px-5 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
