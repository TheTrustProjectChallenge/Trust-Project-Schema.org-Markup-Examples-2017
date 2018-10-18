export default function generateTrustProjectData() {
  return `
  {
  "@context": "http://schema.org",
  "@type": "NewsMediaOrganization",
  "name": "The Daily Beast",
  "ethicsPolicy": "https://www.thedailybeast.com/company/code-of-ethics",
  "masthead": "https://www.thedailybeast.com/company/about-us",
  "missionCoveragePrioritiesPolicy": "https://www.thedailybeast.com/company/about-us",
  "foundingDate": "10-06-2008",
  "diversityPolicy": "https://www.thedailybeast.com/company/code-of-ethics",
  "correctionsPolicy": "https://www.thedailybeast.com/company/code-of-ethics",
  "unnamedSourcesPolicy": "https://www.thedailybeast.com/company/code-of-ethics",
  "ownershipFundingInfo": "https://www.thedailybeast.com/company/about-us",
  "contactPoint" : [{
          "@type" : "ContactPoint",
          "contactType" : "Newsroom Contact",
          "email" : "editorial@thedailybeast.com",
          "url" : "https://www.thedailybeast.com/company/contact-us"
    }]
  }`;
}
