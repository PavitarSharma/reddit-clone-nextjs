"use client";

import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import AuthButtons from "./AuthButtons";
import AuthModal from "@/components/Modal/Auth/AuthModal";
import { User } from "firebase/auth";
import Icons from "./Icons";
import UserMenu from "./UserMenu";

interface RightContentProps {
  user: User | null | undefined;
}

const RightContent: FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? <Icons /> : <AuthButtons />}
        <UserMenu user={user} />
      </Flex>
    </>
  );
};

export default RightContent;
