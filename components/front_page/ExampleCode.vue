<template>
    <div class="example_code">
        <prism-editor v-model="example_code" class="my-editor" :highlight="highlighter" line-numbers readonly></prism-editor>
    </div>
</template>

<script>

import Prism from '~/plugins/prism'
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere



export default {
    components: {  PrismEditor },
    data() {
      return {
        example_code: `const express = require('express') 
const app = express()

app.get('/', (req, res) => {
    return res.send('Yo!')
})

app.listen(3000)

`,
      }
    },
    mounted() {
      console.log(Prism)
        // Prism.highlightAll()
    },
    methods: {
      highlighter(code) {
         let colored = Prism.highlight(code, Prism.languages.js)
        return colored; // languages.<insert language> to return html with markup
      },
    }

}
</script>


<style >
.my-editor {
    border-radius:8px;
    /* background: #292929; */
    background: black;
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
    .prism-editor__line-width-calc{
        display: none;
    }


</style>
