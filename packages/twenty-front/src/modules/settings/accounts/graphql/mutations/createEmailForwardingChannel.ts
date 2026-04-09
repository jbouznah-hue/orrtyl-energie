import { gql } from '@apollo/client';

export const CREATE_EMAIL_FORWARDING_CHANNEL = gql`
  mutation CreateEmailForwardingChannel(
    $input: CreateEmailForwardingChannelInput!
  ) {
    createEmailForwardingChannel(input: $input) {
      messageChannel {
        id
        handle
        visibility
        type
        isSyncEnabled
        excludeGroupEmails
        contactAutoCreationPolicy
      }
      forwardingAddress
    }
  }
`;
