import { gql } from '@apollo/client';
import { CONTACT_FRAGMENT } from '../fragments/contact';

export const GET_CONTACTS = gql`
  query contacts($contactId: Int, $blockId: Int) {
    contacts(contactId: $contactId, blockId: $blockId) {
      ...contact
    }
  }
  ${CONTACT_FRAGMENT}
`;
