<template>
  <div class="container">
    <section class="left">
      <p>Paste some content in below</p>
      <textarea v-model="input" @keyup="updateContent()"></textarea>
    </section>
    <section class="right">
      <input type="text" v-model="search" @keyup="highlight()" />
      <div v-html="content" class="content"></div>
      <div class="results">There are 0 results</div>
    </section>
  </div>
</template>

<script>
export default {
  name: "text-highlighter",
  data() {
    return {
      input: "",
      search: "",
      content: ""
    };
  },
  methods: {
    highlight() {
      this.content = this.clear(this.content);
      if (this.search) {
        const re = new RegExp(this.search, "g");
        this.content = this.content.replace(
          re,
          `<span class="highlight">${this.search}</span>`
        );
      }
    },
    clear(str) {
      const openTag = /<span[^>]*>/g;
      const closeTag = /<\/span[^>]*>/g;
      return str.replace(openTag, "").replace(closeTag, "");
    },
    updateContent() {
      this.content = this.input;
    }
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  width: 100%;
}
section {
  flex: 1;
}
textarea {
  width: 80%;
  height: 100%;
  font-size: 20px;
  line-height: 1.5;
}
.content {
  margin-top: 20px;
  font-size: 24px;
  line-height: 1.5;
}
input {
  font-size: 28px;
  padding: 5px;
  width: 90%;
}
.highlight {
  background-color: yellow;
}
.yummy {
  color: red;
}
</style>
