import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const teamMembers = [
  {
    name: "Prof. Dr. Hj. Indrarini Dyah Irawati, S.T., M.T.",
    title: "Pembina Yayasan",
    picture: "/picture.png",
    socialIcon: "/social-icon.png",
    description:
      "Guru Besar yang membimbing arah strategis yayasan dalam memajukan kualitas sumber daya manusia Indonesia.",
  },
  {
    name: "Eman, S.E., Ak., M.M.Pd.",
    title: "Pengawas Lembaga",
    picture: "/picture-1.png",
    socialIcon: "/social-icon-1.png",
    description:
      "Mengawasi jalannya lembaga agar tetap sesuai dengan standar pendidikan dan manajemen yang akuntabel.",
  },
  {
    name: "Drs. Dahyar, M.M.",
    title: "Direktur Lembaga",
    picture: "/picture-4.png",
    socialIcon: "/social-icon-4.png",
    description:
      "Memimpin operasional LPK IGWI dengan pengalaman manajerial luas di bidang pengembangan kompetensi.",
  },
  {
    name: "Tricka Puspita, S.Pd.",
    title: "Instruktur",
    picture: "/picture-5.png",
    socialIcon: "/social-icon-5.png",
    description:
      "Pakar pendidikan yang berdedikasi dalam membimbing peserta didik mencapai kompetensi bahasa dan teknis.",
  },
  {
    name: "Daud Ridwan",
    title: "Instruktur",
    picture: "/picture-2.png",
    socialIcon: "/social-icon-2.png",
    description:
      "Instruktur berpengalaman yang fokus pada pembinaan karakter dan keterampilan praktis peserta pelatihan.",
  },
  {
    name: "Agung Gunawan & Zulpikar Sandira",
    title: "Tim IT",
    picture: "/picture-3.png",
    socialIcon: "/social-icon-3.png",
    description:
      "Mengelola infrastruktur digital dan sistem informasi untuk mendukung efisiensi operasional lembaga.",
  },
];

export const TeamMembersSection = (): JSX.Element => {
  return (
    <section className="w-full mt-12 md:mt-16 lg:mt-20 flex flex-col gap-10 px-5 md:px-12 lg:px-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className="bg-white rounded-[30px] md:rounded-[45px] border border-[#191a23] shadow-[0px_5px_0px_#191a23] overflow-hidden"
          >
            <CardContent className="p-6 md:p-8 lg:p-10 flex flex-col gap-5 md:gap-7">
              <div className="flex items-start justify-between w-full">
                <div className="flex items-end gap-3 md:gap-5">
                  <img
                    className="w-16 h-16 md:w-[102.82px] md:h-[102.82px] object-cover rounded-full"
                    alt={`${member.name} picture`}
                    src={member.picture}
                  />
                  <div className="flex flex-col gap-0.5 md:gap-1">
                    <h4 className="font-h-4 font-[number:var(--h-4-font-weight)] text-black text-lg md:text-[length:var(--h-4-font-size)] tracking-[var(--h-4-letter-spacing)] leading-tight md:leading-[var(--h-4-line-height)]">
                      {member.name}
                    </h4>
                    <p className="font-p font-[number:var(--p-font-weight)] text-black text-sm md:text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-tight md:leading-[var(--p-line-height)]">
                      {member.title}
                    </p>
                  </div>
                </div>
                <img
                  className="w-6 h-6 md:w-[34px] md:h-[34px]"
                  alt="Social icon"
                  src={member.socialIcon}
                />
              </div>

              <Separator className="bg-[#191a23]" />

              <p className="font-p font-[number:var(--p-font-weight)] text-black text-sm md:text-base lg:text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-relaxed lg:leading-[var(--p-line-height)] whitespace-pre-line">
                {member.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
