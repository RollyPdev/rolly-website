export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rolly Ortiz Paredes",
    "jobTitle": "Full-Stack Developer & Designer",
    "description": "Professional full-stack developer, graphic designer, and virtual assistant",
    "url": "https://rollyparedes.net",
    "image": "https://rollyparedes.net/rollyparedes.jpg",
    "sameAs": [
      "https://linkedin.com/in/rollyparedes",
      "https://github.com/rollyparedes"
    ],
    "knowsAbout": [
      "JavaScript", "React", "Next.js", "Node.js", "Python", "Web Development", 
      "Graphic Design", "Virtual Assistant", "UI/UX Design"
    ],
    "offers": {
      "@type": "Service",
      "serviceType": ["Web Development", "Graphic Design", "Virtual Assistant Services"]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}