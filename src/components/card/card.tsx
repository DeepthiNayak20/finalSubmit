import "./card.css";
import { useState, useEffect } from "react";

const Card = (props: any) => {
  const [modal, setModal] = useState("false");
  const displayData = JSON.parse(localStorage.getItem("currentUser") || "[]");

  const siteData = JSON.parse(localStorage.getItem(displayData) || "[]");

  return (
    <div>
      <div className="wrapContainer">
        {siteData
          .filter((ele: any) => {
            return props.search.toLowerCase() === ""
              ? ele
              : ele.siteName.toLowerCase().includes(props.search.toLowerCase());
          })
          .map((user: any, i: number) => {
            return (
              <div
                key={i}
                onClick={() => {
                  props.childToParent(true, i);
                }}
              >
                <div className="cardContainer">
                  <div className="cardMargin">
                    <div className="socialMediaLogo">
                      <div className="mediaLogo">
                        <img
                          src={`https://app.outboundsales.io/api/logo/${user.siteName}.com`}
                          height="50px"
                          width="50px"
                          alt="img"
                          style={{
                            backgroundPosition: "cover",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                      <div className="sameLine">
                        <div className="socialMediaName">{user.siteName}</div>
                        <div className="copy">
                          <div className="copyImg">
                            {" "}
                            <img
                              src={require("../../assets/icons/copy.png")}
                              alt="icon"
                              onClick={(e: any) => {
                                e.stopPropogation();
                                navigator.clipboard.writeText(
                                  user.sitePassword
                                );
                              }}
                            />
                          </div>
                          <div
                            className="copyText"
                            onClick={() => {
                              navigator.clipboard.writeText(user.sitePassword);
                            }}
                          >
                            copy password
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="linkContainer">
                      <div className="socialMediaLink">www.{user.url}.com</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Card;
