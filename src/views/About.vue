<template>
  <div class="about">
    <h1>This is an about page test SEO crawl nnnnnnn</h1>
    <div>label from config store {{ labelAboutPage }}</div>
    <div>
      <ul>
        <li v-for="(article, index) in articles" :key="index">
          {{ article.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { callAPI } from "@/util/helper.js";
import { mapGetters } from "vuex";
export default {
  metaInfo: {
    title: "About page",
    titleTemplate: "%s - Yay!",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
    meta: [
      {
        name: "google-site-verification",
        content: "_D_gPgKHGHlLZOdrCkOb6L6hebqwOJQYq3ZWH2bRMDk",
      },
      { name: "description", content: "This is an about page" },
      { name: "keywords", content: "about, page" },
      {
        property: "og:url",
        content:
          "http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html",
      },
      { property: "og:type", content: "article" },
      { property: "og:title", content: "When Great Minds Don’t Think Alike" },
      {
        property: "og:description",
        content: "How much does culture influence creative thinking?",
      },
      {
        property: "og:image",
        content:
          "http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg",
      },
    ],
  },

  data() {
    return {
      articles: [],
    };
  },

  async created() {
    const [data, err] = await callAPI({
      method: "get",
      url: "https://conduit.productionready.io/api/articles?limit=10&offset=0",
    });

    if (err) {
      console.log(err);
    }

    this.articles = data.articles;

    //trigger render when build
    document.dispatchEvent(new Event("x-app-rendered"));
  },

  computed: {
    ...mapGetters("config", ["labelAboutPage"]),
  },
};
</script>
