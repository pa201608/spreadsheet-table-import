import { Logger } from 'tslog'

// See more at: https://tslog.js.org/docs/usage.html

export const logger = new Logger({
    name: 'LOG',
    displayFilePath: 'hidden',
    displayFunctionName: false,
    displayInstanceName: true,
    displayRequestId: true,
    displayTypes: true,
    displayLoggerName: false,
    // dateTimeTimezone: 'America/New_York',
    // dateTimePattern: 'yyyy-MM-dd HH:mm:ss'
})

export const display = (text: string) =>
{
    console.log(text)
}

export default { logger, display } 
