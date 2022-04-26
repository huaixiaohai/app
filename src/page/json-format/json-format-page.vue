<template>
  <div id="jsoneditor" style="width: 1000px; height: 1000px;"></div>
  <div id="json" style="width: 1000px; height: 1000px;"></div>
</template>

<script>

import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.min.css'

export default {
  mounted () {
    const container = document.getElementById("jsoneditor")
    const options = {
      mode: 'code'
    }
    const editor = new JSONEditor(container, options)

    // set json
    const initialJson = {
      "Array": [1, 2, 3],
      "Boolean": true,
      "Null": null,
      "Number": 123,
      "Object": { "a": "b", "c": "d" },
      "String": "Hello World"
    }
    editor.set(initialJson)

    const container1 = document.getElementById("jsoneditor")
    const options1 = {
    }
    const editor1 = new JSONEditor(container1, options1)
    editor1.set(initialJson)

    // get json
    // const updatedJson = editor.get()
  }
}
</script>