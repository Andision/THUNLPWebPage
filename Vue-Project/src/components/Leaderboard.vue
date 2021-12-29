<template>
  <div class="all">
    <h1 class="title">{{ language.leaderboard_phb }}</h1>
    <el-card class="main">
      <div slot="header">
        <el-row class="myTreeTable">
          <div :span="abi.span" v-for="(abi, index) in data" :key="index" style="min-width:200px; width: auto; float:left; display:inline-block;">
            <!-- <el-tree id="mytree" ref="tree" :data="[abi]" :props="defaultProps" @check-change="handleNodeClick" show-checkbox node-key="id"></el-tree> -->
            <!-- <a-tree
              id="mytree"
              checkable
              v-model="checkedKeys[index]"
              :tree-data="[abi]"
              :replaceFields="defaultProps"
              :selectable="false"
              :expanded-keys.sync="expandedKeys[index]"
            /> -->
              <!-- :auto-expand-parent="autoExpandParent"
              :selected-keys="selectedKeys" -->
              <!-- v-model="checkedKeys" -->
              <!-- :expanded-keys="expandedKeys" -->
              <!-- @expand="onExpand"
              @select="onSelect" -->
          </div>
          <el-table :data="[{}]" :show-header="false">
              <el-table-column :min-width="abi.span" v-for="(abi, index) in data" :key="index" style="vertical-align: top;">
                <template slot-scope="scope" style="vertical-align: top;">
                  <a-tree
                    id="mytree"
                    checkable
                    v-model="checkedKeys[index]"
                    :tree-data="[abi]"
                    :replaceFields="defaultProps"
                    :selectable="false"
                    :expanded-keys.sync="expandedKeys[index]"
                  />
                </template>
              </el-table-column>
            </el-table>
            <el-row style="margin-top:20px;">
              <el-tooltip effect="dark" :content="language.leaderboard_jjb_hint" placement="top">
                <el-button size="mini" type="primary" style="float:right;" @click="handleDefaultSelect">
                  {{language.leaderboard_jjb}}
                </el-button>
              </el-tooltip>
              <el-button size="mini" type="success" style="float:right; margin-right:30px;" @click="handleTreeSelect">
                {{language.leaderboard_queren}}
              </el-button>
              <div style="float:right; margin-right:20px;">
                <el-tooltip effect="dark" :content="language.leaderboard_select_hint" placement="top">
                  <el-button size="mini" type="primary" icon="el-icon-question" circle></el-button>
                </el-tooltip>
              </div>
            </el-row>
        </el-row>
      </div>
      <div class="main-content">
        <!-- <hr /> -->

        <el-table :data="tableData" style="width: 100%" @expand-change="waitToDraw"
          :header-row-style="{'color': '#ffffff','font-size':'17px','text-align':'center'}"
          :header-cell-style="{'background':'#64438D'}"
          :cell-style="cellStyle"
          @row-click="handleRowClick"
          ref="table"
        >
          <el-table-column type="expand">
            <template slot-scope="scope">
              <el-container>
                <el-aside width="600px" v-show="!isSelecting"
                  ><div><div :id="'main'+scope.row.rank" style="width: 560px; height: 300px;overflow:hidden;"></div
                ></div></el-aside>
                <el-main>
                  <el-row>
                    <el-row>
                      <!-- <el-col
                        v-for="(i, index) in ads"
                        :key="index"
                        :span="Math.floor(24 / taskData.length)"
                        ><div class="">
                          <el-button type="text">{{ i.name }}</el-button>
                        </div></el-col
                      > -->
                      <el-col :span="6" v-if="showLines[0]">
                        <div class="">
                          <el-tooltip class="item" effect="dark" :content="language.leaderboard_yyljcy_hint" placement="top">
                            <el-button type="text" :style="ability_bold[0]?'font-weight: bolder;':'font-weight: normal;'" @click="handleAbilityBoldInit();ability_bold[0]=true;scope.row.show1=scope.row.yyljcy_dataset;scope.row.show2=isSelecting?scope.row.yyljcy_dataset[scope.row.yyljcy_first].dataset_score_list:scope.row.yyljcy_dataset">
                              <span :style="ability_bold[0]?'padding-bottom: 2px; border-bottom: 1px solid #64438d;':''">
                                {{language.leaderboard_yyljcy}}
                              </span>
                            </el-button>
                          </el-tooltip>
                        </div>
                      </el-col>
                      <el-col :span="6" v-if="showLines[1]">
                        <div class="">
                          <el-tooltip class="item" effect="dark" :content="language.leaderboard_yyljpj_hint" placement="top">
                            <el-button type="text" :style="ability_bold[1]?'font-weight: bolder;':'font-weight: normal;'" @click="handleAbilityBoldInit();ability_bold[1]=true;scope.row.show1=scope.row.yyljpj_dataset;scope.row.show2=isSelecting?scope.row.yyljpj_dataset[scope.row.yyljpj_first].dataset_score_list:scope.row.yyljpj_dataset">
                              <span :style="ability_bold[1]?'padding-bottom: 2px; border-bottom: 1px solid #64438d;':''">
                                {{language.leaderboard_yyljpj}}
                              </span>
                            </el-button>
                          </el-tooltip>
                        </div>
                      </el-col>
                      <el-col :span="6" v-if="showLines[2]">
                        <div class="">
                          <el-tooltip class="item" effect="dark" :content="language.leaderboard_xxhq_hint" placement="top">
                            <el-button type="text" :style="ability_bold[2]?'font-weight: bolder;':'font-weight: normal;'" @click="handleAbilityBoldInit();ability_bold[2]=true;scope.row.show1=scope.row.xxhq_dataset;scope.row.show2=isSelecting?scope.row.xxhq_dataset[scope.row.xxhq_first].dataset_score_list:scope.row.xxhq_dataset">
                              <span :style="ability_bold[2]?'padding-bottom: 2px; border-bottom: 1px solid #64438d;':''">
                                {{language.leaderboard_xxhq}}
                              </span>
                            </el-button>
                          </el-tooltip>
                        </div>
                      </el-col>
                      <el-col :span="6" v-if="showLines[3]">
                        <div class="">
                          <el-tooltip class="item" effect="dark" :content="language.leaderboard_yysc_hint" placement="top">
                            <el-button type="text" :style="ability_bold[3]?'font-weight: bolder;':'font-weight: normal;'" @click="handleAbilityBoldInit();ability_bold[3]=true;scope.row.show1=scope.row.yysc_dataset;scope.row.show2=isSelecting?scope.row.yysc_dataset[scope.row.yysc_first].dataset_score_list:scope.row.yysc_dataset">
                              <span :style="ability_bold[3]?'padding-bottom: 2px; border-bottom: 1px solid #64438d;':''">
                                {{language.leaderboard_yysc}}
                              </span>
                            </el-button>
                          </el-tooltip>
                        </div>
                      </el-col>
                      <el-col :span="6" v-if="showLines[4]">
                        <div class="">
                          <el-tooltip class="item" effect="dark" :content="language.leaderboard_dhjh_hint" placement="top">
                            <el-button type="text" :style="ability_bold[4]?'font-weight: bolder;':'font-weight: normal;'" @click="handleAbilityBoldInit();ability_bold[4]=true;scope.row.show1=scope.row.dhjh_dataset;scope.row.show2=isSelecting?scope.row.dhjh_dataset[scope.row.dhjh_first].dataset_score_list:scope.row.dhjh_dataset">
                              <span :style="ability_bold[4]?'padding-bottom: 2px; border-bottom: 1px solid #64438d;':''">
                                {{language.leaderboard_dhjh}}
                              </span>
                            </el-button>
                          </el-tooltip>
                        </div>
                      </el-col>
                      <el-col :span="6" v-if="showLines[5]">
                        <div class="">
                          <el-tooltip class="item" effect="dark" :content="language.leaderboard_dyy_hint" placement="top">
                            <el-button type="text" :style="ability_bold[5]?'font-weight: bolder;':'font-weight: normal;'" @click="handleAbilityBoldInit();ability_bold[5]=true;scope.row.show1=scope.row.dyy_dataset;scope.row.show2=isSelecting?scope.row.dyy_dataset[scope.row.dyy_first].dataset_score_list:scope.row.dyy_dataset">
                              <span :style="ability_bold[5]?'padding-bottom: 2px; border-bottom: 1px solid #64438d;':''">
                                {{language.leaderboard_dyy}}
                              </span>
                            </el-button>
                          </el-tooltip>
                        </div>
                      </el-col>
                      <el-col :span="6" v-if="showLines[6]">
                        <div class="">
                          <el-tooltip class="item" effect="dark" :content="language.leaderboard_sxtl_hint" placement="top">
                            <el-button type="text" :style="ability_bold[6]?'font-weight: bolder;':'font-weight: normal;'" @click="handleAbilityBoldInit();ability_bold[6]=true;scope.row.show1=scope.row.sxtl_dataset;scope.row.show2=isSelecting?scope.row.sxtl_dataset[scope.row.sxtl_first].dataset_score_list:scope.row.sxtl_dataset">
                              <span :style="ability_bold[6]?'padding-bottom: 2px; border-bottom: 1px solid #64438d;':''">
                                {{language.leaderboard_sxtl}}
                              </span>
                            </el-button>
                          </el-tooltip>
                        </div>
                      </el-col>
                    </el-row>
                    <hr class="inner-hr"/>
                    <el-row>
                      <el-col
                        v-for="(i, name, index) in scope.row.show1"
                        :key="index"
                        :span="Math.floor(24 / Object.keys(scope.row.show1).length)"
                      >
                        <div class="">
                          <el-button type="text" @click="isSelecting?scope.row.show2=i.dataset_score_list:isSelecting=isSelecting">
                            {{ isSelecting? name : i.task }}
                          </el-button>
                        </div>
                      </el-col>
                    </el-row>
                    <hr class="inner-hr" v-show="!isSelecting"/>
                    <el-row v-show="!isSelecting">
                      <el-col
                        v-for="(i, index) in scope.row.show1"
                        :key="index"
                        :span="Math.floor(24 / scope.row.show1.length)"
                      >
                        <div class="">
                          <div class="score">
                            {{ isSelecting? i : (i.score[0] === null ? '' : i.score[0]+' ('+i.score[1]+')') }}
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                    <hr class="inner-hr"/>
                    <el-row>
                      <el-col
                        v-for="(i, index) in scope.row.show2"
                        :key="index"
                        :span="Math.floor(24 / scope.row.show2.length)"
                      >
                        <div class="">
                          <el-button type="text">
                            {{ isSelecting? i.name : i.name }}
                          </el-button>
                        </div>
                      </el-col>
                    </el-row>
                    <hr class="inner-hr"/>
                    <el-row>
                      <el-col
                        v-for="(i, index) in scope.row.show2"
                        :key="index"
                        :span="Math.floor(24 / scope.row.show2.length)"
                      >
                        <div class="">
                          <div class="score">
                            {{ isSelecting? i.score === null ? '':i.score : (i.score[0] === null ? '' : i.score[0]+' ('+i.score[1]+')') }}
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                  </el-row>
                </el-main>
              </el-container>
            </template>
          </el-table-column>
          <el-table-column :label="language.leaderboard_rank" prop="rank" align="center" min-width="100"> </el-table-column>
          <el-table-column :label="language.leaderboard_model" prop="name" align="center" min-width="100"> </el-table-column>
          <el-table-column :label="language.leaderboard_org" prop="org" align="center" min-width="120"> </el-table-column>
          <el-table-column :label="language.leaderboard_codepaper" prop="plink" align="center" min-width="130">
            <template slot-scope="scope">
              <el-link :href="scope.row.clink" :disabled="scope.row.clink==''">
                <!-- <i class="el-icon-paperclip"></i> -->
                <img :src="scope.row.clink==''?'https://z3.ax1x.com/2021/08/30/hYfZkV.png':'https://z3.ax1x.com/2021/08/20/fOBmes.png'" style="width:30px;height:30px;">
              </el-link>
              <el-link :href="scope.row.plink" :disabled="scope.row.plink==''">
                <!-- <i class="el-icon-paperclip"></i> -->
                <img :src="scope.row.plink==''?'https://z3.ax1x.com/2021/08/30/hYfZkV.png':'https://z3.ax1x.com/2021/08/20/fOBmes.png'" style="width:30px;height:30px;">
              </el-link>
            </template>
          </el-table-column>
          <!-- <el-table-column label="代码链接" prop="clink">
            <template slot-scope="scope">
              <el-link :href="scope.row.clink">
                <img src="https://z3.ax1x.com/2021/06/24/RQBvFK.png" style="width:30px;height:30px;">
              </el-link>
            </template>
          </el-table-column> -->
          <el-table-column :label="language.leaderboard_submittime" prop="stime" align="center" min-width="110"> </el-table-column>
          <el-table-column :label="language.leaderboard_yyljcy" prop="yyljcy" align="right" width="150" v-if="showLines[0]">
            <template slot="header" slot-scope="scope">
              <el-tooltip class="item" effect="dark" :content="language.leaderboard_yyljcy_hint" placement="top">
                <span>{{language.leaderboard_yyljcy}}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column :label="language.leaderboard_yyljpj" prop="yyljpj" align="right" min-width="150" v-if="showLines[1]">
            <template slot="header" slot-scope="scope">
              <el-tooltip class="item" effect="dark" :content="language.leaderboard_yyljpj_hint" placement="top">
                <span>{{language.leaderboard_yyljpj}}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column :label="language.leaderboard_xxhq" prop="xxhq" min-width="150" align="right" v-if="showLines[2]">
            <template slot="header" slot-scope="scope">
              <el-tooltip class="item" effect="dark" :content="language.leaderboard_xxhq_hint" placement="top">
                <span>{{language.leaderboard_xxhq}}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column :label="language.leaderboard_yysc" prop="yysc" align="right" min-width="120" v-if="showLines[3]">
            <template slot="header" slot-scope="scope">
              <el-tooltip class="item" effect="dark" :content="language.leaderboard_yysc_hint" placement="top">
                <span>{{language.leaderboard_yysc}}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column :label="language.leaderboard_dhjh" prop="dhjh" align="right" min-width="120" v-if="showLines[4]">
            <template slot="header" slot-scope="scope">
              <el-tooltip class="item" effect="dark" :content="language.leaderboard_dhjh_hint" placement="top">
                <span>{{language.leaderboard_dhjh}}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column :label="language.leaderboard_dyy" prop="dyy" align="right" min-width="120" v-if="showLines[5]">
            <template slot="header" slot-scope="scope">
              <el-tooltip class="item" effect="dark" :content="language.leaderboard_dyy_hint" placement="top">
                <span>{{language.leaderboard_dyy}}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column :label="language.leaderboard_sxtl" prop="sxtl" align="right" min-width="120" v-if="showLines[6]">
            <template slot="header" slot-scope="scope">
              <el-tooltip class="item" effect="dark" :content="language.leaderboard_sxtl_hint" placement="top">
                <span>{{language.leaderboard_sxtl}}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column prop="score" align="center" min-width="130">
            <template slot="header" slot-scope="scope">
              <el-tooltip class="item" effect="dark" :content="language.leaderboard_zyzs_hint" placement="top" v-show="!isSelecting">
                <span>{{language.leaderboard_zyzs}}</span>
              </el-tooltip>
              <span v-show="isSelecting">{{language.leaderboard_select_score}}</span>
            </template>
          </el-table-column>
          <el-table-column label=" " prop="" width="40">
            <template slot-scope="scope">
              <i class="el-icon-arrow-right" style="cursor:pointer;overflow: hidden;"/>
            </template>
          </el-table-column>
          <!-- <el-table-column :label="language.leaderboard_zyzs" prop="score" align="center" min-width="120"> </el-table-column> -->
          <!-- <el-table-column label="总分" prop="score"> </el-table-column> -->
        </el-table>
      </div>
    </el-card>
    <div style="margin:50px; text-align:left;font-size: 20px; margin-left:50px; margin-bottom:30px;">
      {{language.hint_leaderboard1}}
    </div>
    <div style="margin:50px; text-align:left;font-size: 20px; margin-left:50px; margin-top:0px;">
      {{language.hint_leaderboard2}}
    </div>
        <el-drawer
      :visible.sync="drawer"
      direction="rtl"
      size="30%"
      :with-header="false"
    >
      <div class="draw">
        <div class="draw-sub">
          <h1>模型名：{{drawerInfo.name}}</h1>
          <div class="draw-text">
            <!-- {{drawerInfo.link}} -->
            提交时间: {{drawerInfo.time}}
            <!-- <br>
            Score: {{drawerInfo.score}} -->
          </div>
          <div class="draw-text">
            参数数量: {{drawerInfo.paras}}
          </div>
        </div>
        <hr class="draw-hr">
        <!-- <div class="draw-sub">
          <h1>{{language.Model}}</h1>
          <div>
            {{drawerInfo.model}}
          </div>
        </div>
        <hr class="draw-hr"> -->
        <div class="draw-sub">
          <h1>提交参数</h1>
          <!-- <div>
            是否公开：{{drawerInfo.public}}
          </div> -->
          <div class="draw-text">
            是否使用预训练模型：{{drawerInfo.pre_train ? language.yes : language.no}}
          </div>
          <div class="draw-text">
            是否使用集成学习提升模型表现：{{drawerInfo.integrate ? language.yes : language.no}}
          </div>
          <div class="draw-text">
            是否使用多任务学习提升模型表现：{{drawerInfo.multiple ? language.yes : language.no}}
          </div>
          <!-- <div>
            {{drawerInfo.public}}
          </div> -->
        </div>
        <hr class="draw-hr">
        <div class="draw-sub">
          <h1>提交描述</h1>
          <!-- <div>
            提交描述
          </div> -->
          <div class="draw-text">
            {{drawerInfo.description}}
          </div>
          <hr class="draw-hr">
          <!-- <div>
            <el-link type="primary" :href="'/#/report?id='+drawerInfo.fileid">评测报告</el-link>
          </div> -->
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import config from '@/components/config.json'
import task from '@/components/select.json'
export default {
  name: 'HelloWorld',
  props: {
    language: Object
  },
  data () {
    return {
      // expand_ability_show: [true, true, true, true, true, true, true],
      col_that: {},
      ability_bold: [false, false, false, false, false, false, false],
      ability_bold_init: [false, false, false, false, false, false, false],
      isSelecting: false,
      drawer: false,
      alltask: task.all,
      expandedKeys: [[], [], [], [], [], [], []],
      showLines: [true, true, true, true, true, true, true],
      drawerInfo: {
      },
      kb: '　',
      checkedKeys: [],
      tl: {},
      checked2: true,
      showAll: true,
      // savedTree: [],
      s: {
        sxtl: true,
        dyy: true,
        dhjh: true,
        yysc: true,
        xxhq: true,
        yyljpj: true,
        yyljcy: true
      },
      dataSelect: {
        信息获取及问答能力: [],
        语言生成能力: [],
        多语言能力: [],
        对话交互能力: [],
        数学推理能力: []
      },
      data: task.all,
      defaultProps: {
        children: 'task',
        title: this.language.language === 'zh' ? 'name_zh' : 'name_en',
        key: 'name_zh'
        // label: language.language==='zh'?'name_zh':
      },
      tableData: [],
      pic_zh: {
        indicator: [
          {
            name: '数学推理',
            max: 500
          },
          {
            name: '对话交互',
            max: 500
          },
          {
            name: '语言生成',
            max: 500
          },
          {
            name: '信息获取及问答',
            max: 500
          },
          {
            name: '语言理解-篇章级',
            max: 500
          },
          {
            name: '语言理解-词句级',
            max: 500
          },
          {
            name: '多语言',
            max: 500
          }
        ],
        data: [
          {
            value: [90.62, 86.36, 23.98, 59.27, 35.37, 34.8]
          }
        ]
      },
      pic_en: {
        indicator: [
          {
            name: 'MR',
            max: 500
          },
          {
            name: 'CI',
            max: 500
          },
          {
            name: 'NLG',
            max: 500
          },
          {
            name: 'IA&QA',
            max: 500
          },
          {
            name: 'NLU-DL',
            max: 500
          },
          {
            name: 'NLU-WSL',
            max: 500
          },
          {
            name: 'ML',
            max: 500
          }
        ],
        data: [
          {
            value: [90.62, 86.36, 23.98, 59.27, 35.37, 34.8]
          }
        ]
      }

    }
  },
  mounted: function () {
    // this.defaultProps = {
    //   children: 'task',
    //   label: this.language.language === 'zh' ? 'name_zh' : 'name_en'
    //   // label: language.language==='zh'?'name_zh':
    // }
    this.col_that = this
    this.handleDefaultSelect()
  },
  methods: {
    handleAbilityBoldInit () {
      for (let i = 0; i < 7; i++) {
        this.ability_bold[i] = false
      }
    },
    handleNodeClick (a, b, c) {
      // console.log(a, b, c)
      // var t = this.$refs.tree[0].getCheckedNodes()
      // console.log('tree', t)
      // // this.$refs.tree.setCheckedKeys([])
    },
    handleDefaultSelect () {
      // this.expand_ability_show = [true, true, true, true, true, true, true]
      this.handleAbilityBoldInit()
      this.ability_bold[0] = true
      this.isSelecting = false
      this.showLines = [true, true, true, true, true, true, true]
      this.checkedKeys = []
      this.expandedKeys = [[], [], [], [], [], [], []]
      this.tableData = []
      let data = {
        'rank_by_ability': ['语言理解能力-词句级', '语言理解能力-篇章级', '信息获取及问答能力', '语言生成能力', '对话交互能力', '多语言能力', '数学推理能力'],
        'start': 1,
        'end': -1
      }
      this.$axios.post(config.API + config.getRanklist, data).then(res => {
        if (config.debug === 'true') {
          console.log(res)
        }
        if (res.status === 200) {
        // console.log(res)
          this.tableData = []
          var t = res.data.rank_list
          for (var i = 0; i < t.length; i++) {
            var r = t[i]
            // console.log(i, r)
            var toAppend = {
              rank: i,
              name: r.modelname,
              org: r.institution,
              plink: r.paper_url,
              clink: r.code_url,
              // sxtl: r.数学推理能力.ability_sum[0],
              // dyy: r.多语言能力.ability_sum[0],
              // dhjh: r.对话交互能力.ability_sum[0],
              // yysc: r.语言生成能力.ability_sum[0],
              // xxhq: r.信息获取及问答能力.ability_sum[0],
              // yyljpj: r['语言理解能力-篇章级'].ability_sum[0],
              // yyljcy: r['语言理解能力-词语级'].ability_sum[0],
              sxtl: r.数学推理能力.ability_sum[0] === null ? '' : r.数学推理能力.ability_sum[0] + ' (' + r.数学推理能力.ability_sum[1] + ')',
              dyy: r.多语言能力.ability_sum[0] === null ? '' : r.多语言能力.ability_sum[0] + ' (' + r.多语言能力.ability_sum[1] + ')',
              dhjh: r.对话交互能力.ability_sum[0] === null ? '' : r.对话交互能力.ability_sum[0] + ' (' + r.对话交互能力.ability_sum[1] + ')',
              yysc: r.语言生成能力.ability_sum[0] === null ? '' : r.语言生成能力.ability_sum[0] + ' (' + r.语言生成能力.ability_sum[1] + ')',
              xxhq: r.信息获取及问答能力.ability_sum[0] === null ? '' : r.信息获取及问答能力.ability_sum[0] + ' (' + r.信息获取及问答能力.ability_sum[1] + ')',
              yyljpj: r['语言理解能力-篇章级'].ability_sum[0] === null ? '' : r['语言理解能力-篇章级'].ability_sum[0] + ' (' + r['语言理解能力-篇章级'].ability_sum[1] + ')',
              yyljcy: r['语言理解能力-词句级'].ability_sum[0] === null ? '' : r['语言理解能力-词句级'].ability_sum[0] + ' (' + r['语言理解能力-词句级'].ability_sum[1] + ')',
              // score: r.总分[0] === null ? '' : r.总分[0] + ' (' + r.总分[1] + ')',
              score: r.总分[0] === null ? '' : r.总分[1],
              // sxtl_sub: r.数学推理能力[1],
              // dyy_sub: r.多语言能力[1],
              // dhjh_sub: r.对话交互能力[1],
              // yysc_sub: r.语言生成能力[1],
              // xxhq_sub: r.信息获取及问答能力[1],
              // yyljpj_sub: r['语言理解能力-篇章级'][1],
              // yyljcy_sub: r['语言理解能力-词语级'][1],
              // score_sub: r.智源指数[1],
              sxtl_dataset: r.数学推理能力.dataset_score_list,
              dyy_dataset: r.多语言能力.dataset_score_list,
              dhjh_dataset: r.对话交互能力.dataset_score_list,
              yysc_dataset: r.语言生成能力.dataset_score_list,
              xxhq_dataset: r.信息获取及问答能力.dataset_score_list,
              yyljpj_dataset: r['语言理解能力-篇章级'].dataset_score_list,
              yyljcy_dataset: r['语言理解能力-词句级'].dataset_score_list,
              sxtl_list: r.数学推理能力.ability_sum,
              dyy_list: r.多语言能力.ability_sum,
              dhjh_list: r.对话交互能力.ability_sum,
              yysc_list: r.语言生成能力.ability_sum,
              xxhq_list: r.信息获取及问答能力.ability_sum,
              yyljpj_list: r['语言理解能力-篇章级'].ability_sum,
              yyljcy_list: r['语言理解能力-词句级'].ability_sum,
              stime: r.simple_commit_time,
              public: r.public,
              multiple: r.multiple,
              integrate: r.integrate,
              pre_train: r.pre_train,
              time: r.simple_commit_time,
              paras: r.paras,
              description: r.description,
              // sj: r.识记能力.ability_sum[0],
              // lj: r.理解能力.ability_sum[0],
              // js: r.检索能力.ability_sum[0],
              // szjs: r.数值计算能力.ability_sum[0],
              // sc: r.生成能力.ability_sum[0],
              // dyy: r.多语言能力.ability_sum[0],
              // sj_list: r.识记能力.ability_sum,
              // lj_list: r.理解能力.ability_sum,
              // js_list: r.检索能力.ability_sum,
              // szjs_list: r.数值计算能力.ability_sum,
              // sc_list: r.生成能力.ability_sum,
              // dyy_list: r.多语言能力.ability_sum,
              // score: r.总分[0],
              // score_list: r.总分,
              // sjd: r.识记能力.dataset_score_list,
              // ljd: r.理解能力.dataset_score_list,
              // jsd: r.检索能力.dataset_score_list,
              // szjsd: r.数值计算能力.dataset_score_list,
              // scd: r.生成能力.dataset_score_list,
              // dyyd: r.多语言能力.dataset_score_list,
              show1: r['语言理解能力-词句级'].dataset_score_list,
              show2: r['语言理解能力-词句级'].dataset_score_list
            }
            if (i === 0) {
              toAppend.rank = 'Baseline'
            }
            this.tableData.push(toAppend)
          // console.log(toAppend)
          }
        }
      })
    },
    handleTreeSelect () {
      this.handleAbilityBoldInit()
      this.isSelecting = true
      this.showLines = [true, true, true, true, true, true, true]
      this.showLines = [false, false, false, false, false, false, false]
      // this.checkedKeys = []
      console.log('In TreeSelect', this.showLines, this.checkedKeys)
      this.dataSelect = {
        '信息获取及问答能力': [],
        '语言生成能力': [],
        '多语言能力': [],
        '对话交互能力': [],
        '数学推理能力': [],
        '语言理解能力-词句级': [],
        '语言理解能力-篇章级': []
      }
      let ha1 = ''
      let ha2 = ''
      this.dataSelect['语言理解能力-词句级'] = []
      this.dataSelect['语言理解能力-篇章级'] = []
      let l = ['语言理解能力-词句级', '语言理解能力-篇章级', '信息获取及问答能力', '语言生成能力', '对话交互能力', '多语言能力', '数学推理能力']
      for (let i in l) {
        var t = this.checkedKeys[i]
        // var t = this.$refs.tree[i].getCheckedNodes()
        // this.savedTree.push(t)
        console.log('hha', t)
        if (t !== undefined && t.length !== 0) {
          this.showLines[i] = true
          console.log('setShow', i)
        }
        var duplicateKeys = [ '语言理解-词句级', '语言理解-篇章级', '信息获取及问答', '对话交互', '语言生成', '多语言', '数学推理' ]
        for (let j in t) {
          ha1 = l[i]
          ha2 = t[j]
          // if (ha1 === ha2) {
          //   continue
          // }
          // console.log('adst', ha2 === duplicateKeys[3])
          if (ha2 === duplicateKeys[0] || ha2 === duplicateKeys[1] || ha2 === duplicateKeys[2] || ha2 === duplicateKeys[3] || ha2 === duplicateKeys[4] || ha2 === duplicateKeys[5] || ha2 === duplicateKeys[6]) {
            if (config.debug === 'true') {
              console.log('duplacate ha', ha1, ha2)
            }
            continue
          } else {
            if (config.debug === 'true') {
              console.log('normal ha', ha1, ha2)
            }
          }

          this.dataSelect[ha1].push(ha2)
        }
      }
      console.log('haa', this.dataSelect)

      this.$axios.post(config.API + config.getSuperRank, {ability_task_dic: this.dataSelect}).then(res => {
        if (config.debug === 'true') {
          console.log(res)
        }
        this.tableData = []
        if (res.status === 200) {
        // console.log(res)
          this.tableData = []
          var t = res.data.super_rank_list
          for (var i = 0; i < t.length; i++) {
            var r = t[i]
            // console.log(i, r)
            var toAppend = {
              rank: i + 1,
              name: r.modelname,
              org: r.institution,
              plink: r.paper_url,
              clink: r.code_url,

              sxtl: r.ability_sum_dic.数学推理能力 === undefined ? '' : r.ability_sum_dic.数学推理能力 + '　',
              dyy: r.ability_sum_dic.多语言能力 === undefined ? '' : r.ability_sum_dic.多语言能力 + '　',
              dhjh: r.ability_sum_dic.对话交互能力 === undefined ? '' : r.ability_sum_dic.对话交互能力 + '　',
              yysc: r.ability_sum_dic.语言生成能力 === undefined ? '' : r.ability_sum_dic.语言生成能力 + '　',
              xxhq: r.ability_sum_dic.信息获取及问答能力 === undefined ? '' : r.ability_sum_dic.信息获取及问答能力 + '　',
              yyljpj: r.ability_sum_dic['语言理解能力-篇章级'] === undefined ? '' : r.ability_sum_dic['语言理解能力-篇章级'] + '　',
              yyljcy: r.ability_sum_dic['语言理解能力-词句级'] === undefined ? '' : r.ability_sum_dic['语言理解能力-词句级'] + '　',
              score: r.sum,

              sxtl_dataset: r.数学推理能力,
              dyy_dataset: r.多语言能力,
              dhjh_dataset: r.对话交互能力,
              yysc_dataset: r.语言生成能力,
              xxhq_dataset: r.信息获取及问答能力,
              yyljpj_dataset: r['语言理解能力-篇章级'],
              yyljcy_dataset: r['语言理解能力-词句级'],

              // sxtl_list: r.数学推理能力.ability_sum,
              // dyy_list: r.多语言能力.ability_sum,
              // dhjh_list: r.对话交互能力.ability_sum,
              // yysc_list: r.语言生成能力.ability_sum,
              // xxhq_list: r.信息获取及问答能力.ability_sum,
              // yyljpj_list: r['语言理解能力-篇章级'].ability_sum,
              // yyljcy_list: r['语言理解能力-词句级'].ability_sum,

              stime: r.simple_commit_time,
              public: r.public,
              multiple: r.multiple,
              integrate: r.integrate,
              pre_train: r.pre_train,
              time: r.simple_commit_time,
              paras: r.paras,
              description: r.description,

              show1: r[ha1],
              show2: r[ha1][ha2].dataset_score_list,

              sxtl_first: r.数学推理能力 === undefined ? '' : Object.keys(r.数学推理能力)[0],
              dyy_first: r.多语言能力 === undefined ? '' : Object.keys(r.多语言能力)[0],
              dhjh_first: r.对话交互能力 === undefined ? '' : Object.keys(r.对话交互能力)[0],
              yysc_first: r.语言生成能力 === undefined ? '' : Object.keys(r.语言生成能力)[0],
              xxhq_first: r.信息获取及问答能力 === undefined ? '' : Object.keys(r.信息获取及问答能力)[0],
              yyljpj_first: r['语言理解能力-篇章级'] === undefined ? '' : Object.keys(r['语言理解能力-篇章级'])[0],
              yyljcy_first: r['语言理解能力-词句级'] === undefined ? '' : Object.keys(r['语言理解能力-词句级'])[0]
            }

            this.tableData.push(toAppend)
            if (config.debug === 'true') {
              console.log(toAppend)
            }
          }
        }
        // for (let i in l) {
        //   let tt = this.savedTree[i]
        //   console.log(i, tt)
        //   this.$refs.tree[i].setCheckedNodes([{id: '9', label: 'Open-domain Question Answering'}])
        // }
      })
      // this.$refs.tree.setCheckedKeys([])
    },
    cellStyle ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background-color:#eceaff; font-weight: 700; color: black;font-family: "Microsoft YaHei";'
      } else {
        return 'font-weight: 700; color: black;font-family: "Microsoft YaHei", "Apple Color Emoji","Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "PingFang SC","Hiragino Sans GB","Helvetica Neue", Helvetica, Arial, sans-serif;'
      }
    },
    onCheck (checkedKeys) {
      console.log('onCheck', checkedKeys)
      this.checkedKeys = checkedKeys
    },
    handleRowClick (row, column, event) {
      console.log(row, column)
      console.log(column.label)
      // this.drawerInfo.rank = row.rank
      // this.drawerInfo.name = row.name
      // this.drawerInfo.link = row.link
      // this.drawerInfo.date = row.date
      // this.drawerInfo.score = row.score
      // this.drawerInfo.model = row.model
      // this.drawerInfo.parameter = row.parameter
      // this.drawerInfo.more = row.more
      if (column.label === ' ') {
        this.drawerInfo = row
        this.drawer = true
        // this.$refs.table.toggleRowExpansion(row)
      } else if (column.label !== this.language.leaderboard_codepaper) {
        // this.drawerInfo = row
        // this.drawer = true
        this.$refs.table.toggleRowExpansion(row)
      }
    },
    waitToDraw (row, rowList) {
      if (this.isSelecting) {
        return
      }
      console.log('row', row)
      if (this.language.language === 'zh') {
        this.pic = this.pic_zh
      } else {
        this.pic = this.pic_en
      }
      this.pic.data = [
        {
          value: [row.sxtl_list[1], row.dhjh_list[1], row.yysc_list[1], row.xxhq_list[1], row.yyljpj_list[1], row.yyljcy_list[1], row.dyy_list[1]]
        }
      ]
      console.log(this.pic.data)
      this.$nextTick(() => {
        this.drawChart(row.rank)
      })
    },
    drawChart (i) {
      // Initialize the echarts instance based on the prepared dom
      let myChart = this.$echarts.init(document.getElementById('main' + i))
      // Specify configuration items and data for the chart
      let option = {
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#062A4E',
              fontWeight: 'bolder',
              fontSize: 16,
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['#593587', '#593587', '#6F4D99', '#8C73AB', '#C09ADE'] // 图表背景网格的颜色
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              width: 0,
              color: '#B0BBCD' // 图表背景网格线的颜色
            }
          },
          indicator: this.pic.indicator
        },
        series: [
          {
            type: 'radar',
            data: this.pic.data,
            itemStyle: {
              normal: {
                color: 'rgba(0,0,0,0)', // 图表中各个图区域的边框线拐点颜色
                lineStyle: {
                  color: '#ECEAFF', // 图表中各个图区域的边框线颜色
                  width: 5
                },
                areaStyle: {
                  type: 'default'
                }
              }
            }
          }
        ]
      }
      // Use the configuration items and data just specified to display the chart.
      myChart.setOption(option)
    }
  },
  watch: {
    showAll (curVal, oldVal) {
      if (curVal) {
        this.s.sj = true
        this.s.lj = true
        this.s.js = true
        this.s.szjs = true
        this.s.sc = true
        this.s.dyy = true
      } else {
        this.s.sj = false
        this.s.lj = false
        this.s.js = false
        this.s.szjs = false
        this.s.sc = false
        this.s.dyy = false
      }
    }
  }
}
</script>

