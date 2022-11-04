<template>
    <div class="example_code">
        <prism-editor v-model="example_code" class="my-editor" :highlight="highlighter" line-numbers readonly></prism-editor>
    </div>
</template>

<script>

import Prism from '~/plugins/prism'
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere

let codes = [
`const express = require('express') 
const app = express()

app.get('/', (req, res) => {
    return res.send('Yo!')
})

app.listen(3000)

`,
`const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<h1>Hello, world!</h1>);`,
`const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(process.env.DB_URL, function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});
`
]

const sleep = ms =>
  new Promise(resolve => setTimeout(resolve, ms ));

export default {
    components: {  PrismEditor },
    data() {
      return {
        example_code: '',
      }
    },
    mounted() {
      console.log(Prism)
      this.loop_codes()
        // Prism.highlightAll()
    },
    methods: {
      pad_lines(){
          let lines = this.example_code.split('\n').length
            if(lines < 9){
              for(let i=0; i<= 9-lines; i++){
                this.example_code = this.example_code + '\n'
              }
            }
      },
      async loop_codes() {
        let code_index = 0;
        while (true){
          let code = codes[code_index]
          let c = 0 
          while (c < code.length){
            this.example_code = code.slice(0,c)
            c+=28;
            this.pad_lines()
            await sleep(50);
          }
          this.example_code = code
          this.pad_lines()
          await sleep(2500)
          code_index +=1
          if(code_index == codes.length){
            code_index = 0;
          };
        }

      },
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
    min-height: 200px;
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
