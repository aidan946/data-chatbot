import { User } from "@/utils/db.ts";
import NewSection from "tabler_icons_tsx/new-section.tsx";
import BotIcon from "tabler_icons_tsx/robot.tsx";
import SettingsIcon from "tabler_icons_tsx/settings.tsx";
import GitHubAvatarImg from "@/components/GitHubAvatarImg.tsx";

export interface SideMenuProps {
  /** Currently signed-in user */
  sessionUser?: User;
  /**
   * URL of the current page. This is used for highlighting the currently
   * active page in navigation.
   */
  url: URL;
}

export default function SideMenu(props: SideMenuProps) {
  return (
    <div class="bg-base-200 w-56 rounded-box h-screen">
      <ul class="menu">
        <li>
          <a class="text-lg">
            Data Chatbot
            <BotIcon class="size-6" />
          </a>
        </li>
        <li class="mt-2">
          <a>
            New Chat
            <NewSection class="size-6" />
          </a>
        </li>
        <div class="divider" />
        <li>
          <a>
            Test Chat
          </a>
        </li>
      </ul>
      <div class="flex">
        {props.sessionUser
          ? (
            <GitHubAvatarImg
              login={props.sessionUser.login}
              size={24}
              class="mx-auto"
            />
          )
          : null}
        <SettingsIcon class="size-6" />
      </div>
    </div>
  );
}
