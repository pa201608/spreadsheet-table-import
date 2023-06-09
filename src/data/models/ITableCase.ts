export interface ITableCase
{
  name?: string
  sections: ITableSection[]
}
export interface ITableSection
{
  key: string
  index: number
  description: string
  value: string
  type: string
  result: string
  required: string
}