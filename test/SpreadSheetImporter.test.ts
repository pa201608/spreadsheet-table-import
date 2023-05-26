import path from 'path'
import SpreadSheetImporter from '../src/SpreadSheetImporter'
import { ICase } from '@/data/models/ICase'

const fixturesDir = path.join(__dirname, 'fixtures')
const dataFile = path.join(fixturesDir, 'case_table.xlsx')

describe('Import table Tests', () =>
{
  it('read and create model from xlsx spreadsheet', () =>
  {
    const importer = new SpreadSheetImporter()
    importer.numberOfCases = 3
    importer.numberOfHeaderlines = 2

    let cases: ICase[] = importer.readSpreadsheet(dataFile)

    expect(cases.length).toBe(3)
    console.table(cases[0].name)
    console.table(cases[0].sections)
    expect(cases[0].sections.length).toBe(5)

    console.table(cases[1].name)
    console.table(cases[1].sections)
    expect(cases[1].sections.length).toBe(4)

    console.table(cases[2].name)
    console.table(cases[2].sections)
    expect(cases[2].sections.length).toBe(4)
  })
})
