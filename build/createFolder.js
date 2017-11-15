/*
 * @Author: zhengxu 
 * @Date: 2017-11-15 21:45:25 
 * @Last Modified by: zhengxu
 * @Last Modified time: 2017-11-15 21:52:32
 */

/**
 * 方便生成模块文件，结构为
 * |—— app
 *   |—— app.vue
 *   |—— index.html
 *   |—— app.ts
 *  
 * use:npm run buildFolder -- --path views/front/app
 */

var minimist = require('minimist')
var fs = require('fs');
var path = require('path')
var args = require('minimist')(process.argv.slice(2));

const folderName = args.path.split('/').slice(-1).toString()
const folderPath = path.resolve(__dirname, '../src', args.path)

function createFilePath(value) {
  return path.resolve(folderPath, value)
}

let files = [{
    key: '.ts',
    name: createFilePath(folderName + '.ts'),
    data: `import Vue from '@/Base'
import { Component} from 'vue-property-decorator'
import template from './${folderName}.vue'
@Component({
  mixins: [template]
})
export default class ${folderName.substring(0,1).toUpperCase()}${folderName.substring(1)} extends Vue {

}`

  },
  {
    key: '.vue',
    name: createFilePath(folderName + '.vue'),
    data: `<template lang="jade">
</template>`
  },
  {
    key: 'index',
    name: createFilePath('index.ts'),
    data: `export {default} from './${folderName}'`
  }
]


fs.exists(folderPath, (exists) => { // 看目录是否存在
  if (exists) {
    console.log('目录已存在')
    return
  } else {
    // 开始创建
    fs.mkdir(folderPath, (err) => {
      if (err) {
        console.log('创建失败')
        throw err
      }
      console.log('创建目录成功')
      files.forEach(item => {
        fs.writeFile(item.name, item.data || '', (err) => {
          if (err) {
            console.log(`创建${item.key}失败`)
            throw err
          } else {
            console.log(`写入${item.key}成功`);
          }
        })
      })

    })

  }

});