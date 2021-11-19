import React from "react";
import { EmailTemplateProps } from "./EmailTemplateTypes";

const EmailTemplate = ({ selecteds }: EmailTemplateProps) => {
  const renderWriter = () => {
    const writer = selecteds.map((item: any) =>
      item.creators.items.find((item: any) => item.role === "writer")
    );
    return writer[0] ? writer[0].name : "No information available";
  };

  const renderPenciller = () => {
    const penciller = selecteds.map((item: any) =>
      item.creators.items.find((item: any) => item.role === "penciller")
    );
    return penciller[0] ? penciller[0].name : "No information available";
  };

  const renderPencillerCover = () => {
    const pencillerCover = selecteds.map((item: any) =>
      item.creators.items.find((item: any) => item.role === "penciller (cover)")
    );
    return pencillerCover[0]
      ? pencillerCover[0].name
      : "No information available";
  };
  return (
    <div>
      {selecteds.map((selected, index: number) => (
        <div
          style={{
            marginTop: "20px",
            padding: "25px",
            width: "50vw",
            borderRadius: "20px",
            background: "#202020",
          }}
          key={index}
        >
          <div
            style={{
              display: "flex",
              fontWeight: "bold",
              color: "#ffffff",
              marginTop: "20px",
              fontSize: "20px",
            }}
          >
            {selected?.title}
          </div>
          <div style={{ display: "flex", marginTop: "45px" }}>
            <div>
              <img
                src={`${selected?.thumbnail.path}.${selected?.thumbnail.extension}`}
                alt=""
                style={{ width: "305px", height: "500px" }}
              />
            </div>

            <div
              style={{
                textIndent: "50px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#ffffff",
                  }}
                >
                  Published:
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    color: "#e7e7e7",
                  }}
                >
                  {selected?.dates[0].date.split("T")[0]}
                </div>
              </div>

              <div style={{ display: "flex", marginTop: "30px" }}>
                <div>
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "#ffffff",
                    }}
                  >
                    Writer:
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      color: "#e7e7e7",
                    }}
                  >
                    {renderWriter()}
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "#ffffff",
                    }}
                  >
                    Penciler:
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      color: "#e7e7e7",
                    }}
                  >
                    {renderPenciller()}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", marginTop: "30px" }}>
                <div>
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "#ffffff",
                    }}
                  >
                    Cover Artist:
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      color: "#e7e7e7",
                    }}
                  >
                    {renderPencillerCover()}
                  </div>
                </div>
              </div>

              <div
                style={{
                  color: "#ffffff",
                  display: "flex",
                  textAlign: "left",
                  maxWidth: "380px",
                  textIndent: "0px",
                  padding: "20px 50px",
                }}
              >
                <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {selected?.description ? selected.description : "..."}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmailTemplate;
