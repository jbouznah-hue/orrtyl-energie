import { useMutation } from '@apollo/client/react';

import { CREATE_EMAIL_FORWARDING_CHANNEL } from '@/settings/accounts/graphql/mutations/createEmailForwardingChannel';
import { GET_MY_CONNECTED_ACCOUNTS } from '@/settings/accounts/graphql/queries/getMyConnectedAccounts';
import { GET_MY_MESSAGE_CHANNELS } from '@/settings/accounts/graphql/queries/getMyMessageChannels';

type CreateEmailForwardingChannelResult = {
  createEmailForwardingChannel: {
    messageChannel: {
      id: string;
      handle: string;
      visibility: string;
      type: string;
      isSyncEnabled: boolean;
      excludeGroupEmails: boolean;
      contactAutoCreationPolicy: string;
    };
    forwardingAddress: string;
  };
};

type CreateEmailForwardingChannelVariables = {
  input: {
    handle: string;
  };
};

export const useCreateEmailForwardingChannel = () => {
  const [mutate, { loading, error }] = useMutation<
    CreateEmailForwardingChannelResult,
    CreateEmailForwardingChannelVariables
  >(CREATE_EMAIL_FORWARDING_CHANNEL, {
    refetchQueries: [
      { query: GET_MY_CONNECTED_ACCOUNTS },
      { query: GET_MY_MESSAGE_CHANNELS },
    ],
  });

  const createEmailForwardingChannel = (handle: string) =>
    mutate({ variables: { input: { handle } } });

  return { createEmailForwardingChannel, loading, error };
};
