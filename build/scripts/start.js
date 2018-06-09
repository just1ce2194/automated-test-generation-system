const logger = require('../lib/logger')

logger.info('Starting server...')
require('../../server/index').listen(process.env.PORT || 3000, () => {
  logger.success('Server is running at)
})
