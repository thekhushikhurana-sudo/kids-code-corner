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
        "0D5A7402.jpg","0D5A7405.jpg","0D5A7406.jpg","0D5A7408.jpg","0D5A7409.jpg","0D5A7454.jpg","0D5A7457.jpg","0D5A7459.jpg","0D5A7460.jpg","0D5A7465.jpg","0D5A7468.jpg","0D5A7469.jpg","0D5A7470.jpg","0D5A7473.jpg","0D5A7474.jpg","0D5A7475.jpg","0D5A7476.jpg","0D5A7477.jpg","IMG_7652.jpg","IMG_7653.jpg","IMG_7654.jpg","IMG_7655.jpg","IMG_7736.jpg","IMG_7737.jpg","IMG_7740.jpg","IMG_7743.jpg","IMG_7747.jpg","IMG_7749.jpg","IMG_7750.jpg","IMG_7774.jpg","IMG_7775.jpg","IMG_7777.jpg","IMG_7779.jpg","IMG_7781.jpg","IMG_7791.jpg","IMG_8293.jpg"
      ]
    },
    {
      name: "Python Summer 25",
      folder: "Python Summer 25",
      images: ["0D5A8856.jpg","0D5A8857.jpg","0D5A8858.jpg","0D5A8860.jpg","0D5A8861.jpg","0D5A8863.jpg","0D5A8865.jpg","0D5A8866.jpg","0D5A8873.jpg","0D5A8880.jpg","IMG_7757.jpg","IMG_7760.jpg","IMG_7769.jpg","IMG_7770.jpg","IMG_7905.jpg","IMG_7906.jpg"]
    },
    {
      name: "Python Summer 24",
      folder: "Python Summer 24",
      images: ["IMG_2272.jpg","IMG_2273.jpg","IMG_2274.jpg","IMG_2407.jpg","IMG_2411.jpg","IMG_3859.jpg","IMG_7119.jpg","IMG_7188.jpg","IMG_7276.jpg","IMG_7280.jpg","IMG_7282.jpg","IMG_7285.jpg","IMG_7287.jpg","IMG_7291.jpg","IMG_7303.jpg"]
    },
    {
      name: "Python Middle 24",
      folder: "Python Middle 24",
      images: ["IMG_6092.jpg","IMG_6095.jpg","IMG_6099.jpg","IMG_6104.jpg","IMG_6105.jpg","IMG_6108.jpg"]
    },
    {
      name: "Scratch Camp 2023",
      folder: "Scratch Camp 2023",
      images: ["IMG_4492.jpg","IMG_4493.jpg"]
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
                    onClick={() => setLightboxImage(`/Website-Photos/${camp.folder}/${img}`)}
                  >
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                      <img
                        src={`/Website-Photos/${camp.folder}/${img}`}
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
