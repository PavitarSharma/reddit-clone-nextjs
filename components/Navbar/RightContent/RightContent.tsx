"use client";

import { Button, Flex } from "@chakra-ui/react";
import { FC } from "react";
import AuthButtons from "./AuthButtons";
import AuthModal from "@/components/Modal/Auth/AuthModal";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";

interface RightContentProps {
  user: any;
}

const RightContent: FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? (
          <Button height="36px" onClick={() => signOut(auth)}>Logout</Button>
        ) : (
          <AuthButtons />
        )}
      </Flex>
    </>
  );
};

export default RightContent;
