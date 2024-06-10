import Container from "../container";
import { body } from "@/lib/fonts";
import GradientButton from "../buttons/gradient-button";
import { useRouter } from "next/router";
import GrayText from "../gray-text";
import Image from "next/image";
import SubTitle from "../sub-title";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
// import Lightbox from "react-awesome-lightbox";
import { Fragment } from "react";

const ProjectDoc = () => {
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);

  const images = [
    { src: "/imgs/project/project1.jpeg", alt: "Project 1", caption: "Patients Interviewed At KBTH" },
    { src: "/imgs/project/project2.jpeg", alt: "Project 2", caption: "Patients Being Interviewed At KBTH" },
    { src: "/imgs/project/project3.jpeg", alt: "Project 3", caption: "Helathcare Prosessionals Interviewed At KorleBu Teaching Hospital" },
  ];

  const images1 = [
    { src: "/imgs/project/project4.jpeg", alt: "Project 4", caption: "Patient Being Interviewed At Komfo Anokye Teaching Hospital" },
    { src: "/imgs/project/project5.jpeg", alt: "Project 5", caption: "Patients Being Interviewed At Komfo Anokye Teaching Hospital(KATH)" },
    { src: "/imgs/project/project6.jpeg", alt: "Project 6", caption: "Tamale Site Visit" },
  ];

  return (
    <Container>
      <div className={`space-y-5 section-p font-light ${body.className}`}>
      {/* <SubTitle
            text="Project Name: Pfizer"
            className="text-[#EF4A7B] text-center capitalize"
          /> */}
      <GrayText text="Background and Rationale" />
        <p>
            Female breast cancer is currently the most commonly diagnosed cancer in the world. In Ghana, breast cancer is the leading cause of cancer-related mortality among women and despite years of advocacy for
            early reporting and early treatment for breast cancer, patients with the disease still report late and default
            recommended treatment. 
        </p>
        <p>
        They also face sociocultural ordeals such as stigmatization, ostracization and spiritual associations. This project is aimed at establishing a healthcare support system by engaging the
families of patients with breast cancer and the communities where they live through education and mentorship ot help improve early reporting of the condition and adherence to recommended treatment.
        </p>

        <GrayText text="Aim" />
        <p>
        To establish healthcare support systems and engage communities through education and mentorship to optimize breast cancer management in Ghana
        </p>

        <GrayText text="Objectives" />
        <ol>
            <li>To assess anxiety levels, knowledge on symptoms, diagnosis and preparedness of breast cancer patients for treatment adherence at first diagnosis in five regions of Ghana.</li>
            <li>To produce culturally sensitive materials to educate patients, patient families, health care providers and the community to address myths and misconceptions about breast cancer.</li>
            <li>To provide emotional support using survivorship groups to guide patients and family members as they navigate through the disease process.</li>
            <li>To train and equip survivors and health care personnel as navigators with needed skills to engage in breast care outreach programs for continuity of care and education.</li>
        </ol>

        <GrayText text="Target Population" />

        <p>
        Breast cancer patients, Families and care givers, Survivors, Health care personnel, Community leaders, School children and the public.
        </p>


        <GrayText text="Project Outcomes" />


        <p>
        We expect that there will be decrease in anxiety levels, increase in knowledge on diagnosis and treatment options and improvement in treatment adherence. We also expect that in addressing the myths and misconceptions, the study wil significantly reduce the negative sociocultural beliefs associated with BC and minimize the fear of stigmatization previously entertained by recipients.
        </p>


      </div>


      <div className="space-y-10 section-p">

      <div className="space-y-10">
      
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        
        {images.map((image, index) => (
          <Fragment key={index}>
        <><div className="relative h-[300px] cursor-pointer bg-black/20">
          <div
        className="relative h-[300px] cursor-pointer bg-black/20"
        onClick={open}
      >
            <Image
              src={image.src}
              alt={image.alt}
              // placeholder="blur"
              className="object-cover"
              fill />
              </div>
              <p className="mt-2 text-center">{image.caption}</p>
          </div>
          </>
            </Fragment>
      
      ))}
          
          
        </div>
    
    </div>
    </div>

      {/* <div className="flex justify-center space-x-4">
      {images.map((image, index) => (
        <div key={index} className="m-2 rounded-lg shadow-md hover:scale-105 flex flex-col items-center">
          <Image
            src={image.src}
            alt={image.alt}
            width={300}
            height={200}
            className="rounded-lg"
          />
          <p className="mt-2 text-center">{image.caption}</p>
        </div>
      ))}
    </div> */}

    <br></br>

    <div className="space-y-10 section-p">

      <div className="space-y-10">
      
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        
        {images1.map((image, index) => (
          <Fragment key={index}>
        <><div className="relative h-[300px] cursor-pointer bg-black/20">
          <div
        className="relative h-[300px] cursor-pointer bg-black/20"
        onClick={open}
      >
            <Image
              src={image.src}
              alt={image.alt}
              // placeholder="blur"
              className="object-cover"
              fill />
              </div>
              <p className="mt-2 text-center">{image.caption}</p>
          </div>
          </>
            </Fragment>
      
      ))}
          
          
        </div>
    
    </div>
    </div>

  

    {/* <div className="space-y-10 section-p">

      <div className="space-y-10">
      
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          
              
        <div className="relative h-[300px] cursor-pointer bg-black/20">
        <Image
          src= "/imgs/project/project4.jpeg"
          alt=""
          // placeholder="blur"
          className="object-cover"
          fill
        />
      </div>

      <div className="relative h-[300px] cursor-pointer bg-black/20">
        <Image
          src= "/imgs/project/project4.jpeg"
          alt=""
          // placeholder="blur"
          className="object-cover"
          fill
        />
      </div>
          
        </div>
    
    </div>
    </div> */}

    </Container>
  );
};

export default ProjectDoc;

