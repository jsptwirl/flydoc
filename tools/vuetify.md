---
hello: world
---


## Markdown Content

The count is: {{ count }}



<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>


<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>