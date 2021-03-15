import { gql } from '@apollo/client';

export const GET_PROFILE_CAR = gql`
  query profileCars($profileId: Int) {
    profileCars(profileId: $profileId) {
      car {
        model
      }
    }
  }
`;
