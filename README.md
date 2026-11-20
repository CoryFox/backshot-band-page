# BACKSHOT

A site for the Sheffield punk band. The static pages live in `docs/` and are hosted on GitHub Pages.

## Run locally

With Node.js 22 or later, run `node server.mjs` from the repository root and open [the local preview](http://127.0.0.1:3000/). `npm run dev` is shorthand if npm is installed. There are no dependencies to install. The server listens on loopback and sends a noindex header so preview responses stay out of search.

The booking form posts to Formspree and can send real enquiries from the local preview and GitHub Pages. The notification recipient and domain restriction are managed in the Formspree dashboard. The form displays an inline response and includes Formspree's `_gotcha` spam trap.

## Search after publication

1. Verify the domain in Google Search Console, submit `https://backshotband.co.uk/sitemap.xml`, and inspect the homepage and video page. Check the video indexing report and monitor impressions for BACKSHOT, Sheffield punk and relevant gig searches.
2. Add an individual page for each confirmed show with the venue, date, lineup and ticket link. Add event markup when the required details are available and ask the venue or promoter to link to the show page.
3. Link the same canonical domain from the band's profiles and add official release links and original photos when available.
