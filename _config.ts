import lume from "lume/mod.ts";
import wiki from "wiki/mod.ts";
import relativeUrls from "lume/plugins/relative_urls.ts";


const site = lume({
  location: new URL("https://dev.decentralizedscience.org"),
});

site.use(relativeUrls());
site.use(wiki());

export default site;
