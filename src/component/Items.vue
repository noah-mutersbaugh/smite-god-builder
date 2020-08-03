<template>
  <div>
    <select class="form-control" v-model="itemCategory">
        <option v-bind:value="null">Choose Category</option>
        <option v-bind:key="category" v-bind:value="category" v-for="(items, category) in getItems">{{category}}</option>
    </select>
    <select class="form-control" v-if="itemCategory != null" v-model="itemToAdd">
        <option v-bind:key="item.id" v-bind:value="item" v-for="item in categoryItems" >{{item.DeviceName}}</option>
    </select>
    <button class="btn btn-primary" v-if="itemCategory != null" v-on:click="add" :disabled="itemsToApply.length == 6">Add Item</button>
    <div>
        <div id="Build" :key="item.ItemId" v-for="item in itemsToApply">
            <div>{{item.DeviceName}}</div>
            <button class="btn btn-danger" v-on:click="remove(item.ItemId)">Remove</button>
        </div>
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'items',
  data() {
      return {
          itemCategory: null,
          itemToAdd: null,
          itemsToApply: []
      }
  },
  methods: {
      add() {
          if (this.itemsToApply.length < 6){
              this.itemsToApply.push(this.itemToAdd);
          }
      },
      remove(ID) {
            this.itemsToApply = this.itemsToApply.filter(item => item.ItemId != ID);
      },
      setItem(item) {
          this.itemToAdd = item;
      }
  },
  computed: {
      categoryItems() {
          const currentIDs = this.itemsToApply.map(i => i.ItemId);
          return this.getItems[this.itemCategory].filter(item => currentIDs.indexOf(item.ItemId) == -1);
      },
      ...mapGetters(['getItems'])
  }
};
</script>

<style lang="scss">
    #Build {
        display: flex;
        flex-flow: row-nowrap;
        justify-content: space-between;
    }
</style>