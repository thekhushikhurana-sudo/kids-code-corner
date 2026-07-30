import { PageMeta } from "@/components/PageMeta";
import { CONTACT_EMAIL } from "@/config/contact";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-background">
      <PageMeta
        title="Privacy | For Kids, By Kids"
        description="Learn how For Kids, By Kids handles contact information, student privacy, and photographs."
      />

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-6xl">
            Privacy
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We collect only the information needed to answer inquiries and organize our
            programs. We do not sell personal information.
          </p>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Contact inquiries
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                When someone uses our contact form, we may receive their name, email address,
                student age, program interest, and message. We use that information only to
                respond and coordinate relevant program information.
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Form submissions are processed by FormSubmit and delivered to our contact
                email. FormSubmit may temporarily retain submissions under its{" "}
                <a
                  href="https://formsubmit.co/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  privacy terms
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Students under 13
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                A parent or guardian should submit inquiries for students under 13. Students
                should not send sensitive personal information through the website.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Program photographs
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Photographs from programs should be published only when the organization has
                appropriate permission from a parent or guardian. To ask about a photograph,
                please use our contact page.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Questions or removal requests
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To ask how information is used or request removal of information or a
                photograph,{" "}
                <a
                  className="font-medium text-primary underline-offset-4 hover:underline"
                  href={`mailto:${CONTACT_EMAIL}`}
                >
                  email {CONTACT_EMAIL}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
