<template>
  <div style="padding-bottom: 20px;">
    <el-card>
      <el-row>
        <el-row>
          <el-divider content-position="left"><h3 class="el-icon-setting">找配件</h3></el-divider>
        </el-row>
        <el-col>
          <span>你的选择：</span>
          <ul class="choice">
            <li v-for="(item,index) in $store.state.pChoice" @click="deleteitem(item)" :key="index" class="el-icon-close">{{item.val.subTitle}}
            </li>
          </ul>
        </el-col>
        <el-col>
          <el-row>
            <el-col>
              <span>类别：</span>
              <ul ref="ul-type">
                <li v-for="(item,index) in tabData.type.list" @click="addtolist('type',item,$event)"
                    :key="index">{{item.subTitle}}
                </li>
              </ul>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <span>产地：</span>
              <ul ref="ul-region">
                <li v-for="(item,index) in tabData.region.list" @click="addtolist('region',item,$event)"
                    :key="index">{{item.subTitle}}
                </li>
              </ul>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ProductFilter',
  data () {
    return {
      tabData: {
        type: {
          list: []
        },
        region: {
          list: []
        }
      }
    }
  },
  methods: {
    deleteitem: function (item) {
      var index
      let choice = this.$store.state.pChoice
      index = choice.indexOf(item)
      var ulindex = choice[index].index
      this.$store.commit('removeP', index)
      // console.log(this.$refs['ul-'+ ulindex])
      this.$refs['ul-' + ulindex].childNodes.forEach(function (item) {
        item.classList.remove('active')
      })
    },
    addtolist (index, val, event) {
      let choice = this.$store.state.pChoice
      let tmp = choice.find(function (item) {
        return item.index === index
      })
      if (!tmp) {
        this.$store.commit('addP', {index, val})
        event.target.classList.add('active')
      } else {
        choice.find(function (item) {
          if (item.index === index) {
            item.val = val
            let t = event.target.parentNode.childNodes
            t.forEach(function (item) {
              item.classList.remove('active')
            })
            event.target.classList.add('active')
          }
        })
      }
    },
    getRegions () {
      var url = '/api/api/product/getRegions'
      this.$axios.post(url, {}).then(
        response => {
          var result = response.data.result
          result.forEach(item => {
            this.tabData.region.list.push({
              subTitle: item
            })
          })
        }
      )
    },
    getTypes () {
      var url = 'api/api/product-type/list'
      this.$axios.get(url).then(
        response => {
          var result = response.data.result
          result.forEach(item => {
            this.tabData.type.list.push({
              subTitle: item.type,
              id: item.id
            })
          })
        }
      )
    }
  },
  mounted () {
    this.getRegions()
    this.getTypes()
  }
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    text-align: left;
  }

  li {
    display: inline-block;
    margin: 0 10px;
    line-height: 35px;
    cursor: pointer;
  }

  span {
    display: inline-block;
    float: left;
    margin-left: 30px;
    line-height: 35px;
  }

  .choice li {
    line-height: 1;
    border: 1px solid #28a5c4;
    padding: 2px 5px 2px 5px;
    margin-top: 5px;
    color: #28a5c4;
    text-align: center;
  }

  .active {
    color: #28a5c4;
  }
</style>
