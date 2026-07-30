import { useEffect, useRef, useState } from "react";
// Remove galleryItems import, we'll generate images from folders
import { X } from "lucide-react";
import { PageMeta } from "@/components/PageMeta";
import { Link } from "react-router-dom";

export default function PhotoGallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [selectedCamp, setSelectedCamp] = useState<string>("AI-ML-Python-25");
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!lightboxImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxImage(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [lightboxImage]);

  // Camp folders and their images
  const camps = [
    {
      name: "AI-ML-Python-25",
      folder: "AI-ML-Python-25",
      images: [
        "0D5A7402.png","0D5A7405.png","0D5A7406.png","0D5A7408.png","0D5A7409.png","0D5A7454.png","0D5A7457.png","0D5A7459.png","0D5A7460.png","0D5A7465.png","0D5A7468.png","0D5A7469.png","0D5A7470.png","0D5A7473.png","0D5A7474.png","0D5A7475.png","0D5A7476.png","0D5A7477.png","IMG_7652.png","IMG_7653.png","IMG_7654.png","IMG_7655.png","IMG_7736.png","IMG_7737.png","IMG_7740.png","IMG_7743.png","IMG_7747.png","IMG_7749.png","IMG_7750.png","IMG_7774.png","IMG_7775.png","IMG_7777.png","IMG_7779.png","IMG_7781.png","IMG_7791.png","IMG_8293.png"
      ]
    },
    {
      name: "Python Summer 25",
      folder: "Python Summer 25",
      images: ["0D5A8856.png","0D5A8857.png","0D5A8858.png","0D5A8860.png","0D5A8861.png","0D5A8863.png","0D5A8865.png","0D5A8866.png","0D5A8873.png","0D5A8880.png","IMG_7757.png","IMG_7760.png","IMG_7769.png","IMG_7770.png","IMG_7905.png","IMG_7906.png"]
    },
    {
      name: "Python Summer 24",
      folder: "Python Summer 24",
      images: ["IMG_2272.png","IMG_2273.png","IMG_2274.png","IMG_2407.png","IMG_2411.png","IMG_3859.png","IMG_7119.png","IMG_7188.png","IMG_7276.png","IMG_7280.png","IMG_7282.png","IMG_7285.png","IMG_7287.png","IMG_7291.png","IMG_7303.png"]
    },
    {
      name: "Python Middle 24",
      folder: "Python Middle 24",
      images: ["IMG_6092.png","IMG_6095.png","IMG_6099.png","IMG_6104.png","IMG_6105.png","IMG_6108.png"]
    },
    {
      name: "Scratch Camp 2023",
      folder: "Scratch Camp 2023",
      images: ["IMG_4492.png","IMG_4493.png","IMG_4507.png"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Photo Gallery | For Kids, By Kids"
        description="See moments from For Kids, By Kids coding camps, project sessions, and peer-led learning programs."
      />
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
            Photo Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Moments from our coding camps, project demos, and community events. See the joy of peer-led learning in action!
          </p>
        </div>
      </section>

      {/* Camp Filter Buttons */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {camps.map((camp) => (
              <button
                key={camp.name}
                onClick={() => setSelectedCamp(camp.folder)}
                aria-pressed={selectedCamp === camp.folder}
                className={`px-6 py-3 rounded-full font-medium transition-smooth ${
                  selectedCamp === camp.folder
                    ? 'bg-primary text-primary-foreground shadow-soft'
                    : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {camp.name}
              </button>
            ))}
          </div>
          {/* Gallery Grid for selected camp */}
          {camps.filter(camp => camp.folder === selectedCamp).map(camp => (
            <div key={camp.name}>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6 text-center">{camp.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {camp.images.map((img, idx) => (
                  <button
                    type="button"
                    key={img}
                    className="group relative overflow-hidden rounded-2xl bg-card text-left shadow-soft transition-smooth hover:shadow-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    aria-label={`View ${camp.name} photo ${idx + 1} full size`}
                    onFocus={() => {
                      previousFocusRef.current = document.activeElement as HTMLElement;
                    }}
                    onClick={() => setLightboxImage(`/Website-Photos/${camp.folder}/${img.replace(/\.png$/i, ".jpg")}`)}
                  >
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                      <img
                        src={`/Website-Photos/${camp.folder}/${img.replace(/\.png$/i, ".jpg")}`}
                        alt={camp.name + ' photo ' + (idx+1)}
                        className="object-cover w-full h-full absolute inset-0"
                        style={{ zIndex: 1 }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-smooth" style={{ zIndex: 2 }}></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth" style={{ zIndex: 3 }}>
                        <span className="bg-white/90 text-black px-4 py-2 rounded-full font-medium">
                          View Full Size
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Full-size camp photograph"
        >
          <div className="relative max-w-4xl max-h-full" onClick={(event) => event.stopPropagation()}>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-white/80 transition-smooth"
              aria-label="Close full-size photograph"
            >
              <X className="w-8 h-8" />
            </button>
              <div className="bg-white rounded-2xl p-2 max-h-[80vh] overflow-hidden flex items-center justify-center">
                <img
                  src={lightboxImage}
                  alt="Full size gallery item"
                  className="max-w-full max-h-[75vh] rounded-xl object-contain"
                />
              </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            Want to be in our next photo gallery?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our coding community and create amazing projects worth celebrating. Every session is full of learning, laughter, and achievement moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="inline-flex items-center justify-center h-12 px-6 py-3 text-base rounded-full font-medium gradient-hero text-white hover:shadow-medium transition-bounce"
            >
              Join Our Next Camp
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-12 px-6 py-3 text-base rounded-full font-medium border-2 border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              Ask Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
