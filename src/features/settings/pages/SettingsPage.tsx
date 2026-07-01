import { Button, Spin } from "antd";

import { AboutCard, ApplicationSettings, NotificationSettings } from "../components";

import { useResetSettings, useSettings } from "../hooks";
import { AppPage } from "@/components/ui";

export default function SettingsPage() {
  const { data, isLoading } = useSettings();

  const resetMutation = useResetSettings();

  if (isLoading || !data) {
    return <Spin size="large" />;
  }

  return (
    <AppPage
      title="Settings"
      extra={
        <Button danger loading={resetMutation.isPending} onClick={() => resetMutation.mutate()}>
          Reset Settings
        </Button>
      }
    >
      <ApplicationSettings application={data.application} />

      <NotificationSettings notifications={data.notifications} />

      <AboutCard />
    </AppPage>
  );
}
