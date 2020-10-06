<template>
  <div id="app">
    <p>hello {{ who }}</p>
    <p>hello {{ reversedWho }}</p>
    <!--  <p>vuex counter is {{ vuexCounter }}</p> -->
    <button @click="onclick">hoge</button>
  </div>
</template>

<script>
import {MyClass} from './myclass'
import difference from 'lodash-es/difference'
import get from 'lodash-es/get'
import set from 'lodash-es/set'
export default {
  name: "app",
  data: function() {
    return {
      who: "monk studio",
      /** @type {{id: number, text: string}[]} */
      items: []
    };
  },
  computed: {
    reversedWho: function() {
      return this.who
        .split("")
        .reverse()
        .join("");
    },
  },
  methods: {
    onclick: function() {
      this.$store.commit('increment')
      //console.log(`vuex ${this.$store.state.count}`)
      
      const mc = new MyClass(1, 2, 'hige')
      this.items.push(123) // なんの警告もなし
      //console.log(`${this.items.length}`)
      //console.log(`${mc.getS()}`)

      // lodash-es sample
      console.log(`lodash-es difference ${difference([3, 2, 1], [1, 2])}`)
      let object = { 'a': [{ 'b': { 'c': 3 } }] };
      console.log(`lodash-es get ${get(object, 'a[0].b.c')}`) // => 3
      console.log(`lodash-es get ${get(object, 'a[1].b.c')}`) // => undefined
      console.log(`lodash-es get ${get(object, 'a[0].b.d')}`) // => undefined
      set(object, 'a[0].b.c', 4)
      console.log(`lodash-es set result ${get(object, 'a[0].b.c')}`) // => 4
    }
  }
};
</script>
