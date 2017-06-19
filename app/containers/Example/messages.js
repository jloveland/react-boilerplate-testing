/*
 * Example Messages
 *
 * This contains all the text for the Example component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.Example.header',
    defaultMessage: 'Example container - API call (console.log).',
  },
  apiErrorMessage: {
    id: 'app.containers.Example.apiError.message',
    defaultMessage: 'API ERROR!',
  },
});
