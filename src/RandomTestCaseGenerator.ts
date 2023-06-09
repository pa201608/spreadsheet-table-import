import { faker } from '@faker-js/faker/locale/de'
import * as fs from 'fs'
import { ITableCase, ITableSection } from './data/models/ITableCase'

const NUMBER_OF_CASES: number = 10
const CASES: ITableCase[] = []
let caseId: number = 0

const casesNumber: number = Number(process.argv[2] || NUMBER_OF_CASES)

function createRandomCase(): ITableCase
{
  let name: string = `case ${caseId}`

  return {
    name: name,
    sections: createRandomSections()
  }
}

for (let i = 0; i < casesNumber; i++)
{
  CASES.push(createRandomCase())
}

fs.writeFile('./gen_cases.json', JSON.stringify(CASES, null, 2), (err) =>
{
  if (err) throw err
  console.log('Cases-JSON data are saved.')
})

function createRandomSections(): ITableSection[]
{
  let sections: ITableSection[] = []
  let sectionId: number = 0

  for (let i = 0; i < 10; i++)
  {
    sections.push(createRandomSection())
  }

  return sections
}

function createRandomSection(): ITableSection
{
  let sectionId: number = 0
  let key: string = `key ${sectionId}`
  let index: number = sectionId
  let description: string = `description ${sectionId}`
  let value: string = `value ${sectionId}`
  let result: string = '11'

  return {
    key: key,
    index: index,
    description: description,
    value: value,
    type: 'asdasd',
    result: result,
    required: 'true'
  }
}

