import path from 'path'
import SpreadSheetImporter from '../src/TableCaseImporter'
import { ITableCase } from '@/data/models/ITableCase'
import { ITestCase } from '@/data/models/ITestCase'
import { createTestCases, writeTestcases } from '../src/TestCaseGenerator'

const fixturesDir = path.join(__dirname, 'fixtures')
const dataFile = path.join(fixturesDir, 'case_table.xlsx')

describe('Import table with test cases', () =>
{
  let tableCases: ITableCase[] = []

  it('read and create model from xlsx spreadsheet', () =>
  {
    const importer = new SpreadSheetImporter()
    importer.numberOfCases = 3
    importer.numberOfHeaderlines = 2

    tableCases = importer.readSpreadsheet(dataFile)

    expect(tableCases.length).toBe(3)
    console.table(tableCases[0].name)
    console.table(tableCases[0].sections)
    expect(tableCases[0].sections.length).toBe(5)

    console.table(tableCases[1].name)
    console.table(tableCases[1].sections)
    expect(tableCases[1].sections.length).toBe(4)

    console.table(tableCases[2].name)
    console.table(tableCases[2].sections)
    expect(tableCases[2].sections.length).toBe(4)
  })

  it('convert and write test cases', () => {
    
    const testCases: ITestCase[] = createTestCases(tableCases)

    writeTestcases(testCases)
  })
})
