import { Image, Box, Text } from "@chakra-ui/react";

function NavigationBar() {
  const willNameLater = {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "16px",
  };

  const commonListStyle = {
    display: " flex",
    marginLeft: " 60px",
    marginTop: " 4px",
    paddingTop: " 2px",
    paddingBottom: " 2px",
    alignItems: " center",
  };

  const commonImgStyle = {
    width: "20px",
    height: "20px",
  };

  const commonTextStyle = {
    marginLeft: "12px",
    lineHeight: "24px",
    fontSize: "16px",
  };

  const listArrow = {
    border: "#ff5403",
    borderWidth: "0px 1px 1px 0px",
    display: "inline-block",
    padding: "5px",
    transform: "rotate(45deg)",
    webkitTransform: "rotate(45deg)",
  };

  const commonTextStyle2 = {
    fontSize: "12px",
    lineHeight: "16px",
    marginLeft: "60px",
    color: "#4d5760",
  };
  return (
    <div id="navigation-bar">
      <Image
        src="../images/mainstack-logo.png"
        className="logo"
        mt={"32px"}
        ml={"54px"}
      />
      <Box mt={"40px"} mb={"196px"}>
        <Box id="main-list" mb={"32px"}>
          <Box sx={willNameLater} mb={"20px"}>
            <Box className="samp" sx={commonListStyle}>
              <Image
                src="./images/dashboard.png"
                alt="Dashboard"
                sx={commonImgStyle}
              />
              <Text sx={commonTextStyle} color={"#ff5403"}>
                Dashboard
              </Text>
            </Box>
            <Box sx={listArrow}></Box>
          </Box>
          <Box sx={willNameLater} mb={"20px"}>
            <Box sx={commonListStyle}>
              <Image
                src="../images/edit.png"
                alt="edit icon"
                sx={commonImgStyle}
              />
              <Text sx={commonTextStyle}>Item 1</Text>
            </Box>
            <Box sx={listArrow}></Box>
          </Box>
          <Box sx={willNameLater} mb={"20px"}>
            <Box sx={commonListStyle}>
              <Image
                src="../images/group.png"
                alt="group-icon"
                sx={commonImgStyle}
              />
              <Text sx={commonTextStyle}>Item 2</Text>
            </Box>
            <Box sx={listArrow}></Box>
          </Box>
          <Box sx={willNameLater}>
            <Box sx={commonListStyle}>
              <Image
                src="../images/hourglass_empty.png"
                alt="hourglass_empty"
                sx={commonImgStyle}
              />
              <Text sx={commonTextStyle}>Item 3</Text>
            </Box>
            <Box sx={listArrow}></Box>
          </Box>
        </Box>
        <Box mb={"32px"}>
          <Text sx={commonTextStyle2}>OTHERS 1</Text>
          <Box mt={"16px"}>
            <Box sx={willNameLater} mb={"20px"}>
              <Box sx={commonListStyle}>
                <Image
                  src="../images/add_a_photo.png"
                  alt="add_photo_icon"
                  sx={commonImgStyle}
                />
                <Text sx={commonTextStyle}>Item 4</Text>
              </Box>
              <Box sx={listArrow}></Box>
            </Box>
            <Box sx={willNameLater}>
              <Box sx={commonListStyle}>
                <Image
                  sx={commonImgStyle}
                  src="../images/delete.png"
                  alt="delete_icon"
                />
                <Text sx={commonTextStyle}>Item 5</Text>
              </Box>
              <Box sx={listArrow}></Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Text sx={commonTextStyle2}>OTHERS 2</Text>
          <Box mt={"16px"}>
            <Box sx={willNameLater} mb={"20px"}>
              <Box sx={commonListStyle}>
                <Image
                  sx={commonImgStyle}
                  src="../images/subscriptions.png"
                  alt="subscription_icon"
                />
                <Text sx={commonTextStyle}>Item 6</Text>
              </Box>
              <Box sx={listArrow}></Box>
            </Box>
            <Box sx={willNameLater} mb={"20px"}>
              <Box sx={commonListStyle} className="samp">
                <Image
                  sx={commonImgStyle}
                  src="../images/file_present.png"
                  alt="file_icon"
                />
                <Text sx={commonTextStyle}>Item 7</Text>
              </Box>
              <Box sx={listArrow}></Box>
            </Box>
            <Box sx={willNameLater}>
              <Box sx={commonListStyle}>
                <Image
                  sx={commonImgStyle}
                  src="../images/alarm.png"
                  alt="alarm_icon"
                />
                <Text sx={commonTextStyle}>Item 8</Text>
              </Box>
              <Box sx={listArrow}></Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={willNameLater} alignItems={"center"}>
        <Box sx={commonListStyle}>
          <Image
            w={"32px"}
            h={"32px"}
            borderRadius={"50%"}
            src="../images/unsplash_F16KPYxfm6s.png"
            alt="user_icon"
            className="profile_image"
          />
          <Text
            sx={commonTextStyle}
            fontSize={"15px"}
            lineHeight={"16px"}
            className="display-name"
          >
            Blessing Daniels
          </Text>
        </Box>
        <Image
          w={"10.95px"}
          h={"1.67px"}
          color={"#4d5760"}
          src="../images/more_horiz.png"
          alt="more_icon"
        />
      </Box>
    </div>
  );
}

export default NavigationBar;
