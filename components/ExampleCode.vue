<template>
    <div class="example_code">
        <prism-editor v-model="example_code" class="my-editor" :highlight="highlighter" line-numbers></prism-editor>
    </div>
</template>

<script>

import { highlight, languages } from 'prismjs/components/prism-core';
import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css'; // import syntax highlighting styles


import { PrismEditor } from 'vue-prism-editor';




export default {
    components: {  PrismEditor },
    data() {
      return {
        example_code: `const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log("Just got a request!")
    return res.send('Yo!')
})

app.listen(3000)
`,
      }
    },

    methods: {
      highlighter(code) {
         let colored = highlight(code, languages.js)
        return colored; // languages.<insert language> to return html with markup
      },
    }

}
</script>


<style >
.my-editor {
    border-radius:5px;
    background: #292929;
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
    caret-color: white;
    height: fit-content;
    max-height: 1000px;
    max-width: 100%;
  }
  pre.prism-editor__editor{
      color: #a79435 !important;
    }
  pre.prism-editor__editor span{
    background: none!important;
    }


</style>
