import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-transparent text-center py-10 px-6">
      <div className="flex justify-center space-x-4 mb-4">
        <a 
          aria-label="instagram" 
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://www.instagram.com/un.mar.de.colores/"
        >
          <Image
            src="/ee6911e7c7c0f5262ace53d55cd1538355f10b34-38x38.svg"
            alt="instagram"
            width={30}
            height={30}
          />
        </a>
        <a 
          aria-label="facebook" 
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://www.facebook.com/Un.Mar.De.Colores/"
        >
          <Image
            src="/21753e2403ac897b0497746b1bbd79c57ccbf7d5-40x40.svg"
            alt="facebook"
            width={30}
            height={30}
          />
        </a>
        <a 
          aria-label="email" 
          target="_blank" 
          rel="noopener noreferrer" 
          href="mailto:hola@mar-de-colores.org"
        >
          <Image
            src="/6da47420c699894dd07abbae8c2327f1a072534c-40x40.svg"
            alt="email"
            width={30}
            height={30}
          />
        </a>
        <a 
          aria-label="linkedin" 
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://www.linkedin.com/company/un-mar-de-colores/"
        >
          <Image
            src="/c45aebf98dafab357b073f0d7b258bc5c50b9feb-780x779.png"
            alt="linkedin"
            width={30}
            height={30}
          />
        </a>
        <a 
          aria-label="youtube" 
          target="_blank" 
          rel="noopener noreferrer" 
          href="http://www.youtube.com/@unmardecolores3396"
        >
          <Image
            src="/a48e3beff5485b658599df812f39060b40546624-126x126.png"
            alt="youtube"
            width={30}
            height={30}
          />
        </a>
      </div>
      <p className="text-[#214D9B] leading-relaxed uppercase mb-4">
        HOLA@MAR-DE-COLORES.ORG
      </p>
      <div className="text-xs px-6 md:px-0 md:text-sm leading-relaxed text-[#20254C] font-medium">
        <div className="prose">
          <p>Un Mar De Colores is 501(c)(3) organization.</p>
          <p>All donations are tax deductible. Federal EIN 85-2947340</p>
          <p>Un Mar operarates on the ancestral and unceded lands of the Kumeyaay Nation.</p>
          <p>Mailing Address: PO BOX 232461 ENCINITAS, CA 92024</p>
        </div>
      </div>
      <a className="block text-[#20254C] text-sm font-semibold underline mt-4" href="/privacy-policy">
        Privacy Policy
      </a>
    </footer>
  )
}
