import { gql } from '@apollo/client';
import { ACTION_FRAGMENT } from '../fragments/action';

export const GET_ACTIONS = gql`
  query actions {
    actions {
      ...action
    }
  }
  ${ACTION_FRAGMENT}
`;
