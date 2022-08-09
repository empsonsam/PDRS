import { Header, SuiteHeaderProfile } from "carbon-addons-iot-react";
import Avatar from "@carbon/icons-react/es/user--avatar/16";
import "./Header.css";
import { ReactSession } from "react-client-session";
import { useEffect, useState } from "react";

const HeaderBar = ({}) => {
  const [user, setUser] = useState("");
  const [logoutClicked, setLogoutClicked] = useState(false);
  const username = ReactSession.get("username");
  useEffect(() => {
    username ? setUser(username) : setUser(user);
    setLogoutClicked(false);
  }, []);

  const buttonLogout = document.querySelector(
    ".iot--suite-header-profile--manage-button"
  );
  if (buttonLogout && !logoutClicked) {
    buttonLogout.addEventListener("click", () =>
      window.location.assign("https://w3.ibm.com/#/")
    );
    setLogoutClicked(true);
  }

  return (
    <div className="container">
      <Header
        url={
          "https://dsi-model-office-project-reporting.auth.eu-west-2.amazoncognito.com/oauth2/authorize?client_id=3n574t7su5t071uctrcpoo64ik&response_type=token&scope=openid&redirect_uri=https://rebrand.ly/6tf2ljk"
        }
        actionItems={[
          {
            btnContent: <Avatar fill="white" description="Icon" />,
            childContent: [
              {
                content: (
                  <div className="header-profile">
                    <SuiteHeaderProfile
                      displayName={username}
                      username={username}
                      appName={"IBM"}
                      i18n={{
                        profileTitle: "Profile",
                        profileButton: "Log Out",
                      }}
                      onProfileClick={() => {}}
                    />
                  </div>
                ),
              },
            ],
          },
        ]}
        subtitle="Project Delivery Reporting System"
      />
    </div>
  );
};

export default HeaderBar;
