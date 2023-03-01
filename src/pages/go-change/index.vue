<template>
    <div class="app-page">
        <t-card>
            <!-- <t-row class="row-line" :gutter="16">
                <t-col :span="2">
                    <t-select>
                        <t-option key="json" label="json" value="json" />
                        <t-option key="table" label="table" value="table" />
                    </t-select>
                </t-col>
            </t-row> -->
            <t-row class="row-line" :gutter="16">
                <t-col :span="6">
                    <Textarea v-model="code" />
                </t-col>
                <t-col :span="6">
                    <Textarea v-model="transCode" />
                </t-col>
            </t-row>
            <t-divider></t-divider>
            <t-row class="row-line" :gutter="16">
                <t-col :span="3">
                    <t-button theme="primary" variant="outline" @click="transform">转换</t-button>
                </t-col>
            </t-row>
        </t-card>
    </div>
</template>

<script setup lang="ts">
import { Textarea } from 'tdesign-vue-next';
import { ref } from 'vue';
import { GoChangeData } from './data';

const code = ref('');
const transCode = ref('');

const firstLetterToLowerCase = (str: string) => {
  if (str.length === 0) return str; // 如果字符串为空，则返回原字符串
  return str.charAt(0).toLowerCase() + str.substring(1);
}


const transform = () => {
    const jsonData: GoChangeData = {};
    const codeVars = code.value.split('\n')
    for (let index in codeVars) {
        const paramSet = new Set<string>()
        const str = codeVars[index];
        const codeVar = str.substring(1, str.length - 1).split(' ')
        for (const key in codeVar) {
            if (Object.prototype.hasOwnProperty.call(codeVar, key)) {
                paramSet.add(codeVar[key]);
            }
        }
        let params = Array.of(...paramSet);

        // 过滤空格
        params = params.filter((item) => {
            return item != ''
        })

        const key = firstLetterToLowerCase(params[0])
        if (params[1] === 'string') {
            jsonData[key] = ""
        } else if (params[1] === 'int32' || params[1] === 'int' || params[1] === 'int64') {
            jsonData[key] = 0
        } else if (params[1] === 'float32' || params[1] === 'float64') {
            jsonData[key] = 0.0
        } else if (params[1] === 'bool') {
            jsonData[key] = false
        }  else if (params[1].startsWith('[]')) {
            jsonData[key] = []
        } else {
            jsonData[key] = {}
        }
    }
    transCode.value = JSON.stringify(jsonData, null, 4);
}

</script>

<style scoped>
.row-line {
    margin-top: 20px;
}

/deep/ .t-textarea__inner {
    height: 200px;
}
</style>