export interface ITestCase
{
  name?: string
  sections: ITestSection[]
}
export interface ITestSection
{
  key: string
  index: number
  description: string
  value: string
  type: string
  result:string
  required: string
}