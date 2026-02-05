import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { Link } from "react-router-dom";

const servicesData = [
  {
    titleLine1: "Bahasa &",
    titleLine2: "Budaya Kerja",
    bgColor: "bg-grey",
    badgeColor: "bg-green",
    textColor: "text-black",
    iconSrc: "/icon.png",
    imageSrc: "/tokyo-magnifier-web-search-with-elements-2.png",
    imageClasses: "w-[210px] h-[170px]",
    imageInnerClasses: "absolute top-0.5 left-0 w-[210px] h-[166px]",
    hasImageWrapper: true,
    slug: "bahasa-budaya",
  },
  {
    titleLine1: "Manufaktur",
    titleLine2: "& Industri",
    bgColor: "bg-green",
    badgeColor: "bg-white",
    textColor: "text-black",
    iconSrc: "/icon-1.png",
    imageSrc: "/tokyo-selecting-a-value-in-the-browser-window-1.png",
    imageClasses: "w-[210px] h-[147.62px] bg-[100%_100%]",
    imageInnerClasses: "",
    hasImageWrapper: false,
    slug: "manufaktur-industri",
  },
  {
    titleLine1: "Caregiver",
    titleLine2: "/ Kaigo",
    bgColor: "bg-dark",
    badgeColor: "bg-white",
    textColor: "text-white",
    iconSrc: "/icon-2.png",
    imageSrc:
      "/tokyo-browser-window-with-emoticon-likes-and-stars-around-2.png",
    imageClasses: "w-[210px] h-[210px]",
    imageInnerClasses: "absolute top-0 left-px w-[209px] h-[210px]",
    hasImageWrapper: true,
    slug: "caregiver-kaigo",
  },
  {
    titleLine1: "Hospitality",
    titleLine2: "& Service",
    bgColor: "bg-grey",
    badgeColor: "bg-green",
    textColor: "text-black",
    iconSrc: "/icon-3.png",
    imageSrc: "/tokyo-sending-messages-from-one-place-to-another-1.png",
    imageClasses: "w-[210px] h-[192.68px]",
    imageInnerClasses: "",
    hasImageWrapper: false,
    slug: "hospitality-service",
  },
  {
    titleLine1: "Konstruksi",
    titleLine2: "& Teknik",
    bgColor: "bg-green",
    badgeColor: "bg-white",
    textColor: "text-black",
    iconSrc: "/icon-4.png",
    imageSrc: "/tokyo-many-browser-windows-with-different-information-1.png",
    imageClasses: "w-[210px] h-[195.91px] bg-[100%_100%]",
    imageInnerClasses: "",
    hasImageWrapper: false,
    slug: "konstruksi-teknik",
  },
  {
    titleLine1: "Kuliah Sambil",
    titleLine2: "Kerja",
    bgColor: "bg-dark",
    badgeColor: "bg-green",
    textColor: "text-white",
    iconSrc: "/icon-5.png",
    imageSrc:
      "/tokyo-volumetric-analytics-of-different-types-in-web-browsers-2.png",
    imageClasses: "w-[210px] h-[170px] bg-[100%_100%]",
    imageInnerClasses: "",
    hasImageWrapper: false,
    slug: "kuliah-sambil-kerja",
  },
];

export const MarketingServicesSection = (): JSX.Element => {
  return (
    <section className="w-full mt-12 md:mt-16 lg:mt-20 px-5 md:px-12 lg:px-[100px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-[1440px] mx-auto">
        {servicesData.map((service, index) => (
          <Card
            key={index}
            className={`${service.bgColor} rounded-[30px] md:rounded-[45px] overflow-hidden border border-solid border-[#191a23] shadow-[0px_5px_0px_#191a23] p-6 md:p-8 lg:p-[50px]`}
          >
            <CardContent className="p-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-4">
              <div className="flex flex-col items-start gap-12 md:gap-16 lg:gap-[93px] w-full md:w-auto">
                <div className="flex flex-col items-start">
                  <Badge
                    className={`${service.badgeColor} rounded-[7px] px-[7px] py-0 gap-2.5 hover:${service.badgeColor}`}
                  >
                    <span className="font-h-3 font-[number:var(--h-3-font-weight)] text-[#000000] text-[20px] md:text-[24px] lg:text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                      {service.titleLine1}
                    </span>
                  </Badge>
                  <Badge
                    className={`${service.badgeColor} rounded-[7px] px-[7px] py-0 gap-2.5 hover:${service.badgeColor}`}
                  >
                    <span className="font-h-3 font-[number:var(--h-3-font-weight)] text-[#000000] text-[20px] md:text-[24px] lg:text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                      {service.titleLine2}
                    </span>
                  </Badge>
                </div>

                <Link to={`/service/${service.slug}`} className="inline-flex items-center gap-3 md:gap-[15px] cursor-pointer bg-transparent border-none p-0">
                  <img
                    className="w-8 h-8 md:w-[41px] md:h-[41px]"
                    alt="Icon"
                    src={service.iconSrc}
                  />
                  <span
                    className={`[font-family:'Space_Grotesk',Helvetica] font-normal ${service.textColor} text-base md:text-lg lg:text-xl tracking-[0] leading-7 whitespace-nowrap hover:underline`}
                  >
                    Learn more
                  </span>
                </Link>
              </div>

              {service.hasImageWrapper ? (
                <div className={`relative ${service.imageClasses} flex-shrink-0`}>
                  <img
                    className={service.imageInnerClasses}
                    alt={`${service.titleLine1} ${service.titleLine2}`}
                    src={service.imageSrc}
                  />
                </div>
              ) : (
                <div
                  className={`relative ${service.imageClasses} flex-shrink-0`}
                  style={{
                    backgroundImage: `url(${service.imageSrc})`,
                  }}
                />
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
