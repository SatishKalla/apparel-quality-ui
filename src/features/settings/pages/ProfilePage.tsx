import { Spin } from "antd";

import { ProfileSettings } from "../components";

import { useSettings } from "../hooks";
import { AppPage } from "@/components/ui";

export default function SettingsPage() {
  const { data, isLoading } = useSettings();

  if (isLoading || !data) {
    return <Spin size="large" />;
  }

  return (
    <AppPage title="Profile">
      <ProfileSettings profile={data.profile} />
    </AppPage>
  );
}
