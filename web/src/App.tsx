import { Router } from "@solidjs/router";

import { ViewportLayout } from "./ui/layout/ViewportLayout";
import { Learning } from "./ui/screen/Learning";
import { LearningList } from "./ui/screen/LearningList";
import { NotFound } from "./ui/screen/NotFound";
import { Redirect } from "./ui/screen/Redirect";
import { Setting } from "./ui/screen/Setting";
import { SignIn } from "./ui/screen/SignIn";
import { SignUp } from "./ui/screen/SignUp";
import { Splash } from "./ui/screen/Splash";
import { Translator } from "./ui/screen/Translator";

export const App = () => {
  return (
    <ViewportLayout>
      <Splash>
        <Router>
          {[
            {
              path: "/",
              component: () => <Redirect to="/translator" />,
            },
            {
              path: "/sign-in",
              component: () => <SignIn />,
            },
            {
              path: "/sign-up",
              component: () => <SignUp />,
            },
            {
              path: "/translator",
              component: () => <Translator />,
            },
            {
              path: "/learning",
              component: () => <LearningList />,
            },
            {
              path: "/learning/:id",
              component: () => <Learning />,
            },
            {
              path: "/setting",
              component: () => <Setting />,
            },
            {
              path: "*",
              component: () => <NotFound />,
            },
          ]}
        </Router>
      </Splash>
    </ViewportLayout>
  );
};
