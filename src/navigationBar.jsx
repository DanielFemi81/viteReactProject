import { Image, Box, Text } from "@chakra-ui/react";
import logo from "./images/mainstack-logo.png";
import dashboard from "./images/dashboard.png";
import editIcon from "./images/edit.png";
import groupIcon from "./images/group.png";
import hourGlassIcon from "./images/hourglass_empty.png";
import addPhotoIcon from "./images/add_a_photo.png";
import deleteIcon from "./images/delete.png";
import subscriptionIcon from "./images/subscriptions.png";
import fileIcon from "./images/file_present.png";
import alarmIcon from "./images/alarm.png";
import userIcon from "./images/unsplash_F16KPYxfm6s.png";
import moreIcon from "./images/more_horiz.png";

function NavigationBar() {
  const willNameLater = {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "16px",
  };

  const commonListStyle = {
    display: "flex",
    marginLeft: "60px",
    marginTop: "4px",
    paddingTop: "2px",
    paddingBottom: "2px",
    alignItems: "center",
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
        src={logo}
        // src="/mainstack-
        alt="logo"
        mt={"32px"}
        ml={"54px"}
      />
      <Box mt={"40px"} mb={"196px"}>
        <Box id="main-list" mb={"32px"}>
          <Box sx={willNameLater} mb={"20px"}>
            <Box className="samp" sx={commonListStyle}>
              <Image src={dashboard} alt="Dashboard" sx={commonImgStyle} />
              <Text sx={commonTextStyle} color={"#ff5403"}>
                Dashboard
              </Text>
            </Box>
            <Box sx={listArrow}></Box>
          </Box>
          <Box sx={willNameLater} mb={"20px"}>
            <Box sx={commonListStyle}>
              <Image src={editIcon} alt="edit icon" sx={commonImgStyle} />
              <Text sx={commonTextStyle}>Item 1</Text>
            </Box>
            <Box sx={listArrow}></Box>
          </Box>
          <Box sx={willNameLater} mb={"20px"}>
            <Box sx={commonListStyle}>
              <Image src={groupIcon} alt="group icon" sx={commonImgStyle} />
              <Text sx={commonTextStyle}>Item 2</Text>
            </Box>
            <Box sx={listArrow}></Box>
          </Box>
          <Box sx={willNameLater}>
            <Box sx={commonListStyle}>
              <Image
                src={hourGlassIcon}
                alt="hour glass icon"
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
                  src={addPhotoIcon}
                  alt="add photo icon"
                  sx={commonImgStyle}
                />
                <Text sx={commonTextStyle}>Item 4</Text>
              </Box>
              <Box sx={listArrow}></Box>
            </Box>
            <Box sx={willNameLater}>
              <Box sx={commonListStyle}>
                <Image sx={commonImgStyle} src={deleteIcon} alt="delete icon" />
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
                  src={subscriptionIcon}
                  alt="subscription_icon"
                />
                <Text sx={commonTextStyle}>Item 6</Text>
              </Box>
              <Box sx={listArrow}></Box>
            </Box>
            <Box sx={willNameLater} mb={"20px"}>
              <Box sx={commonListStyle} className="samp">
                <Image sx={commonImgStyle} src={fileIcon} alt="file icon" />
                <Text sx={commonTextStyle}>Item 7</Text>
              </Box>
              <Box sx={listArrow}></Box>
            </Box>
            <Box sx={willNameLater}>
              <Box sx={commonListStyle}>
                <Image sx={commonImgStyle} src={alarmIcon} alt="alarm icon" />
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
            src={userIcon}
            alt="user icon"
          />
          <Text sx={commonTextStyle} fontSize={"15px"} lineHeight={"16px"}>
            Blessing Daniels
          </Text>
        </Box>
        <Image
          w={"10.95px"}
          h={"1.67px"}
          color={"#4d5760"}
          src={moreIcon}
          alt="more icon"
        />
      </Box>
    </div>
  );
}

export default NavigationBar;
