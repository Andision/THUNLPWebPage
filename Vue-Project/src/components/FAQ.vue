<template>
  <div class="all">
    <el-table
      :data="tableData"
      :show-header="false"
      cell-style="font-weight: bolder;"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <div v-html="props.row.detail">
            </div>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="" prop="title" class="title"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import en from '@/components/en.json'
export default {
  data () {
    return {
      language: en,
      tableData: [{
        title: 'How do I use XXX?',
        detail: 'To evaluate on GLUE, collect your system"s predictions on the nine primary tasks and the one auxiliary task.<br>• Get data for all tasks (with the exception of MRPC, see below) from the "Tasks" section. For the auxiliary task, you only need the TSV from "Diagnostic Main". Each primary<br>task comes as a zip folder containin a standardized train, dev, and (unlabeled) test split.<br>• Use the IDs and labels present in the unlabeled test TSVS to generate one TSV of predictions for each of the eleven TSVS (separate test split for MNLI matched and<br>mismatched), where each TSV has a header and each line follows the format "id [TAB] label".<br>• Make sure that each prediction TSV is named according to the following:<br>• Corpus of Linguistic Acceptability: COLA.tsv<br>• Stanford Sentiment Treebank: SST-2.tsv<br>• Microsoft Research Paraphrase Corpus: MRPC.tsv<br>• Semantic Textual Similarity Benchmark: STS-B.tsv<br>• Quora Question Pairs: QQP.tsv<br>• MultiNLI Matched: MNLI-m.tsv<br>• MultiNLI Mismatched: MNLI-mm.tsv<br>• Question NLI: QNLI.tsv<br>• Recognizing Textual Entailment: RTE.tsv<br>• Winograd NLI: WNLI.tsv<br>• Diagnostic: AX.tsv<br>• Create a zip of the prediction TSVS, e.g. using "zip -r submission.zip *.tsv".<br>The zip can contain subfolders but should not contain nested zips.<br>• Upload this zip using the "Submit" section, filling in details of the method used to generate the predictions.<br>You may upload at most two submissions a day. A sample submission with the necessary formatting is available here. You can use the code for the baselines as a starting point.<br>See below if you are running into issues submitting.'
      },
      {
        title: '123',
        detail: '123'
      },
      {
        title: '123',
        detail: '123'
      },
      {
        title: '123',
        detail: '123'
      },
      {
        title: '123',
        detail: '123'
      }]
    }
  }
}
</script>

<style scoped>
.all {
  margin: 100px;
}
.table {
  background-color: aqua;
  font-weight: bold;
}
.draw {
  text-align: left;
  margin-left: 50px;
  margin-right: 50px;
}
.draw-sub {
  margin-top: 50px;
}

.draw-sub h1 {
  color: #7857a1;
}
.draw-hr {
  margin-top: 50px;
}
</style>
