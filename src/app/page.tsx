import Image from "next/image";

export default function Home() {
  const whatsappNumber = "51940801210";
  const wa = (text: string) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  const products = [
    {
      name: "PROBIOTIC 60 BILLIONS + PREBIOTICS",
      image: "/images/product-5.jpg",
      description:
        "Probiotic 60 Billions + Prebiotics es un suplemento dietético formulado con una combinación avanzada de cepas probióticas y prebióticos, que contribuye al equilibrio de la microbiota intestinal y apoya el bienestar digestivo como parte de un estilo de vida saludable. Su fórmula incorpora MAKTREK® Bi-Pass Technology, diseñada para proteger los probióticos durante su paso por el tracto digestivo, favoreciendo su llegada al intestino. Registro Sanitario: DE 5871",
    },
    {
      name: "WOMEN'S PROBIOTIC 50 BILLIONS + PREBIOTICS",
      image: "/images/product-2.jpg",
      description:
        "Women\u00b4s Probiotic 50 Billions + Prebiotics es un suplemento dietético formulado especialmente para la mujer, que contribuye al equilibrio de la microbiota intestinal y vaginal, apoyando el bienestar digestivo e inmunológico como parte de un estilo de vida saludable. Su fórmula avanzada combina cepas probióticas cuidadosamente seleccionadas con MAKTREK® Bi-Pass Technology, que ayuda a proteger los probióticos durante su paso por el tracto digestivo, favoreciendo su llegada al intestino. Registro Sanitario: DE 5872",
    },
    {
      name: "MYO & D-CHIRO INOSITOL PLUS",
      image: "/images/product-1.jpg",
      description:
        "NutraHer Myo & D-Chiro Inositol Plus es un suplemento dietético vegano formulado especialmente para la mujer, que contribuye al equilibrio metabólico y hormonal, apoyando el bienestar reproductivo y la salud ovárica como parte de un estilo de vida saludable. Su fórmula combina Myo-Inositol y D-Chiro Inositol en proporción fisiológica 4:1, utilizando la materia prima Caronositol®, reconocida por su alta calidad y pureza. Registro Sanitario: DE 5865",
    },
    {
      name: "RESVERATROL",
      image: "/images/product-3.jpg",
      comingSoon: true,
      description:
        "NutraHer Resveratrol es un suplemento dietético vegano formulado con una mezcla concentrada de resveratrol de origen vegetal, que contribuye a la protección antioxidante del organismo y apoya el bienestar celular como parte de un estilo de vida saludable. Su fórmula contiene extractos estandarizados de Polygonum cuspidatum, fuente natural de trans-resveratrol, reconocida por su alta calidad y pureza.",
    },
    {
      name: "MENOPAUSE SUPPORT",
      image: "/images/product-4.jpg",
      comingSoon: true,
      description:
        "NutraHer Menopause Support es un suplemento dietético formulado especialmente para acompañar a la mujer durante la etapa de la menopausia y perimenopausia, contribuyendo al bienestar hormonal, metabólico y emocional como parte de un estilo de vida saludable. Su fórmula combina vitaminas, extractos botánicos, probióticos y prebióticos, cuidadosamente seleccionados para apoyar el equilibrio del organismo femenino en esta etapa de transición natural.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#133241]">
      {/* ── Header ── */}
      <header className="w-full bg-[#184054]">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5">
          <Image
            src="/images/logo.svg"
            alt="NutraCore"
            width={120}
            height={65}
            className="object-contain"
            priority
          />
          <a
            href={wa("Hola! Quisiera más información sobre sus productos")}
            target="_blank"
            className="rounded-full bg-white px-6 py-2.5 text-[14px] font-medium text-[#184054] hover:opacity-90 transition-opacity"
          >
            Contáctanos
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-6">
          <div
            className="overflow-hidden rounded-[24px] bg-[#f6f7f9] flex flex-col md:flex-row items-center gap-8 md:gap-[80px] px-5 py-8 md:px-[50px] md:py-[56px]"
          >
            {/* Left - Text */}
            <div className="flex-1 flex flex-col justify-center">
              <h1 className="text-[48px] md:text-[56px] lg:text-[68px] leading-[120%] font-normal tracking-[-0.06em] text-[#133241]">
                Salud premium para el bienestar integral
              </h1>
              <p className="mt-6 max-w-lg text-[16px] leading-[150%] font-light tracking-[-0.01em] text-[#133241]/80">
                Probióticos y suplementos nutracéuticos elaborados en países
                de alta vigilancia sanitaria como Estados Unidos, desarrollados
                para acompañar la salud intestinal, el bienestar general y
                líneas especializadas para el cuidado de la mujer.
              </p>
              <div className="mt-8">
                <a
                  href={wa("Hola! Quisiera más información sobre sus productos")}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-[#133241] px-6 py-3 text-[14px] font-medium text-white hover:opacity-90 transition-opacity"
                >
                  Hablar con un asesor
                  <span aria-hidden className="text-lg">→</span>
                </a>
              </div>
            </div>
            {/* Right - Hero video */}
            <div className="relative w-full md:w-auto md:flex-1 aspect-[0.955] max-h-[563px] overflow-hidden rounded-[24px]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/images/hero-video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* ── Nuestro Enfoque ── */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-3">
          <div
            className="rounded-[24px] bg-[#f6f7f9] flex flex-col gap-8 md:gap-[60px] px-5 py-8 md:px-[50px] md:py-[56px] md:pb-[24px]"
          >
            {/* Badge */}
            <div>
              <span className="inline-flex rounded-full border-2 border-[#111] px-7 py-3 text-[14px] font-medium tracking-[0.15em] text-[#133241] uppercase">
                Nuestro Enfoque
              </span>
            </div>

            {/* Content row: title left + paragraphs right */}
            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-[60px]">
              {/* Left - Title */}
              <div className="flex-1 max-w-[600px]">
                <h2 className="text-[28px] md:text-[32px] leading-[110%] font-normal tracking-[-0.06em] text-[#133241]">
                  Una nueva generación de suplementos nutracéuticos premium
                </h2>
              </div>
              {/* Right - Paragraphs */}
              <div className="flex-1 space-y-5 text-[16px] leading-[150%] font-light tracking-[-0.01em] text-[#133241]/80">
                <p>
                  En NutraCore desarrollamos suplementos dietéticos de alta
                  calidad orientados a la salud intestinal y el bienestar
                  integral, con líneas especializadas en áreas clave como el
                  cuidado de la salud de la mujer y la nutrición funcional.
                </p>
                <p>
                  Nuestras fórmulas son elaboradas en países de alta vigilancia
                  sanitaria, como Estados Unidos y Europa, bajo estrictos
                  estándares internacionales de calidad, seguridad y control de
                  procesos. Los productos cuentan con aprobación ante FDA y
                  cumplen con los requisitos regulatorios de las autoridades
                  sanitarias peruanas, DIGEMID.
                </p>
                <p>
                  Este enfoque nos permite ofrecer suplementos confiables,
                  trazables y alineados con las mejores prácticas globales,
                  respaldando un compromiso constante con la calidad, la
                  transparencia y la confianza de nuestros pacientes.
                </p>
              </div>
            </div>

            {/* Products image */}
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[24px]">
              <Image
                src="/images/hero-bg.jpg"
                alt="Productos NutraCore"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Nuestras Líneas ── */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="py-8 md:py-20 px-1 md:px-12">
            {/* Badge */}
            <div className="mb-6">
              <span className="inline-flex rounded-full border-2 border-[#111] px-7 py-3 text-[14px] font-medium tracking-[0.15em] text-[#133241] uppercase">
                Nuestras Líneas
              </span>
            </div>

            {/* Content: 2 columns desktop, stacked mobile */}
            <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-[60px]">
              {/* Left - Title + paragraphs */}
              <div className="md:w-[50%] shrink-0">
                <h2 className="text-[28px] md:text-[32px] leading-[110%] font-normal tracking-[-0.06em] text-[#133241]">
                  Suplementos diseñados para distintas necesidades
                </h2>
                <div className="mt-4 space-y-4 text-[16px] leading-[150%] font-light tracking-[-0.01em] text-[#133241]/80">
                  <p>
                    NutraCore.Labs ofrece dos líneas de productos principales:
                    probióticos y multivitamínicos.  Cada línea tiene una variedad  de
                    productos, adaptados a diferentes necesidades.
                  </p>
                  <p>
                    Los productos probióticos se enfocan en la salud  intestinal y los
                    productos multivitamínicos apoyan el bienestar general  con un
                    mayor enfoque en el cuidado de la mujer en la etapa de fertilidad y
                    climaterio.
                  </p>
                </div>
              </div>

              {/* Right - Brand logos */}
              <div className="md:w-[55%] flex flex-row items-center justify-center gap-0">
                <Image
                  src="/images/stamp.png"
                  alt="NutraHer"
                  width={320}
                  height={320}
                  className="w-[200px] md:w-[300px] h-auto object-contain"
                />
                <Image
                  src="/images/enfoque-img.png"
                  alt="NutraZen"
                  width={320}
                  height={320}
                  className="w-[180px] md:w-[280px] h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Productos Destacados ── */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-6">
          <div className="rounded-[24px] bg-[#F1F2F4] px-6 py-10 md:px-[58px] md:py-[60px]">
            {/* Header: badge + title/subtitle row */}
            <div className="mb-10">
              <span className="inline-flex rounded-full border-2 border-[#111] px-7 py-3 text-[14px] font-medium tracking-[0.15em] text-[#133241] uppercase">
                Productos Destacados
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-[80px] mb-14 md:mb-16">
              <h2 className="flex-1 text-[28px] md:text-[32px] leading-[110%] font-normal tracking-[-0.06em] text-[#133241]">
                Suplementos diseñados para acompañar la salud integral
              </h2>
              <p className="flex-1 max-w-[538px] text-[16px] leading-[150%] font-light tracking-[-0.01em] text-[#133241]/60">
                Desarrollamos suplementos enfocados en el bienestar diario,
                formulados con criterio científico, ingredientes de alta calidad y
                estándares internacionales. Cada producto está pensado para
                acompañarte de forma práctica, segura y constante.
              </p>
            </div>

            {/* Cards - vertical list of horizontal cards */}
            <div className="flex flex-col gap-10 md:gap-12">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="flex flex-col md:flex-row items-center gap-6 md:gap-[80px]"
                >
                  {/* Image */}
                  <div className="relative w-full md:flex-1 aspect-[1.42/1] overflow-hidden rounded-[24px]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Content */}
                  <div className="flex flex-col gap-[30px] md:flex-1">
                    <div className="flex flex-col gap-4">
                      {product.comingSoon && (
                        <div>
                          <span className="inline-flex rounded-full bg-[#F2E4C9]/60 px-5 py-2 text-[11px] font-medium tracking-[0.15em] text-[#133241]/70 uppercase">
                            Próximamente
                          </span>
                        </div>
                      )}
                      <h3 className="text-[20px] leading-[140%] font-normal tracking-[-0.04em] text-[#133241]">
                        {product.name}
                      </h3>
                      <p className="text-[16px] leading-[150%] font-light tracking-[-0.01em] text-[#133241]/60">
                        {product.description}
                      </p>
                    </div>
                    <a
                      href={wa("Hola! Quisiera más información sobre sus productos")}
                      target="_blank"
                      className="inline-flex w-fit items-center gap-2 rounded-full bg-[#184054] px-6 py-3 text-[14px] font-normal tracking-[-0.01em] text-white hover:opacity-90 transition-opacity"
                    >
                      Solicitar este producto
                      <span aria-hidden className="text-lg">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="w-full bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-6">
          <div className="rounded-[24px] bg-[#133241] px-6 py-6 md:px-[58px] md:py-[60px] flex flex-col gap-8 md:gap-14 overflow-hidden">
            {/* Top: logo + legal text */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
              <div className="flex flex-col gap-[30px] md:flex-[2]">
                <Image
                  src="/images/logo.svg"
                  alt="NutraCore"
                  width={120}
                  height={65}
                  className="object-contain"
                />
                <div className="space-y-4 text-[11px] leading-[150%] font-normal text-white">
                  <p>
                    © {new Date().getFullYear()} NutraCore. Todos los derechos
                    reservados.
                  </p>
                  <p>
                    Los productos comercializados en este sitio web no están
                    destinados a diagnosticar, tratar, curar ni prevenir ninguna
                    enfermedad. La información aquí proporcionada tiene fines
                    informativos y no sustituye la opinión de un profesional de la
                    salud. Consulte a su médico antes de consumir cualquier
                    suplemento, especialmente si está embarazada, en periodo de
                    lactancia o bajo tratamiento médico. Los productos son elaborados
                    bajo estándares internacionales de calidad y Buenas Prácticas de
                    Manufactura (GMP), en instalaciones registradas ante la FDA de
                    los Estados Unidos, y cumplen con la normativa sanitaria Peruanas
                    vigentes. El uso de este sitio web implica la aceptación de
                    nuestros Términos y Condiciones y Política de Privacidad.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom: social icons */}
            <div className="flex flex-wrap items-center justify-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/share/1Hrkqc7e2w/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 hover:border-white/30 transition-colors"
                >
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/nutracore.labs?igsh=MXNhZm42MjN2ZzVo&utm_source=qr"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 hover:border-white/30 transition-colors"
                >
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="5"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <circle cx="17.5" cy="6.5" r="1" fill="white" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/ncl-nutracore-labs/?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3BoSl0%2F04KQTqb1oXsUGsTCw%3D%3D"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 hover:border-white/30 transition-colors"
                >
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2ZM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
