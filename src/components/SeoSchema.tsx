import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE = "https://axima-solution-hub.lovable.app";

const PRODUCTS: Record<string, string> = {
  "/google-cloud": "Google Cloud",
  "/microsoft-365": "Microsoft 365",
  "/microsoft-azure": "Microsoft Azure",
  "/microsoft-jioazure": "Microsoft Azure with Jio",
  "/check-point": "Check Point",
  "/jumpcloud": "JumpCloud",
  "/miniorange": "miniOrange",
  "/onepassword": "1Password",
  "/scalefusion": "Scalefusion",
  "/flexisign": "FlexiSign",
  "/superworks": "Superworks",
  "/atera": "Atera",
  "/superops": "SuperOps",
  "/viami": "Viami",
  "/chrome-os": "Chrome OS",
  "/recurpost": "RecurPost",
  "/copilot": "Microsoft Copilot",
};

const toTitle = (seg: string) =>
  seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

/** Sitewide canonical + Organization/WebSite/Breadcrumb/Service schema per route. */
export const SeoSchema = () => {
  const { pathname } = useLocation();
  const path = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";
  const url = `${SITE}${path === "/" ? "/" : path}`;

  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Axima",
    url: SITE,
    logo: `${SITE}/favicon.ico`,
    email: "support@axima.in",
    telephone: "+91 77578 41333",
    address: { "@type": "PostalAddress", addressCountry: "IN" },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Axima",
    url: SITE,
  };

  const segs = path.split("/").filter(Boolean);
  const breadcrumb = segs.length
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          ...segs.map((s, i) => ({
            "@type": "ListItem",
            position: i + 2,
            name: PRODUCTS[`/${s}`] || toTitle(s),
            item: `${SITE}/${segs.slice(0, i + 1).join("/")}`,
          })),
        ],
      }
    : null;

  const product = PRODUCTS[path];
  const service = product
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `${product} Solutions`,
        serviceType: product,
        url,
        provider: { "@type": "Organization", name: "Axima", url: SITE },
        areaServed: { "@type": "Country", name: "India" },
      }
    : null;

  return (
    <Helmet>
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
      <script type="application/ld+json">{JSON.stringify(org)}</script>
      {path === "/" && <script type="application/ld+json">{JSON.stringify(website)}</script>}
      {breadcrumb && <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>}
      {service && <script type="application/ld+json">{JSON.stringify(service)}</script>}
    </Helmet>
  );
};
