import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
};

export type Query = {
  __typename?: 'Query';
  autoServices?: Maybe<Array<Maybe<AutoServiceType>>>;
  users?: Maybe<Array<Maybe<UserType>>>;
  actions?: Maybe<Array<Maybe<ActionType>>>;
  news?: Maybe<Array<Maybe<NewsType>>>;
  profiles?: Maybe<Array<Maybe<ProfileType>>>;
};

export type QueryAutoServicesArgs = {
  autoServiceId?: Maybe<Scalars['Int']>;
};

export type QueryActionsArgs = {
  actionId?: Maybe<Scalars['Int']>;
};

export type QueryNewsArgs = {
  newsId?: Maybe<Scalars['Int']>;
};

export type QueryProfilesArgs = {
  profileId?: Maybe<Scalars['Int']>;
};

export type AutoServiceType = {
  __typename?: 'AutoServiceType';
  id: Scalars['ID'];
  title: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  workTime?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  coordinates?: Maybe<Scalars['String']>;
};

export type UserType = {
  __typename?: 'UserType';
  id: Scalars['ID'];
  password: Scalars['String'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean'];
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  dateJoined: Scalars['DateTime'];
};

export type ActionType = {
  __typename?: 'ActionType';
  id: Scalars['ID'];
  date: Scalars['DateTime'];
  title: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
};

export type NewsType = {
  __typename?: 'NewsType';
  id: Scalars['ID'];
  title: Scalars['String'];
  preview: Scalars['String'];
  content: Scalars['String'];
  dateCreated?: Maybe<Scalars['DateTime']>;
  showMain?: Maybe<Scalars['Int']>;
};

export type ProfileType = {
  __typename?: 'ProfileType';
  id: Scalars['ID'];
  surname: Scalars['String'];
  name: Scalars['String'];
  lastname: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  city: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAutoservices?: Maybe<CreateAutoService>;
  createUser?: Maybe<CreateUser>;
  createProfile?: Maybe<CreateProfile>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  verifyToken?: Maybe<Verify>;
  refreshToken?: Maybe<Refresh>;
};

export type MutationCreateAutoservicesArgs = {
  input: AutoServiceInput;
};

export type MutationCreateUserArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type MutationCreateProfileArgs = {
  input: ProfileInput;
};

export type MutationTokenAuthArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type MutationVerifyTokenArgs = {
  token?: Maybe<Scalars['String']>;
};

export type MutationRefreshTokenArgs = {
  token?: Maybe<Scalars['String']>;
};

export type CreateAutoService = {
  __typename?: 'CreateAutoService';
  ok?: Maybe<Scalars['Boolean']>;
  autoService?: Maybe<AutoServiceType>;
};

export type AutoServiceInput = {
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  workTime?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  coordinates?: Maybe<Scalars['String']>;
};

export type CreateUser = {
  __typename?: 'CreateUser';
  user?: Maybe<UserType>;
};

export type CreateProfile = {
  __typename?: 'CreateProfile';
  ok?: Maybe<Scalars['Boolean']>;
  profile?: Maybe<ProfileType>;
};

export type ProfileInput = {
  name?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar'];
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

export type UserFragment = { __typename?: 'UserType' } & Pick<
  UserType,
  | 'id'
  | 'password'
  | 'lastLogin'
  | 'isSuperuser'
  | 'username'
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'isStaff'
  | 'isActive'
  | 'dateJoined'
>;

export type UsersQueryVariables = Exact<{ [key: string]: never }>;

export type UsersQuery = { __typename?: 'Query' } & {
  users?: Maybe<Array<Maybe<{ __typename?: 'UserType' } & UserFragment>>>;
};

export const UserFragmentDoc = gql`
  fragment user on UserType {
    id
    password
    lastLogin
    isSuperuser
    username
    firstName
    lastName
    email
    isStaff
    isActive
    dateJoined
  }
`;
export const UsersDocument = gql`
  query users {
    users {
      ...user
    }
  }
  ${UserFragmentDoc}
`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options,
  );
}
export function useUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options,
  );
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<
  UsersQuery,
  UsersQueryVariables
>;
