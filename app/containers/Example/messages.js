/*
 * Example Messages
 *
 * This contains all the text for the Example component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.Example.newheader',
    defaultMessage: 'Example Container (console API call)',
  },
  apiErrorMessage: {
    id: 'app.containers.Example.apiError.message',
    defaultMessage: 'API ERROR!',
  },
});
