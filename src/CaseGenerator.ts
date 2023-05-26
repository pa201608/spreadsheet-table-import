import { faker } from '@faker-js/faker/locale/de'
import * as fs from 'fs'
import { ICase } from './data/models/ICase'
import { ISection } from './data/models/ISection'

const NUMBER_OF_CASES: number = 10
const CASES: ICase[] = []
let caseId: number = 0

const casesNumber: number = Number(process.argv[2] || NUMBER_OF_CASES)

function createRandomCase(): ICase
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

function createRandomSections(): ISection[]
{
  let sections: ISection[] = []
  let sectionId: number = 0

  for (let i = 0; i < 10; i++)
  {
    sections.push(createRandomSection())
  }

  return sections
}

function createRandomSection(): ISection
{
  let sectionId: number = 0
  let key: string = `key ${sectionId}`
  let index: number = sectionId
  let description: string = `description ${sectionId}`
  let value: string = `value ${sectionId}`
  let result1: number = 11
  let result2: number = 22
  let selectedResult: number = 11

  return {
    key: key,
    index: index,
    description: description,
    value: value,
    result1: result1,
    result2: result2,
    selectedResult: selectedResult
  }
}

