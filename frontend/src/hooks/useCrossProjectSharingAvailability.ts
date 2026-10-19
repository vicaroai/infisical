import { useServerConfig, useSubscription } from "@app/context";

// The community capability is independent of Enterprise subscription metadata.
export const useCrossProjectSharingAvailability = () => {
  const { config } = useServerConfig();
  const { subscription } = useSubscription();
  return Boolean(config.vicaroCommunitySharing || subscription?.crossProjectSecretSharing);
};
