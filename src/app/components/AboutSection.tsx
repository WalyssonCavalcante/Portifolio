import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary"> Mim</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3>
              <span className="text-2xl font-semibold text-primary">
                Desenvolvedor Front-End
              </span>{" "}
            </h3>
            <p className="text-muted-foreground">
              Atuo como desenvolvedor Front-End, transformando design em
              interfaces funcionais, intuitivas e visualmente impactantes. Minha
              abordagem combina domínio técnico em HTML, CSS, JavaScript e
              frameworks modernos com atenção à experiência do usuário,
              garantindo que cada projeto seja eficiente, responsivo e alinhado
              às necessidades do negócio.
            </p>

            <p className="text-muted-foreground">
              Acredito que tecnologia é uma ponte entre ideias e resultados
              concretos. Por isso, busco constantemente otimizar processos,
              implementar soluções escaláveis e inovar na construção de
              experiências digitais. Meu objetivo é entregar projetos que não
              apenas funcionem, mas que gerem valor real e deixem uma impressão
              duradoura para quem os utiliza.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Entre em Contato
              </a>
              <a
                href="/CurriculoWalysson.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Baixar Curriculo
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Desenvolvimento Web
                  </h4>
                  <p className="text-muted-foreground">
                    Criação de sites e aplicativos web responsivos com
                    estruturas modernas.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Criação de interfaces intuitivas e atraentes com foco na
                    experiência do usuário.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Inovação Contínua</h4>
                  <p className="text-muted-foreground">
                    Aprendizado constante e aplicação de novas tecnologias para
                    elevar a qualidade dos projetos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