<style>
.el-col-7{
  width:14%;
}
.el-col-77{
  width:14.28%;
}
/* .el-tree-node__label{
  color: #64438d;
  /* font-weight:bold;
  font-size:large;
}
.el-tree-node__label{
  /* background-color: aqua;
  font-weight: bold;
} */
.ant-tree-title{
  color: #7857A1;
  font-size: large;
  /* background-color: white; */
}
 #mytree > li > .ant-tree-node-content-wrapper{
   font-weight: bolder;
 }
/* #mytree li ul span .ant-tree-title{
    background-color: red;
  }
#mytree li .ant-tree-node-content-wrapper .ant-tree-title{
  background-color: aqua;
} */
/* #mytree .el-tree-node .el-tree-node__children .el-tree-node__label{
  font-weight: normal;
} */
/* .ant-tree-checkbox-checked .ant-tree-checkbox-inner{
  background-color: #7857a1;
  border-color: #7857a1;
}
.ant-tree-checkbox-indeterminate .ant-tree-checkbox-inner::after{
  background-color: #7857a1;
}
html{
  --antd-wave-shadow-color: #7857a1;
}

ant-tree-checkbox-inner::selection{
  background: #7857a1;
} */
.myTreeTable .el-table__row td {
vertical-align: top;
max-height: 500px;
overflow: auto;
}
.myTreeTable .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: rgba(0, 0, 0, 0) !important;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all {
  width: 90%;
  margin: auto;
}
.title {
  text-align: left;
  margin: 50px;
  color: #64438d;
  font-size: 40px;
  font-weight: bold;
}
.main {
  margin: 50px;
}
.title-title {
  text-align: left;
  font-size: x-large;
  font-weight: bold;
}
.title-sub-section {
  text-align: left;
}
.title-sub-section-text {
  margin-right: 10px;
  display: inline;
  font-size: large;
  font-weight: bold;
}
.title-select {
  text-align: right;
}
.title-select-text {
  font-size: large;
  font-weight: bold;
}
.title-title,
.title-sub,
.title-select {
  margin-top: 20px;
}
.title-sub-section-btn{
  display: inline;
}
.inner-hr{
  height: 1px;
  background: #9AB1DE;
  border: 0;
}
.score{
  font-weight: bolder;
  color: black;
}

.draw{
  text-align: left;
  margin-left: 50px;
  margin-right: 50px;
}
.draw-sub{
  margin-top: 50px;
}
.draw-sub h1{
  color: #7857A1;
}
.draw-hr{
  margin-top: 50px;
}
.draw-text{
  margin-top: 20px;
}
</style>
