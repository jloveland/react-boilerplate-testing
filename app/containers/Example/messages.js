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
  buttonText: {
    id: 'app.containers.Example.buttonText',
    defaultMessage: 'CALL API!',
  },
  buttonTextSuccess: {
    id: 'app.containers.Example.buttonTextSuccess',
    defaultMessage: 'SUCCESS!',
  },
});
