import { faker } from '@faker-js/faker/locale/de'
import * as fs from 'fs'
import { ITableCase, ITableSection } from './data/models/ITableCase'
import { ITestCase, ITestSection } from './data/models/ITestCase'

const NUMBER_OF_CASES: number = 10
const CASES: ITableCase[] = []
let caseId: number = 0

const casesNumber: number = Number(process.argv[2] || NUMBER_OF_CASES)

export function createTestCases(importCases: ITableCase[]): ITestCase[]
{
  let testCases: ITestCase[] = []
  
  for (let index = 0; index < importCases.length; index++) { // excelPersonas.length
    let caseName: string = `testcase${index}`
    const tableCase: ITableCase = importCases[index];

    let testCase: ITestCase = {
      sections: []
    } 

    for (let index = 0; index < tableCase.sections.length; index++) {
        const section: ITableSection = tableCase.sections[index];
        
        let testSection: ITestSection = {
          key: section.key,
          description: section.description,
          value: section.value,
          type: section.type,
          required: section.required,
          index: 0,
          result: ''
        }
        testCase.sections[index] = testSection
      }
    testCase.name = caseName
    testCases.push(testCase)
  }
  return testCases
}


export async function writeTestcases(testCases: ITestCase[], filePath: string = 'test/fixtures/gen/') {
  let fileIndex: number = 0
    for (let i = 0; i < testCases.length; i++) {
        fileIndex++
        const testCase = testCases[i]
        const file = `${filePath}${testCase.name.trim()}${fileIndex}.json`
        const data  = JSON.stringify(testCase, null, 2)
        console.log(`!${testCase.name.trim()}!`)
        console.log(`!${fileIndex}!`)
        console.log(`Testcase${fileIndex} will be written into ${file}`)
        if (typeof data !== 'undefined' && typeof data === 'string') {
           await fs.writeFile(filePath, data, (err) => {
              if (err) {
                  console.error('Error writing file:', err)
              } else {
                 // console.log(`Testcase${fileIndex} file written successfully.`)
              }
          })
      } else {
          console.error(`Invalid testcase-data argument provided. ${testCase.name}${fileIndex}`)
      }
  }
}