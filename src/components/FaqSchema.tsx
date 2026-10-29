import { Helmet } from "react-helmet-async";

type Faq = { question: string; answer: string };

export const FaqSchema = ({ faqs }: { faqs: Faq[] }) => {
  if (!faqs?.length) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
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
