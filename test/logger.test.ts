// import { logger } from '@utils/Logger'
import { logger, display } from '../src/utils/Logger'

describe('Sample Test', () =>
{
    it('should log', () =>
    {
        logger.info('Hello World')
    })

    it('should log 2 console', () =>
    {
        display('Hello World')
    })
})
