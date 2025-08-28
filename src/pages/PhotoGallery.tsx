import { useState } from "react";
import { galleryItems } from "@/data/mockData";
import { X } from "lucide-react";

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Camps" | "Projects" | "Events">("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = ["All", "Camps", "Projects", "Events"] as const;
  
  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
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

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-smooth ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-soft'
                    : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="group relative bg-card shadow-soft rounded-2xl overflow-hidden hover:shadow-medium transition-smooth cursor-pointer"
                onClick={() => setLightboxImage(item.image)}
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                  <div className="text-4xl opacity-30">📸</div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-smooth"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                    <span className="bg-white/90 text-black px-4 py-2 rounded-full font-medium">
                      View Full Size
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-foreground font-medium mb-2 line-clamp-2">
                    {item.caption}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{item.date}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      item.category === 'Camps' ? 'bg-primary/10 text-primary' :
                      item.category === 'Projects' ? 'bg-secondary/10 text-secondary' :
                      item.category === 'Events' ? 'bg-accent text-accent-foreground' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {item.category}
                    </span>
                  </div>
                  {item.credit && (
                    <p className="text-xs text-muted-foreground mt-2">{item.credit}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-white/80 transition-smooth"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="bg-white rounded-2xl p-2 max-h-[80vh] overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                <div className="text-8xl opacity-30">📸</div>
              </div>
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
            <a 
              href="/courses"
              className="inline-flex items-center justify-center h-12 px-6 py-3 text-base rounded-full font-medium gradient-hero text-white hover:shadow-medium transition-bounce"
            >
              Join Our Next Camp
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-6 py-3 text-base rounded-full font-medium border-2 border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              Ask Questions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}