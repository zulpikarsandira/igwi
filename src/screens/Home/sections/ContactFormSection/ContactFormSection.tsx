import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";

const formTabs = [
  {
    id: "say-hi",
    label: "Konsultasi",
  },
  {
    id: "get-quote",
    label: "Pendaftaran",
  },
];

const formFields = [
  {
    id: "name",
    label: "Nama",
    placeholder: "Nama Lengkap",
    type: "text",
    required: true,
  },
  {
    id: "whatsapp",
    label: "No. WhatsApp*",
    placeholder: "Contoh: 081234567890",
    type: "tel",
    required: true,
  },
];

const programs = [
  "Bahasa & Budaya Kerja (Jepang)",
  "Bahasa & Budaya Kerja (Korea)",
  "Bahasa & Budaya Kerja (Jerman)",
  "Sektor Manufaktur & Industri",
  "Caregiver / Kaigo",
  "Hospitality & Service",
  "Konstruksi & Teknik",
  "Kuliah Sambil Kerja",
];

export const ContactFormSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("say-hi");

  return (
    <section className="w-full max-w-[1440px] mx-auto relative mt-20 px-5 md:px-12 lg:px-[100px]">
      <div className="flex flex-col lg:flex-row w-full items-center lg:items-start gap-10 p-6 md:p-12 lg:p-20 relative bg-grey rounded-[30px] md:rounded-[45px] overflow-hidden">
        <div className="flex flex-col items-start gap-10 w-full lg:w-auto z-10">
          <div className="flex flex-wrap items-start gap-6 md:gap-[35px]">
            {formTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative flex items-center gap-3 cursor-pointer group"
              >
                <div className="relative w-7 h-7 flex-shrink-0">
                  <div className="absolute inset-0 bg-white rounded-full border border-solid border-black group-hover:border-green transition-colors" />
                  {activeTab === tab.id && (
                    <div className="absolute top-1.5 left-1.5 right-1.5 bottom-1.5 bg-green rounded-full" />
                  )}
                </div>
                <span className="font-p font-[number:var(--p-font-weight)] text-black text-lg md:text-xl">
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          <form className="flex flex-col items-start gap-[25px] w-full lg:max-w-[556px]">
            {formFields.map((field) => (
              <div
                key={field.id}
                className="flex flex-col gap-1.5 w-full items-start relative"
              >
                <Label
                  htmlFor={field.id}
                  className="text-black text-base md:text-lg [font-family:'Space_Grotesk',Helvetica] font-normal"
                >
                  {field.label}
                </Label>
                <Input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="w-full px-5 md:px-[30px] py-4 md:py-[18px] bg-white rounded-[14px] border border-solid border-black text-lg [font-family:'Space_Grotesk',Helvetica] font-normal placeholder:text-[#898989] focus:ring-0 focus:border-green transition-colors"
                />
              </div>
            ))}

            <div className="flex flex-col gap-1.5 w-full items-start relative focus-within:z-10">
              <Label
                htmlFor="program"
                className="text-black text-base md:text-lg [font-family:'Space_Grotesk',Helvetica] font-normal"
              >
                Program yang Diminati*
              </Label>
              <div className="relative w-full">
                <select
                  id="program"
                  required
                  className="w-full px-5 md:px-[30px] py-4 md:py-[18px] bg-white rounded-[14px] border border-solid border-black text-lg [font-family:'Space_Grotesk',Helvetica] font-normal appearance-none cursor-pointer focus:outline-none focus:border-green transition-colors"
                >
                  <option value="" disabled selected>Pilih Program Pelatihan</option>
                  {programs.map((program) => (
                    <option key={program} value={program}>{program}</option>
                  ))}
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L13 1" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 w-full items-start relative">
              <Label
                htmlFor="message"
                className="text-black text-base md:text-lg [font-family:'Space_Grotesk',Helvetica] font-normal"
              >
                Pesan
              </Label>
              <Textarea
                id="message"
                placeholder="Apa yang ingin Anda tanyakan?"
                className="min-h-[190px] w-full px-5 md:px-[30px] py-4 md:py-[18px] bg-white rounded-[14px] border border-solid border-black text-lg [font-family:'Space_Grotesk',Helvetica] font-normal placeholder:text-[#898989] resize-none focus:ring-0 focus:border-green transition-colors"
              />
            </div>

            <Button
              type="submit"
              className="w-full items-center justify-center bg-dark hover:bg-dark/90 px-[35px] py-5 rounded-[14px] h-auto transition-all active:scale-[0.98]"
            >
              <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-white text-xl text-center">
                Kirim Pesan
              </span>
            </Button>
          </form>
        </div>

        <div className="hidden lg:flex flex-1 items-center justify-center absolute right-[-100px] top-1/2 -translate-y-1/2">
          <img
            className="w-[600px] h-auto object-contain"
            alt="Illustration"
            src="/contact-illustration.png"
          />
        </div>
      </div>
    </section>

  );
};
