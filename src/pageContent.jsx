import {
  Box,
  Text,
  Flex,
  Spacer,
  Image,
  Button,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";

import infoIcon from "./images/info.png";
import DoughnutChart from "./doughnutChart";
import NewAreaChart from "./areaChart";

function PageContent() {
  const date = new Date();
  const hour = date.getHours();
  console.log(hour);

  const listProps = {
    display: "inline-block",
    padding: "12px 16px",
  };

  return (
    <>
      <Box id="dashboard-container">
        <Text
          style={{
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "24px",
            paddingTop: "22px",
            paddingBottom: "22px",
            marginBottom: "24px",
          }}
        >
          Dashboard
        </Text>
        <Flex alignItems={"center"} mb={"23px"}>
          <Box w={"335px"} h={"64px"}>
            <Text w={"100%"} lineHeight={"32px"} mb={"10px"}>
              <span
                style={{ fontWeight: 700, fontSize: "24px", color: "#131316" }}
              >
                {hour >= 12 ? (
                  hour >= 16 ? (
                    <span>Good evening</span>
                  ) : (
                    <span>Good afternoon</span>
                  )
                ) : (
                  <span>Good morning</span>
                )}
                , Bornagain
              </span>
              ⛅️
            </Text>

            <Text fontSize={"14px"} lineHeight={"22px"}>
              Check out your dashboard summary.
            </Text>
          </Box>
          <Spacer />

          <Button
            w={"92px"}
            h={"26px"}
            border={"none"}
            bg={"none"}
            color={"#ff5403"}
            lineHeight={"22px"}
            fontSize={"14px"}
            _hover={{ backgroundColor: "none" }}
          >
            View analytics
          </Button>
        </Flex>

        <Box className="days-nav">
          <UnorderedList p={0} m={0}>
            <ListItem sx={listProps} className="list-item">
              <Link href="#" _hover={{ textDecoration: "none" }}>
                1 Day
              </Link>
            </ListItem>
            <ListItem sx={listProps} className="list-item">
              <Link href="#" _hover={{ textDecoration: "none" }}>
                3 Days
              </Link>
            </ListItem>
            <ListItem sx={listProps} className="list-item">
              <Link href="#" _hover={{ textDecoration: "none" }}>
                7 Days
              </Link>
            </ListItem>
            <ListItem sx={listProps} className="list-item">
              <Link href="#" _hover={{ textDecoration: "none" }}>
                30 Days
              </Link>
            </ListItem>
            <ListItem className="active list-item" sx={listProps}>
              <Link
                href="#"
                _hover={{ textDecoration: "none" }}
                className="active-text"
              >
                All time
              </Link>
            </ListItem>
            <ListItem sx={listProps}>
              <Link href="#" _hover={{ textDecoration: "none" }}>
                Custom date
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box h={"576px"} mt={"24px"} mb={"24px"} p={"32px 24px 22px"}>
          <Flex alignItems={"center"} mb={"8px"}>
            <Text
              fontWeight={700}
              fontSize={"18px"}
              lineHeight={"24px"}
              color={"#131316"}
            >
              Page Views
            </Text>
            <Spacer />
            <Image src={infoIcon} alt="info icon" />
          </Flex>
          <Text fontSize={"14px"} lineHeight={"20px"} mb={"24px"}>
            All Time
          </Text>
          <Text
            lineHeight={"57.6px"}
            fontSize={"48px"}
            fontWeight={700}
            mb={"32px"}
          >
            500
          </Text>
          <Box w={"100%"} h={"356px"}>
            <NewAreaChart />
          </Box>
        </Box>
        <Flex>
          <Box w={"500px"} h={"326px"} p={"24px"}>
            <Flex mb={"44px"}>
              <Text
                color={"#131316"}
                fontWeight={700}
                fontSize={"18px"}
                lineHeight={"24px"}
              >
                Top Location
              </Text>
              <Spacer />
              <Text fontSize={"14px"} lineHeight={"22px"} color={"#FF5403"}>
                View full reports
              </Text>
            </Flex>
            <Flex>
              <UnorderedList m={"0px"} listStyleType={"none"}>
                <ListItem mb={"18px"}>Nigeria 50%</ListItem>
                <ListItem mb={"18px"}>United States 24%</ListItem>
                <ListItem mb={"18px"}>Netherlands 24%</ListItem>
                <ListItem mb={"18px"}>Andorra 24%</ListItem>
                <ListItem>Others 24%</ListItem>
              </UnorderedList>
              <Spacer />
              <DoughnutChart />
            </Flex>
          </Box>
          <Spacer />
          <Box w={"500px"} h={"326px"} p={"24px"}>
            <Flex
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "44px",
              }}
            >
              <Text
                color={"#131316"}
                fontWeight={700}
                fontSize={"18px"}
                lineHeight={"24px"}
              >
                Top Referral Source
              </Text>
              <Spacer />
              <Text fontSize={"14px"} lineHeight={"22px"} color={"#FF5403"}>
                View full reports
              </Text>
            </Flex>
            <Flex>
              <UnorderedList m={0} listStyleType={"none"}>
                <ListItem mb={"18px"}>Facebook 50%</ListItem>
                <ListItem mb={"18px"}>Instagram 24%</ListItem>
                <ListItem mb={"18px"}>Linkedin 24%</ListItem>
                <ListItem mb={"18px"}>Twitter 24%</ListItem>
                <ListItem mb={"18px"}>Others 24%</ListItem>
              </UnorderedList>
              <Spacer />
              <DoughnutChart />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default PageContent;
