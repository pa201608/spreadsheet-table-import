import XLSX, { WorkSheet } from 'xlsx'
import { logger } from './utils/Logger'
import { ITableCase, ITableSection } from './data/models/ITableCase'

/**
 * This class reads a spreadsheet file and returns the data as an array of ICase objects.
 *  
 * @export
 * @class SpreadSheetImporter
 * @example
 * const importer = new SpreadSheetImporter()
 * importer.numberOfCases = 3
 * importer.numberOfHeaderlines = 2
 * let cases: ICase[] = importer.readSpreadsheet(dataFile)
 */
export default class SpreadSheetImporter
{
  fieldNameSequence: number = 0
  tables: any = {}
  cases: ITableCase[] = []
  numberOfCases: number = 3
  numberOfHeaderlines: number = 2

  /**
   * Read the spreadsheet file and return the data as an array of ICase objects.
   * 
   * @param filename {string} The Spreadsheet file to load
   */
  readSpreadsheet(filename: string): ITableCase[]
  {
    if (filename === undefined) { throw new Error('load: No file name given.') }

    logger.info(`Read the spreadSheet file '${filename}'.`)

    try
    {
      const workbook = XLSX.readFile(filename)
      workbook.SheetNames.forEach(sheetName =>
      {
        const worksheet: WorkSheet = workbook.Sheets[sheetName]

        logger.info(`Try parsing the sheet '${sheetName}'.`)

        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: this.numberOfHeaderlines });

        this.cases = this.parseJson(jsonData, this.numberOfCases)
      })
    } catch (error)
    {
      console.error('Error reading spreadsheet:', error)
    }
    return this.cases
  }

  parseJson(jsonData: unknown[], numberOfCases: number): ITableCase[]
  {
    logger.info(`Parsing the sheet with number of cases = ${numberOfCases}, '${JSON.stringify(jsonData)}'.`)
    let caseIndex = 0
    let caseName = `Case ${caseIndex}`
    let cases: ITableCase[] = []

    for (let index = 1; index <= numberOfCases; index++)
    {
      caseIndex = index
      caseName = `Case ${caseIndex}`

      const sections: ITableSection[] = jsonData
        .filter((sectionData: any) =>
        {
          return sectionData.hasOwnProperty(caseName) && sectionData['key'] !== undefined
        })
        .map((sectionData: any) =>
        {
          let selectedResult = sectionData[caseName]
          return { ...sectionData, selectedResult }
        })

      cases.push({ name: caseName, sections })
    }
    return cases
  }
}
