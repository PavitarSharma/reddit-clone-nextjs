import { FC } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Icon,
  Flex,
  Text,
} from "@chakra-ui/react";
import { User, signOut } from "firebase/auth";
import { FaRedditSquare } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { IoSparkles } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { auth } from "@/firebase/firebase";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";

interface UserMenuProps {
  user: User | null | undefined;
}

const UserMenu: FC<UserMenuProps> = ({ user }) => {
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <>
      <Menu>
        <MenuButton
          cursor="pointer"
          padding="0 6px"
          borderRadius={4}
          _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
        >
          <Flex align="center">
            <Flex align="center">
              {user ? (
                <>
                  <Icon
                    fontSize={24}
                    mr={1}
                    color="gray.300"
                    as={FaRedditSquare}
                  />
                  <Flex
                    direction="column"
                    display={{ base: "none", lg: "flex" }}
                    fontSize="8pt"
                    align="flex-start"
                    mr={1}
                  >
                    <Text fontWeight={700} textTransform="capitalize">
                      {user?.displayName || user?.email?.split("@")[0]}
                    </Text>
                    <Flex>
                      <Icon as={IoSparkles} color="orange.500" mr={1} />
                      <Text color="gray.400">1 karma</Text>
                    </Flex>
                  </Flex>
                </>
              ) : (
                <Icon fontSize={24} as={VscAccount} color="gray.400" mr={1} />
              )}
            </Flex>
            <ChevronDownIcon />
          </Flex>
        </MenuButton>
        <MenuList>
          {user ? (
            <>
              <MenuItem
                fontSize="10pt"
                fontWeight={700}
                _hover={{ bg: "blue.500", color: "white" }}
              >
                <Flex align="center">
                  <Icon as={CgProfile} mr={2} fontSize={20} />
                  Profile
                </Flex>
              </MenuItem>
              <MenuDivider />
              <MenuItem
                fontSize="10pt"
                fontWeight={700}
                _hover={{ bg: "blue.500", color: "white" }}
                onClick={() => signOut(auth)}
              >
                <Flex align="center">
                  <Icon as={MdOutlineLogin} mr={2} fontSize={20} />
                  Log Out
                </Flex>
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem
                fontSize="10pt"
                fontWeight={700}
                _hover={{ bg: "blue.500", color: "white" }}
                onClick={() => setAuthModalState({ open: true, view: "login" })}
              >
                <Flex align="center">
                  <Icon as={MdOutlineLogin} mr={2} fontSize={20} />
                  Log In / Sign Up
                </Flex>
              </MenuItem>
            </>
          )}
        </MenuList>
      </Menu>
    </>
  );
};

export default UserMenu;
