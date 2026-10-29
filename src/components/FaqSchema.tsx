import { Helmet } from "react-helmet-async";

type Faq = { question: string; answer: unknown };

export const FaqSchema = ({ faqs }: { faqs: Faq[] }) => {
  const items = (faqs || []).filter((f): f is { question: string; answer: string } => typeof f.answer === "string");
  if (!items.length) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};
