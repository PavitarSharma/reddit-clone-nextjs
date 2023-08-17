import { auth } from "@/firebase/firebase";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const OAuthButtons = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button
        variant="oauth"
        mb={2}
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image
          src="/images/googlelogo.png"
          alt="google-logo"
          height="20px"
          mr={4}
        />
        Continue with Google
      </Button>
      <Button variant="oauth">Some Other Provider</Button>
      {error && (
        <Text textAlign="center" fontSize="10pt" color="red" mt={2}>
          {error.message}
        </Text>
      )}
    </Flex>
  );
};

export default OAuthButtons;
