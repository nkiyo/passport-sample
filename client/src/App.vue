<template>
  <div id="app">
    <label for="uname">Username</label>
    <input v-model="username" type="text" placeholder="Enter Username" name="uname" required>
    <br>

    <label for="psw">Password</label>
    <input v-model="password" type="password" placeholder="Enter Password" name="psw" required>
    <br>

    <button type="submit" @click="login">Login</button>
    <br>

    <button @click="callApi">Call API</button>
    <br>

    <!-- <p>hello {{ who }}</p> -->
    <!-- <p>hello {{ reversedWho }}</p> -->
    <!-- <button @click="onclick">hoge</button> -->
  </div>
</template>

<script>
import {MyClass} from './myclass'
import difference from 'lodash-es/difference'
import axios from 'axios'
import get from 'lodash-es/get'
import set from 'lodash-es/set'
export default {
  name: "app",
  data: function() {
    return {
      who: "monk studio",
      username: "",
      password: "",
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
      const mc = new MyClass(1, 2, 'hige')

      // lodash-es sample
      console.log(`lodash-es difference ${difference([3, 2, 1], [1, 2])}`)
      let object = { 'a': [{ 'b': { 'c': 3 } }] };
      console.log(`lodash-es get ${get(object, 'a[0].b.c')}`) // => 3
      console.log(`lodash-es get ${get(object, 'a[1].b.c')}`) // => undefined
      console.log(`lodash-es get ${get(object, 'a[0].b.d')}`) // => undefined
      set(object, 'a[0].b.c', 4)
      console.log(`lodash-es set result ${get(object, 'a[0].b.c')}`) // => 4
    },
    login: function() {
      console.log(`login clicked. username=${this.username} password=${this.password}`)
      axios.post('http://localhost:8080/api/login', {
        //auth: {
        username: 'hoge',
        password: 'hogepass',
        //}
      }).then(res => {
        console.log(`post done`)
      }).catch(err => {
        console.log(`post failed`)
      })
    },
    callApi: function() {
      console.log(`call api`)
      axios.get('http://localhost:8080/api')
        .then(res => {
          console.log(`get ok`)
        })
        .catch(e => {
          console.log(`get failed`)
        })
    },
  }
};
</script>
