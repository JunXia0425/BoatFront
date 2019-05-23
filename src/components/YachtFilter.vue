<template>
  <div style="padding-bottom: 20px;">
    <el-card>
      <el-row>
        <el-col>
          <el-divider content-position="left"><h3 class="el-icon-ship">找游艇</h3></el-divider>
        </el-col>
        <el-col>
          <span>你的选择：</span>
          <ul class="choice">
            <li v-for="(item,index) in $store.state.choice" @click="deleteitem(item)" :key="index" class="el-icon-close">{{item.val.subTitle}}
            </li>
          </ul>
        </el-col>
        <el-col>
          <el-row>
            <el-col>
              <span>游艇售价：</span>
              <ul ref="ul-price">
                <li v-for="(item,index) in tabData.price.list" @click="addtolist('price',item,$event)"
                    :key="index">{{item.subTitle}}
                </li>
              </ul>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <span>游艇长度：</span>
              <ul ref="ul-length">
                <li v-for="(item,index) in tabData.length.list" @click="addtolist('length',item,$event)"
                    :key="index">{{item.subTitle}}
                </li>
              </ul>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <span>游艇类别：</span>
              <ul ref="ul-classification">
                <li v-for="(item,index) in tabData.classification.list" @click="addtolist('classification',item,$event)"
                    :key="index">{{item.subTitle}}
                </li>
              </ul>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <span>游艇产地：</span>
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
  name: 'YachtFilter',
  data () {
    return {
      tabData: {
        price: {
          list: [
            {
              subTitle: '50万以内',
              val: {
                max: 50,
                min: 0
              }
            },
            {
              subTitle: '50-100万',
              val: {
                max: 100,
                min: 50
              }
            },
            {
              subTitle: '100-200万',
              val: {
                max: 200,
                min: 100
              }
            },
            {
              subTitle: '200-300万',
              val: {
                max: 300,
                min: 200
              }
            },
            {
              subTitle: '300-400万',
              val: {
                max: 400,
                min: 300
              }
            },
            {
              subTitle: '400-500万',
              val: {
                max: 500,
                min: 400
              }
            },
            {
              subTitle: '500-700万',
              val: {
                max: 700,
                min: 500
              }
            },
            {
              subTitle: '700-1000万',
              val: {
                max: 1000,
                min: 700
              }
            },
            {
              subTitle: '1000-2000万',
              val: {
                max: 2000,
                min: 1000
              }
            },
            {
              subTitle: '2000万以上',
              val: {
                min: 2000
              }
            }
          ]
        },
        length: {
          list: [
            {
              subTitle: '8米以下',
              val: {
                max: 8
              }
            },
            {
              subTitle: '8-12米',
              val: {
                max: 12,
                min: 8
              }
            },
            {
              subTitle: '12-17米',
              val: {
                max: 17,
                min: 12
              }
            },
            {
              subTitle: '17-22米',
              val: {
                max: 22,
                min: 17
              }
            },
            {
              subTitle: '22-30米',
              val: {
                max: 30,
                min: 22
              }
            },
            {
              subTitle: '30米以上',
              val: {
                min: 30
              }
            }
          ]
        },
        classification: {
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
      let choice = this.$store.state.choice
      index = choice.indexOf(item)
      var ulindex = choice[index].index
      this.$store.commit('remove', index)
      // console.log(this.$refs['ul-'+ ulindex])
      this.$refs['ul-' + ulindex].childNodes.forEach(function (item) {
        item.classList.remove('active')
      })
    },
    addtolist (index, val, event) {
      let choice = this.$store.state.choice
      let tmp = choice.find(function (item) {
        return item.index === index
      })
      if (!tmp) {
        // this.$store.state.choice.push({index, val})
        this.$store.commit('add', {index, val})
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
    getClassifications () {
      var url = '/api/api/getClassifications'
      this.$axios.post(url, {}).then(
        response => {
          var result = response.data.result
          result.forEach(item => {
            this.tabData.classification.list.push({
              subTitle: item.classification,
              id: item.id
            })
          })
        }
      )
    },
    getRegions () {
      var url = '/api/api/getRegions'
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
    }
  },
  mounted () {
    this.getClassifications()
    this.getRegions()
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
